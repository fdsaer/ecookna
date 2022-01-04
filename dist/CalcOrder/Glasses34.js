const {
  React
} = $p.ui;
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));
const Header = React.lazy(() => import('../Header/HeaderGlasses.js'));
const Footer = React.lazy(() => import('../Footer/index.js'));
const Products = React.lazy(() => import('./Products.js'));
const Product = React.lazy(() => import('../Glasses/ProductGlasses.js'));

var _ref = React.createElement(Footer, null);

class Glasses34 extends React.Component {
  constructor(props) {
    super(props);
    props.skipCss && props.skipCss();
    this.state = {
      imgs: null,
      loaded: false
    };

    this.setClasses = classes => {
      this.classes = classes;
      props.copyStyles && props.copyStyles();
    };
  }

  componentDidMount() {
    const {
      attr,
      obj,
      print
    } = this.props;
    obj.load_linked_refs().then(() => {
      this.setState({
        loaded: true,
        imgs: {}
      });
    });
  }

  render() {
    const {
      props: {
        obj,
        attr
      },
      state: {
        imgs,
        loaded
      },
      classes
    } = this;
    const totals = {
      imgs
    };
    const title = `Заполнения заказа №${obj.number_doc} от ${moment(obj.date).format('DD.MM.YYYY')}`;
    let loading = loaded ? imgs ? '' : 'Формируем эскизы заполнений...' : 'Читаем продукции заказа...';
    return React.createElement(React.Suspense, {
      fallback: "Загрузка..."
    }, React.createElement(StyledFrame, {
      obj: obj,
      attr: attr,
      classes: classes,
      setClasses: this.setClasses,
      title: title,
      loading: loading
    }, React.createElement(Header, {
      title: title
    }), React.createElement(Products, {
      Product: Product,
      totals: totals
    }), _ref));
  }

}

Glasses34.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a47';
Glasses34.destination = 'doc.calc_order';
Glasses34.title = '3.4 Заполнения (jsx)';
export default Glasses34;