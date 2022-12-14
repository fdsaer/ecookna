const {
  React,
  Typography
} = $p.ui;
export default function HeaderGlasses(props) {
  const {
    title,
    classes
  } = props;
  return React.createElement("div", {
    className: `${classes.head}`
  }, React.createElement(Typography, {
    variant: "h3"
  }, title));
}