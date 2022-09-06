const { React, Box, Typography, withStyles } = $p.ui;
import { Dot } from '../elements/Icons/index.js';

const StyledBox = withStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& div:first-child': {
      boxSizing: 'border-box',
      border: `3px solid ${theme.palette.text.secondary}`,
      marginRight: theme.spacing(2),
    },
    '&:nth-of-type(even)': {
      justifyContent: 'flex-end',
      marginTop: theme.spacing(-9),
    },
    '&:nth-of-type(odd):not(:first-child)': {
      marginTop: theme.spacing(1),
    },
    '&:nth-of-type(even) > div:first-child': {
      order: 1,
      marginRight: 0,
      marginLeft: theme.spacing(2),
    },
  },
}))(Box);

export default function Additions({ additions, title }) {
  return (
    additions &&
    additions.length > 0 && (
      <Box>
        {title && (
          <Box mb={5.5} color="textSecondary" fontSize={22}>
            <Typography variant="inherit" color="textSecondary" component="p">
              {title}
            </Typography>
          </Box>
        )}
        {additions && additions.length > 0 && (
          <Box>
            {additions.map(({ image, id, text }) => {
              return (
                <StyledBox>
                  <Box
                    key={id}
                    sx={{
                      width: '112px',
                      height: '112px',
                      borderRadius: '50%',
                      background: `url(${image}) center center`,
                    }}
                  />
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    fontSize={19}
                    sx={{ flex: '0 0 auto' }}
                  >
                    <Dot fontSize="small" />
                    <Typography
                      color="textSecondary"
                      variant="inherit"
                      component="p"
                    >
                      {text}
                    </Typography>
                  </Box>
                </StyledBox>
              );
            })}
          </Box>
        )}
      </Box>
    )
  );
}
