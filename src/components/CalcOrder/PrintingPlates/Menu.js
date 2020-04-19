/**
 * Кнопка + выпадающее меню со списком печатных форм
 * с учетом доступности форм в подразделениях
 *
 * @module Menu
 *
 * Created by Evgeniy Malyarov on 19.04.2020.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PrintIcon from '@material-ui/icons/Print';
import IconButton from '@material-ui/core/IconButton';
import items from './items';

class MenuPrint extends React.Component {
  state = {anchorEl: null};

  handleOpen = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {props: {handlePrint}, state: {anchorEl}}  = this;
    return [
      <IconButton key="btn" onClick={this.handleOpen}><PrintIcon/></IconButton>,
      <Menu key="menu"
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={this.handleClose}>
        {anchorEl && items().map((v, index) => <MenuItem key={`prn-${index}`} onClick={() => {
          handlePrint(v);
          this.handleClose();
        }}>{v.name}</MenuItem>)}
      </Menu>
    ]
  }
}

export default MenuPrint;
