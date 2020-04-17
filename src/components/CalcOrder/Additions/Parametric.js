/**
 * ### Форма редактирования параметрических изделий
 *
 * Created by Evgeniy Malyarov on 22.07.2019.
 */

import React from 'react';
import Frame from './Frame';
import Additions from './AdditionsGroups';

export default function Parametric(props) {
  return <Frame Content={Additions} title="Параметрические изделия" {...props} />;
}
