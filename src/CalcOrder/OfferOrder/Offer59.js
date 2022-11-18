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
import { chunksMaker } from '../../utilities/index.js';

const { React, Box, Typography } = $p.ui;
const StyledFrame = React.lazy(() =>
  import('../../StyledFrame/StyledFrame.js')
);

class Offer59 extends PrnProto {
  componentDidMount() {
    const {
      attr: {
        renderAutoLines: autoLines
      },
      obj,
      print,
      externalWindow,
    } = this.props;

    console.log(autoLines);

    obj
      .load_linked_refs()
      .then(async () => {
        this.setState({ loaded: true });
        // получим список заполнений, которым нужны эскизы
        const products = obj.production;
        const imgs = new Map();
        for (const { characteristic } of obj.production) {
          imgs.set(characteristic, [0]);
        }
        const attr = { res: new Map() };
        for (const [ox] of imgs) {
          attr.builder_props = {
            ...attr.builder_props,
            auto_lines: !!autoLines,
            custom_lines: false,
            txts: false,
          };
          await ox.draw(attr);
        }
        this.setState({ products });
        this.setState({ svgImgs: attr.res });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
    // this.setState({ loaded: true });

    import('./OfferComponents.js').then((module) => {
      this.setAsyncModules({
        Header: module.Header59,
        Footer: module.Footer59,
        Title: module.Title59,
        Payments: module.Payments,
        Wrapper: module.Wrapper,
        Description: module.Description,
        Additions: module.Additions,
        LinksBlock: module.LinksBlock,
        Manager: module.Manager,
        ProductParams: module.ProductParams,
        ProductsTable: module.ProductsTable,
        ProductsTablePage: module.ProductsTablePage,
        PrintingPageTemplate: module.PrintingPageTemplate,
      });

      this.setAsyncModules({
        ...module
      });
      this.setState({ componentsLoaded: true });
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
      this.setState({ imagesLoaded: true });
    });
  }

  render() {
    const {
      props: { obj, attr, externalWindow },
      state: { loaded, products, svgImgs },
      classes,
      components,
      images,
    } = this;

    const totals = { svgImgs, q: new Map(), s: new Map(), m: new Map() };
    const manager = getManagerInfo(obj);
    const assortmentLinks = getAssortmentLinks(images);
    const links = getLinks(images);
    const advantages = getAdvantages(images);
    const payments = getPayments(images);
    const additions = getAdditions(images);
    const productList = products && totals && getProductsList(products, totals);
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

    return (
      <React.Suspense fallback="Загрузка...">
        <StyledFrame
          obj={obj}
          attr={attr}
          classes={classes}
          setClasses={this.setClasses}
          title={order}
          loading={!components || !images || !svgImgs || !loaded || !classes}
          // err={err}
        >
          {components && (
            <components.Title
              headerTitle="Индивидуальное решение"
              description="по изготовлению и установке светопрозрачных конструкций"
              order={order}
              office={getAddressInfo(obj)}
              manager={manager}
              obj={obj}
            />
          )}
          {components && classes && (
            <components.Wrapper classes={classes} px={3.75}>
              <Box mt={3} className={classes.hideInPrint}>
                <components.Header
                  withLogo
                  obj={obj}
                  advantagesList={advantages}
                  images={images}
                />
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
                        <components.PrintingPageTemplate
                          classes={classes}
                          advantages={advantages}
                          payments={payments}
                          key={chunk[0]?.index}
                          images={images}
                          obj={obj}
                          Header={components.Header}
                          Footer={components.Footer}
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
                        </components.PrintingPageTemplate>
                      )
                    )}
                  </Box>
                </>
              )}
              {productTableData && (
                <Box className={classes.breakElementWithMargins}>
                  {chunksMaker(productTableData, tableRowsPerPage).map(
                    (chunk, index, chunksArr) => (
                      <components.PrintingPageTemplate
                        classes={classes}
                        advantages={advantages}
                        payments={payments}
                        key={chunk[0]?.id}
                        images={images}
                        obj={obj}
                        Header={components.Header}
                        Footer={components.Footer}
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
                      </components.PrintingPageTemplate>
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
                <components.Header
                  withLogo
                  obj={obj}
                  advantagesList={advantages}
                  images={images}
                />
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
Offer59.beforeOpen = async () => {
  const {dialogs} = $p.ui;

  const list = [
    {value: 'hide', text: 'Скрыть'},
    {value: 'show', text: 'Показать'}
  ]

  const needAutoLinesString = await dialogs.input_value({
    title: 'Размерные линии',
    text: 'Способ отрисовки размерных линий',
    list: [
      {value: 'hide', text: 'Скрыть'},
      {value: 'show', text: 'Показать'}
    ],
    initialValue: list[0],
  })

  return {
    needAutoLines: needAutoLinesString === 'show'
  };
}


export default Offer59;
