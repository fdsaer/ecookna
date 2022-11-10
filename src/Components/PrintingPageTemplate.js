import Advantages from './Advantages.js';
import Payments from './Payments.js';
import ProductsTable from './ProductsTable.js';  // TODO: удалить
const { React, Typography, Box } = $p.ui;

export default function PrintingPageTemplate({
  classes,
  advantages,
  payments,
  children,
}) {
  // const chunkNumber = productTableData.length; // TODO: удалить
  return (
    <Box
      className={`${classes.avoidBreakInside} ${classes.pageBreakBefore} ${classes.pageFrame}`}
    >
      <Box mt={3} className={classes.displayInPrint}>
        <Advantages withLogo advantagesList={advantages} />
      </Box>
      {children}
      <Box className={classes.displayInPrint}>
        <Payments paymentList={payments} classes={classes} />
      </Box>
    </Box>
  );
}
