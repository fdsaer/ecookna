import PrnProto from '../../PrnProto.js';
import { fullSquare, fullWeight, getProductsList, getManagerInfo, getAddressInfo } from './OfferData.js';
import getProductsData from './OfferTable.js';
const {
  React,
  Box,
  Typography
} = $p.ui;
const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

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
      text: $p.msg.printing_form.additions_labels.garage_gate,
      image: images?.GarageGateImage
    }, {
      id: 2,
      text: $p.msg.printing_form.additions_labels.balcony_decoration,
      image: images?.BalconyDecorationImage
    }, {
      id: 3,
      text: $p.msg.printing_form.additions_labels.curtains,
      image: images?.CurtainsImage
    }, {
      id: 4,
      text: $p.msg.printing_form.additions_labels.heating_radiator,
      image: images?.HeatingRadiatorImage
    }, {
      id: 5,
      text: $p.msg.printing_form.additions_labels.evolving_opacity,
      image: images?.EvolvingOpacityImage
    }, {
      id: 6,
      text: $p.msg.printing_form.additions_labels.orangery,
      image: images?.OrangeryImage
    }, {
      id: 7,
      text: $p.msg.printing_form.additions_labels.glass_door,
      image: images?.GlassDoorImage
    }, {
      id: 8,
      text: $p.msg.printing_form.additions_labels.glass_heater,
      image: images?.GlassHeaterImage
    }, {
      id: 9,
      text: $p.msg.printing_form.additions_labels.phone_charger,
      image: images?.PhoneChargerImage
    }];
    const manager = getManagerInfo(obj);
    const office = getAddressInfo(obj);
    const productList = products && getProductsList(products);
    const productTableData = products && getProductsData(products);
    const order = `№${obj.number_doc} от ${moment(obj.date).format('DD MMMM YYYY')} г.`;
    let loading = '';
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
    }), components?.Wrapper && React.createElement(components.Wrapper, {
      classes: classes
    }, React.createElement(Box, {
      mt: 3,
      className: classes?.hideInPrint
    }, components?.Advantages && React.createElement(components.Advantages, {
      withLogo: true,
      advantagesList: advantages
    })), React.createElement(Box, {
      mt: 3,
      mb: 2.5,
      fontSize: 22,
      className: classes?.hideInPrint
    }, React.createElement(Typography, {
      variant: "inherit",
      color: "textSecondary",
      component: "p"
    }, order)), productList && productList.length > 0 && components?.ProductParams && React.createElement(components.ProductParams, {
      title: "В комплектацию Вашего заказа входит:",
      fullSquare: fullSquare,
      fullWeight: fullWeight,
      productList: productList,
      classes: classes,
      advantages: advantages
    }), components?.ProductsTable && React.createElement(Box, {
      className: `${classes?.avoidBreakInside} ${classes?.breakElementWithMargins} ${classes?.pageBreakBefore} ${classes?.tableMargins}`
    }, React.createElement(Box, {
      mt: 3,
      mb: 3,
      className: classes?.displayInPrint
    }, components?.Advantages && React.createElement(components.Advantages, {
      withLogo: true,
      advantagesList: advantages
    })), _ref, React.createElement(components.ProductsTable, {
      head: productTableData.head,
      rows: productTableData.rows,
      total: productTableData.total,
      boldBorderlessHead: false
    })), components?.ProductsTable && productTableData.rowsExtraItem.length > 0 && React.createElement(Box, {
      className: `${classes?.avoidBreakInside} ${classes?.breakElementWithMargins} ${classes?.pageBreakBefore} ${classes?.tableMargins}`
    }, React.createElement(Box, {
      mt: 3,
      mb: 3,
      className: classes?.displayInPrint
    }, components?.Advantages && React.createElement(components.Advantages, {
      withLogo: true,
      advantagesList: advantages
    })), _ref2, React.createElement(components.ProductsTable, {
      head: productTableData.headExtraItem,
      rows: productTableData.rowsExtraItem,
      total: productTableData.totalExtraItem,
      boldBorderlessHead: false
    })), components?.ProductsTable && productTableData.rowsService.length > 0 && React.createElement(Box, {
      className: `${classes?.avoidBreakInside} ${classes?.breakElementWithMargins} ${classes?.pageBreakBefore} ${classes?.tableMargins}`
    }, React.createElement(Box, {
      mt: 3,
      mb: 3,
      className: classes?.displayInPrint
    }, components?.Advantages && React.createElement(components.Advantages, {
      withLogo: true,
      advantagesList: advantages
    })), _ref3, React.createElement(components.ProductsTable, {
      head: productTableData.headService,
      rows: productTableData.rowsService,
      total: productTableData.totalService,
      boldBorderlessHead: false
    })), _ref4, _ref5, components?.Payments && React.createElement(components.Payments, {
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