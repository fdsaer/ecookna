import PrnProto from '../../PrnProto.js';
import getProductsData, { fullSquare, fullWeight } from './OfferData.js';
const {
  React,
  Box,
  Typography
} = $p.ui;
const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

const getProductParams = product => {
  const glasses = product.characteristic.glasses;
  const glassesWeight = glasses.map(glass => product.characteristic.elm_weight(glass.elm)).reduce((acc, glassWeight) => acc += glassWeight, 0).round();
  const constructionsWeight = product.characteristic.constructions.map(construction => product.characteristic.elm_weight(-1 * construction.cnstr)).reduce((acc, constructionWeight) => acc += constructionWeight, 0).round();
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
  const constructionCount = product.characteristic.constructions._obj.length;
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
      value: product.characteristic.prod_nom.name,
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
      paramsList: list.map(([name, value], index) => ({
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
      subtitle: key,
      paramsList: list.map(([name, value], index) => ({
        name,
        value,
        id: index
      })),
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

var _ref = React.createElement(Typography, {
  color: "textSecondary",
  component: "p"
}, "Изделия");

var _ref2 = React.createElement(Typography, {
  color: "textSecondary",
  component: "p"
}, "Дополнительная комплектация");

var _ref3 = React.createElement(Typography, {
  color: "textSecondary",
  component: "p"
}, "Услуги");

var _ref4 = React.createElement(Box, {
  mt: 3,
  mb: 2.5
}, React.createElement(Typography, null, "*Предложение действительно в течение 10 календарных дней."));

var _ref5 = React.createElement(Box, {
  mb: 5
}, React.createElement(Typography, null, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера."));

var _ref6 = React.createElement(Box, {
  color: "textSecondary",
  fontSize: "22px",
  mr: 2.5
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "Ассортимент компании ЭКООКНА"));

var _ref7 = React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "Переходите по ссылкам:");

class Offer59 extends PrnProto {
  componentDidMount() {
    const {
      attr,
      obj,
      print
    } = this.props;
    console.log(obj);
    obj.load_linked_refs().then(async () => {
      this.setState({
        loaded: true
      });
      const products = obj.production;
      this.setState({
        products
      });
    }).catch(err => {
      this.setState({
        err: err.message
      });
    });
    this.setState({
      loaded: true
    });
    const componentsImport = import('./OfferComponents.js');
    componentsImport.then(module => {
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
          ProductsTable: module.ProductsTable
        }
      });
    });
    const imagesImport = import('./OfferImages.js');
    imagesImport.then(module => {
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
          PhoneChargerImage: module.PhoneChargerImage
        }
      });
    });
  }

  render() {
    const {
      props: {
        obj,
        attr
      },
      state: {
        loaded,
        products,
        components,
        images
      },
      classes
    } = this;
    const assortmentLinks = [{
      id: 1,
      image: images?.WatchVideoIcon,
      link: 'https://youtu.be/sXf2ssofYUk'
    }];
    const links = [{
      id: 1,
      image: images?.FactoryIcon,
      link: 'https://youtu.be/X6lQcjH1Jc4'
    }, {
      id: 2,
      image: images?.ProductionIcon,
      link: 'https://youtu.be/pHthiLw2RpA'
    }, {
      id: 3,
      image: images?.ExamplesIcon,
      link: 'https://www.ecookna.ru/upload/email-links/portfolio/ecookna-portfolio.pdf'
    }];
    const advantages = [{
      id: 1,
      image: images?.AgeAdvantageImage
    }, {
      id: 2,
      image: images?.FreeSizingAdvantageIcon
    }, {
      id: 3,
      image: images?.GuaranteeAdvantageIcon
    }, {
      id: 4,
      image: images?.ClientsAdvantageIcon
    }];
    const payments = [{
      id: 1,
      image: images?.CashPaymentIcon
    }, {
      id: 2,
      image: images?.CardPaymentIcon
    }, {
      id: 3,
      image: images?.OnlinePaymentIcon
    }, {
      id: 4,
      image: images?.installmentIcon
    }];
    const additions = [{
      id: 1,
      text: 'Гаражные ворота',
      image: images?.GarageGateImage
    }, {
      id: 2,
      text: 'Отделка балконов',
      image: images?.BalconyDecorationImage
    }, {
      id: 3,
      text: 'Жалюзи или рольшторы',
      image: images?.CurtainsImage
    }, {
      id: 4,
      text: 'Декоративные экраны на батареи',
      image: images?.HeatingRadiatorImage
    }, {
      id: 5,
      text: 'Окна с изменяющейся прозрачностью',
      image: images?.EvolvingOpacityImage
    }, {
      id: 6,
      text: 'Зимний сад или остекленные веранды',
      image: images?.OrangeryImage
    }, {
      id: 7,
      text: 'Цельностеклянные межкомнатные двери',
      image: images?.GlassDoorImage
    }, {
      id: 8,
      text: 'Обогреватели и полотенцесушители из стекла',
      image: images?.GlassHeaterImage
    }, {
      id: 9,
      text: 'Зарядку для смартфона встроенного в подоконник',
      image: images?.PhoneChargerImage
    }];
    const manager = {
      name: obj.manager.name ?? '',
      phone_number: '',
      email_address: '',
      address: ''
    };
    const office = {
      phone_number: '',
      email_address: '',
      address: ''
    };
    const order = `Заполнения заказа №${obj.number_doc} от ${moment(obj.date).format('DD MMMM YYYY')} г.`;
    let loading = '';
    const productList = products && products.map(product => {
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
    const productTableData = products && getProductsData(products);

    const getManagerInfo = () => {
      obj.manager.contact_information.forEach(row => {
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
    };

    console.log('$$$$$$$$$$$$$$$$$$$');
    console.log(obj.manager);
    console.log(obj.manager.class_name);
    obj.manager.contact_information.forEach(row => console.log(row));

    $p.CatUsers.getAddress = function () {
      console.log('hello');
    };

    obj.manager.contact_information.forEach(row => {
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
    obj.organization.contact_information.forEach(row => {
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
    return React.createElement(React.Suspense, {
      fallback: "Загрузка..."
    }, React.createElement(StyledFrame, {
      obj: obj,
      attr: attr,
      classes: classes,
      setClasses: this.setClasses,
      title: order,
      loading: !components || !images
    }, components?.Header && React.createElement(components.Header, {
      headerTitle: "Индивидуальное решение",
      description: "по изготовлению и установке светопрозрачных конструкций",
      order: order,
      office: office,
      manager: manager
    }), components?.Wrapper && React.createElement(components.Wrapper, null, React.createElement(Box, {
      mt: 3
    }, components?.Advantages && React.createElement(components.Advantages, {
      withLogo: true,
      advantagesList: advantages
    })), React.createElement(Box, {
      mt: 3,
      mb: 2.5,
      fontSize: 22
    }, React.createElement(Typography, {
      variant: "inherit",
      color: "textSecondary",
      component: "p"
    }, order)), productList && productList.length > 0 && components?.ProductParams && React.createElement(components.ProductParams, {
      title: "В комплектацию Вашего заказа входит:",
      fullSquare: fullSquare,
      fullWeight: fullWeight,
      productList: productList,
      classes: classes
    }), React.createElement(Box, {
      mt: 5,
      className: `${classes?.avoidBreakInside} ${classes?.breakElementWithMargins}`
    }, _ref, components?.ProductsTable && React.createElement(components.ProductsTable, {
      head: productTableData.head,
      rows: productTableData.rows,
      total: productTableData.total,
      boldBorderlessHead: false
    })), React.createElement(Box, {
      mt: 5,
      className: `${classes?.avoidBreakInside} ${classes?.breakElementWithMargins}`
    }, components?.ProductsTable && productTableData.rowsExtraItem.length > 0 && React.createElement(React.Fragment, null, _ref2, React.createElement(components.ProductsTable, {
      head: productTableData.headExtraItem,
      rows: productTableData.rowsExtraItem,
      total: productTableData.totalExtraItem,
      boldBorderlessHead: false
    }))), React.createElement(Box, {
      mt: 5,
      className: `${classes?.avoidBreakInside} ${classes?.breakElementWithMargins}`
    }, components?.ProductsTable && productTableData.rowsService.length > 0 && React.createElement(React.Fragment, null, _ref3, React.createElement(components.ProductsTable, {
      head: productTableData.headService,
      rows: productTableData.rowsService,
      total: productTableData.totalService,
      boldBorderlessHead: false
    }))), _ref4, _ref5, components?.Payments && React.createElement(components.Payments, {
      paymentList: payments
    }), React.createElement(Box, {
      mt: 5,
      className: classes?.pageBreakBefore
    }, components?.Advantages && React.createElement(components.Advantages, {
      withLogo: true,
      advantagesList: advantages
    })), React.createElement(Box, {
      mt: 5
    }, components?.Description && React.createElement(components.Description, {
      title: "Подберем лучшее решение:"
    })), React.createElement(Box, {
      mt: 7
    }, components?.LinksBlock && React.createElement(components.LinksBlock, {
      links: assortmentLinks
    }, _ref6)), React.createElement(Box, {
      mt: 5
    }, components?.LinksBlock && React.createElement(components.LinksBlock, {
      links: links
    }, React.createElement(Box, {
      sx: {
        maxWidth: '100px'
      },
      mr: 2.5
    }, _ref7))), React.createElement(Box, {
      mt: 7,
      className: classes?.pageBreakBefore
    }, components?.Additions && React.createElement(components.Additions, {
      additions: additions,
      title: "Добавьте к своему интерьеру:"
    })), React.createElement(Box, {
      mt: 7
    }, components?.Manager && React.createElement(components.Manager, {
      title: "Остались вопросы? Я на связи! ",
      manager: manager
    })))));
  }

}

Offer59.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a48';
Offer59.destination = 'doc.calc_order';
Offer59.title = '5.9 КП Калева (jsx)';
export default Offer59;