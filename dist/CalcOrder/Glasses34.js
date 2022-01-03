const {
  React,
  Typography
} = $p.ui;
import StyledFrame from '../StyledFrame/Base.js';
import Header from '../Header/HeaderGlasses.js';
import Footer from '../Footer/index.js';
import Products from './Products.js';
import Product from '../Glasses/ProductGlasses.js';

var _ref = React.createElement(Header, null);

var _ref2 = React.createElement(Footer, null);

class Glasses34 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: {}
    };
  }

  componentDidMount() {
    const {
      attr,
      obj,
      print
    } = this.props;
  }

  render() {
    const {
      props: {
        obj,
        attr
      },
      state: {
        imgs
      }
    } = this;
    const totals = {
      imgs
    };
    return React.createElement(StyledFrame, {
      obj: obj,
      attr: attr
    }, _ref, React.createElement(Products, {
      Product: Product,
      totals: totals
    }), _ref2);
  }

}

Glasses34.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a47';
Glasses34.destination = 'doc.calc_order';
Glasses34.title = '3.4 Заполнения (jsx)';
export default Glasses34;