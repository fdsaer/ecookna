const {
  React,
  Box,
  Typography,
  withStyles
} = $p.ui;
import { Dot } from '../elements/Icons/index.js';
const StyledBox = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& div:first-child': {
      boxSizing: 'border-box',
      border: `3px solid ${theme.palette.text.secondary}`,
      marginRight: theme.spacing(2)
    },
    '&:nth-of-type(even)': {
      justifyContent: 'flex-end',
      marginTop: theme.spacing(-9)
    },
    '&:nth-of-type(odd):not(:first-child)': {
      marginTop: theme.spacing(1)
    },
    '&:nth-of-type(even) > div:first-child': {
      order: 1,
      marginRight: 0,
      marginLeft: theme.spacing(2)
    }
  }
}))(Box);

var _ref = React.createElement(Dot, {
  fontSize: "small"
});

export default function Additions({
  additions,
  title
}) {
  return additions && additions.length > 0 && React.createElement(Box, null, title && React.createElement(Box, {
    mb: 5.5,
    color: "textSecondary",
    fontSize: 22
  }, React.createElement(Typography, {
    variant: "inherit",
    color: "textSecondary",
    component: "p"
  }, title)), additions && additions.length > 0 && React.createElement(Box, null, additions.map(({
    image,
    id,
    text
  }) => {
    return React.createElement(StyledBox, null, React.createElement(Box, {
      key: id,
      sx: {
        width: '112px',
        height: '112px',
        borderRadius: '50%',
        background: `url(${image}) center center`
      }
    }), React.createElement(Box, {
      display: "flex",
      justifyContent: "flex-start",
      fontSize: 19,
      sx: {
        flex: '0 0 auto'
      }
    }, _ref, React.createElement(Typography, {
      color: "textSecondary",
      variant: "inherit",
      component: "p"
    }, text)));
  })));
}