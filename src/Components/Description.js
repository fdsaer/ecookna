import FeaturesImage from '../img/featuresImage.jpg';
const { React, Box, Typography } = $p.ui;

export default function Description({ title }) {
  return (
    <Box>
      {title && (
        <Box color="textSecondary" fontSize={22}>
          <Typography variant="inherit" color="textSecondary" component="p">
            {title}
          </Typography>
        </Box>
      )}
      <Box mt={5.5}>
        <img src={FeaturesImage} style={{ width: '100%' }} />
      </Box>
    </Box>
  );
}
