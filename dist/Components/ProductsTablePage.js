import Advantages from './Advantages.js';
import Payments from './Payments.js';
import ProductsTable from './ProductsTable.js';
const {
  React,
  Typography,
  Box
} = $p.ui;

var _ref2 = React.createElement(Box, {
  mt: 3,
  mb: 2.5
}, React.createElement(Typography, null, "*Предложение действительно в течение 10 календарных дней."));

var _ref3 = React.createElement(Box, {
  mb: 5
}, React.createElement(Typography, null, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера."));

export default function ProductsTablePage({
  classes,
  advantages,
  payments,
  productTableData
}) {
  var _ref4 = React.createElement(Payments, {
    paymentList: payments,
    classes: classes
  });

  var _ref = React.createElement(Advantages, {
    withLogo: true,
    advantagesList: advantages
  });

  const chunkNumber = productTableData.length;
  return React.createElement(Box, {
    className: classes?.breakElementWithMargins
  }, productTableData.map((chunk, index) => React.createElement(Box, {
    key: chunk[0].id,
    className: `${classes?.avoidBreakInside} ${classes?.pageBreakBefore} ${classes?.pageFrame}`
  }, React.createElement(Box, {
    mt: 3,
    className: classes?.displayInPrint
  }, _ref), chunk.map(({
    id,
    title,
    head,
    rows,
    total
  }) => rows && rows.length > 0 && React.createElement(Box, {
    className: classes?.tableMargins,
    key: id
  }, React.createElement(Typography, {
    color: "textSecondary",
    component: "p"
  }, title), React.createElement(ProductsTable, {
    head: head,
    rows: rows,
    total: total,
    boldBorderlessHead: false
  }))), index === chunkNumber - 1 && React.createElement(React.Fragment, null, _ref2, _ref3), React.createElement(Box, {
    className: classes?.displayInPrint
  }, _ref4))));
}