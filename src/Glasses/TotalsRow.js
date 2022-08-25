const {React, TableRow} = $p.ui;

export default function TotalsRow({totals, Cell}) {
  return <TableRow>
    <Cell colSpan={3}>Итого по заказу:</Cell>
    <Cell right>{0}</Cell>
    <Cell right>{0}</Cell>
    <Cell right>{0}</Cell>
  </TableRow>;
}
