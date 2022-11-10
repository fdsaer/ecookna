const { React, Box, Typography, Grid } = $p.ui;

export default function GridImages({
  images,
  widthImage = '100%',
  width = '218px',
  flexDirection = 'column',
  sRow = 3,
  sCol = 2,
}) {
  return (
    <Grid container spacing={sRow}>
      {images &&
        images.map(({ id, image, text }) => (
          <Grid item key={id} xs={4} spacing={sCol}>
            <Box width={width} display="flex" flexDirection={flexDirection}>
              {image && (
                <img
                  src={image}
                  style={{
                    display: 'block',
                    width: widthImage,
                    height: 'auto',
                    boxSizing: 'border-box',
                  }}
                />
              )}
              {text && (
                <Box
                  fontWeight={600}
                  fontSize={16}
                  sx={{
                    backgroundColor: '#303942',
                    padding: '10px 16px',
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
            </Box>
          </Grid>
        ))}
    </Grid>
  );
}
