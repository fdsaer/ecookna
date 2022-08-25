const {
  React,
  Typography
} = $p.ui;

const cond = ({
  characteristic
}) => characteristic.constructions.count();

export default function Products(props) {
  let {
    obj,
    condition,
    totals,
    Product,
    Totals,
    classes
  } = props;

  if (!condition) {
    condition = cond;
  }

  if (totals) {
    totals = {};
  }

  const children = [];

  for (const row of obj.production) {
    if (condition(row)) {
      children.push(React.createElement(Product, {
        key: `prod-${row.row}`,
        classes: classes,
        row: row,
        totals: totals
      }));
    }
  }

  if (Totals) {
    children.push(React.createElement(Totals, {
      key: `totals`,
      classes: classes,
      obj: obj,
      totals: totals
    }));
  }

  return children;
}