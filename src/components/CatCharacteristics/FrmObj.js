
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

import {withIface} from 'metadata-redux';
import DataField from 'metadata-react/DataField';
import TabularSection from 'metadata-react/TabularSection';
import DataObj from 'metadata-react/FrmObj/DataObj';
import withStyles600 from 'metadata-react/styles/paper600';

import Tip from '../Builder/Tip';
import AntTabs from '../Builder/AntTabs';

function Tabular({_obj, schemas, name, ...others}) {
  return <TabularSection _obj={_obj} _tabular={name} scheme={schemas[name]} denyReorder {...others}/>;
}

class CatCharacteristicsObj extends DataObj {

  constructor(props, context) {
    super(props, context);
    this.state.tab = 0;
    // схемы компоновки для табчастей
    this.schemas = {};
    $p.cat.scheme_settings.find_rows({obj: {in: Object.keys(this.state._meta.tabular_sections)}}, (scheme) => {
      if(scheme.name.endsWith('.main')) {
        this.schemas[scheme.obj.split('.')[2]] = scheme;
      }
    });
  }

  handleChangeTab = (event, tab) => {
    this.setState({tab});
  };

  renderTabularSections() {
    return null;
  }

  renderHead(_obj, classes) {
    return [
      <FormGroup row key="row0">
        <DataField _obj={_obj} _fld="name"/>
        <DataField _obj={_obj} _fld="owner"/>
        <DataField _obj={_obj} _fld="note"/>
      </FormGroup>,
      <FormGroup row key="row1">
        <DataField _obj={_obj} _fld="clr"/>
        <DataField _obj={_obj} _fld="x"/>
        <DataField _obj={_obj} _fld="y"/>
      </FormGroup>,
      <FormGroup row key="row2" className={classes.paddingBottom}>
        <DataField _obj={_obj} _fld="s"/>
        <DataField _obj={_obj} _fld="weight"/>
        <DataField _obj={_obj} _fld="z"/>
      </FormGroup>,
      <FormGroup row key="row3" className={classes.paddingBottom}>
        <DataField _obj={_obj} _fld="calc_order" read_only/>
        <DataField _obj={_obj} _fld="department" read_only/>
        <DataField _obj={_obj} _fld="obj_delivery_state" read_only/>
      </FormGroup>,
      <FormGroup row key="row4" className={classes.paddingBottom}>
        <DataField _obj={_obj} _fld="product" read_only/>
        <DataField _obj={_obj} _fld="leading_product" read_only/>
        <DataField _obj={_obj} _fld="origin" read_only/>
      </FormGroup>,
    ];
  }

  renderGlasses(_obj, classes) {
    return <div>
      <Tabular _obj={_obj} schemas={this.schemas} name="glasses"/>
      <Tabular _obj={_obj} schemas={this.schemas} name="glass_specification"/>
    </div>
  }

  renderFields() {
    const {state: {_obj, tab}, props: {handlers, classes, height}}  = this;
    let h1 = height < 420 ? 420 : height;
    h1 -= 146;

    return <div style={{paddingBottom: 32}}>
      <AntTabs
        value={tab}
        onChange={this.handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
      >
        <Tab label="Реквизиты"/>
        <Tab label="Параметры"/>
        <Tab label="Спецификация"/>
        <Tab label="Конструкции"/>
        <Tab label="Координаты"/>
        <Tab label="Соединения"/>
        <Tab label="Заполнения"/>
        <Tab label="Вставки"/>
      </AntTabs>
      {tab === 0 && this.renderHead(_obj, classes)}
      {tab === 1 && <Tabular _obj={_obj} schemas={this.schemas} name="params"/>}
      {tab === 2 && <Tabular _obj={_obj} schemas={this.schemas} name="specification"/>}
      {tab === 3 && <Tabular _obj={_obj} schemas={this.schemas} name="constructions"/>}
      {tab === 4 && <Tabular _obj={_obj} schemas={this.schemas} name="coordinates"/>}
      {tab === 5 && <Tabular _obj={_obj} schemas={this.schemas} name="cnn_elmnts"/>}
      {tab === 6 && this.renderGlasses(_obj, classes)}
      {tab === 7 && <Tabular _obj={_obj} schemas={this.schemas} name="inserts"/>}
    </div>;
  }
}

export default withStyles600(withIface(CatCharacteristicsObj));
