const {
  React,
  makeStyles
} = $p.ui;
import stylesBase from './stylesBase.js';
export default function StyledFrame({
  children,
  classes,
  setClasses,
  ...props
}) {
  if (!classes) {
    classes = makeStyles(stylesBase)();
    setClasses(classes);
  }

  return React.createElement("div", {
    className: classes.root
  }, React.Children.map(children, child => {
    return child ? React.cloneElement(child, { ...props,
      classes
    }) : null;
  }));
}