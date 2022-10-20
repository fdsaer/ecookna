export const getProductParams = product => {
  const glasses = product.characteristic.glasses;
<<<<<<< HEAD
  const glassesWeight = glasses.map(glass => product.characteristic.elm_weight(glass.elm)).reduce((acc, glassWeight) => acc += glassWeight, 0).round();
=======
>>>>>>> origin/test-merged-printing-forms
  const constructionsWeight = product.characteristic.elm_weight().round();
  const glassesWeight = product.characteristic.elm_weight(glasses.map(glass => glass.elm)).round();
  
  return `${constructionsWeight}/${glassesWeight}`;
};

const getProductGlassesParams = product => {
  const glasses = product.characteristic.glasses;
  const uniqueGlasses = [...new Set(glasses.map(glass => `${glass.formula} (${glass.thickness} мм)`))];
  return uniqueGlasses.map((value, index) => {
    return {
      name: '',
      value,
      id: index
    };
  });
};

const filterParams = param => {
  const value = param.value?.name || false;
  const filters = ['автоматически', 'нет', '_', null, undefined];
  if (value && filters.includes(value.toLowerCase())) return false;
  const hiddenValuesRefs = param.param?.hide?.map(tab => tab.value?.ref);

  if (Array.isArray(hiddenValuesRefs)) {
    const isHide = hiddenValuesRefs.includes(param.value?.ref);
    if (isHide) return false;
  }

  return true;
};

const getExtendedParams = product => {
  const constructionCount = product.characteristic.constructions.count();
  console.log(product);
  const extendedParams = {};

  for (let i = 0; i <= constructionCount; i += 1) {
    let name = '';

    if (i === 0) {
      name = 'Дополнительные параметры';
    } else {
      const currentConstruction = product.characteristic.constructions.get(i - 1);
      name = currentConstruction?.furn?.name ? `${currentConstruction.furn.name} Исполнение - ${currentConstruction.direction.name.toLowerCase()}` : '';
    }

    extendedParams[name] = product.characteristic.params.map(param => {
      if (param.cnstr !== i) return null;
      return param;
    }).filter(param => param !== null && !param.hide).filter(param => filterParams(param)).map(param => [param.param.name, param.value.name]);
  }

  return extendedParams;
};

const getProductCharacteristics = product => {
  const extendedParams = getExtendedParams(product);
  return [{
    subtitle: '',
    paramsList: [{
      name: 'Масса общ/зап, кг',
      value: getProductParams(product),
      id: 1
    }, {
      name: 'Проф.система',
      value: product.nom.name,
      id: 2
    }, {
      name: 'Цвет',
      value: product.characteristic.clr.presentation,
      id: 3
    }],
    id: 1
  }, ...Object.entries(extendedParams).filter(([key]) => key === 'Дополнительные параметры').map(([key, list], index) => {
    return {
      subtitle: key,
      paramsList: list?.map(([name, value], index) => ({
        name,
        value,
        id: index
      })),
      id: `1${index}`
    };
  }), {
    subtitle: 'Заполнения',
    paramsList: getProductGlassesParams(product),
    id: 2
  }, ...Object.entries(extendedParams).filter(([key]) => key && key !== 'Дополнительные параметры').map(([key, list], index) => {
    return {
      subtitle: `Створка ${index + 1}: фурнитура`,
      paramsList: [{
        name: 'Система',
        value: key,
        id: key
      }, ...list.map(([name, value], index) => ({
        name,
        value,
        id: index
      }))],
      id: `2${index}`
    };
  }), {
    subtitle: 'Примечание',
    paramsList: product.note ? [{
      name: '',
      value: product.note,
      id: 1
    }] : [],
    id: 3
  }];
};

export const getProductsList = products => {
  return products.map(product => {
    const sysName = product.characteristic.sys.name;
    const filters = ['водоотлив'];

    if (product.characteristic.svg && !filters.includes(sysName.toLowerCase())) {
      return {
        number: product.row,
        position: product.row,
        quantity: product.quantity,
        svg: product.characteristic.svg,
        data: getProductCharacteristics(product)
      };
    }
  }).filter(product => product);
};
export const fullSquare = products => products && products.map(product => product.s * product.quantity).reduce((acc, productSquare) => acc += productSquare, 0).round(2);
export const fullWeight = products => products && products.map(product => getProductWeight(product) * product.quantity).reduce((acc, productWeight) => acc += productWeight, 0).round(2);
export const getProductWeight = product => product.characteristic.constructions.map(construction => product.characteristic.elm_weight(-1 * construction.cnstr)).reduce((acc, constructionWeight) => acc += constructionWeight, 0);