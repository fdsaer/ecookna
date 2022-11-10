const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  Box,
} = $p.ui;

const StyledTableHeadRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.tableProducts.headCell,
  },
}))(TableRow);

const StyledTableFooterRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.tableProducts.footerCell,
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    border: `1px solid ${theme.palette.primary.dark}`,
    lineHeight: theme.typography.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.tableProducts.headText,
  },
  head: {
    fontWeight: theme.typography.fontWeightRegular,
    verticalAlign: 'middle',
  },
}))(TableCell);

const StyledTableHeadBold = withStyles((theme) => ({
  head: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.lineHeight,
    border: `1px solid ${theme.palette.primary.dark}`,
    fontWeight: theme.typography.fontWeightBold,
    verticalAlign: 'top',
    color: theme.palette.tableProducts.headText,
  },
}))(TableCell);

const StyledTableBodyCell = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    border: `1px solid ${theme.palette.primary.dark}`,
    lineHeight: theme.typography.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.tableProducts.bodyText,
  },
  head: {
    fontWeight: theme.typography.fontWeightRegular,
    verticalAlign: 'middle',
  },
}))(TableCell);

export default function ProductsTable({
  head,
  rows,
  total,
  boldBorderlessHead,
}) {
  return (
    <Table
      style={{
        tableLayout: 'fixed',
      }}
    >
      {head && head.length > 0 && (
        <TableHead>
          <StyledTableHeadRow>
            {head.map(({ text, width, id }) =>
              boldBorderlessHead ? (
                <StyledTableHeadBold
                  key={id}
                  align="left"
                  style={{
                    width: width ? width : 'auto',
                  }}
                >
                  {text}
                </StyledTableHeadBold>
              ) : (
                <StyledTableCell
                  key={id}
                  align="center"
                  style={{
                    width: width ? width : 'auto',
                  }}
                  text="body"
                >
                  {text}
                </StyledTableCell>
              )
            )}
          </StyledTableHeadRow>
        </TableHead>
      )}
      <TableBody>
        {rows &&
          rows.map(({ data, id }) => (
            <TableRow key={id}>
              {data.map(({ text, width, id }, index) => (
                <StyledTableBodyCell
                  key={id}
                  style={{
                    width: width ? width : 'auto',
                    fontWeight: 'normal',
                  }}
                  colSpan={index === 0 ? head.length - data.length + 1 : 0}
                >
                  <Box
                    style={{
                      maxHeight: '14px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {text}
                  </Box>
                </StyledTableBodyCell>
              ))}
            </TableRow>
          ))}
        <StyledTableFooterRow>
          {total &&
            total.map(({ text, id }, index) => (
              <StyledTableCell
                key={id}
                colSpan={index === 0 ? head.length - total.length + 1 : 0}
              >
                {text}
              </StyledTableCell>
            ))}
        </StyledTableFooterRow>
      </TableBody>
    </Table>
  );
}
