// модификаторы справочников

import CharacteristicsFrmObj from '../../components/CatCharacteristics/FrmObj';

export default function ({cat}) {
  cat.forEach((mgr) => {
    if(mgr.cachable === 'doc' && mgr.class_name !== 'cat.characteristics') {
      mgr._cachable = 'ram';
    }
  });

  cat.characteristics.FrmObj = CharacteristicsFrmObj;
}
