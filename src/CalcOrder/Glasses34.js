/**
 * Аналог dhtmlx '3.4 Заполнения'
 *
 * @module Glasses34
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

const {React, Typography} = $p.ui;
import StyledFrame from '../StyledFrame/Base.js';
import Header from '../Header/HeaderGlasses.js';
import Footer from '../Footer/index.js';
import Products from './Products.js';
import Product from '../Glasses/ProductGlasses.js';

class Glasses34 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {imgs: {}};
  }

  componentDidMount() {
    const {attr, obj, print} = this.props;
  }

  render() {
    const {props: {obj, attr}, state: {imgs}} = this;
    const totals = {imgs};
    return <StyledFrame obj={obj} attr={attr}>
      <Header />
      <Products Product={Product} totals={totals} />
      <Footer />
    </StyledFrame>;
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Glasses34.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a47';
Glasses34.destination = 'doc.calc_order';
Glasses34.title = '3.4 Заполнения (jsx)';

export default Glasses34;
