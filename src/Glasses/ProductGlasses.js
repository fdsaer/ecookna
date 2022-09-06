/**
 * Заполнения текущего изделия
 *
 * @module ProductGlasses
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

const {React, Typography, TableCell, TableRow} = $p.ui;
import GlassRow from './GlassRow.js';
import ProdTotalsRow from './ProdTotalsRow.js';

export default function ProductGlasses({row, totals, Cell, classes}) {
  const {characteristic: ox} = row;

  // добавляем строку продукции
  const children = [
    <TableRow key={`prod-${row.row}`}>
      <Cell colSpan={6}>{ox.name}</Cell>
    </TableRow>
  ];

  // начальные значения итогов
  for(const prop of 'qsm') totals[prop].set(ox, 0);
  const img = totals.imgs.get(ox);

  for(const glr of ox.glasses) {
    // добавляем строку заполнения
    children.push(<GlassRow
      key={`gl-${row.row}-${glr.row}`}
      row={row}
      glr={glr}
      totals={totals}
      svg={img && img.imgs[`g${glr.elm}`]}
      Cell={Cell}
      classes={classes}
    />);
  }

  // добавляем строку итогов по изделию
  children.push(<ProdTotalsRow key={`tot-${row.row}`} row={row} totals={totals} Cell={Cell}/>);
  return children;
}
