import Header from '../Header/HeaderOffer61.js';
import Achievements from '../Components//Achievements.js';
import GridImages from '../Components/GridImages.js';
const {
  React,
  Box,
  Typography,
  Grid
} = $p.ui;

var _ref = React.createElement(Typography, {
  variant: "inherit",
  color: "error",
  component: "p"
}, "С этими окнами обычно покупают");

var _ref2 = React.createElement(Typography, {
  variant: "inherit",
  color: "error",
  component: "p"
}, "Окна роста это");

export default function PromoPage61(props) {
  const {
    obj,
    classes,
    additions,
    statistics,
    advantages,
    achievements
  } = props;
  return React.createElement(Box, null, React.createElement(Box, {
    mt: 5,
    px: 5,
    className: `${classes.wrapperPage}`
  }, React.createElement(Header, {
    withLogo: true,
    obj: obj,
    classes: classes
  }), React.createElement(Box, {
    mt: 2.5,
    mb: 2.5,
    fontWeight: 600,
    fontSize: 15,
    sx: {
      textTransform: 'uppercase'
    }
  }, _ref), React.createElement(Box, null, React.createElement(GridImages, {
    images: additions,
    classes: classes
  })), React.createElement(Box, {
    mt: 2.5,
    mb: 2.5,
    fontWeight: 600,
    fontSize: 15,
    sx: {
      textTransform: 'uppercase'
    }
  }, _ref2), React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    mb: 2.5,
    sx: {
      backgroundColor: '#E30613'
    }
  }, statistics && statistics.map(({
    id,
    title,
    text
  }) => React.createElement(Box, {
    fontSize: 16,
    my: 1.25,
    mx: 2.5,
    key: id,
    sx: {
      width: '100%'
    }
  }, React.createElement(Box, {
    fontWeight: 600,
    fontSize: 28
  }, React.createElement(Typography, {
    variant: "inherit",
    color: "textSecondary",
    component: "p"
  }, title)), text.split(' ').map((word, index) => React.createElement(Typography, {
    key: index,
    variant: "inherit",
    color: "textSecondary",
    component: "p"
  }, word))))), React.createElement(Grid, {
    container: true,
    spacing: 3
  }, advantages && advantages.map(({
    id,
    image,
    text
  }) => React.createElement(Grid, {
    item: true,
    key: id,
    xs: 4
  }, React.createElement(Box, {
    display: "flex"
  }, React.createElement("img", {
    src: image,
    style: {
      display: 'block',
      width: '30px',
      height: '100%',
      boxSizing: 'border-box'
    }
  }), text && React.createElement(Box, {
    fontSize: 13,
    ml: 1.25
  }, React.createElement(Typography, {
    variant: "inherit",
    color: "textPrimary",
    component: "span"
  }, text))))))), React.createElement(Box, {
    sx: {
      backgroundColor: '#EDEDED'
    }
  }, achievements && React.createElement(Achievements, {
    achievements: achievements,
    classes: classes
  })));
}