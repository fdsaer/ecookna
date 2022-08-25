const {
  React,
  Typography
} = $p.ui;

var _ref = React.createElement("div", null, "Лого справа");

export default function Header(props) {
  const {
    obj,
    classes
  } = props;
  return React.createElement("div", {
    className: `${classes.head} ${classes.flex}`
  }, React.createElement(Typography, null, obj.toString()), React.createElement("div", {
    className: classes.full
  }), _ref);
}