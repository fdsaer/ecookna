

const {
  React,
  TableRow
} = $p.ui;
import ImgRow from './ImgRow.js';
export default function GlassRow({
  row,
  glr,
  totals,
  Cell,
  classes,
  svg
}) {
  const {
    characteristic: ox,
    quantity
  } = row;

  const m = ox.elm_weight(glr.elm).round(1);
  totals.q.set(ox, totals.q.get(ox) + quantity);
  totals.s.set(ox, totals.s.get(ox) + quantity * glr.s);
  totals.m.set(ox, totals.m.get(ox) + quantity * m);
  return React.createElement(React.Fragment, null, React.createElement(TableRow, null, React.createElement(Cell, null, `${row.row}-${glr.row}`), React.createElement(Cell, null, glr.formula), React.createElement(Cell, {
    right: true
  }, `${glr.width.round()}x${glr.height.round()} (${glr.thickness})`), React.createElement(Cell, {
    right: true
  }, quantity), React.createElement(Cell, {
    right: true
  }, glr.s.round(3)), React.createElement(Cell, {
    right: true
  }, m)), svg ? React.createElement(ImgRow, {
    key: `img-${row.row}-${glr.row}`,
    svg: svg,
    Cell: Cell
  }) : null);
}