import Header from '../../Header/index.js';
import Advantages from './Advantages.js';
import Payments from './Payments.js';
import ProductsTable from './ProductsTable.js';
const {
  React,
  Typography,
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
    obj: obj
  })), children, React.createElement(Box, {
    className: classes.displayInPrint
  }, React.createElement(Payments, {
    paymentList: payments,
    classes: classes
  })));
}