import Header from '../Header/HeaderOffer61.js';
import Achievements from '../Components//Achievements.js';
import GridImages from '../Components/GridImages.js';

const { React, Box, Typography, Grid } = $p.ui;

export default function PromoPage61(props) {
  const { obj, classes, additions, statistics, advantages, achievements } =
    props;

  return (
    <Box className={classes.pageBreakBefore}>
      {/* обертка с отступами по краям */}
      <Box
        mt={5}
        px={3.75}
        className={`${classes.pageBreakBefore} ${classes.wrapperPage}`}
      >
        {/* верхний колонтитул */}
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

        {/* 6 карточек рекомендаций*/}
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

        {/* 3 блока статистики  */}
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
                {text.split(' ').map((word) => (
                  <Typography
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

        {/* 6 блоков преимуществ  */}
        <Grid container spacing={3}>
          {advantages &&
            advantages.map(({ id, image, text }) => (
              <Grid item key={id} xs={4} spacing={2}>
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

      {/* Блоки без обертки */}
      <Box sx={{ backgroundColor: '#EDEDED' }}>
        {/* Подвал. 5 иконок достижений  */}
        {achievements && (
          <Achievements achievements={achievements} classes={classes} />
        )}
      </Box>
    </Box>
  );
}
