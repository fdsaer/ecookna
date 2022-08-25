const {
  React,
  TableRow
} = $p.ui;
export default function TotalsRow({
  totals,
  Cell
}) {
  return React.createElement(TableRow, null, React.createElement(Cell, {
    colSpan: 3
  }, "Итого по заказу:"), React.createElement(Cell, {
    right: true
  }, 0), React.createElement(Cell, {
    right: true
  }, 0), React.createElement(Cell, {
    right: true
  }, 0));
}