

const {
  React,
  Divider
} = $p.ui;
var _ref = React.createElement(Divider, {
  light: true
});
export default function Footer(props) {
  const {
    obj,
    classes
  } = props;
  return React.createElement("footer", {
    className: `${classes.footer} ${classes.w100}`
  }, _ref, React.createElement("div", {
    className: classes.flex
  }, React.createElement("span", null, `Распечатано ${moment().format('DD MMMM YYYY, hh:mm')}`)));
}