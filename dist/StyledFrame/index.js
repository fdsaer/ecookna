const {
  React,
  makeStyles,
  ThemeProvider
} = $p.ui;
import { theme as theme1 } from './theme1.js';
import { theme as theme2 } from './theme2.js';
import stylesBase from './stylesBase.js';
import stylesOrg1 from './stylesOrg1.js';
import stylesOrg2 from './stylesOrg2.js';
import stylesCss from './stylesCss.js';
export default function StyledFrame({
  children,
  setClasses,
  ...props
}) {
  let classes;
  let theme = theme1;
  console.log(props.obj.manager.name);

  switch (props.obj.manager.name) {
    case 'ЕВРООКНА':
    case 'ГРУППА КОМПАНИЙ':
    case 'ФЕНСТЕР ООО':
    case 'ОКНА РОСТА ДОМ':
      classes = makeStyles(() => stylesOrg2(theme))();
      break;

    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
      classes = makeStyles(() => stylesOrg2(theme))();
      break;

    case 'Петров ВВ':
      theme = theme2;
      classes = makeStyles(() => stylesCss(theme))();
      break;

    default:
      classes = makeStyles(() => stylesOrg2(theme))();
  }

  setClasses(classes);
  return React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement("div", {
    className: classes.root
  }, React.Children.map(children, child => {
    return child ? React.cloneElement(child, { ...props,
      classes,
      style: { ...child.props.style
      }
    }) : null;
  })));
}