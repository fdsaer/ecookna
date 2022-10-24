/**
 * Аналог dhtmlx '5.9 КП Калева'
 *
 * @module Offer59
 *
 */
import PrnProto from '../../PrnProto.js';
import {
  fullSquare,
  fullWeight,
  getProductsList,
  getManagerInfo,
  getAddressInfo,
} from './OfferData.js';
import getProductsData from './OfferTable.js';
import {
  getAssortmentLinks,
  getLinks,
  getAdvantages,
  getPayments,
  getAdditions,
} from './Templates.js';

const { React, Box, Typography } = $p.ui;

const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

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

    import('./OfferComponents.js').then((module) => {
      this.setAsyncModules({
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
        ProductsTablePage: module.ProductsTablePage,
      });
    });

    import('./OfferImages.js').then((module) => {
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
        PhoneChargerImage: module.PhoneChargerImage,
      });
    });
  }

  render() {
    const {
      props: { obj, attr, externalWindow },
      state: { loaded, products },
      classes,
      components,
      images,
    } = this;

    const manager = getManagerInfo(obj);
    const assortmentLinks = getAssortmentLinks(images);
    const links = getLinks(images);
    const advantages = getAdvantages(images);
    const payments = getPayments(images);
    const additions = getAdditions(images);
    const productList = products && getProductsList(products);
    const tableRowsPerPage = 25; // Ограничение количества строк на одну страницу при группировке таблиц для постраничной печати
    const paramsRowsPerPage = 29; // Ограничение количества строк на одну страницу при группировке параметров изделия для постраничной печати
    const paramsSvgMaxHeight = 246; // Высота SVG подобрана таким образом, чтобы рисунок занимал максимальное место
    const paramsRowHeight = 23; // Эмпирически вычисленная высота строки в параметрах изделия
    const productTableData =
      products && getProductsData(products, tableRowsPerPage);
    const order = `№${obj.number_doc} от ${moment(obj.date).format(
      'DD MMMM YYYY'
    )} г.`;
    let loading = '';

    // при наличии ссылки на externalWindow, дублируем заголовок
    if (externalWindow) {
      externalWindow.document.title = order;
    }

    return (
      <React.Suspense fallback="Загрузка...">
        <StyledFrame
          obj={obj}
          attr={attr}
          classes={classes}
          setClasses={this.setClasses}
          title={order}
          loading={!components || !images || !loaded || !classes}
          // err={err}
        >
          {components && (
            <components.Header
              headerTitle="Индивидуальное решение"
              description="по изготовлению и установке светопрозрачных конструкций"
              order={order}
              office={getAddressInfo(obj)}
              manager={manager}
            />
          )}
          {components && classes && (
            <components.Wrapper classes={classes}>
              <Box mt={3} className={classes.hideInPrint}>
                <components.Advantages withLogo advantagesList={advantages} />
              </Box>
              <Box
                mt={3}
                mb={2.5}
                fontSize={22}
                className={classes.hideInPrint}
              >
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  component="p"
                >
                  {order}
                </Typography>
              </Box>
              {productList && productList.length > 0 && (
                <components.ProductParams
                  title="В комплектацию Вашего заказа входит:"
                  fullSquare={fullSquare}
                  fullWeight={fullWeight}
                  productList={productList}
                  classes={classes}
                  advantages={advantages}
                  payments={payments}
                  rowsPerPage={paramsRowsPerPage}
                  svgMaxHeight={paramsSvgMaxHeight}
                  rowHeight={paramsRowHeight}
                />
              )}
              {productTableData && (
                <components.ProductsTablePage
                  classes={classes}
                  advantages={advantages}
                  payments={payments}
                  productTableData={productTableData}
                />
              )}
              <Box className={classes.hideInPrint}>
                <components.Payments paymentList={payments} classes={classes} />
              </Box>
              <Box mt={5} className={classes.pageBreakBefore}>
                <components.Advantages withLogo advantagesList={advantages} />
              </Box>
              <Box mt={5}>
                <components.Description title="Подберем лучшее решение:" />
              </Box>
              <Box mt={7}>
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
              </Box>
              <Box mt={5}>
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
              </Box>
              <Box mt={7} className={classes.pageBreakBefore}>
                <components.Additions
                  additions={additions}
                  title="Добавьте к своему интерьеру:"
                />
              </Box>
              <Box mt={7}>
                <components.Manager
                  title="Остались вопросы? Я на связи! "
                  manager={manager}
                />
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
Offer59.title = 'КП Экоокна 2022 – тест';

export default Offer59;
