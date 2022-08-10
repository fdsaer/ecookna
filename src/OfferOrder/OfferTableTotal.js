/**
 *
 *
 * @module GlassRow
 *
 * Created by Evgeniy Malyarov on 10.01.2022.
 */

const { React, Table, TableCell, TableHead, TableRow, withStyles } = $p.ui;

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
}))(TableRow);

const StyledTotalTableCell = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    border: 'none',
    lineHeight: theme.typography.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
}))(TableCell);

export default function OfferTableTotal({ products }) {
  return (
    <Table>
      <TableHead>
        <StyledTableRow>
          <StyledTotalTableCell
            style={{
              width: '61%',
            }}
          >
            ИТОГО
          </StyledTotalTableCell>
          <StyledTotalTableCell
            align="left"
            style={{
              width: '13%',
            }}
          >
            {' '}
            {products
              .map((product) => product.price * product.quantity)
              .reduce((acc, price) => (acc += price), 0)}
          </StyledTotalTableCell>
          <StyledTotalTableCell
            align="left"
            style={{
              width: '13%',
            }}
          >
            {products
              .map(
                (product) => product.price * product.quantity * product.discount
              )
              .reduce((acc, discount) => (acc += discount), 0)}
          </StyledTotalTableCell>
          <StyledTotalTableCell
            align="left"
            style={{
              width: '13%',
            }}
          >
            {products
              .map(
                (product) =>
                  product.price * product.quantity * (1 - product.discount)
              )
              .reduce((acc, price) => (acc += price), 0)}
          </StyledTotalTableCell>
        </StyledTableRow>
      </TableHead>
    </Table>
  );
}
