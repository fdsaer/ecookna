/**
 * Обёртка - цикл по изделиям заказа
 *
 * @module Products
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

const {React, Typography} = $p.ui;

// фильтр по умолчанию: продукции, у которых
const cond = ({characteristic}) => characteristic.constructions.count();

export default function Products(props) {
  let {obj, condition, totals, Product, Totals, classes} = props;
  if(!condition) {
    condition = cond;
  }
  if(totals) {
    totals = {};
  }
  const children = [];
  for(const row of obj.production) {
    if(condition(row)) {
      children.push(<Product key={`prod-${row.row}`} classes={classes} row={row} totals={totals} />)
    }
  }
  if(Totals) {
    children.push(<Totals key={`totals`} classes={classes} obj={obj} totals={totals} />)
  }
  return children;
}
