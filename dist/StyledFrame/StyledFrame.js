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

var _ref = React.createElement(CssBaseline, null);

export default function StyledFrame({
  children,
  setClasses,
  classes,
  title,
  loading,
  loadingText = 'Загрузка...',
  stylesKey,
  ...props
}) {
  let tempClasses;
  let theme = theme1;
  const [newClasses, setNewClasses] = React.useState(undefined);

  switch (stylesKey) {
    case 61:
      theme = theme61;
      tempClasses = makeStyles(() => stylesOrg61(theme))();
      break;

    default:
      tempClasses = makeStyles(() => stylesOrg59(theme))();
  }

  setClasses(tempClasses);
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