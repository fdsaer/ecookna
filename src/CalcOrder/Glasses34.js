/**
 * Аналог dhtmlx '3.4 Заполнения'
 *
 * @module Glasses34
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

const {React, Typography} = $p.ui;
import Loading from '../StyledFrame/Loading.js';
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));
const Header = React.lazy(() => import('../Header/HeaderGlasses.js'));
const Footer = React.lazy(() => import('../Footer/index.js'));
const Products = React.lazy(() => import('./Products.js'));
const Product = React.lazy(() => import('../Glasses/ProductGlasses.js'));

class Glasses34 extends React.Component {

  constructor(props) {
    super(props);
    props.skipCss && props.skipCss();
    this.state = {imgs: null, loaded: false};
    this.setClasses = (classes) => {
      this.classes = classes;
      props.copyStyles && props.copyStyles();
    };
  }

  componentDidMount() {
    const {attr, obj, print} = this.props;
    obj.load_linked_refs()
      .then(() => {
        this.setState({loaded: true, imgs: {}});
      });
  }

  render() {
    const {props: {obj, attr}, state: {imgs, loaded}, classes} = this;
    const totals = {imgs};
    const title = `Заполнения заказа №${obj.number_doc} от ${moment(obj.date).format('DD.MM.YYYY')}`;

    return <React.Suspense fallback="Загрузка...">
      <StyledFrame obj={obj} attr={attr} classes={classes} setClasses={this.setClasses}>
        {loaded ? null : <Loading title={title} text="Читаем продукции заказа..." />}
        {loaded && !imgs ? <Loading title={title} text="Формируем эскизы заполнений..." /> : null}
        {loaded && imgs ? <Header title={title}/> : null}
        {loaded && imgs ? <Products Product={Product} totals={totals} /> : null}
        {loaded && imgs ? <Footer /> : null}
      </StyledFrame>
    </React.Suspense>;
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Glasses34.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a47';
Glasses34.destination = 'doc.calc_order';
Glasses34.title = '3.4 Заполнения (jsx)';

export default Glasses34;
