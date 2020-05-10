import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FindIcon from '@material-ui/icons/FindInPage';
import Tip from '../Builder/Tip';

export default function BtnOrigin(props) {
  return <Tip title="Показать элемент технологического справочника">
    <Button
      variant="contained"
      //color="primary"
      startIcon={<FindIcon />}
      onClick={props.handleOpen}
    >
      Происхождение
    </Button>
  </Tip>;
}

BtnOrigin.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};
