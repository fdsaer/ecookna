const {
  React,
  Typography
} = $p.ui;
var _ref = React.createElement("div", null, "Лого слева");
export default function Header(props) {
  const {
    obj,
    classes
  } = props;
  return React.createElement("div", {
    className: `${classes.head} ${classes.flex}`
  }, _ref, React.createElement("div", {
    className: classes.full
  }), React.createElement(Typography, null, obj.toString()));
}