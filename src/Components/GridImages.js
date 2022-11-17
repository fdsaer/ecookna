const { React, Box, Typography, Grid } = $p.ui;

export default function GridImages({ images, width = '218px', sRow = 3 }) {
  return (
    <Grid container spacing={sRow}>
      {images &&
        images.map(({ id, image, text }) => (
          <Grid item key={id} xs={4}>
            {image && (
              <Box width={width}>
                <img
                  src={image}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    boxSizing: 'border-box',
                  }}
                />
              </Box>
            )}
            {text && (
              <Box
                width={width}
                fontWeight={600}
                fontSize={16}
                sx={{
                  backgroundColor: '#303942',
                  padding: '10px 16px',
                  boxSizing: 'border-box',
                }}
              >
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  component="span"
                >
                  {text}
                </Typography>
              </Box>
            )}
          </Grid>
        ))}
    </Grid>
  );
}
