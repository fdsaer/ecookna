

const {
  React,
  Typography
} = $p.ui;
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));
const Header = React.lazy(() => import('../Header/index.js'));
const Footer = React.lazy(() => import('../Footer/index.js'));
import PrnProto from '../PrnProto.js';
var _ref = React.createElement("div", null, "Загрузка...");
class Invoice1 extends PrnProto {
  render() {
    const {
      attr,
      obj,
      print
    } = this.props;
    return React.createElement(React.Suspense, {
      fallback: _ref
    }, React.createElement(StyledFrame, {
      obj: obj,
      attr: attr,
      setClasses: this.setClasses,
      classes: this.classes
    }, React.createElement(Header, this.props), React.createElement(Footer, this.props)));
  }
}

Invoice1.ref = '80ecfed0-8263-11ea-a364-7bbe5c31efe8';
Invoice1.destination = 'doc.calc_order';
Invoice1.title = 'JSX / Демо счет вирт. формула';
export default Invoice1;