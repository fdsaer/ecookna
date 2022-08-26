/**
 * Аналог dhtmlx '5.9 КП Калева'
 *
 * @module Offer59
 *
 */

import PrnProto from '../PrnProto.js';
import Header from '../Header/index.js';
import Payments from '../Components/Payments.js';
import Wrapper from '../Components/Wrapper.js';
import Description from '../Components/Description.js';
import Advantages from '../Components/Advantages.js';
import Additions from '../Components/Additions.js';
import LinksBlock from '../Components/LinksBlock.js';
import Manager from '../Components/Manager.js';
import ProductParams from '../Components/ProductParams.js';
import ProductsTable from '../Components/ProductsTable.js';

import AgeAdvantageImage from '../img/ageIcon.svg';
import FreeSizingAdvantageIcon from '../img/measuringIcon.svg';
import GuaranteeAdvantageIcon from '../img/guaranteeIcon.svg';
import ClientsAdvantageIcon from '../img/clientsIcon.svg';
import CashPaymentIcon from '../img/cashPaymentIcon.svg';
import CardPaymentIcon from '../img/cardPaymentIcon.svg';
import OnlinePaymentIcon from '../img/onlinePaymentIcon.svg';
import installmentIcon from '../img/installmentIcon.svg';
import ExamplesIcon from '../img/examplesIcon.svg';
import FactoryIcon from '../img/factoryIcon.svg';
import ProductionIcon from '../img/productionIcon.svg';
import WatchVideoIcon from '../img/watchVideoIcon.svg';
import GarageGateImage from '../img/garageGate.jpg';
import BalconyDecorationImage from '../img/balconyDecoration.jpg';
import CurtainsImage from '../img/curtains.jpg';
import HeatingRadiatorImage from '../img/heatingRadiatorDecoration.jpg';
import EvolvingOpacityImage from '../img/evolvingOpacity.jpg';
import OrangeryImage from '../img/orangery.jpg';
import GlassDoorImage from '../img/glassDoor.jpg';
import GlassHeaterImage from '../img/glassHeater.jpg';
import PhoneChargerImage from '../img/phoneCharger.jpg';
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
  const uniqueGlasses = [...new Set(glasses.map((glass) => `${glass.formula} (${glass.thickness} мм)`))]; // отбираем уникальные стеклопакеты

  return uniqueGlasses.map((value, index) => {  
    return {
      name: '',
      value,
      id: index,
    };
  });

  // return glasses.map((glass, index) => {  
  //   return {
  //     name: '',
  //     value: `${glass.formula} (${glass.thickness} мм)`,
  //     id: index,
  //   };
  // });
};

// функция на отсеивание параметров, не проходящих фильтр
const filterParams = (param) => {
  const filters = ["автоматически", "нет", "_", null, undefined]; 
  if (param && filters.includes(param.toLowerCase())) return false;
  return true;
}

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
      paramsList: product.note ? [{ name: '', value: product.note, id: 1 }] : [],
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
  }

  render() {
    const {
      props: { obj, attr },
      state: { loaded, products },
      classes,
    } = this; 

    const assortmentLinks = [
      { id: 1, image: WatchVideoIcon, link: 'https://youtu.be/sXf2ssofYUk' },
    ];
    const links = [
      { id: 1, image: FactoryIcon, link: 'https://youtu.be/X6lQcjH1Jc4' },
      { id: 2, image: ProductionIcon, link: 'https://youtu.be/pHthiLw2RpA' },
      {
        id: 3,
        image: ExamplesIcon,
        link: 'https://www.ecookna.ru/upload/email-links/portfolio/ecookna-portfolio.pdf',
      },
    ];
    const advantages = [
      { id: 1, image: AgeAdvantageImage },
      { id: 2, image: FreeSizingAdvantageIcon },
      { id: 3, image: GuaranteeAdvantageIcon },
      { id: 4, image: ClientsAdvantageIcon },
    ];
    const payments = [
      { id: 1, image: CashPaymentIcon },
      { id: 2, image: CardPaymentIcon },
      { id: 3, image: OnlinePaymentIcon },
      { id: 4, image: installmentIcon },
    ];
    const additions = [
      { id: 1, text: 'Гаражные ворота', image: GarageGateImage },
      { id: 2, text: 'Отделка балконов', image: BalconyDecorationImage },
      { id: 3, text: 'Жалюзи или рольшторы', image: CurtainsImage },
      {
        id: 4,
        text: 'Декоративные экраны на батареи',
        image: HeatingRadiatorImage,
      },
      {
        id: 5,
        text: 'Окна с изменяющейся прозрачностью',
        image: EvolvingOpacityImage,
      },
      {
        id: 6,
        text: 'Зимний сад или остекленные веранды',
        image: OrangeryImage,
      },
      {
        id: 7,
        text: 'Цельностеклянные межкомнатные двери',
        image: GlassDoorImage,
      },
      {
        id: 8,
        text: 'Обогреватели и полотенцесушители из стекла',
        image: GlassHeaterImage,
      },
      {
        id: 9,
        text: 'Зарядку для смартфона встроенного в подоконник',
        image: PhoneChargerImage,
      },
    ];
    const manager = {
      name: obj.manager.name ?? '',
      phone_number: '',
      email_address: '',
      address: '',
    };
    const office = { phone_number: '', email_address: '', address: '' };
    const fullSquare =
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
    const fullWeight =
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
        console.log(product);
        console.log(product.characteristic.sys.name);

        // Выводим только те изделия, которые имеют миниатюру
        // todo: сделать проверку по типу изделий. Пропускать только: двери/окна
        if (product.characteristic.svg) {
          return {
            number: product.row,
            position: product.row,
            quantity: product.quantity,
            svg: product.characteristic.svg,
            data: getProductCharacteristics(product),
          };
        }  
      }).filter(product => product);

    const productsTotalPrice =
      products &&
      products
        .map((product) => product.price * product.quantity)
        .reduce((acc, price) => (acc += price), 0);
    const productsTotalDiscount =
      products &&
      products
        .map((product) => product.price * product.quantity * product.discount)
        .reduce((acc, discount) => (acc += discount), 0);
    const productsTotalSum =
      products &&
      products
        .map(
          (product) => product.price * product.quantity * (1 - product.discount)
        )
        .reduce((acc, price) => (acc += price), 0);
      const productsTotalQuantity =                                             // Считаем сумму количества изделий в заказе
      products &&
      products
          .map((product) => product.quantity)
          .reduce((acc, quantity) => (acc += quantity), 0);   

    const productTableData = {
      head: [
        { text: 'Название', width: '25%', id: 0 },
        { text: 'Цвет', width: 'auto', id: 1 },
        { text: 'Количество (шт.)', width: '13%', id: 2 },                   
        { text: 'Общий вес (кг)', width: '13%', id: 4 },                       // Добавляем в таблицу поле с массой изделия           
        { text: 'Общая площадь (м2)', width: '13%', id: 3 },                  
        { text: 'Цена без скидки (руб.)', width: '13%', id: 5 },
        { text: 'Скидка (%)', width: '13%', id: 6 },
        { text: 'Цена со скидкой (руб.)', width: '13%', id: 7 },
      ],
      rows:
        products &&
        products.map((product) => {
          return [
            { text: product.characteristic.prod_nom.name_full, id: 0 },
            { text: product.characteristic.clr.presentation, id: 1 },
            { text: product.quantity, id: 2 },
            { text: (getProductWeight(product) * product.quantity).round(2), id: 4 },                                // Вычисляем массу каждого изделия
            { text: (product.s * product.quantity).round(2), id: 3 },
            { text: (product.price * product.quantity).round(0), id: 5 },
            { text: (product.price * product.discount).round(0), id: 6 },
            {
              text: (product.price * product.quantity * (1 - product.discount)).round(0),
              id: 7,
            },            
          ];
        }),
      total: products && [
        { text: 'Всего', id: 0 },
        {
          // text: products
          //   .map((product) => product.quantity)
          //   .reduce((acc, quantity) => (acc += quantity), 0),       
          text: productsTotalQuantity,
          id: 1,
        },
        {
          // text: products
          //   .map((product) => product.s * product.quantity)
          //   .reduce((acc, square) => (acc += square), 0)
          //   .round(2),         
          text: fullWeight,
          id: 2,
        },
        {          
          text: fullSquare, 
          id: 3,
        },
        {
          text: productsTotalPrice,
          id: 4,
        },
        {
          text: productsTotalDiscount,
          id: 5,
        },
        {
          text: productsTotalSum,
          id: 6,
        },      
      ],
    };

    // const productTotalData = {
    //   head: [
    //     { text: 'Всего', width: '33%', id: 0 },
    //     { text: productsTotalQuantity, width: '11%', id: 1 },        
    //     { text: fullSquare, width: '12%', id: 2 },        
    //     { text: fullWeight, width: '11%', id: 3 },   
    //     { text: productsTotalPrice, width: '12%', id: 4 },
    //     { text: productsTotalDiscount, width: '11%', id: 5 },
    //     { text: productsTotalSum, width: '10%', id: 6 },
    //   ],
    // };

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
          loading={loading}
          // err={err} 
        >
          <Header
            headerTitle="Индивидуальное решение"
            description="по изготовлению и установке светопрозрачных конструкций"
            order={order}
            office={office}
            manager={manager}
          />
          <Wrapper>
            <Box mt={3}>
              <Advantages withLogo advantagesList={advantages} />
            </Box>
            <Box mt={3} mb={2.5} fontSize={22}>
              <Typography variant="inherit" color="textSecondary" component="p">
                {order}
              </Typography>
            </Box>
            {productList && productList.length > 0 && (
              <ProductParams
                title="В комплектацию Вашего заказа входит:"
                fullSquare={fullSquare}
                fullWeight={fullWeight}
                productList={productList}
              />
            )}
            <Box mt={5}>
              <ProductsTable
                head={productTableData.head}
                rows={productTableData.rows}
                total={productTableData.total}
                boldBorderlessHead={false}
              />
            </Box>
            {/* <Box mt={3}>
              <ProductsTable head={productTotalData.head} boldBorderlessHead />
            </Box> */}
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
            <Payments paymentList={payments} />
            <Box mt={5}>
              <Advantages withLogo advantagesList={advantages} />
            </Box>
            <Box mt={5}>
              <Description title="Подберем лучшее решение:" />
            </Box>
            <Box mt={7}>
              <LinksBlock links={assortmentLinks}>
                <Box color="textSecondary" fontSize="22px" mr={2.5}>
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    component="p"
                  >
                    Ассортимент компании ЭКООКНА
                  </Typography>
                </Box>
              </LinksBlock>
            </Box>
            <Box mt={5}>
              <LinksBlock links={links}>
                <Box sx={{ maxWidth: '100px' }} mr={2.5}>
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    component="p"
                  >
                    Переходите по ссылкам:
                  </Typography>
                </Box>
              </LinksBlock>
            </Box>
            <Box mt={7}>
              <Additions
                additions={additions}
                title="Добавьте к своему интерьеру:"
              />
            </Box>
            <Box mt={7}>
              <Manager
                title="Остались вопросы? Я на связи! "
                manager={manager}
              />
            </Box>
          </Wrapper>
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
