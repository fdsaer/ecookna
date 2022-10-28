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
  children
}) {
  return React.createElement(Box, {
    className: `${classes.avoidBreakInside} ${classes.pageBreakBefore} ${classes.pageFrame}`
  }, React.createElement(Box, {
    mt: 3,
    className: classes.displayInPrint
  }, React.createElement(Advantages, {
    withLogo: true,
    advantagesList: advantages
  })), children, React.createElement(Box, {
    className: classes.displayInPrint
  }, React.createElement(Payments, {
    paymentList: payments,
    classes: classes
  })));
}