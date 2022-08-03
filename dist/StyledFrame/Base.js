const {
  React,
  makeStyles,
  ThemeProvider
} = $p.ui;
import { theme } from '../MuiThemes/index.js';
import stylesBase from './stylesOrg2.js';
import Loading from './Loading.js';
export default function StyledFrame({
  children,
  classes,
  setClasses,
  title,
  loading,
  ...props
}) {
  if (!classes) {
    classes = makeStyles(() => stylesBase(theme))();

    if (!loading) {
      loading = 'Загрузка...';
    }

    setClasses(classes);
  }

  return React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement("div", {
    className: classes.root
  }, loading ? React.createElement(Loading, {
    classes: classes,
    title: title,
    text: loading
  }) : React.Children.map(children, child => child ? React.cloneElement(child, { ...props,
    classes
  }) : null)));
}