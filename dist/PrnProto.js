const {
  React
} = $p.ui;

const addPrintStyles = selector => {
  const css = `@page {margin: 0}`;
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.media = 'print';
  style.setAttribute(selector, '');
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
  document.title = 'Документ';
};

const removePrintStyles = selector => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const customPrintStyles = document.querySelectorAll(selector);
  customPrintStyles.forEach(styleTag => {
    head.removeChild(styleTag);
  });
};

function add_table_titles(msg) {
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
      total: 'Всего'
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
      phone_charger: 'Зарядку для смартфона встроенного в подоконник'
    }
  };
}

class PrnProto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.setClasses = classes => {
      addPrintStyles('data-custom-print');
      this.classes = classes;
      props.copyStyles && props.copyStyles();
    };

    this.componentWillMount = () => {
      add_table_titles($p.msg);
      document.title = 'Документ';
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