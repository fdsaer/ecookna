const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  Box
} = $p.ui;
const StyledTableRow = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light
  }
}))(TableRow);
const StyledTableCell = withStyles(theme => {
  console.log(theme);
  return {
    root: {
      padding: theme.spacing(0.5),
      fontSize: theme.typography.body2.fontSize,
      border: `1px solid ${theme.palette.primary.dark}`,
      lineHeight: theme.typography.lineHeight,
      fontWeight: theme.typography.fontWeightBold
    },
    head: {
      fontWeight: theme.typography.fontWeightRegular,
      verticalAlign: 'middle'
    }
  };
})(TableCell);
const StyledTableHeadBold = withStyles(theme => ({
  head: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.lineHeight,
    border: `1px solid ${theme.palette.primary.dark}`,
    fontWeight: theme.typography.fontWeightBold,
    verticalAlign: 'top'
  }
}))(TableCell);
export default function ProductsTable({
  head,
  rows,
  total,
  boldBorderlessHead,
  color,
  bgColorFooter
}) {
  return React.createElement(Table, {
    style: {
      tableLayout: 'fixed'
    }
  }, head && head.length > 0 && React.createElement(TableHead, null, React.createElement(StyledTableRow, null, head.map(({
    text,
    width,
    id
  }) => boldBorderlessHead ? React.createElement(StyledTableHeadBold, {
    key: id,
    align: "left",
    style: {
      width: width ? width : 'auto',
      color: color ? color : ''
    }
  }, text) : React.createElement(StyledTableCell, {
    key: id,
    align: "center",
    style: {
      width: width ? width : 'auto',
      color: color ? color : ''
    }
  }, text)))), React.createElement(TableBody, null, rows && rows.map(({
    data,
    id
  }) => React.createElement(TableRow, {
    key: id
  }, data.map(({
    text,
    width,
    id
  }, index) => React.createElement(StyledTableCell, {
    key: id,
    style: {
      width: width ? width : 'auto',
      fontWeight: 'normal'
    },
    colSpan: index === 0 ? head.length - data.length + 1 : 0
  }, React.createElement(Box, {
    style: {
      maxHeight: '14px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, text))))), React.createElement(StyledTableRow, null, total && total.map(({
    text,
    id
  }, index) => React.createElement(StyledTableCell, {
    key: id,
    colSpan: index === 0 ? head.length - total.length + 1 : 0,
    style: {
      color: color ? color : '',
      backgroundColor: bgColorFooter ? bgColorFooter : ''
    }
  }, text)))));
}