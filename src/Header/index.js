/**
 * Маршрутизатор заголовков (верхних колонтитулов)
 */

const { React, makeStyles } = $p.ui;
import HeaderBase from './HeaderBase.js';
import HeaderOrg1 from './HeaderOrg1.js';
import HeaderOffer59 from './HeaderOffer59.js';
import HeaderOffer61 from './HeaderOffer61.js';

export default function Header(props) {
  let Component;
  switch (props.obj.organization.name) {
    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
    case 'ОКНА РОСТА ДОМ':
      Component = HeaderOffer59;
      break;
    // case 'ГРУППА КОМПАНИЙ':
    case 'ОК Калева':
      Component = HeaderOffer61;
      break;
    default:
      Component = HeaderOffer59;
  }

  return <Component {...props} />;
}
