const { React, Box, Typography } = $p.ui;

export default function FooterOffer59({ paymentList, classes }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={`${classes.localFooter}`}
    >
      <Box fontSize={19} sx={{ flex: '0 0 225px' }}>
        <Typography color="textSecondary" variant="inherit" component="p">
          Оплата любым удобным для вас способом
        </Typography>
      </Box>
      {paymentList &&
        paymentList.length > 0 &&
        paymentList.map(({ image, id }) => {
          return (
            <Box key={id} sx={{ height: '76px' }}>
              <img
                src={image}
                style={{
                  display: 'block',
                  width: '100%',
                  minHeight: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
          );
        })}
    </Box>
  );
}
