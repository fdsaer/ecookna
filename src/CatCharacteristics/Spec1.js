/**
 * Пример печатной формы
 *
 * @module Invoice1
 *
 * Created by Evgeniy Malyarov on 19.04.2020.
 */

import React from 'react';

class Spec1 extends React.Component {
  render() {
    const {attr, obj, print} = this.props;
    return <div>{obj.toString()}</div>;
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Spec1.ref = 'b7bb50e0-ed5d-11eb-bea7-3f8021c1bb8d';
Spec1.destination = 'cat.characteristics';
Spec1.title = 'JSX/Демо спецификация';

export default Spec1;
