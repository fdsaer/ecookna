/**
 * Маршрутизатор для последней страницы с промо-рекламой
 */

const { React, makeStyles } = $p.ui;
import HeaderOffer59 from './HeaderOffer59.js';
import HeaderOffer61 from './PromoOffer61.js';

export default function PromoPage(props) {
  let Component;
  // switch (props.obj.organization.name) {
  switch (props.obj.manager.name) {
    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
    case 'ОКНА РОСТА ДОМ':
      Component = HeaderOffer59;
      break;
    // case 'ГРУППА КОМПАНИЙ':
    case 'ОК Калева':
      Component = HeaderOffer61;
      break;
    case 'Касаткина Антонина':
      Component = HeaderOffer59;
      break;

    case 'Гудилина ИА':
      Component = HeaderOffer61;
      break;
    default:
      Component = HeaderOffer59;
  }

  return <Component {...props} />;
}
