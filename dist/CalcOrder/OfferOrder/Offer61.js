import PrnProto from '../../PrnProto.js';
import { PrintingPageTemplate } from './OfferComponents.js';
import { fullSquare, fullWeight, getProductsList, getManagerInfo, getAddressInfo } from './OfferData.js';
import getProductsData from './OfferTable.js';
import { getPayments61, getAdditions61, getStatistics61, getAdvantages61, getAchievements61 } from './Templates.js';
import { chunksMaker } from '../../utilities/index.js';
const {
  React,
  Box,
  Typography
} = $p.ui;
const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

var _ref = React.createElement(Typography, {
  variant: "inherit",
  color: "textPrimary",
  component: "p"
}, "В комплектацию Вашего заказа входит:");

var _ref2 = React.createElement(Box, {
  mt: 3,
  mb: 2.5
}, React.createElement(Typography, null, "*Предложение действительно в течение 10 календарных дней."));

var _ref3 = React.createElement(Box, {
  mb: 5
}, React.createElement(Typography, null, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера."));

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
        Header: module.Header61,
        Footer: module.Footer61,
        Title: module.Title61,
        PromoPage: module.PromoPage61,
        Wrapper: module.Wrapper,
        GridImages: module.GridImages,
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
        CashPaymentIcon61: module.CashPaymentIcon61,
        NonCashPaymentIcon61: module.NonCashPaymentIcon61,
        CardPaymentIcon61: module.CardPaymentIcon61,
        InstallmentIcon61: module.InstallmentIcon61,
        FixedPriceIcon61: module.FixedPriceIcon61,
        RollerBlindsImage61: module.RollerBlindsImage61,
        HiddenHardwareImage61: module.HiddenHardwareImage61,
        DecorImage61: module.DecorImage61,
        MosquitoNetsImage61: module.MosquitoNetsImage61,
        WindowSillsImage61: module.WindowSillsImage61,
        ChildLockImage61: module.ChildLockImage61,
        OwnProductionIcon61: module.OwnProductionIcon61,
        ManagerIcon61: module.ManagerIcon61,
        QualityIcon61: module.QualityIcon61,
        AccessoriesIcon61: module.AccessoriesIcon61,
        PackageOfServicesIcon61: module.PackageOfServicesIcon61,
        MountingBrigadesIcon61: module.MountingBrigadesIcon61,
        GoldenWindowImage61: module.GoldenWindowImage61,
        PeoplesBrandImage61: module.PeoplesBrandImage61,
        CompanyOfTheYearImage61: module.CompanyOfTheYearImage61,
        QualityStarImage61: module.QualityStarImage61,
        EnvironmentallySafeImage61: module.EnvironmentallySafeImage61
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
    const payments = getPayments61(images);
    const additions = getAdditions61(images);
    const statistics = getStatistics61(images);
    const advantages = getAdvantages61(images);
    const achievements = getAchievements61(images);
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

    console.log(`classes`, classes);
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
      classes: classes,
      px: 5
    }, React.createElement(Box, {
      mt: 3,
      className: classes.hideInPrint
    }, React.createElement(components.Header, {
      withLogo: true,
      withCaption: true,
      obj: obj,
      classes: classes
    })), React.createElement(Box, {
      mt: 5.6,
      mb: 1.6,
      fontSize: 15,
      className: classes.hideInPrint,
      sx: {
        marginBottom: '-43px'
      }
    }, _ref), productList && React.createElement(React.Fragment, null, React.createElement(Box, {
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
      color: "textPrimary",
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
    }))), components?.PromoPage && React.createElement(components.PromoPage, {
      obj: obj,
      classes: classes,
      additions: additions,
      statistics: statistics,
      manager: manager,
      advantages: advantages,
      achievements: achievements
    })));
  }

}

Offer61.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a18';
Offer61.destination = 'doc.calc_order';
Offer61.title = '6.1 Окна Роста (jsx)';
export default Offer61;