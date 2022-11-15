const { React, Box, Typography } = $p.ui;

export default function Achievements({ classes, achievements }) {
  return (
    <Box
      py={2.5}
      mt={2.5}
      px={5}
      display="flex"
      textAlign="center"
      className={classes.wrapperPage}
    >
      {achievements &&
        achievements.map(({ id, image, title, text }) => (
          <Box key={id} className={classes.achievementMargins}>
            <Box fontSize={10} maxWidth="794px">
              <Box mb={0.6} display="flex" justifyContent="center">
                <img
                  src={image}
                  style={{
                    display: 'block',
                    width: '50px',
                    height: 'auto',
                    boxSizing: 'border-box',
                  }}
                />
              </Box>
              <Box fontWeight={600}>
                <Typography variant="inherit" color="textPrimary" component="p">
                  {title}
                </Typography>
              </Box>
              <Typography variant="inherit" color="textPrimary" component="p">
                {text}
              </Typography>
            </Box>
          </Box>
        ))}
    </Box>
  );
}
