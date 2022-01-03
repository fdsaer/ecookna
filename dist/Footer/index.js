const {
  React,
  Divider,
  Typography
} = $p.ui;

var _ref = React.createElement(Divider, {
  light: true
});

export default function Footer(props) {
  const {
    obj,
    classes
  } = props;
  return React.createElement(React.Fragment, null, _ref, React.createElement("div", {
    className: `${classes.footer} ${classes.flex}`
  }, React.createElement(Typography, null, `Распечатано ${moment().format('DD MMMM YYYY, hh:mm')}`)));
}