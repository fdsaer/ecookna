/**
 * Обёртка - цикл по изделиям заказа
 *
 * @module Products
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

import Product from './ProductGlasses.js';
const {React, Table, TableBody, TableCell,  TableHead, TableRow} = $p.ui;

// фильтр по умолчанию: продукции, у которых
const cond = ({characteristic}) => characteristic.constructions.count();

export default function Products(props) {
  let {obj, condition, totals, Totals, classes} = props;
  if(!condition) {
    condition = cond;
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
  const Cell = ({right, ...props}) => <TableCell className={`${classes.tableCell} ${right ? classes.alignRight : ''}`} {...props}/>;

  return <Table size="small" className={`${classes.table} ${classes.w100}`}>
    <TableHead>
      <TableRow>
        <Cell>№</Cell>
        <Cell>Формула</Cell>
        <Cell right>Размер</Cell>
        <Cell right>Колич</Cell>
        <Cell right>Площадь</Cell>
        <Cell right>Масса</Cell>
      </TableRow>
    </TableHead>
    <TableBody>
      {children}
    </TableBody>
  </Table>;
}
