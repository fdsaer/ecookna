const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles
} = $p.ui;
const StyledTableRow = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light
  }
}))(TableRow);
const StyledTableCell = withStyles(theme => ({
  root: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    border: `1px solid ${theme.palette.primary.dark}`,
    lineHeight: theme.typography.lineHeight,
    fontWeight: theme.typography.fontWeightBold
  },
  head: {
    fontWeight: theme.typography.fontWeightRegular,
    verticalAlign: 'top'
  }
}))(TableCell);

var _ref = React.createElement(StyledTableCell, {
  align: "left"
}, "Цвет");

var _ref2 = React.createElement("br", null);

var _ref3 = React.createElement(StyledTableCell, {
  align: "left",
  colSpan: 2
}, "Всего");

export default function OfferTable({
  products
}) {
  return React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(StyledTableRow, null, React.createElement(StyledTableCell, {
    style: {
      width: '25%'
    }
  }, "Изделия"), _ref, React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Кол-во, шт."), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Площадь, кв.м."), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Цена ", _ref2, "без скидки"), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Скидка"), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Сумма"))), React.createElement(TableBody, null, products.map(product => React.createElement(TableRow, {
    key: product.row
  }, React.createElement(StyledTableCell, {
    style: {
      width: '25%',
      fontWeight: 'normal'
    }
  }, product.characteristic.prod_nom.name_full), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      fontWeight: 'normal'
    }
  }, product.characteristic.clr.presentation), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%',
      fontWeight: 'normal'
    }
  }, product.quantity), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%',
      fontWeight: 'normal'
    }
  }, (product.s * product.quantity).round(2)), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%',
      fontWeight: 'normal'
    }
  }, product.price * product.quantity), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%',
      fontWeight: 'normal'
    }
  }, product.price * product.discount), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%',
      fontWeight: 'normal'
    }
  }, product.price * product.quantity * (1 - product.discount)))), React.createElement(TableRow, null, _ref3, React.createElement(StyledTableCell, {
    align: "left"
  }, products.map(product => product.quantity).reduce((acc, quantity) => acc += quantity, 0)), React.createElement(StyledTableCell, {
    align: "left"
  }, products.map(product => product.s * product.quantity).reduce((acc, square) => acc += square, 0).round(2)), React.createElement(StyledTableCell, {
    align: "left"
  }, products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0)), React.createElement(StyledTableCell, {
    align: "left"
  }, products.map(product => product.price * product.quantity * product.discount).reduce((acc, discount) => acc += discount, 0)), React.createElement(StyledTableCell, {
    align: "left"
  }, products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0)))));
}