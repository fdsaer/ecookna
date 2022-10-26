/**
 * Аналог dhtmlx '6.1 Окна Роста'
 *
 * @module Offer61
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

    const componentsImport = import('./OfferComponents.js');
    componentsImport.then((module) => {
      this.setState({
        components: {
          Header: module.Header,
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
        },
      });
      this.setState({ componentsLoaded: true });
    });

    const imagesImport = import('./OfferImages.js');
    imagesImport.then((module) => {
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
          PhoneChargerImage: module.PhoneChargerImage,
        },
      });
      this.setState({ imagesLoaded: true });
    });
  }

  render() {
    const {
      props: { obj, attr, externalWindow },
      state: {
        loaded,
        products,
        components,
        images,
        componentsLoaded,
        imagesLoaded,
      },
      classes,
    } = this;

    const manager = getManagerInfo(obj);
    const office = getAddressInfo(obj);
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
          loading={
            !components || !componentsLoaded || !imagesLoaded || !classes
          }
          // err={err}
        >
          {components?.Title && (
            <components.Title
              title="Коммерческое предложение"
              description="по изготовлению и установке светопрозрачных конструкций"
              order={order}
              office={office}
              manager={manager}
              obj={obj}
            />
          )}
          {components?.Wrapper && (
            <components.Wrapper classes={classes}>
              <Box mt={3} className={classes?.hideInPrint}>
                {components?.Header && (
                  <components.Header
                    withLogo
                    obj={obj}
                    order={order}
                    office={office}
                    manager={manager}
                  />
                )}
              </Box>
              {productList &&
                productList.length > 0 &&
                components?.ProductParams && (
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
                    obj={obj}
                    order={order}
                    office={office}
                    manager={manager}
                  />
                )}
              {components?.ProductsTablePage && productTableData && (
                <components.ProductsTablePage
                  classes={classes}
                  advantages={advantages}
                  payments={payments}
                  productTableData={productTableData}
                  obj={obj}
                  order={order}
                  office={office}
                  manager={manager}
                />
              )}
              {components?.Payments && (
                <Box className={classes?.hideInPrint}>
                  <components.Payments
                    paymentList={payments}
                    classes={classes}
                  />
                </Box>
              )}
              <Box mt={5} className={classes?.pageBreakBefore}>
                {components?.Header && (
                  <components.Header
                    withLogo
                    obj={obj}
                    order={order}
                    office={office}
                    manager={manager}
                  />
                )}
              </Box>
              <Box mt={5}>
                {components?.Description && (
                  <components.Description title="Подберем лучшее решение:" />
                )}
              </Box>
              <Box mt={7}>
                {components?.LinksBlock && (
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
                )}
              </Box>
              <Box mt={5}>
                {components?.LinksBlock && (
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
                )}
              </Box>
              <Box mt={7} className={classes?.pageBreakBefore}>
                {components?.Additions && (
                  <components.Additions
                    additions={additions}
                    title="Добавьте к своему интерьеру:"
                  />
                )}
              </Box>
              <Box mt={7}>
                {components?.Manager && (
                  <components.Manager
                    title="Остались вопросы? Я на связи! "
                    manager={manager}
                  />
                )}
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
