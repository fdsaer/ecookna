const {
  React,
  makeStyles,
  ThemeProvider,
  CssBaseline
} = $p.ui;
import { theme as theme1 } from './theme1.js';
import { theme as theme61 } from './theme61.js';
import stylesOrg59 from './stylesOrg59.js';
import stylesOrg61 from './stylesOrg61.js';
import Loading from './Loading.js';

var _ref = React.createElement(CssBaseline, null);

function StyledFrame({
  children,
  setClasses,
  classes,
  title,
  loading,
  loadingText = 'Загрузка...',
  ...props
}, theme, stylesOrg) {
  const [newClasses, setNewClasses] = React.useState('');
  const tempClasses = makeStyles(() => stylesOrg(theme))();
  setClasses(newClasses);
  React.useEffect(() => {
    setNewClasses(tempClasses);
  }, [classes]);
  return React.createElement(ThemeProvider, {
    theme: theme
  }, _ref, React.createElement("div", {
    className: classes?.root
  }, loading ? React.createElement(Loading, {
    classes: "",
    title: title,
    text: loadingText
  }) : React.Children.map(children, child => {
    return child ? React.cloneElement(child, { ...props,
      classes,
      style: { ...child.props.style
      }
    }) : null;
  })));
}

function getStyles61(props) {
  return StyledFrame(props, theme61, stylesOrg61);
}

function getStyles59(props) {
  return StyledFrame(props, theme1, stylesOrg59);
}

export { getStyles59, getStyles61 };