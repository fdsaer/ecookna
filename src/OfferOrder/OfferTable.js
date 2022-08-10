/**
 *
 *
 * @module GlassRow
 *
 * Created by Evgeniy Malyarov on 10.01.2022.
 */

const { React, Table, TableBody, TableCell, TableHead, TableRow, withStyles } =
  $p.ui;

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    border: `1px solid ${theme.palette.primary.dark}`,
    lineHeight: theme.typography.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  head: {
    fontWeight: theme.typography.fontWeightRegular,
    verticalAlign: 'top',
  },
}))(TableCell);

export default function OfferTable({ products }) {
  return (
    <Table>
      <TableHead>
        <StyledTableRow>
          <StyledTableCell
            style={{
              width: '25%',
            }}
          >
            Изделия
          </StyledTableCell>
          <StyledTableCell align="left">Цвет</StyledTableCell>
          <StyledTableCell
            align="left"
            style={{
              width: '13%',
            }}
          >
            Кол-во, шт.
          </StyledTableCell>
          <StyledTableCell
            align="left"
            style={{
              width: '13%',
            }}
          >
            Площадь, кв.м.
          </StyledTableCell>
          <StyledTableCell
            align="left"
            style={{
              width: '13%',
            }}
          >
            Цена <br />
            без скидки
          </StyledTableCell>
          <StyledTableCell
            align="left"
            style={{
              width: '13%',
            }}
          >
            Скидка
          </StyledTableCell>
          <StyledTableCell
            align="left"
            style={{
              width: '13%',
            }}
          >
            Сумма
          </StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.row}>
            <StyledTableCell
              style={{
                width: '25%',
                fontWeight: 'normal',
              }}
            >
              {product.characteristic.prod_nom.name_full}
            </StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                fontWeight: 'normal',
              }}
            >
              {product.characteristic.clr.presentation}
            </StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                width: '13%',
                fontWeight: 'normal',
              }}
            >
              {product.quantity}
            </StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                width: '13%',
                fontWeight: 'normal',
              }}
            >
              {(product.s * product.quantity).round(2)}
            </StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                width: '13%',
                fontWeight: 'normal',
              }}
            >
              {product.price * product.quantity}
            </StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                width: '13%',
                fontWeight: 'normal',
              }}
            >
              {product.price * product.discount}
            </StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                width: '13%',
                fontWeight: 'normal',
              }}
            >
              {product.price * product.quantity * (1 - product.discount)}
            </StyledTableCell>
          </TableRow>
        ))}
        <TableRow>
          <StyledTableCell align="left" colSpan={2}>
            Всего
          </StyledTableCell>
          <StyledTableCell align="left">
            {products
              .map((product) => product.quantity)
              .reduce((acc, quantity) => (acc += quantity), 0)}
          </StyledTableCell>
          <StyledTableCell align="left">
            {products
              .map((product) => product.s * product.quantity)
              .reduce((acc, square) => (acc += square), 0)
              .round(2)}
          </StyledTableCell>
          <StyledTableCell align="left">
            {products
              .map((product) => product.price * product.quantity)
              .reduce((acc, price) => (acc += price), 0)}
          </StyledTableCell>
          <StyledTableCell align="left">
            {products
              .map(
                (product) => product.price * product.quantity * product.discount
              )
              .reduce((acc, discount) => (acc += discount), 0)}
          </StyledTableCell>
          <StyledTableCell align="left">
            {products
              .map(
                (product) =>
                  product.price * product.quantity * (1 - product.discount)
              )
              .reduce((acc, price) => (acc += price), 0)}
          </StyledTableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
