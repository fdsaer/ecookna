import Product from './ProductGlasses.js';
const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} = $p.ui;

const cond = ({
  characteristic
}) => characteristic.constructions.count();

export default function Products(props) {
  let {
    obj,
    condition,
    totals,
    Cell,
    classes
  } = props;

  if (!condition) {
    condition = cond;
  }

  const children = [];

  for (const row of obj.production) {
    if (condition(row)) {
      children.push(React.createElement(Product, {
        key: `prod-${row.row}`,
        classes: classes,
        row: row,
        totals: totals,
        Cell: Cell
      }));
    }
  }

  return React.createElement(Table, {
    size: "small",
    className: `${classes.table} ${classes.w100}`
  }, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(Cell, null, "№"), React.createElement(Cell, null, "Формула"), React.createElement(Cell, {
    right: true
  }, "Размер"), React.createElement(Cell, {
    right: true
  }, "Колич"), React.createElement(Cell, {
    right: true
  }, "Площадь"), React.createElement(Cell, {
    right: true
  }, "Масса"))), React.createElement(TableBody, null, children));
}