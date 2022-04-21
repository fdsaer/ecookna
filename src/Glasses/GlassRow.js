/**
 *
 *
 * @module GlassRow
 *
 * Created by Evgeniy Malyarov on 10.01.2022.
 */

const {React, TableRow} = $p.ui;
import ImgRow from './ImgRow.js';

export default function GlassRow({row, glr, totals, Cell, classes, svg}) {
  const {characteristic: ox, quantity} = row;

  // копим итоги
  const m = ox.elm_weight(glr.elm).round(1);
  totals.q.set(ox, totals.q.get(ox) + quantity);
  totals.s.set(ox, totals.s.get(ox) + quantity * glr.s);
  totals.m.set(ox, totals.m.get(ox) + quantity * m);
  // добавляем строку заполнения
  return <>
    <TableRow>
      <Cell>{`${row.row}-${glr.row}`}</Cell>
      <Cell>{glr.formula}</Cell>
      <Cell right>{`${glr.width.round()}x${glr.height.round()} (${glr.thickness})`}</Cell>
      <Cell right>{quantity}</Cell>
      <Cell right>{glr.s.round(3)}</Cell>
      <Cell right>{m}</Cell>
    </TableRow>
    {svg ? <ImgRow key={`img-${row.row}-${glr.row}`} svg={svg} Cell={Cell}/> : null}
  </>;
}
