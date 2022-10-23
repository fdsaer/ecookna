const {
  React,
  makeStyles
} = $p.ui;
import TitleOffer61 from './TitleOffer61.js';
export default function Title(props) {
  let Component;

  switch (props.obj.organization.name) {
    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
    case 'ОКНА РОСТА ДОМ':
      Component = HeaderOrg1;
      break;

    case 'ГРУППА КОМПАНИЙ':
    case 'ОК Калева':
      Component = TitleOffer61;
      break;

    default:
      Component = TitleOffer61;
  }

  return React.createElement(Component, props);
}