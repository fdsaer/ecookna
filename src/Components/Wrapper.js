const { React, Box } = $p.ui;

export default function Wrapper(props) {
  let { children } = props;

  return (
    <>
      <Box
        mx="auto"
        maxWidth="794px"
        boxSizing="border-box"
        px={3.75}
        pt={2}
        pb={2}
      >
        {children}
      </Box>
    </>
  );
}
