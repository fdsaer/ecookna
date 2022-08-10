const {
  React,
  Table,
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
const StyledTotalTableCell = withStyles(theme => ({
  root: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    border: 'none',
    lineHeight: theme.typography.lineHeight,
    fontWeight: theme.typography.fontWeightBold
  }
}))(TableCell);
export default function OfferTableTotal({
  products
}) {
  return React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(StyledTableRow, null, React.createElement(StyledTotalTableCell, {
    style: {
      width: '61%'
    }
  }, "ИТОГО"), React.createElement(StyledTotalTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, ' ', products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0)), React.createElement(StyledTotalTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, products.map(product => product.price * product.quantity * product.discount).reduce((acc, discount) => acc += discount, 0)), React.createElement(StyledTotalTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0)))));
}