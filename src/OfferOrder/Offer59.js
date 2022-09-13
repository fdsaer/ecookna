/**
 * Аналог dhtmlx '5.9 КП Калева'
 *
 * @module Offer59
 *
 */
import PrnProto from '../PrnProto.js';

const { React, Box, Typography } = $p.ui;

const StyledFrame = React.lazy(() => import('../StyledFrame/index.js')); 

const getProductParams = (product) => {
  const glasses = product.characteristic.glasses;
  const glassesWeight = glasses
    .map((glass) => product.characteristic.elm_weight(glass.elm))
    .reduce((acc, glassWeight) => (acc += glassWeight), 0)
    .round();
  const constructionsWeight = product.characteristic.constructions
    .map((construction) =>
      product.characteristic.elm_weight(-1 * construction.cnstr)
    )
    .reduce((acc, constructionWeight) => (acc += constructionWeight), 0)
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

  return uniqueGlasses.map((value, index) => {
    return {
      name: '',
      value,
      id: index,
    };
  });
};

// функция на отсеивание параметров, не проходящих фильтр
const filterParams = (param) => {
  const filters = ['автоматически', 'нет', '_', null, undefined];
  if (param && filters.includes(param.toLowerCase())) return false;
  return true;
};

const getExtendedParams = (product) => {
  const constructionCount = product.characteristic.constructions._obj.length;
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
      .filter((param) => filterParams(param.value.name)) // фильтр свойств
      .map((param) => [param.param.name, param.value.name]);
  }
  return extendedParams;
};

const getProductCharacteristics = (product) => {
  const extendedParams = getExtendedParams(product);
  return [
    {
      subtitle: '',
      paramsList: [
        {
          name: 'Масса общ/зап, кг',
          value: getProductParams(product),
          id: 1,
        },
        {
          name: 'Проф.система',
          value: product.characteristic.prod_nom.name,
          id: 2,
        },
        { name: 'Цвет', value: product.characteristic.clr.presentation, id: 3 },
      ],
      id: 1,
    },
    ...Object.entries(extendedParams)
      .filter(([key]) => key === 'Дополнительные параметры')
      .map(([key, list], index) => {
        return {
          subtitle: key,
          paramsList: list.map(([name, value], index) => ({
            name,
            value,
            id: index,
          })),
          id: `1${index}`,
        };
      }),
    {
      subtitle: 'Заполнения',
      paramsList: getProductGlassesParams(product),
      id: 2,
    },
    ...Object.entries(extendedParams)
      .filter(([key]) => key && key !== 'Дополнительные параметры')
      .map(([key, list], index) => {
        return {
          subtitle: key,
          paramsList: list.map(([name, value], index) => ({
            name,
            value,
            id: index,
          })),
          id: `2${index}`,
        };
      }),
    {
      subtitle: 'Примечание',
      paramsList: product.note
        ? [{ name: '', value: product.note, id: 1 }]
        : [],
      id: 3,
    },
  ];
};

class Offer59 extends PrnProto {
  componentDidMount() {
    const { attr, obj, print } = this.props;
    console.log(obj);
    obj
      // метод .load_linked_refs здесь на самом деле не нужен, но почему то svg в production.characteristic не доступны
      // поэтому пока эта обертка здесь есть, а когда svg будут на своем месте ее можно будет убрать.
      .load_linked_refs()
      .then(async () => {
        this.setState({ loaded: true });
        // получим список заполнений, которым нужны эскизы
        const products = obj.production;
        this.setState({ products });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
    this.setState({ loaded: true });

    const componentsImport = import('./OfferComponents.js');
    componentsImport.then((module) => {
      this.setState({
        components: {
          Header: module.Header,
          Payments: module.Payments,
          Wrapper: module.Wrapper,
          Description: module.Description,
          Advantages: module.Advantages,
          Additions: module.Additions,
          LinksBlock: module.LinksBlock,
          Manager: module.Manager,
          ProductParams: module.ProductParams,
          ProductsTable: module.ProductsTable,
        },
      });
    });

    const imagesImport = import('./OfferImages.js');
    imagesImport.then((module) => {
      this.setState({
        images: {
          AgeAdvantageImage: module.AgeAdvantageImage,
          FreeSizingAdvantageIcon: module.FreeSizingAdvantageIcon,
          GuaranteeAdvantageIcon: module.GuaranteeAdvantageIcon,
          ClientsAdvantageIcon: module.ClientsAdvantageIcon,
          CashPaymentIcon: module.CashPaymentIcon,
          CardPaymentIcon: module.CardPaymentIcon,
          OnlinePaymentIcon: module.OnlinePaymentIcon,
          installmentIcon: module.installmentIcon,
          ExamplesIcon: module.ExamplesIcon,
          FactoryIcon: module.FactoryIcon,
          ProductionIcon: module.ProductionIcon,
          WatchVideoIcon: module.WatchVideoIcon,
          GarageGateImage: module.GarageGateImage,
          BalconyDecorationImage: module.BalconyDecorationImage,
          CurtainsImage: module.CurtainsImage,
          HeatingRadiatorImage: module.HeatingRadiatorImage,
          EvolvingOpacityImage: module.EvolvingOpacityImage,
          OrangeryImage: module.OrangeryImage,
          GlassDoorImage: module.GlassDoorImage,
          GlassHeaterImage: module.GlassHeaterImage,
          PhoneChargerImage: module.PhoneChargerImage,
        },
      });
    });
  }

  render() {
    const {
      props: { obj, attr },
      state: { loaded, products, components, images },
      classes,
    } = this;

    const assortmentLinks = [
      {
        id: 1,
        image: images?.WatchVideoIcon,
        link: 'https://youtu.be/sXf2ssofYUk',
      },
    ];
    const links = [
      {
        id: 1,
        image: images?.FactoryIcon,
        link: 'https://youtu.be/X6lQcjH1Jc4',
      },
      {
        id: 2,
        image: images?.ProductionIcon,
        link: 'https://youtu.be/pHthiLw2RpA',
      },
      {
        id: 3,
        image: images?.ExamplesIcon,
        link: 'https://www.ecookna.ru/upload/email-links/portfolio/ecookna-portfolio.pdf',
      },
    ]; 
    const advantages = [
      { id: 1, image: images?.AgeAdvantageImage },
      { id: 2, image: images?.FreeSizingAdvantageIcon },
      { id: 3, image: images?.GuaranteeAdvantageIcon },
      { id: 4, image: images?.ClientsAdvantageIcon },
    ];
    const payments = [
      { id: 1, image: images?.CashPaymentIcon },
      { id: 2, image: images?.CardPaymentIcon },
      { id: 3, image: images?.OnlinePaymentIcon },
      { id: 4, image: images?.installmentIcon },
    ];
    const additions = [
      { id: 1, text: 'Гаражные ворота', image: images?.GarageGateImage },
      {
        id: 2,
        text: 'Отделка балконов',
        image: images?.BalconyDecorationImage,
      },
      { id: 3, text: 'Жалюзи или рольшторы', image: images?.CurtainsImage },
      {
        id: 4,
        text: 'Декоративные экраны на батареи',
        image: images?.HeatingRadiatorImage,
      },
      {
        id: 5,
        text: 'Окна с изменяющейся прозрачностью',
        image: images?.EvolvingOpacityImage,
      },
      {
        id: 6,
        text: 'Зимний сад или остекленные веранды',
        image: images?.OrangeryImage,
      },
      {
        id: 7,
        text: 'Цельностеклянные межкомнатные двери',
        image: images?.GlassDoorImage,
      },
      {
        id: 8,
        text: 'Обогреватели и полотенцесушители из стекла',
        image: images?.GlassHeaterImage,
      },
      {
        id: 9,
        text: 'Зарядку для смартфона встроенного в подоконник',
        image: images?.PhoneChargerImage,
      },
    ];
    const manager = {
      name: obj.manager.name ?? '',
      phone_number: '',
      email_address: '',
      address: '',
    };
    const office = { phone_number: '', email_address: '', address: '' };

    const productListSvg =
      products &&
      products
        .map((product) => {
          if (!product.nom.is_service && !product.nom.grouping) {
            return product;
          }
        })
        .filter((product) => product);

    const productListExtraItems =
      products &&
      products
        .map((product) => {
          if (product.nom.grouping && !product.nom.is_service) {
            return product;
          }
        })
        .filter((product) => product);

    const productIsService =
      products &&
      products
        .map((product) => {
          if (product.nom.is_service) {
            return product;
          }
        })
        .filter((product) => product);

    const fullSquare = (products) =>
      products &&
      products
        .map((product) => product.s * product.quantity)
        .reduce((acc, productSquare) => (acc += productSquare), 0)
        .round(2);
    const getProductWeight = (product) =>
      product.characteristic.constructions
        .map((construction) =>
          product.characteristic.elm_weight(-1 * construction.cnstr)
        )
        .reduce((acc, constructionWeight) => (acc += constructionWeight), 0);
    const fullWeight = (products) =>
      products &&
      products
        .map((product) => getProductWeight(product) * product.quantity)
        .reduce((acc, productWeight) => (acc += productWeight), 0)
        .round(2);
    const order = `Заполнения заказа №${obj.number_doc} от ${moment(
      obj.date
    ).format('DD MMMM YYYY')} г.`;
    let loading = '';

    const productList =
      products &&
      products.map((product) => {
        // тут сделать проверку на наличие svg, если нет - не выводить
        // потом проверку на тип, чтобы не было отливов
        // и number сделать индексом
        return {
          number: product.row,
          position: product.row,
          quantity: product.quantity,
          svg: product.characteristic.svg,
          data: getProductCharacteristics(product),
        };
      });

    const productsTotalPrice = (products) =>
      products &&
      products
        .map((product) => product.price * product.quantity)
        .reduce((acc, price) => (acc += price), 0)
        .round(0);
    const productsTotalDiscount = (products) =>
      products &&
      products
        .map((product) => product.price * product.quantity * product.discount)
        .reduce((acc, discount) => (acc += discount), 0);
    const productsTotalSum = (products) =>
      products &&
      products
        .map(
          (product) => product.price * product.quantity * (1 - product.discount)
        )
        .reduce((acc, price) => (acc += price), 0)
        .round(0);
    const productsTotalQuantity = (
      products // Считаем сумму количества изделий в заказе
    ) =>
      products &&
      products
        .map((product) => product.quantity)
        .reduce((acc, quantity) => (acc += quantity), 0);

    const productTableData = {
      head: [
        //Шапка таблицы изделий
        { text: 'Название', width: '25%', id: 0 },
        { text: 'Цвет', width: 'auto', id: 1 },
        { text: 'Количество (шт.)', width: '13%', id: 2 },
        { text: 'Общий вес (кг)', width: '13%', id: 3 },
        { text: 'Общая площадь (м2)', width: '13%', id: 4 },
        { text: 'Цена без скидки (руб.)', width: '13%', id: 5 },
        { text: 'Скидка (%)', width: '13%', id: 6 },
        { text: 'Цена со скидкой (руб.)', width: '13%', id: 7 },
      ],
      headExtraItem: [
        //Шапка таблицы доп.комплектации
        { text: 'Название', width: '25%', id: 0 },
        { text: 'Количество (шт.)', width: '13%', id: 1 },
        { text: 'Цена без скидки (руб.)', width: '13%', id: 2 },
        { text: 'Скидка (%)', width: '13%', id: 3 },
        { text: 'Цена со скидкой (руб.)', width: '13%', id: 4 },
      ],
      headService: [
        //Шапка таблицы услуг
        { text: 'Название', width: '25%', id: 0 },
        { text: 'Цена без скидки (руб.)', width: '13%', id: 1 },
        { text: 'Скидка (%)', width: '13%', id: 2 },
        { text: 'Цена со скидкой (руб.)', width: '13%', id: 3 },
      ],
      rows:
        productListSvg &&
        productListSvg.map((product) => {
          return [
            {
              text: product.characteristic.prod_nom.name_full
                ? product.characteristic.prod_nom.name_full
                : product.nom.name_full,
              id: 0,
            },
            { text: product.characteristic.clr.presentation, id: 1 },
            { text: product.quantity.round(0), id: 2 },
            {
              text: (getProductWeight(product) * product.quantity).round(2),
              id: 4,
            }, // Вычисляем массу каждого изделия
            { text: (product.s * product.quantity).round(2), id: 3 },
            { text: (product.price * product.quantity).round(0), id: 5 },
            { text: (product.price * product.discount).round(0), id: 6 },
            {
              text: (
                product.price *
                product.quantity *
                (1 - product.discount)
              ).round(0),
              id: 7,
            },
          ];
        }),
      //Строки таблицы доп.комплектации
      rowsExtraItem:
        productListExtraItems &&
        productListExtraItems.map((product) => {
          return [
            {
              text: product.characteristic.prod_nom.name_full
                ? product.characteristic.prod_nom.name_full
                : product.nom.name_full,
              id: 0,
            },
            { text: product.quantity.round(0), id: 1 },
            { text: (product.price * product.quantity).round(0), id: 2 },
            { text: (product.price * product.discount).round(0), id: 3 },
            {
              text: (
                product.price *
                product.quantity *
                (1 - product.discount)
              ).round(0),
              id: 7,
            },
          ];
        }),
      //Строки таблицы услуг
      rowsService:
        productIsService &&
        productIsService.map((product) => {
          return [
            {
              text: product.characteristic.prod_nom.name_full
                ? product.characteristic.prod_nom.name_full
                : product.nom.name_full,
              id: 0,
            },
            { text: (product.price * product.quantity).round(0), id: 1 },
            { text: (product.price * product.discount).round(0), id: 2 },
            {
              text: (
                product.price *
                product.quantity *
                (1 - product.discount)
              ).round(0),
              id: 3,
            },
          ];
        }),
      total: productListSvg && [
        //Итого для таблицы изделий
        {
          text: 'Всего',
          id: 0,
        },
        {
          text: productsTotalQuantity(productListSvg),
          id: 1,
        },
        {
          text: fullWeight(productListSvg),
          id: 2,
        },
        {
          text: fullSquare(productListSvg),
          id: 3,
        },
        {
          text: productsTotalPrice(productListSvg),
          id: 4,
        },
        {
          text: productsTotalDiscount(productListSvg),
          id: 5,
        },
        {
          text: productsTotalSum(productListSvg),
          id: 6,
        },
      ],
      totalExtraItem: productListExtraItems && [
        //Итого для таблицы доп.комплектации
        { text: 'Всего', id: 0 },
        {
          text: productsTotalQuantity(productListExtraItems),
          id: 1,
        },
        {
          text: productsTotalPrice(productListExtraItems),
          id: 4,
        },
        {
          text: productsTotalDiscount(productListExtraItems),
          id: 5,
        },
        {
          text: productsTotalSum(productListExtraItems),
          id: 6,
        },
      ],
      totalService: productIsService && [
        //Итого для таблицы услуг
        {
          text: 'Всего',
          id: 0,
        },
        {
          text: productsTotalPrice(productIsService),
          id: 3,
        },
        {
          text: productsTotalDiscount(productIsService),
          id: 4,
        },
        {
          text: productsTotalSum(productIsService),
          id: 5,
        },
      ],
    };

    obj.manager.contact_information.forEach((row) => {
      switch (row.type.name) {
        case 'Адрес':
          if (row.presentation && !manager.address) {
            manager.address = row.presentation;
          }
          break;
        case 'Телефон':
          if (row.presentation && !manager.phone_number) {
            manager.phone_number = row.presentation;
          }
          break;
        case 'АдресЭлектроннойПочты':
          if (row.presentation && !manager.email_address) {
            manager.email_address = row.presentation;
          }
          break;
        default:
      }
    });

    obj.organization.contact_information.forEach((row) => {
      switch (row.type.name) {
        case 'Адрес':
          if (row.presentation && !office.address) {
            office.address = row.presentation;
          }
          break;
        case 'Телефон':
          if (row.presentation && !office.phone_number) {
            office.phone_number = row.presentation;
          }
          break;
        case 'АдресЭлектроннойПочты':
          if (row.presentation && !office.email_address) {
            office.email_address = row.presentation;
          }
          break;
        default:
      }
    });

    return (
      <React.Suspense fallback="Загрузка...">
        <StyledFrame
          obj={obj}
          attr={attr}
          classes={classes}
          setClasses={this.setClasses}
          title={order}
          loading={!components || !images}
          // err={err}
        >
          {components?.Header && (
            <components.Header
              headerTitle="Индивидуальное решение"
              description="по изготовлению и установке светопрозрачных конструкций"
              order={order}
              office={office}
              manager={manager}
            />
          )}
          {components?.Wrapper && (
            <components.Wrapper>
              <Box mt={3}>
                {components?.Advantages && (
                  <components.Advantages withLogo advantagesList={advantages} />
                )}
              </Box>
              <Box mt={3} mb={2.5} fontSize={22}>
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  component="p"
                >
                  {order}
                </Typography>
              </Box>
              {productList &&
                productList.length > 0 &&
                components?.ProductParams && (
                  <components.ProductParams
                    title="В комплектацию Вашего заказа входит:"
                    fullSquare={fullSquare}
                    fullWeight={fullWeight}
                    productList={productList}
                  />
                )}
              <Box mt={5}>
                <Typography color="textSecondary" component="p">
                  Изделия
                </Typography>
                {components?.ProductsTable && (
                  <components.ProductsTable
                    head={productTableData.head}
                    rows={productTableData.rows}
                    total={productTableData.total}
                    boldBorderlessHead={false}
                  />
                )}
              </Box>
              <Box mt={5}>
                {productListExtraItems && productListExtraItems.length > 0 && (
                  <>
                    <Typography color="textSecondary" component="p">
                      Дополнительная комплектация
                    </Typography>
                    {components?.ProductsTable && (
                      <components.ProductsTable
                        head={productTableData.headExtraItem}
                        rows={productTableData.rowsExtraItem}
                        total={productTableData.totalExtraItem}
                        boldBorderlessHead={false}
                      />
                    )}
                  </>
                )}
              </Box>
              <Box mt={5}>
                {productIsService && productIsService.length > 0 && (
                  <>
                    <Typography color="textSecondary" component="p">
                      Услуги
                    </Typography>
                    {components?.ProductsTable && (
                      <components.ProductsTable
                        head={productTableData.headService}
                        rows={productTableData.rowsService}
                        total={productTableData.totalService}
                        boldBorderlessHead={false}
                      />
                    )}
                  </>
                )}
              </Box>
              <Box mt={3} mb={2.5}>
                <Typography>
                  *Предложение действительно в течение 10 календарных дней.
                </Typography>
              </Box>
              <Box mb={5}>
                <Typography>
                  Для вашего удобства, точный расчет стоимости, заключение
                  договора и оплата могут быть осуществлены на объекте в день
                  проведения замера.
                </Typography>
              </Box>
              {components?.Payments && (
                <components.Payments paymentList={payments} />
              )}
              <Box mt={5}>
                {components?.Advantages && (
                  <components.Advantages withLogo advantagesList={advantages} />
                )}
              </Box>
              <Box mt={5}>
                {components?.Description && (
                  <components.Description title="Подберем лучшее решение:" />
                )}
              </Box>
              <Box mt={7}>
                {components?.LinksBlock && (
                  <components.LinksBlock links={assortmentLinks}>
                    <Box color="textSecondary" fontSize="22px" mr={2.5}>
                      <Typography
                        variant="inherit"
                        color="textSecondary"
                        component="p"
                      >
                        Ассортимент компании ЭКООКНА
                      </Typography>
                    </Box>
                  </components.LinksBlock>
                )}
              </Box>
              <Box mt={5}>
                {components?.LinksBlock && (
                  <components.LinksBlock links={links}>
                    <Box sx={{ maxWidth: '100px' }} mr={2.5}>
                      <Typography
                        variant="inherit"
                        color="textSecondary"
                        component="p"
                      >
                        Переходите по ссылкам:
                      </Typography>
                    </Box>
                  </components.LinksBlock>
                )}
              </Box>
              <Box mt={7}>
                {components?.Additions && (
                  <components.Additions
                    additions={additions}
                    title="Добавьте к своему интерьеру:"
                  />
                )}
              </Box>
              <Box mt={7}>
                {components?.Manager && (
                  <components.Manager
                    title="Остались вопросы? Я на связи! "
                    manager={manager}
                  />
                )}
              </Box>
            </components.Wrapper>
          )}
        </StyledFrame>
      </React.Suspense>
    );
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Offer59.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a48';
Offer59.destination = 'doc.calc_order';
Offer59.title = '5.9 КП Калева (jsx)';

export default Offer59;
