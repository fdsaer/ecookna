import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import CloseBtn from '../CloseBtn';
import Tip from '../Tip';
import SelectTool from './SelectTool';
import Save from './Save';


export default function BuilderToolbar({editor, handleClose, openTemplate, open_ox, classes}) {

  return <Toolbar disableGutters variant="dense">
    <Save editor={editor} handleClose={handleClose}/>
    <Tip title="Загрузить из типового блока">
      <IconButton onClick={openTemplate}><i className="tb_stamp" /></IconButton>
    </Tip>
    <Tip title="Вписать в окно">
      <IconButton onClick={() => editor.project.zoom_fit && editor.project.zoom_fit()}><i className="tb_cursor-zoom" /></IconButton>
    </Tip>
    <SelectTool editor={editor} />
    <Divider orientation="vertical" flexItem />
    <Tip title="Шаг назад">
      <IconButton disabled onClick={() => null}><i className="fa fa-undo" /></IconButton>
    </Tip>
    <Tip title="Шаг вперёд">
      <IconButton disabled onClick={() => null}><i className="fa fa-repeat" /></IconButton>
    </Tip>
    <Divider orientation="vertical" flexItem />
    <Tip title="Открыть спецификацию изделия">
      <IconButton onClick={open_ox}><i className="fa fa-table fa-fw" /></IconButton>
    </Tip>

    <div className={classes.title} />
    {handleClose && <CloseBtn handleClose={handleClose}/>}
  </Toolbar>;
}

BuilderToolbar.propTypes = {
  editor: PropTypes.object.isRequired,
  handleClose: PropTypes.func,
  openTemplate: PropTypes.func,
  open_ox: PropTypes.func,
  classes: PropTypes.object.isRequired,
};