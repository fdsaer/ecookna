const {
  React,
  makeStyles
} = $p.ui;
import HeaderBase from './HeaderBase.js';
import HeaderOrg1 from './HeaderOrg1.js';
import HeaderOffer from './HeaderOffer.js';
export default function Header(props) {
  let Component;

  switch (props.obj.organization.name) {
    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
    case 'ОКНА РОСТА ДОМ':
      Component = HeaderOrg1;
      break;

    case 'ГРУППА КОМПАНИЙ':
      Component = HeaderOffer;
      break;

    default:
      Component = HeaderBase;
  }

  return React.createElement(Component, props);
}