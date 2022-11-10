// TODO: декомпозировать.

export const getProductParams = (product) => {
  const glasses = product.characteristic.glasses;

  // TODO: У Number нет метода round. Если он добавлен как-то неявно - следует убрать его из Number
  //  и использовать явным образом - импортируя; иначе IDE путается
  const constructionsWeight = product.characteristic.elm_weight().round();
  const glassesWeight = product.characteristic
    .elm_weight(glasses.map((glass) => glass.elm))
    .round();

  return `${constructionsWeight}/${glassesWeight}`;
};

const getProductGlassesParams = (product) => {
  const glasses = product.characteristic.glasses;
  const uniqueGlasses = [
    ...new Set(
      glasses.map((glass) => `${glass.formula} (${glass.thickness} мм)`)
    ),
  ]; // отбираем уникальные стеклопакеты

  return uniqueGlasses
    .map((value, index) => ({
      name: '',
      value,
      id: index,
    }))
    .filter(({ value }) => value);
};

// функция на отсеивание параметров, не проходящих фильтр
const filterParams = (param) => {
  const value = param.value?.name || false;
  const filters = ['автоматически', 'нет', '_', null, undefined]; // TODO: заменить на список в 1с

  // фильтрация значений по совпадению из списка 1с (пока константа)
  if (value && filters.includes(value.toLowerCase())) return false;

  // фильтрация по таб-части скрываемых значений у параметра
  const hiddenValuesRefs = param.param?.hide?.map((tab) => tab.value?.ref);

  if (Array.isArray(hiddenValuesRefs)) {
    const isHide = hiddenValuesRefs.includes(param.value?.ref);
    if (isHide) return false;
  }

  return true;
};

const getExtendedParams = (product) => {
  const constructionCount = product.characteristic.constructions.count();

  // TODO: удалить
  console.log(product);
  const extendedParams = {};
  for (let i = 0; i <= constructionCount; i += 1) {
    let name = '';
    if (i === 0) {
      name = 'Дополнительные параметры';
    } else {
      const currentConstruction = product.characteristic.constructions.get(
        i - 1
      );
      name = currentConstruction?.furn?.name
        ? `${
            currentConstruction.furn.name
          } Исполнение - ${currentConstruction.direction.name.toLowerCase()}`
        : '';
    }
    extendedParams[name] = product.characteristic.params
      .map((param) => {
        if (param.cnstr !== i) return null;
        return param;
      })
      .filter((param) => param !== null && !param.hide)
      .filter((param) => filterParams(param)) // фильтр на изменение значений свойств
      .map((param) => [param.param.name, param.value.name]);
  }
  return extendedParams;
};

const getProductCharacteristics = (product) => {
  const inners = getProductGlassesParams(product);
  const extendedParams = getExtendedParams(product);
  const mainParams = [
    {
      name: 'Масса общ/зап, кг',
      value: getProductParams(product),
      id: 1,
    },
    {
      name: 'Проф.система',
      // TODO: удалить
      // value: product.characteristic.prod_nom.name,
      value: product.nom.name,
      id: 2,
    },
    { name: 'Цвет', value: product.characteristic.clr.presentation, id: 3 },
  ].filter(({ value }) => value);
  return [
    {
      subtitle: '',
      paramsList: mainParams,
      id: 1,
      size: mainParams.length,
    },
    ...Object.entries(extendedParams)
      .filter(([key]) => key === 'Дополнительные параметры')
      .map(([key, list], index) => {
        return {
          subtitle: key,
          paramsList: list
            ?.map(([name, value], index) => ({
              name,
              value,
              id: index,
            }))
            .filter(({ value }) => value),
          id: `1${index}`,
          size: list?.filter(([_name, value]) => value).length + 1,
        };
      }),
    {
      subtitle: 'Заполнения',
      paramsList: inners,
      id: 2,
      size: inners.length + 1,
    },
    ...Object.entries(extendedParams)
      .filter(([key]) => key && key !== 'Дополнительные параметры')
      .map(([key, list], index) => {
        return {
          subtitle: `Створка ${index + 1}: фурнитура`,
          paramsList: [
            { name: 'Система', value: key, id: key },
            ...list.map(([name, value], index) => ({
              name,
              value,
              id: index,
            })),
          ],
          id: `2${index}`,
          size: list.filter(([_name, value]) => value).length + 2,
        };
      }),
    {
      subtitle: 'Примечание',
      paramsList: product.note
        ? [{ name: '', value: product.note, id: 1 }]
        : [],
      id: 3,
      size: product.note ? 2 : 0,
    },
  ];
};

export const getProductsList = (products) => {
  return products
    .map((product, index) => {
      const sysName = product.characteristic.sys.name;
      const filters = ['водоотлив'];

      // тут сделать проверку на наличие svg, если нет - не выводить
      // потом проверку на тип, чтобы не было отливов
      if (
        product.characteristic.svg &&
        !filters.includes(sysName.toLowerCase())
      ) {
        const data = getProductCharacteristics(product);
        return {
          number: product.row,
          position: product.row,
          quantity: product.quantity,
          svg: product.characteristic.svg,
          data,
          size: data.reduce((acc, { size }) => (acc += size), 0),
          index: index + 1,
        };
      }
    })
    .filter((product) => product);
};

export const fullSquare = (products) =>
  products &&
  products
    .map((product) => product.s * product.quantity)
    .reduce((acc, productSquare) => (acc += productSquare), 0)
    .round(2);

export const fullWeight = (products) =>
  products &&
  products
    .map((product) => getProductWeight(product) * product.quantity)
    .reduce((acc, productWeight) => (acc += productWeight), 0)
    .round(2);

export const getProductWeight = (product) =>
  product.characteristic.constructions
    .map((construction) =>
      product.characteristic.elm_weight(-1 * construction.cnstr)
    )
    .reduce((acc, constructionWeight) => (acc += constructionWeight), 0);

export const getAddressInfo = (obj) => {
  const office = {
    address: obj?.department?.extra_fields
      ?.map(({ value }) => value)
      .join(', '),
    name: obj?.department?.name,
  };
  return office;
};

export const getManagerInfo = (obj) => {
  const managerData = {
    name: obj.manager.name ?? '',
    phone_number: '',
    email_address: '',
    address: '',
  };
  obj?.manager?.contact_information?.forEach((row) => {
    switch (row.type.name) {
      case 'Адрес':
        if (row.presentation && !managerData.address) {
          managerData.address = row.presentation;
        }
        break;
      case 'Телефон':
        if (row.presentation && !managerData.phone_number) {
          managerData.phone_number = row.presentation;
        }
        break;
      case 'АдресЭлектроннойПочты':
        if (row.presentation && !managerData.email_address) {
          managerData.email_address = row.presentation;
        }
        break;
      default:
    }
  });
  return managerData;
};
