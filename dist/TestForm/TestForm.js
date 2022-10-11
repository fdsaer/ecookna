

import PrnProto from '../PrnProto.js';

const {
  React
} = $p.ui;
const StyledFrame = React.lazy(() => import('../StyledFrame/index.js'));
class TestForm extends PrnProto {
  componentDidMount() {
    const {
      attr,
      obj,
      print
    } = this.props;
    console.log(obj);
    obj
    .load_linked_refs().then(async () => {
      this.setState({
        loaded: true
      });
      const products = obj.production;
      this.setState({
        products
      });
    }).catch(err => {
      this.setState({
        err: err.message
      });
    });
    this.setState({
      loaded: true
    });
  }
  render() {
    const {
      props: {
        obj,
        attr
      },
      state: {
        loaded,
        products
      },
      classes
    } = this;
    const managerContacts = {
      phone_number: '',
      email_address: '',
      address: ''
    };
    const officeContacts = {
      phone_number: '',
      email_address: '',
      address: ''
    };
    const fullSquare = products && products.map(product => product.s * product.quantity).reduce((acc, productSquare) => acc += productSquare, 0).round(2);
    const getProductWeight = product => product.characteristic.constructions.map(construction => product.characteristic.elm_weight(-1 * construction.cnstr)).reduce((acc, constructionWeight) => acc += constructionWeight, 0);
    const fullWeight = products && products.map(product => getProductWeight(product) * product.quantity).reduce((acc, productWeight) => acc += productWeight, 0).round();
    obj.manager.contact_information.forEach(row => {
      switch (row.type.name) {
        case 'Адрес':
          if (row.presentation && !managerContacts.address) {
            managerContacts.address = row.presentation;
          }
          break;
        case 'Телефон':
          if (row.presentation && !managerContacts.phone_number) {
            managerContacts.phone_number = row.presentation;
          }
          break;
        case 'АдресЭлектроннойПочты':
          if (row.presentation && !managerContacts.email_address) {
            managerContacts.email_address = row.presentation;
          }
          break;
        default:
      }
    });
    obj.organization.contact_information.forEach(row => {
      switch (row.type.name) {
        case 'Адрес':
          if (row.presentation && !officeContacts.address) {
            officeContacts.address = row.presentation;
          }
          break;
        case 'Телефон':
          if (row.presentation && !officeContacts.phone_number) {
            officeContacts.phone_number = row.presentation;
          }
          break;
        case 'АдресЭлектроннойПочты':
          if (row.presentation && !officeContacts.email_address) {
            officeContacts.email_address = row.presentation;
          }
          break;
        default:
      }
    });
    const title = `Заполнения заказа №${obj.number_doc} от ${moment(obj.date).format('DD MMMM YYYY')} г.`;
    let loading = '';
    return React.createElement(React.Suspense, {
      fallback: "Загрузка..."
    }, React.createElement(StyledFrame, {
      obj: obj,
      attr: attr,
      classes: classes,
      setClasses: this.setClasses,
      title: title,
      loading: loading
    }));
  }
}

TestForm.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a49';
TestForm.destination = 'doc.calc_order';
TestForm.title = 'Тестовая форма (jsx)';
export default TestForm;