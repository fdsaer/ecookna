/**
 * Прототип печатных форм
 */

const { React } = $p.ui;

const addPrintStyles = (selector) => {
  // const css = `@page {margin: 0; margin-top: 10mm; margin-bottom: 10mm} @page :first {margin: 0}`;
  const css = `@page {margin: 0}`;
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.media = 'print';
  style.setAttribute(selector, '');
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
};

const removePrintStyles = (selector) => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const customPrintStyles = document.querySelectorAll(selector);
  customPrintStyles.forEach((styleTag) => {
    head.removeChild(styleTag);
  });
};

function add_table_titles(msg) {
  // публичные методы, экспортируемые, как свойства $p.msg
  msg.printing_form = {
    table_columns: {
      label: 'Название',
      color: 'Цвет',
      quantity: 'Количество (шт.)',
      weight: 'Общий вес (кг)',
      square: 'Общая площадь (м2)',
      price: 'Цена без скидки (руб.)',
      discount: 'Скидка (%)',
      final_price: 'Цена со скидкой (руб.)',
      total: 'Всего',
    },
    table_titles: {
      products: 'Изделия',
      extra_items: 'Дополнительная комплектация',
      services: 'Услуги',
    },
    additions_labels: {
      garage_gate: 'Гаражные ворота',
      balcony_decoration: 'Отделка балконов',
      curtains: 'Жалюзи или рольшторы',
      heating_radiator: 'Декоративные экраны на батареи',
      evolving_opacity: 'Окна с изменяющейся прозрачностью',
      orangery: 'Зимний сад или остекленные веранды',
      glass_door: 'Цельностеклянные межкомнатные двери',
      glass_heater: 'Обогреватели и полотенцесушители из стекла',
      phone_charger: 'Зарядку для смартфона встроенного в подоконник',
    },
  };
}
class PrnProto extends React.Component {
  constructor(props) {
    super(props);
    // props.skipCss && props.skipCss();
    this.state = {
      loaded: false,
      componentsLoaded: false,
      imagesLoaded: false,
    };
    this.setClasses = (classes) => {
      addPrintStyles('data-custom-print');
      this.classes = classes;
      props.copyStyles && props.copyStyles();
    };
    this.componentWillMount = () => {
      add_table_titles($p.msg);
    };
    this.componentWillUnmount = () => {
      removePrintStyles('[data-custom-print]');
    };
  }

  render() {
    return 'PrnProto';
  }
}

export default PrnProto;
