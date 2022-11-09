const {
  React,
  Box,
  Typography
} = $p.ui;
export default function Achievements({
  classes,
  achievements
}) {
  return React.createElement(Box, {
    py: 2.5,
    mt: 2.5,
    px: 5,
    display: "flex",
    textAlign: "center",
    className: classes.wrapperPage
  }, achievements && achievements.map(({
    id,
    image,
    title,
    text
  }) => React.createElement(Box, {
    key: id,
    className: classes.achievementMargins
  }, React.createElement(Box, {
    fontSize: 10,
    maxWidth: "794px"
  }, React.createElement(Box, {
    mb: 0.6,
    display: "flex",
    justifyContent: "center"
  }, React.createElement("img", {
    src: image,
    style: {
      display: 'block',
      width: '50px',
      height: 'auto',
      boxSizing: 'border-box'
    }
  })), React.createElement(Box, {
    fontWeight: 600
  }, React.createElement(Typography, {
    variant: "inherit",
    color: "textPrimary",
    component: "p"
  }, title)), React.createElement(Typography, {
    variant: "inherit",
    color: "textPrimary",
    component: "p"
  }, text)))));
}