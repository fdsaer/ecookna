const {
  React,
  makeStyles
} = $p.ui;
import stylesBase from './stylesBase.js';
export default function StyledFrame({
  children,
  ...props
}) {
  const classes = makeStyles(stylesBase)();
  return React.createElement("div", {
    className: classes.root
  }, React.Children.map(children, child => {
    return React.cloneElement(child, { ...props,
      classes
    });
  }));
}