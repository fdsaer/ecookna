
import React from 'react';
import TabularSection from 'metadata-react/TabularSection';
import BtnOrigin from './BtnOrigin';
import Dialog from 'metadata-react/App/Dialog';
import FrmObj from 'metadata-react/FrmObj';

class Spec extends React.Component {

  state = {open: false};

  handleClose = () => this.setState({open: false});

  handleOpen = () => {
    const {spec_ref, props: {_obj}} = this;
    if(spec_ref) {
      const {_tabular, selected} = spec_ref.state;
      if(selected && selected.hasOwnProperty('rowIdx')) {
        this.row = spec_ref.rowGetter(selected.rowIdx);
        this.fld = 'origin';
        if(typeof this.row.origin === 'number') {
          this.row = _obj.cnn_elmnts.get(this.row.origin - 1);
          this.fld = 'cnn';
        }
        if(this.row[this.fld]) {
          this.setState({open: true});
        }
      }
    }
  };

  render() {
    const {state: {open}, props: {_obj, schemas}, row, fld} = this;
    const origin = open && row[fld];
    return [
      <TabularSection
        key="ts_spec"
        _obj={_obj}
        _tabular="specification"
        scheme={schemas.specification}
        denyAddDel
        denyReorder
        ref={(el) => this.spec_ref = el}
        btns={<BtnOrigin handleOpen={this.handleOpen} />}
      />,
      open && <Dialog
        open
        noSpace
        title={origin.presentation || 'Ссылка оборвана'}
        onClose={this.handleClose}
        initFullScreen
      >
        <FrmObj
          _mgr={origin._manager}
          _acl="r"
          match={{params: {ref: origin.ref}}}
          handlers={{}}
        />
      </Dialog>
    ];
  }
}

export default Spec;
