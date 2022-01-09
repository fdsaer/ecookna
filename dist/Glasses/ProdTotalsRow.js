const {
  React,
  TableRow
} = $p.ui;
export default function ProdTotalsRow({
  row,
  totals,
  Cell
}) {
  const {
    characteristic: ox
  } = row;
  return React.createElement(TableRow, {
    key: `tot-${row.row}`
  }, React.createElement(Cell, {
    colSpan: 3
  }, "Итого по изделию:"), React.createElement(Cell, {
    right: true
  }, totals.q.get(ox).round()), React.createElement(Cell, {
    right: true
  }, totals.s.get(ox).round(3)), React.createElement(Cell, {
    right: true
  }, totals.m.get(ox).round(1)));
}