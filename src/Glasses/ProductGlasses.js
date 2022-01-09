/**
 * Заполнения текущего изделия
 *
 * @module ProductGlasses
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */



const {React, Typography, TableCell, TableRow} = $p.ui;



export default function ProductGlasses({row, totals, classes}) {
  const {nom, characteristic, quantity} = row;
  const Cell = ({right, ...props}) => <TableCell className={`${classes.tableCell} ${right ? classes.alignRight : ''}`} {...props}/>;
  // добавляем строку продукции
  const children = [
    <TableRow key={`prod-${row.row}`}>
      <Cell colspan={6}>{characteristic.name}</Cell>
    </TableRow>
  ];

  totals.q.set(characteristic, 0);
  totals.s.set(characteristic, 0);
  totals.m.set(characteristic, 0);

  for(const glr of characteristic.glasses) {
    const key = `${row.row}-${glr.row}`;
    // копим итоги
    const m = characteristic.elm_weight(glr.elm).round(1);
    totals.q.set(characteristic, totals.q.get(characteristic) + quantity);
    totals.s.set(characteristic, totals.s.get(characteristic) + quantity * glr.s);
    totals.m.set(characteristic, totals.m.get(characteristic) + quantity * m);
    // добавляем строку заполнения
    children.push(<TableRow key={`prod-${key}`}>
      <Cell>{key}</Cell>
      <Cell>{glr.formula}</Cell>
      <Cell right>{`${glr.width.round()}x${glr.height.round()} (${glr.thickness})`}</Cell>
      <Cell right>{quantity}</Cell>
      <Cell right>{glr.s.round(3)}</Cell>
      <Cell right>{m}</Cell>
    </TableRow>);
  }
  // если есть раскладка или кривоугольность

  // добавляем строку итогов по изделию
  children.push(<TableRow key={`tot-${row.row}`}>
    <Cell colspan={3}>Итого по изделию:</Cell>
    <Cell right>{totals.q.get(characteristic).round()}</Cell>
    <Cell right>{totals.s.get(characteristic).round(3)}</Cell>
    <Cell right>{totals.m.get(characteristic).round(1)}</Cell>
  </TableRow>);
  return children;
}
