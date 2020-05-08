/**
 * Формирует div от текущей позиции до низа экрана
 *
 * @module AutoHeight
 *
 * Created by Evgeniy Malyarov on 07.05.2020.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {getDisplayName} from '@material-ui/utils';

const WithAutoHeight = (BaseComponent) => class extends React.Component {

  state = {el: null};

  divRef = (el) => {
    this.setState({el});
  };

  render() {
    // pass window dimensions as props to wrapped component
    const {props, state: {el}}  = this;
    let autoHeight = 0;
    if(el) {
      autoHeight = props.windowHeight - el.getBoundingClientRect().top - window.pageYOffset - 8;
    }
    if(autoHeight < 300) {
      autoHeight = 300;
    }

    return <div
      style={{height: autoHeight}}
      ref={this.divRef}
    >
      <BaseComponent
        {...props}
        autoHeight={autoHeight}
      />
    </div>;
  }

  static get displayName() {
    return `WithAutoHeight(${getDisplayName(BaseComponent)})`;
  }

};

WithAutoHeight.propTypes = {
  windowHeight: PropTypes.number.isRequired,
};

export default WithAutoHeight;
