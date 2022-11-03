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
  getRecommendations61,
  getAdditions,
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
        PrintingPageTemplate: module.PrintingPageTemplate,
      });
      this.setState({ componentsLoaded: true });
    });

    import('./OfferImages.js').then((module) => {
      this.setAsyncImages({
        // AgeAdvantageImage: module.AgeAdvantageImage,
        // FreeSizingAdvantageIcon: module.FreeSizingAdvantageIcon,
        // GuaranteeAdvantageIcon: module.GuaranteeAdvantageIcon,
        // ClientsAdvantageIcon: module.ClientsAdvantageIcon,
        // CashPaymentIcon: module.CashPaymentIcon,
        // CardPaymentIcon: module.CardPaymentIcon,
        // OnlinePaymentIcon: module.OnlinePaymentIcon,
        // installmentIcon: module.installmentIcon,
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
        RollerBlindsIcon61: module.RollerBlindsIcon61,
        HiddenHardwareIcon61: module.HiddenHardwareIcon61,
        DecorIcon61: module.DecorIcon61,
        MosquitoNetsIcon61: module.MosquitoNetsIcon61,
        WindowSillsIcon61: module.WindowSillsIcon61,
        ChildLockIcon61: module.ChildLockIcon61,
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
    const assortmentLinks = getAssortmentLinks(images);
    const links = getLinks(images);
    const recommendation = getRecommendations61(images);
    const payments = getPayments61(images);
    const additions = getAdditions(images);
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
            <components.Wrapper classes={classes}>
              <Box mt={3} className={classes.hideInPrint}>
                <components.Header
                  withLogo
                  withCaption={true}
                  obj={obj}
                  classes={classes}
                />
              </Box>
              <Box mt={5.6} mb={1.6} fontSize={15}>
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
                              <Typography color="textSecondary" component="p">
                                {item.title}
                              </Typography>
                              <components.ProductsTable
                                head={item.head}
                                rows={item.rows}
                                total={item.total}
                                boldBorderlessHead={item.id === '3'}
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
              <Box mt={5} className={classes.pageBreakBefore}>
                <components.Header withLogo obj={obj} classes={classes} />
              </Box>

              <Box
                mt={2.5}
                mb={2.5}
                fontWeight={600}
                fontSize={15}
                sx={{ textTransform: 'uppercase' }}
              >
                <Typography variant="inherit" color="error" component="p">
                  С этими окнами обычно покупают
                </Typography>
              </Box>

              <Box>
                <components.GridImages
                  images={recommendation}
                  classes={classes}
                />
              </Box>
              {/* 6 карточек */}

              {/* Окна роста это  */}
              <Box
                mt={2.5}
                mb={2.5}
                fontWeight={600}
                fontSize={15}
                sx={{ textTransform: 'uppercase' }}
              >
                <Typography variant="inherit" color="error" component="p">
                  Окна роста это
                </Typography>
              </Box>

              {/* Вставка с 3 блоками  */}
              <Box
                display="flex"
                justifyContent="space-between"
                mb={2.5}
                sx={{ backgroundColor: '#E30613' }}
              >
                <Box fontSize={16} my={1.25} mx={2.5}>
                  <Box fontWeight={600} fontSize={28}>
                    <Typography
                      variant="inherit"
                      color="textSecondary"
                      component="p"
                    >
                      300 000
                    </Typography>
                  </Box>
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    component="p"
                  >
                    довольных клиентов
                  </Typography>
                </Box>

                <Box fontSize={16} my={1.25} mx={2.5}>
                  <Box fontWeight={600} fontSize={28}>
                    <Typography
                      variant="inherit"
                      color="textSecondary"
                      component="p"
                    >
                      2 500 000
                    </Typography>
                  </Box>
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    component="p"
                  >
                    установленных окон
                  </Typography>
                </Box>

                <Box fontSize={16} my={1.25} mx={2.5}>
                  <Box fontWeight={600} fontSize={28}>
                    <Typography
                      variant="inherit"
                      color="textSecondary"
                      component="p"
                    >
                      25 лет
                    </Typography>
                  </Box>
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    component="p"
                  >
                    успешной работы
                  </Typography>
                </Box>
              </Box>

              {/* Таблица с 6 блоками  */}

              {/* Подвал и 5 иконок  */}

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
Offer61.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a18';
Offer61.destination = 'doc.calc_order';
Offer61.title = '6.1 Окна Роста (jsx)';

export default Offer61;
