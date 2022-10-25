/**
 * Маршрутизатор верхнего колонтитула
 */

const { React } = $p.ui;
import Advantages from './Advantages.js';
import HeaderInsert61 from './HeaderInsert61.js';

export default function Header(props) {
  let Component;
  switch (props.obj.organization.name) {
    case 'Компания ФОТОТЕХ':
    case 'ООО"ФОТОТЕХ"':
    case 'ОКНА РОСТА ДОМ':
      Component = Advantages;
      break;
    case 'ГРУППА КОМПАНИЙ':
    case 'ОК Калева':
      Component = HeaderInsert61;
      break;
    default:
      Component = HeaderInsert61;
  }

  return <Component {...props} />;
}
