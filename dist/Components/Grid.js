const {
  React,
  Box,
  Typography
} = $p.ui;
export default function Description({
  title
}) {
  return React.createElement(Box, null, title && React.createElement(Box, {
    color: "textSecondary",
    fontSize: 22
  }, React.createElement(Typography, {
    variant: "inherit",
    color: "textSecondary",
    component: "p"
  }, title)), React.createElement(Box, {
    mt: 5.5
  }, React.createElement("img", {
    src: FeaturesImage,
    style: {
      width: '100%'
    }
  })));
}