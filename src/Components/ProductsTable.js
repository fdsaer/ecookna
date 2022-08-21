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

const StyledTableHeadBold = withStyles((theme) => ({
  head: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.lineHeight,
    border: 'none',
    fontWeight: theme.typography.fontWeightBold,
    verticalAlign: 'top',
  },
}))(TableCell);

export default function ProductsTable({
  head,
  rows,
  total,
  boldBorderlessHead,
}) {
  console.log(head);
  console.log(rows);
  return (
    <Table>
      {head && head.length > 0 && (
        <TableHead>
          <StyledTableRow>
            {head.map(({ text, width, id }) =>
              boldBorderlessHead ? (
                <StyledTableHeadBold
                  key={id}
                  align="left"
                  style={
                    width
                      ? {
                          width: width,
                        }
                      : {}
                  }
                >
                  {text}
                </StyledTableHeadBold>
              ) : (
                <StyledTableCell
                  key={id}
                  align="left"
                  style={
                    width
                      ? {
                          width: width,
                        }
                      : {}
                  }
                >
                  {text}
                </StyledTableCell>
              )
            )}
          </StyledTableRow>
        </TableHead>
      )}
      <TableBody>
        {rows &&
          rows.map((product) => (
            <TableRow>
              {product.map(({ text, id }, index) => (
                <StyledTableCell
                  key={id}
                  style={{ fontWeight: 'normal' }}
                  colSpan={index === 0 ? head.length - product.length + 1 : 0}
                >
                  {text}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        <TableRow>
          {total &&
            total.map(({ text, id }, index) => (
              <StyledTableCell
                key={id}
                colSpan={index === 0 ? head.length - total.length + 1 : 0}
              >
                {text}
              </StyledTableCell>
            ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
