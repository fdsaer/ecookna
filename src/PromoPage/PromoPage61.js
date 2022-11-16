import Header from '../Header/HeaderOffer61.js';
import Achievements from '../Components//Achievements.js';
import GridImages from '../Components/GridImages.js';

const { React, Box, Typography, Grid } = $p.ui;

export default function PromoPage61(props) {
  const { obj, classes, additions, statistics, advantages, achievements } =
    props;

  return (
    <Box>
      <Box mt={5} px={5} className={`${classes.wrapperPage}`}>
        <Header withLogo obj={obj} classes={classes} />

        <Box
          mt={2.5}
          mb={2.5}
          fontWeight={600}
          fontSize={15}
          sx={{ textTransform: 'uppercase' }}
        >
          <Typography variant="inherit" color="error" component="p">
            С этими окнами обычно покупают
          </Typography>
        </Box>

        <Box>
          <GridImages images={additions} classes={classes} />
        </Box>

        <Box
          mt={2.5}
          mb={2.5}
          fontWeight={600}
          fontSize={15}
          sx={{ textTransform: 'uppercase' }}
        >
          <Typography variant="inherit" color="error" component="p">
            Окна роста это
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2.5}
          sx={{ backgroundColor: '#E30613' }}
        >
          {statistics &&
            statistics.map(({ id, title, text }) => (
              <Box
                fontSize={16}
                my={1.25}
                mx={2.5}
                key={id}
                sx={{ width: '100%' }}
              >
                <Box fontWeight={600} fontSize={28}>
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    component="p"
                  >
                    {title}
                  </Typography>
                </Box>
                {text.split(' ').map((word, index) => (
                  <Typography
                    key={index}
                    variant="inherit"
                    color="textSecondary"
                    component="p"
                  >
                    {word}
                  </Typography>
                ))}
              </Box>
            ))}
        </Box>

        <Grid container spacing={3}>
          {advantages &&
            advantages.map(({ id, image, text }) => (
              <Grid item key={id} xs={4}>
                <Box display="flex">
                  <img
                    src={image}
                    style={{
                      display: 'block',
                      width: '30px',
                      height: '100%',
                      boxSizing: 'border-box',
                    }}
                  />
                  {text && (
                    <Box fontSize={13} ml={1.25}>
                      <Typography
                        variant="inherit"
                        color="textPrimary"
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
      </Box>

      <Box sx={{ backgroundColor: '#EDEDED' }}>
        {achievements && (
          <Achievements achievements={achievements} classes={classes} />
        )}
      </Box>
    </Box>
  );
}
