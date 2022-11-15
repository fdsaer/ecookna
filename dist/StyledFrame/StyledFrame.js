const {
  React,
  makeStyles,
  ThemeProvider,
  CssBaseline
} = $p.ui;
import { theme as theme1 } from './themes/theme1.js';
import { theme as theme61 } from './themes/theme61.js';
import stylesOrg59 from './styles/stylesOrg59.js';
import stylesOrg61 from './styles/stylesOrg61.js';
import Loading from './Loading.js';
export const StyledFrame61 = props => StyledFrame(theme61, stylesOrg61, props);
export const StyledFrame59 = props => StyledFrame(theme1, stylesOrg59, props);

var _ref = React.createElement(CssBaseline, null);

export function StyledFrame(theme, stylesOrg, {
  children,
  setClasses,
  classes,
  title,
  loading,
  loadingText = 'Загрузка...',
  ...props
}) {
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