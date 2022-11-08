const { React, Box, Typography } = $p.ui;

export default function FooterOffer61({ paymentList, classes }) {
  return (
    <Box display="flex" className={`${classes.localFooter}`}>
      <Box
        fontSize={10}
        display="flex"
        alignItems="center"
        sx={{
          flex: '0 0 22%',
          textTransform: 'uppercase',
          backgroundColor: '#303942',
          padding: '15px 5px',
        }}
      >
        <Typography color="textSecondary" variant="inherit" component="p">
          Оплата любым удобным вам способом
        </Typography>
      </Box>
      {paymentList &&
        paymentList.length > 0 &&
        paymentList.map(({ image, text, id }) => {
          return (
            <Box
              key={id}
              fontSize={10}
              display="flex"
              alignItems="center"
              sx={{
                backgroundColor: '#E30613',
                flex: '1 1 0%',
                padding: '15px 5px',
              }}
            >
              <img
                src={image}
                style={{
                  display: 'block',
                  width: '20px',
                  minHeight: '20px',
                  boxSizing: 'border-box',
                }}
              />
              <Box ml={0.5} sx={{ textTransform: 'uppercase' }}>
                <Typography
                  color="textSecondary"
                  variant="inherit"
                  component="p"
                >
                  {text}
                </Typography>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
}
