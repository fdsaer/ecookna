const {React, TableRow} = $p.ui;

export default function ProdTotalsRow({row, totals, Cell}) {
  const {characteristic: ox} = row;
  return <TableRow key={`tot-${row.row}`}>
    <Cell colSpan={3}>Итого по изделию:</Cell>
    <Cell right>{totals.q.get(ox).round()}</Cell>
    <Cell right>{totals.s.get(ox).round(3)}</Cell>
    <Cell right>{totals.m.get(ox).round(1)}</Cell>
  </TableRow>;
}
