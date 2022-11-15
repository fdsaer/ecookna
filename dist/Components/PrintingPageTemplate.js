import Header from '../../Header/index.js';
import Footer from '../../Footer/index.js';
const {
  React,
  Box
} = $p.ui;
export default function PrintingPageTemplate({
  classes,
  advantages,
  payments,
  children,
  images,
  obj
}) {
  return React.createElement(Box, {
    className: `${classes.avoidBreakInside} ${classes.pageBreakBefore} ${classes.pageFrame}`
  }, React.createElement(Box, {
    mt: 3,
    className: classes.displayInPrint
  }, React.createElement(Header, {
    withLogo: true,
    images: images,
    obj: obj,
    classes: classes
  })), children, React.createElement(Box, {
    className: classes.displayInPrint
  }, React.createElement(Footer, {
    paymentList: payments,
    classes: classes,
    obj: obj
  })));
}