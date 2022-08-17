/**
 * Маршрутизатор стилей верхнего уровня
 */

const { React, makeStyles, ThemeProvider } = $p.ui;
import { theme as theme1 } from './theme1.js';
import { theme as theme2 } from './theme2.js';
import stylesBase from './stylesBase.js';
import stylesOrg1 from './stylesOrg1.js';
import stylesOrg2 from './stylesOrg2.js';

export default function StyledFrame({ children, setClasses, ...props }) {
  let classes;
  let theme = theme1;
  console.log(props.obj.organization.name);
  switch (props.obj.organization.name) {
    case 'ЕВРООКНА':
    case 'ГРУППА КОМПАНИЙ':
    case 'ФЕНСТЕР ООО':
    case 'ОКНА РОСТА ДОМ':
    case 'Петров ВВ':
      classes = makeStyles(() => stylesOrg2(theme))();
      break;

    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
      classes = makeStyles(() => stylesOrg2(theme))();
      break;

    default:
      theme = theme2;
      classes = makeStyles(() => stylesBase(theme))();
  }
  setClasses(classes);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {React.Children.map(children, (child) => {
          return child
            ? React.cloneElement(child, {
                ...props,
                classes,
                style: { ...child.props.style },
              })
            : null;
        })}
      </div>
    </ThemeProvider>
  );
}
