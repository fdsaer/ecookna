// import Header from '../../Header/index.js';
// import Footer from '../../Footer/index.js';
const { React, Box } = $p.ui;

export default function PrintingPageTemplate({
  classes,
  advantages,
  payments,
  children,
  images,
  obj,
  Header,
  Footer,
}) {
  // const chunkNumber = productTableData.length;
  return (
    <Box
      className={`${classes.avoidBreakInside} ${classes.pageBreakBefore} ${classes.pageFrame}`}
    >
      <Box mt={3} className={classes.displayInPrint}>
        <Header withLogo images={images} obj={obj} classes={classes} />
      </Box>
      {children}
      <Box className={classes.displayInPrint}>
        <Footer paymentList={payments} classes={classes} obj={obj} />
      </Box>
    </Box>
  );
}
