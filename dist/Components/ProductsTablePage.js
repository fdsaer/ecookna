function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Header from '../../Header/index.js';
import Payments from './Payments.js';
import ProductsTable from './ProductsTable.js';
const {
  React,
  Typography,
  Box
} = $p.ui;

var _ref = React.createElement(Box, {
  mt: 3,
  mb: 2.5
}, React.createElement(Typography, null, "*Предложение действительно в течение 10 календарных дней."));

var _ref2 = React.createElement(Box, {
  mb: 5
}, React.createElement(Typography, null, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера."));

export default function ProductsTablePage(props) {
  const {
    classes,
    payments,
    productTableData
  } = props;
  const chunkNumber = productTableData.length;

  var _ref3 = React.createElement(Payments, {
    paymentList: payments,
    classes: classes
  });

  return React.createElement(Box, {
    className: classes.breakElementWithMargins
  }, productTableData.map((chunk, index) => React.createElement(Box, {
    key: chunk[0].id,
    className: `${classes.avoidBreakInside} ${classes.pageBreakBefore} ${classes.pageFrame}`
  }, React.createElement(Box, {
    mt: 3,
    className: classes.displayInPrint
  }, React.createElement(Header, _extends({
    withLogo: true
  }, props))), chunk.map(({
    id,
    title,
    head,
    rows,
    total
  }) => (rows && rows.length > 0 || id === '3' && head && head.length > 0) && React.createElement(Box, {
    className: classes.tableMargins,
    key: id
  }, React.createElement(Typography, {
    color: "textSecondary",
    component: "p"
  }, title), React.createElement(ProductsTable, {
    head: head,
    rows: rows,
    total: total,
    boldBorderlessHead: id === '3'
  }))), index === chunkNumber - 1 && React.createElement(React.Fragment, null, _ref, _ref2), React.createElement(Box, {
    className: classes.displayInPrint
  }, _ref3))));
}