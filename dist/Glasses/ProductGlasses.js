function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  React,
  Typography,
  TableCell,
  TableRow
} = $p.ui;
export default function ProductGlasses({
  row,
  totals,
  classes
}) {
  const {
    nom,
    characteristic,
    quantity
  } = row;

  const Cell = ({
    right,
    ...props
  }) => React.createElement(TableCell, _extends({
    className: `${classes.tableCell} ${right ? classes.alignRight : ''}`
  }, props));

  const children = [React.createElement(TableRow, {
    key: `prod-${row.row}`
  }, React.createElement(Cell, {
    colspan: 6
  }, characteristic.name))];
  totals.q.set(characteristic, 0);
  totals.s.set(characteristic, 0);
  totals.m.set(characteristic, 0);

  for (const glr of characteristic.glasses) {
    const key = `${row.row}-${glr.row}`;
    const m = characteristic.elm_weight(glr.elm).round(1);
    totals.q.set(characteristic, totals.q.get(characteristic) + quantity);
    totals.s.set(characteristic, totals.s.get(characteristic) + quantity * glr.s);
    totals.m.set(characteristic, totals.m.get(characteristic) + quantity * m);
    children.push(React.createElement(TableRow, {
      key: `prod-${key}`
    }, React.createElement(Cell, null, key), React.createElement(Cell, null, glr.formula), React.createElement(Cell, {
      right: true
    }, `${glr.width.round()}x${glr.height.round()} (${glr.thickness})`), React.createElement(Cell, {
      right: true
    }, quantity), React.createElement(Cell, {
      right: true
    }, glr.s), React.createElement(Cell, {
      right: true
    }, m)));
  }

  children.push(React.createElement(TableRow, {
    key: `tot-${row.row}`
  }, React.createElement(Cell, {
    colspan: 3
  }, "Итого по изделию:"), React.createElement(Cell, {
    right: true
  }, totals.q.get(characteristic)), React.createElement(Cell, {
    right: true
  }, totals.s.get(characteristic)), React.createElement(Cell, {
    right: true
  }, totals.m.get(characteristic))));
  return children;
}