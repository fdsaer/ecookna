import Advantages from './Advantages.js';
import Payments from './Payments.js';
import ProductsTable from './ProductsTable.js';
const { React, Typography, Box } = $p.ui;

export default function ProductsTablePage({
  classes,
  advantages,
  payments,
  productTableData,
}) {
  const chunkNumber = productTableData.length;
  return (
    <Box className={classes.breakElementWithMargins}>
      {productTableData.map((chunk, index) => (
        <Box
          key={chunk[0].id}
          className={`${classes.avoidBreakInside} ${classes.pageBreakBefore} ${classes.pageFrame}`}
        >
          <Box mt={3} className={classes.displayInPrint}>
            <Advantages withLogo advantagesList={advantages} />
          </Box>
          {chunk.map(
            ({ id, title, head, rows, total }) =>
              rows &&
              rows.length > 0 && (
                <Box className={classes.tableMargins} key={id}>
                  <Typography color="textSecondary" component="p">
                    {title}
                  </Typography>
                  <ProductsTable
                    head={head}
                    rows={rows}
                    total={total}
                    boldBorderlessHead={false}
                  />
                </Box>
              )
          )}
          {index === chunkNumber - 1 && (
            <>
              <Box mt={3} mb={2.5}>
                <Typography>
                  *Предложение действительно в течение 10 календарных дней.
                </Typography>
              </Box>
              <Box mb={5}>
                <Typography>
                  Для вашего удобства, точный расчет стоимости, заключение
                  договора и оплата могут быть осуществлены на объекте в день
                  проведения замера.
                </Typography>
              </Box>
            </>
          )}
          <Box className={classes.displayInPrint}>
            <Payments paymentList={payments} classes={classes} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
