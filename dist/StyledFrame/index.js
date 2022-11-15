const {
  React,
  makeStyles,
  ThemeProvider,
  CssBaseline
} = $p.ui;
import { theme as theme1 } from './theme1.js';
import { theme as theme2 } from './theme2.js';
import { theme as theme61 } from './theme61.js';
import stylesBase from './stylesBase.js';
import stylesOrg1 from './stylesOrg1.js';
import stylesOrg59 from './stylesOrg59.js';
import stylesOrg61 from './stylesOrg61.js';
import stylesCss from './stylesCss.js';
import Loading from './Loading.js';

var _ref = React.createElement(CssBaseline, null);

export default function StyledFrame({
  children,
  setClasses,
  classes,
  title,
  loading,
  loadingText = 'Загрузка...',
  ...props
}) {
  let tempClasses;
  let theme = theme1;
  const [newClasses, setNewClasses] = React.useState('');

  switch (props.obj.manager.name) {
    case 'ЕВРООКНА':
    case 'ГРУППА КОМПАНИЙ':
    case 'ФЕНСТЕР ООО':
    case 'ОКНА РОСТА ДОМ':
      tempClasses = makeStyles(() => stylesOrg59(theme))();
      break;

    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
      tempClasses = makeStyles(() => stylesOrg59(theme))();
      break;

    case 'ОК Калева':
      theme = theme61;
      tempClasses = makeStyles(() => stylesOrg61(theme))();
      break;

    case 'Петров ВВ':
      theme = theme2;
      tempClasses = makeStyles(() => stylesCss(theme))();
      break;

    case 'Касаткина Антонина':
      theme = theme1;
      tempClasses = makeStyles(() => stylesOrg59(theme))();
      break;

    case 'Гудилина ИА':
      theme = theme61;
      tempClasses = makeStyles(() => stylesOrg61(theme))();
      break;

    default:
      tempClasses = makeStyles(() => stylesOrg59(theme))();
  }

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