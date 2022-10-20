import PrnProto from '../../PrnProto.js';
import { fullSquare, fullWeight, getProductsList } from './OfferData.js';
import { getManagerInfo } from '../../Components/Manager.js';
import { getAddressInfo } from '../../Components/Contacts.js';
import getProductsData from './OfferTable.js';
import { getAssortmentLinks, getLinks, getAdvantages, getPayments, getAdditions } from './Templates.js';
const {
  React,
  Box,
  Typography
} = $p.ui;
const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

var _ref = React.createElement(Box, {
  color: "textSecondary",
  fontSize: "22px",
  mr: 2.5
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "Ассортимент компании ЭКООКНА"));

var _ref2 = React.createElement(Typography, {
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
          ProductsTable: module.ProductsTable,
          ProductsTablePage: module.ProductsTablePage
        }
      });
      this.setState({
        componentsLoaded: true
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
      this.setState({
        imagesLoaded: true
      });
    });
  }

  render() {
    const {
      props: {
        obj,
        attr,
        externalWindow
      },
      state: {
        loaded,
        products,
        components,
        images,
        componentsLoaded,
        imagesLoaded
      },
      classes
    } = this;
    const manager = getManagerInfo(obj);
    const office = getAddressInfo(obj);
    const assortmentLinks = getAssortmentLinks(images);
    const links = getLinks(images);
    const advantages = getAdvantages(images);
    const payments = getPayments(images);
    const additions = getAdditions(images);
    const productList = products && getProductsList(products);
    const tableRowsPerPage = 25;
    const paramsRowsPerPage = 29;
    const paramsSvgMaxHeight = 246;
    const paramsRowHeight = 23;
    const productTableData = products && getProductsData(products, tableRowsPerPage);
    const order = `№${obj.number_doc} от ${moment(obj.date).format('DD MMMM YYYY')} г.`;
    let loading = '';

    if (externalWindow) {
      externalWindow.document.title = order;
    }

    return React.createElement(React.Suspense, {
      fallback: "Загрузка..."
    }, React.createElement(StyledFrame, {
      obj: obj,
      attr: attr,
      classes: classes,
      setClasses: this.setClasses,
      title: order,
      loading: !components || !componentsLoaded || !imagesLoaded || !classes
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
      advantages: advantages,
      payments: payments,
      rowsPerPage: paramsRowsPerPage,
      svgMaxHeight: paramsSvgMaxHeight,
      rowHeight: paramsRowHeight
    }), components?.ProductsTablePage && productTableData && React.createElement(components.ProductsTablePage, {
      classes: classes,
      advantages: advantages,
      payments: payments,
      productTableData: productTableData
    }), components?.Payments && React.createElement(Box, {
      className: classes?.hideInPrint
    }, React.createElement(components.Payments, {
      paymentList: payments,
      classes: classes
    })), React.createElement(Box, {
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
    }, _ref)), React.createElement(Box, {
      mt: 5
    }, components?.LinksBlock && React.createElement(components.LinksBlock, {
      links: links
    }, React.createElement(Box, {
      sx: {
        maxWidth: '100px'
      },
      mr: 2.5
    }, _ref2))), React.createElement(Box, {
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
Offer59.title = 'КП Экоокна 2022 – тест';
export default Offer59;