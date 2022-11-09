const { React, Box } = $p.ui;

export default function Wrapper({ children, classes, px }) {
  return (
    <>
      <Box
        mx="auto"
        maxWidth="794px"
        boxSizing="border-box"
        px={px}
        pb={2}
        className={classes.wrapper}
      >
        {children}
      </Box>
    </>
  );
}
