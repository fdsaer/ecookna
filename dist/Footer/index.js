const {
  React,
  makeStyles
} = $p.ui;
import FooterOffer59 from './FooterOffer59.js';
import FooterOffer61 from './FooterOffer61.js';
export default function Footer(props) {
  let Component;

  switch (props.obj.manager.name) {
    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
    case 'ОКНА РОСТА ДОМ':
      Component = FooterOffer59;
      break;

    case 'ОК Калева':
      Component = FooterOffer61;
      break;

    case 'Касаткина Антонина':
      Component = FooterOffer59;
      break;

    case 'Гудилина ИА':
      Component = FooterOffer61;
      break;

    default:
      Component = FooterOffer59;
  }

  return React.createElement(Component, props);
}