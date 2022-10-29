import Header from '../../Header/index.js';
import Advantages from './Advantages.js';
import Payments from './Payments.js';
import ProductsTable from './ProductsTable.js';
const { React, Typography, Box } = $p.ui;

export default function PrintingPageTemplate({
  classes,
  advantages,
  payments,
  children,
  images,
  obj,
}) {
  // const chunkNumber = productTableData.length;
  return (
    <Box
      className={`${classes.avoidBreakInside} ${classes.pageBreakBefore} ${classes.pageFrame}`}
    >
      <Box mt={3} className={classes.displayInPrint}>
        <Header withLogo images={images} obj={obj} />
      </Box>
      {children}
      <Box className={classes.displayInPrint}>
        <Payments paymentList={payments} classes={classes} />
      </Box>
    </Box>
  );
}
