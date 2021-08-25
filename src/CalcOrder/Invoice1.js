/**
 * Пример печатной формы
 *
 * @module Invoice1
 *
 * Created by Evgeniy Malyarov on 19.04.2020.
 */

const {React, Typography} = $p.ui;

class Invoice1 extends React.Component {

  render() {
    const {attr, obj, print} = this.props;
    return <Typography>{obj.toString()}</Typography>;
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Invoice1.ref = '80ecfed0-8263-11ea-a364-7bbe5c31efe8';
Invoice1.destination = 'doc.calc_order';
Invoice1.title = 'JSX / Демо счет вирт. формула';

export default Invoice1;
