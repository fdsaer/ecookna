/**
 * Маршрутизатор заголовков
 */

const { React, makeStyles } = $p.ui;
import TitleOffer59 from './TitleOffer59.js';
import TitleOffer61 from './TitleOffer61.js';

export default function Title(props) {
  let Component;

  // switch (props.obj.organization.name) {
  switch (props.obj.manager.name) {
    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
    case 'ОКНА РОСТА ДОМ':
      Component = TitleOffer59;
      break;
    case 'ОК Калева':
      Component = TitleOffer61;
      break;
    case 'Касаткина Антонина':
      Component = TitleOffer59;
      break;

    case 'Гудилина ИА':
      Component = TitleOffer61;
      break;
    default:
      Component = TitleOffer59;
  }

  return <Component {...props} />;
}
