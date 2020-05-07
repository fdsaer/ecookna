
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import DataField from 'metadata-react/DataField';
import TabularSection from 'metadata-react/TabularSection';
import withAutoHeight from './AutoHeight';

function renderHead(_obj, classes) {
  return [
    <FormGroup row key="row0" className={classes.paddingBottom}>
      <DataField _obj={_obj} _fld="name"/>
      <DataField _obj={_obj} _fld="owner"/>
      <DataField _obj={_obj} _fld="note"/>
    </FormGroup>,
    <FormGroup row key="row1" className={classes.paddingBottom}>
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

function  renderGlasses(_obj, classes, schemas, autoHeight) {
  const minHeight = Math.floor(autoHeight / 2);
  return [
    <div key="ts_glasses" style={{height: minHeight}}>
      <TabularSection  _obj={_obj} _tabular="glasses" scheme={schemas.glasses} denyReorder/>
    </div>,
    <div key="ts_glass_spec" style={{height: minHeight}}>
      <TabularSection _obj={_obj} _tabular="glass_specification" scheme={schemas.glass_specification} denyReorder/>
    </div>
  ];
}

function Tabular({_obj, schemas, name, ...others}) {
  return <TabularSection key={`ts_${name}`} _obj={_obj} _tabular={name} scheme={schemas[name]} denyReorder {...others}/>;
}

function TabContent({tab, _obj, classes, schemas, autoHeight}) {
  switch (tab) {
  case 0:
    return renderHead(_obj, classes);
  case 1:
    return <Tabular _obj={_obj} schemas={schemas} name="params"/>;
  case 2:
    return <Tabular _obj={_obj} schemas={schemas} name="specification"/>;
  case 3:
    return <Tabular _obj={_obj} schemas={schemas} name="constructions"/>;
  case 4:
    return <Tabular _obj={_obj} schemas={schemas} name="coordinates"/>;
  case 5:
    return <Tabular _obj={_obj} schemas={schemas} name="cnn_elmnts"/>;
  case 6:
    return renderGlasses(_obj, classes, schemas, autoHeight);
  case 7:
    return <Tabular _obj={_obj} schemas={schemas} name="inserts"/>
  }
}

export default withAutoHeight(TabContent);
