import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuPrint from '../PrintingPlates/Menu';

import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PrintIcon from '@material-ui/icons/Print';
import AttachIcon from '@material-ui/icons/AttachFile';

import withStyles from 'metadata-react/Header/toolbar';
import classnames from 'classnames';

class DataObjToolbar extends Component {

  static propTypes = {

    handleSave: PropTypes.func.isRequired,        // обработчик добавления объекта
    handlePost: PropTypes.func,                   // обработчик проведения
    handleMarkDeleted: PropTypes.func.isRequired, // обработчик пометки удаления
    handlePrint: PropTypes.func,                  // обработчик открытия диалога печати
    handleAttachments: PropTypes.func,            // обработчик открытия диалога присоединенных файлов
    handleClose: PropTypes.func,                  // команда Закрыть форму

    postable: PropTypes.bool,                     // объект можно провести-распровести
    posted: PropTypes.bool,                       // объект проведён
    deletable: PropTypes.bool,                    // объект можно пометить на удаление или снять пометку
    deleted: PropTypes.bool,                      // объект помечен на удаление

  };

  state = {
    anchorEl: undefined,
    open: false,
  };

  handleClick = event => {
    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    const {props} = this;
    const showMenu = props.showMenu || props.handleAttachments || props.handlePrint;
    return (

      <Toolbar disableGutters className={props.classes.toolbar}>
        {props.handleSaveClose && !props.read_only && <Button
          title="Записать и закрыть"
          size="small"
          variant="outlined"
          className={props.classes.spaceLeft}
          onClick={props.handleSaveClose}>Записать и закрыть</Button>}
        {!props.read_only && <IconButton title="Записать" onClick={props.handleSave}><SaveIcon/></IconButton>}
        {!props.read_only && props.postable &&
          <IconButton title={props.posted ? 'Отозвать' : 'Отправить'} onClick={() => props.handleSave(!props.posted)}><SendIcon/></IconButton>}

        {props.buttons}

        <Typography variant="h6" color="inherit" className={props.classes.flex}> </Typography>

        <MenuPrint
          handlePrint={(ref) => {
            return props.handlePrint(ref);
          }}
        />

        {showMenu && <IconButton onClick={this.handleClick} title="Дополнительно"><MoreVertIcon/></IconButton>}

        <Menu
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleRequestClose}
        >
          {props.handleAttachments && <MenuItem onClick={props.handleAttachments}><AttachIcon/> &nbsp;Вложения</MenuItem>}
          {props.menu_buttons}
        </Menu>

        {props.closeButton && <IconButton title="Закрыть форму" onClick={props.handleClose}><CloseIcon/></IconButton>}

      </Toolbar>
    );
  }
};

export default withStyles(DataObjToolbar);

