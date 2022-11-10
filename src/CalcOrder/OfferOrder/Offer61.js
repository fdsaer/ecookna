/**
 * Аналог dhtmlx '6.1 Окна Роста'
 *
 * @module Offer61
 *
 */
import PrnProto from '../../PrnProto.js';
import { PrintingPageTemplate } from './OfferComponents.js';
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
  getPayments61,
  getAdditions61,
  getStatistics61,
  getAdvantages61,
  getAchievements61,
} from './Templates.js';
import { chunksMaker } from '../../utilities/index.js';

const { React, Box, Typography } = $p.ui;

const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

class Offer61 extends PrnProto {
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
        Header: module.Header61,
        Footer: module.Footer61,
        Title: module.Title61,
        PromoPage: module.PromoPage61,
        Wrapper: module.Wrapper,
        GridImages: module.GridImages,
        Description: module.Description,
        Additions: module.Additions,
        LinksBlock: module.LinksBlock,
        Manager: module.Manager,
        ProductParams: module.ProductParams,
        ProductsTable: module.ProductsTable,
        ProductsTablePage: module.ProductsTablePage,
        PrintingPageTemplate: module.PrintingPageTemplate,
      });
      this.setState({ componentsLoaded: true });
    });

    import('./OfferImages.js').then((module) => {
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
        // offer 61
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
        EnvironmentallySafeImage61: module.EnvironmentallySafeImage61,
      });
      this.setState({ imagesLoaded: true });
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
    const payments = getPayments61(images);
    const additions = getAdditions61(images);
    const statistics = getStatistics61(images);
    const advantages = getAdvantages61(images);
    const achievements = getAchievements61(images);
    const productList = products && getProductsList(products);
    const tableRowsPerPage = 25; // Ограничение количества строк на одну страницу при группировке таблиц для постраничной печати
    const paramsRowsPerPage = 29; // Ограничение количества строк на одну страницу при группировке параметров изделия для постраничной печати
    const paramsSvgMaxHeight = 246; // Высота SVG подобрана таким образом, чтобы рисунок занимал максимальное место
    const paramsRowHeight = 23; // Эмпирически вычисленная высота строки в параметрах изделия
    const productTableData = products && getProductsData(products);
    const order = `№${obj.number_doc} от ${moment(obj.date).format(
      'DD MMMM YYYY'
    )} г.`;
    let loading = '';

    // при наличии ссылки на externalWindow, дублируем заголовок
    if (externalWindow) {
      externalWindow.document.title = order;
    }

    console.log(`!classes`, !classes);
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
          {components?.Title && (
            <components.Title
              title="Коммерческое предложение"
              description="по изготовлению и установке светопрозрачных конструкций"
              order={order}
              office={getAddressInfo(obj)}
              manager={manager}
              obj={obj}
            />
          )}
          {components && classes && (
            <components.Wrapper classes={classes} px={5}>
              <Box mt={3} className={classes.hideInPrint}>
                <components.Header
                  withLogo
                  withCaption={true}
                  obj={obj}
                  classes={classes}
                />
              </Box>
              <Box
                mt={5.6}
                mb={1.6}
                fontSize={15}
                className={classes.hideInPrint}
                sx={{ marginBottom: '-43px' }}
              >
                <Typography variant="inherit" color="textPrimary" component="p">
                  В комплектацию Вашего заказа входит:
                </Typography>
              </Box>
              {productList && (
                <>
                  {/* {title && (
                  <>
                    <Box mt={1.5} mb={0.75}>
                      <Typography>{title}</Typography>
                    </Box>
                    <Box p={0.625} sx={{ borderBottom: '1px solid #999' }} mb={2.5}></Box>
                  </>
                )}
                {fullSquare && fullWeight && (
                  <Box display="flex" flexDirection="row" sx={{ flex: '0 0 400px' }}>
                    <Box sx={{ flex: '0 0 400px' }}>
                      <Typography variant="subtitle2" component="p">
                        Площадь изделий, кв.м:{' '}
                        <Typography variant="subtitle2" component="span">
                          {fullSquare}
                        </Typography>
                      </Typography>
                    </Box>
                    <Box sx={{ flex: '1 1 0%' }} pl={5.25}>
                      <Typography variant="subtitle2" component="p">
                        Масса изделий, кг:{' '}
                        <Typography variant="subtitle2" component="span">
                          {fullWeight}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                )} */}
                  <Box className={classes.breakElementWithMargins}>
                    {chunksMaker(productList, paramsRowsPerPage).map(
                      (chunk, index) => (
                        <PrintingPageTemplate
                          classes={classes}
                          payments={payments}
                          key={chunk[0]?.index}
                          images={images}
                          obj={obj}
                        >
                          <>
                            {chunk.map(
                              ({
                                data,
                                number,
                                position,
                                quantity,
                                svg,
                                size,
                                index,
                              }) => (
                                <components.ProductParams
                                  data={data}
                                  number={number}
                                  position={position}
                                  quantity={quantity}
                                  svg={svg}
                                  size={size}
                                  index={index}
                                  classes={classes}
                                  svgMaxHeight={paramsSvgMaxHeight}
                                  rowHeight={paramsRowHeight}
                                  key={index}
                                  color="textSecondary"
                                />
                              )
                            )}
                          </>
                        </PrintingPageTemplate>
                      )
                    )}
                  </Box>
                </>
              )}
              {productTableData && (
                <Box className={classes.breakElementWithMargins}>
                  {chunksMaker(productTableData, tableRowsPerPage).map(
                    (chunk, index, chunksArr) => (
                      <PrintingPageTemplate
                        classes={classes}
                        payments={payments}
                        key={chunk[0]?.id}
                        images={images}
                        obj={obj}
                      >
                        <>
                          {chunk.map((item) => (
                            <Box className={classes.tableMargins} key={item.id}>
                              <Typography color="textPrimary" component="p">
                                {item.title}
                              </Typography>
                              <components.ProductsTable
                                head={item.head}
                                rows={item.rows}
                                total={item.total}
                                boldBorderlessHead={item.id === '3'}
                                color="#FFFFFF"
                                bgColorFooter="#303942"
                              />
                            </Box>
                          ))}
                          {index === chunksArr.length - 1 && (
                            <>
                              <Box mt={3} mb={2.5}>
                                <Typography>
                                  *Предложение действительно в течение 10
                                  календарных дней.
                                </Typography>
                              </Box>
                              <Box mb={5}>
                                <Typography>
                                  Для вашего удобства, точный расчет стоимости,
                                  заключение договора и оплата могут быть
                                  осуществлены на объекте в день проведения
                                  замера.
                                </Typography>
                              </Box>
                            </>
                          )}
                        </>
                      </PrintingPageTemplate>
                    )
                  )}
                </Box>
              )}
              <Box className={classes.hideInPrint}>
                <components.Footer
                  obj={obj}
                  paymentList={payments}
                  classes={classes}
                />
              </Box>
            </components.Wrapper>
          )}
          {components?.PromoPage && (
            <components.PromoPage
              obj={obj}
              classes={classes}
              additions={additions}
              statistics={statistics}
              manager={manager}
              advantages={advantages}
              achievements={achievements}
            />
          )}
        </StyledFrame>
      </React.Suspense>
    );
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Offer61.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a18';
Offer61.destination = 'doc.calc_order';
Offer61.title = '6.1 Окна Роста (jsx)';

export default Offer61;
