const {
  React,
  Typography,
  TableCell,
  TableRow
} = $p.ui;
import GlassRow from './GlassRow.js';
import ProdTotalsRow from './ProdTotalsRow.js';
export default function ProductGlasses({
  row,
  totals,
  Cell,
  classes
}) {
  const {
    characteristic: ox
  } = row;
  const children = [React.createElement(TableRow, {
    key: `prod-${row.row}`
  }, React.createElement(Cell, {
    colSpan: 6
  }, ox.name))];

  for (const prop of 'qsm') totals[prop].set(ox, 0);

  const img = totals.imgs.get(ox);

  for (const glr of ox.glasses) {
    children.push(React.createElement(GlassRow, {
      key: `gl-${row.row}-${glr.row}`,
      row: row,
      glr: glr,
      totals: totals,
      svg: img && img.imgs[`g${glr.elm}`],
      Cell: Cell,
      classes: classes
    }));
  }

  children.push(React.createElement(ProdTotalsRow, {
    key: `tot-${row.row}`,
    row: row,
    totals: totals,
    Cell: Cell
  }));
  return children;
}