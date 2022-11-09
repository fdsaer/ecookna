import PrnProto from '../../PrnProto.js';
import { PrintingPageTemplate } from './OfferComponents.js';
import { fullSquare, fullWeight, getProductsList, getManagerInfo, getAddressInfo } from './OfferData.js';
import getProductsData from './OfferTable.js';
import { getAssortmentLinks, getLinks, getAdvantages, getPayments, getAdditions } from './Templates.js';
import { chunksMaker } from '../../utilities/index.js';
const {
  React,
  Box,
  Typography
} = $p.ui;
const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

var _ref = React.createElement(Box, {
  mt: 3,
  mb: 2.5
}, React.createElement(Typography, null, "*Предложение действительно в течение 10 календарных дней."));

var _ref2 = React.createElement(Box, {
  mb: 5
}, React.createElement(Typography, null, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера."));

var _ref3 = React.createElement(Box, {
  color: "textSecondary",
  fontSize: "22px",
  mr: 2.5
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "Ассортимент компании ЭКООКНА"));

var _ref4 = React.createElement(Typography, {
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
    import('./OfferComponents.js').then(module => {
      this.setAsyncModules({
        Header: module.Header,
        Footer: module.Footer,
        Title: module.Title,
        Payments: module.Payments,
        Wrapper: module.Wrapper,
        Description: module.Description,
        Additions: module.Additions,
        LinksBlock: module.LinksBlock,
        Manager: module.Manager,
        ProductParams: module.ProductParams,
        ProductsTable: module.ProductsTable,
        ProductsTablePage: module.ProductsTablePage,
        PrintingPageTemplate: module.PrintingPageTemplate
      });
      this.setState({
        componentsLoaded: true
      });
    });
    import('./OfferImages.js').then(module => {
      this.setAsyncImages({
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
        products
      },
      classes,
      components,
      images
    } = this;
    const manager = getManagerInfo(obj);
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
    const productTableData = products && getProductsData(products);
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
      loading: !components || !images || !loaded || !classes
    }, components && React.createElement(components.Title, {
      headerTitle: "Индивидуальное решение",
      description: "по изготовлению и установке светопрозрачных конструкций",
      order: order,
      office: getAddressInfo(obj),
      manager: manager,
      obj: obj
    }), components && classes && React.createElement(components.Wrapper, {
      classes: classes,
      px: 3.75
    }, React.createElement(Box, {
      mt: 3,
      className: classes.hideInPrint
    }, React.createElement(components.Header, {
      withLogo: true,
      obj: obj,
      advantagesList: advantages,
      images: images
    })), React.createElement(Box, {
      mt: 3,
      mb: 2.5,
      fontSize: 22,
      className: classes.hideInPrint
    }, React.createElement(Typography, {
      variant: "inherit",
      color: "textSecondary",
      component: "p"
    }, order)), productList && React.createElement(React.Fragment, null, React.createElement(Box, {
      className: classes.breakElementWithMargins
    }, chunksMaker(productList, paramsRowsPerPage).map((chunk, index) => React.createElement(PrintingPageTemplate, {
      classes: classes,
      advantages: advantages,
      payments: payments,
      key: chunk[0]?.index,
      images: images,
      obj: obj
    }, React.createElement(React.Fragment, null, chunk.map(({
      data,
      number,
      position,
      quantity,
      svg,
      size,
      index
    }) => React.createElement(components.ProductParams, {
      data: data,
      number: number,
      position: position,
      quantity: quantity,
      svg: svg,
      size: size,
      index: index,
      classes: classes,
      svgMaxHeight: paramsSvgMaxHeight,
      rowHeight: paramsRowHeight,
      key: index
    }))))))), productTableData && React.createElement(Box, {
      className: classes.breakElementWithMargins
    }, chunksMaker(productTableData, tableRowsPerPage).map((chunk, index, chunksArr) => React.createElement(PrintingPageTemplate, {
      classes: classes,
      advantages: advantages,
      payments: payments,
      key: chunk[0]?.id,
      images: images,
      obj: obj
    }, React.createElement(React.Fragment, null, chunk.map(item => React.createElement(Box, {
      className: classes.tableMargins,
      key: item.id
    }, React.createElement(Typography, {
      color: "textSecondary",
      component: "p"
    }, item.title), React.createElement(components.ProductsTable, {
      head: item.head,
      rows: item.rows,
      total: item.total,
      boldBorderlessHead: item.id === '3'
    }))), index === chunksArr.length - 1 && React.createElement(React.Fragment, null, _ref, _ref2))))), React.createElement(Box, {
      className: classes.hideInPrint
    }, React.createElement(components.Footer, {
      obj: obj,
      paymentList: payments,
      classes: classes
    })), React.createElement(Box, {
      mt: 5,
      className: classes.pageBreakBefore
    }, React.createElement(components.Header, {
      withLogo: true,
      obj: obj,
      advantagesList: advantages,
      images: images
    })), React.createElement(Box, {
      mt: 5
    }, React.createElement(components.Description, {
      title: "Подберем лучшее решение:"
    })), React.createElement(Box, {
      mt: 7
    }, React.createElement(components.LinksBlock, {
      links: assortmentLinks
    }, _ref3)), React.createElement(Box, {
      mt: 5
    }, React.createElement(components.LinksBlock, {
      links: links
    }, React.createElement(Box, {
      sx: {
        maxWidth: '100px'
      },
      mr: 2.5
    }, _ref4))), React.createElement(Box, {
      mt: 7,
      className: classes.pageBreakBefore
    }, React.createElement(components.Additions, {
      additions: additions,
      title: "Добавьте к своему интерьеру:"
    })), React.createElement(Box, {
      mt: 7
    }, React.createElement(components.Manager, {
      title: "Остались вопросы? Я на связи! ",
      manager: manager
    })))));
  }

}

Offer59.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a48';
Offer59.destination = 'doc.calc_order';
Offer59.title = 'КП Экоокна 2022 – тест';
export default Offer59;