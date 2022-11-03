import PrnProto from '../../PrnProto.js';
import { PrintingPageTemplate } from './OfferComponents.js';
import { fullSquare, fullWeight, getProductsList, getManagerInfo, getAddressInfo } from './OfferData.js';
import getProductsData from './OfferTable.js';
import { getAssortmentLinks, getLinks, getPayments61, getRecommendations61, getAdditions } from './Templates.js';
import { chunksMaker } from '../../utilities/index.js';
const {
  React,
  Box,
  Typography
} = $p.ui;
const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

var _ref = React.createElement(Box, {
  mt: 5.6,
  mb: 1.6,
  fontSize: 15
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textPrimary",
  component: "p"
}, "В комплектацию Вашего заказа входит:"));

var _ref2 = React.createElement(Box, {
  mt: 3,
  mb: 2.5
}, React.createElement(Typography, null, "*Предложение действительно в течение 10 календарных дней."));

var _ref3 = React.createElement(Box, {
  mb: 5
}, React.createElement(Typography, null, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера."));

var _ref4 = React.createElement(Typography, {
  variant: "inherit",
  color: "error",
  component: "p"
}, "С этими окнами обычно покупают");

var _ref5 = React.createElement(Typography, {
  variant: "inherit",
  color: "error",
  component: "p"
}, "Окна роста это");

var _ref6 = React.createElement(Box, {
  fontSize: 16,
  my: 1.25,
  mx: 2.5
}, React.createElement(Box, {
  fontWeight: 600,
  fontSize: 28
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "300 000")), React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "довольных клиентов"));

var _ref7 = React.createElement(Box, {
  fontSize: 16,
  my: 1.25,
  mx: 2.5
}, React.createElement(Box, {
  fontWeight: 600,
  fontSize: 28
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "2 500 000")), React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "установленных окон"));

var _ref8 = React.createElement(Box, {
  fontSize: 16,
  my: 1.25,
  mx: 2.5
}, React.createElement(Box, {
  fontWeight: 600,
  fontSize: 28
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "25 лет")), React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "успешной работы"));

var _ref9 = React.createElement(Box, {
  color: "textSecondary",
  fontSize: "22px",
  mr: 2.5
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "Ассортимент компании ЭКООКНА"));

var _ref10 = React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary",
  component: "p"
}, "Переходите по ссылкам:");

class Offer61 extends PrnProto {
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
        Wrapper: module.Wrapper,
        GridImages: module.GridImages,
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
        CashPaymentIcon61: module.CashPaymentIcon61,
        NonCashPaymentIcon61: module.NonCashPaymentIcon61,
        CardPaymentIcon61: module.CardPaymentIcon61,
        InstallmentIcon61: module.InstallmentIcon61,
        FixedPriceIcon61: module.FixedPriceIcon61,
        RollerBlindsIcon61: module.RollerBlindsIcon61,
        HiddenHardwareIcon61: module.HiddenHardwareIcon61,
        DecorIcon61: module.DecorIcon61,
        MosquitoNetsIcon61: module.MosquitoNetsIcon61,
        WindowSillsIcon61: module.WindowSillsIcon61,
        ChildLockIcon61: module.ChildLockIcon61
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
    const recommendation = getRecommendations61(images);
    const payments = getPayments61(images);
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

    console.log(`!classes`, !classes);
    return React.createElement(React.Suspense, {
      fallback: "Загрузка..."
    }, React.createElement(StyledFrame, {
      obj: obj,
      attr: attr,
      classes: classes,
      setClasses: this.setClasses,
      title: order,
      loading: !components || !images || !loaded || !classes
    }, components?.Title && React.createElement(components.Title, {
      title: "Коммерческое предложение",
      description: "по изготовлению и установке светопрозрачных конструкций",
      order: order,
      office: getAddressInfo(obj),
      manager: manager,
      obj: obj
    }), components && classes && React.createElement(components.Wrapper, {
      classes: classes
    }, React.createElement(Box, {
      mt: 3,
      className: classes.hideInPrint
    }, React.createElement(components.Header, {
      withLogo: true,
      withCaption: true,
      obj: obj,
      classes: classes
    })), _ref, productList && React.createElement(React.Fragment, null, React.createElement(Box, {
      className: classes.breakElementWithMargins
    }, chunksMaker(productList, paramsRowsPerPage).map((chunk, index) => React.createElement(PrintingPageTemplate, {
      classes: classes,
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
    }))), index === chunksArr.length - 1 && React.createElement(React.Fragment, null, _ref2, _ref3))))), React.createElement(Box, {
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
      classes: classes
    })), React.createElement(Box, {
      mt: 2.5,
      mb: 2.5,
      fontWeight: 600,
      fontSize: 15,
      sx: {
        textTransform: 'uppercase'
      }
    }, _ref4), React.createElement(Box, null, React.createElement(components.GridImages, {
      images: recommendation,
      classes: classes
    })), React.createElement(Box, {
      mt: 2.5,
      mb: 2.5,
      fontWeight: 600,
      fontSize: 15,
      sx: {
        textTransform: 'uppercase'
      }
    }, _ref5), React.createElement(Box, {
      display: "flex",
      justifyContent: "space-between",
      mb: 2.5,
      sx: {
        backgroundColor: '#E30613'
      }
    }, _ref6, _ref7, _ref8), React.createElement(Box, {
      mt: 5
    }, React.createElement(components.Description, {
      title: "Подберем лучшее решение:"
    })), React.createElement(Box, {
      mt: 7
    }, React.createElement(components.LinksBlock, {
      links: assortmentLinks
    }, _ref9)), React.createElement(Box, {
      mt: 5
    }, React.createElement(components.LinksBlock, {
      links: links
    }, React.createElement(Box, {
      sx: {
        maxWidth: '100px'
      },
      mr: 2.5
    }, _ref10))), React.createElement(Box, {
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

Offer61.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a18';
Offer61.destination = 'doc.calc_order';
Offer61.title = '6.1 Окна Роста (jsx)';
export default Offer61;