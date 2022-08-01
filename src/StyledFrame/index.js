/**
 * Маршрутизатор стилей верхнего уровня
 */

const { React, makeStyles } = $p.ui;
import stylesBase from './stylesBase.js';
import stylesOrg1 from './stylesOrg1.js';
import stylesOrg2 from './stylesOrg2.js';

export default function StyledFrame({ children, ...props }) {
  let classes;
  switch (props.obj.organization.name) {
    case 'ЕВРООКНА':
    case 'ГРУППА КОМПАНИЙ':
    case 'ФЕНСТЕР ООО':
    case 'ОКНА РОСТА ДОМ':
      classes = makeStyles(stylesOrg1)();
      break;

    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
      classes = makeStyles(stylesOrg2)();
      break;

    default:
      // classes = makeStyles(stylesBase)();
      classes = makeStyles(stylesOrg2)();
  }

  return (
    <div className={classes.root}>
      {React.Children.map(children, (child) => {
        return child ? React.cloneElement(child, { ...props, classes }) : null;
      })}
    </div>
  );
}
