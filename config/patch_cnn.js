
const keys21 = {
  google: '',
  yandex: '283f550e-8184-4c84-b0e3-bdc5c1dee693',
}

/**
 * предопределенные зоны
 */
export const predefined = {
  'localhost': {
    log_level: 'warn',
    //keys: {google: ''},
    //crazy_ram: false,
  },
  'rusokon.': {
    zone: 19,
    host: 'https://rusokon.oknosoft.ru/',
    keys: keys21,
  },
  'zakaz.kaleva.': {
    zone: 8,
    host: 'https://zakaz.kaleva.ru/',
    keys: keys21,
  },
  'zakaz.ecookna.': {
    zone: 21,
    host: 'https://zakaz.ecookna.ru/',
    keys: keys21,
  },
  'dvlp.ecookna.': {
    zone: 10,
    host: 'https://dvlp.ecookna.ru/',
    keys: keys21,
  },
}

/**
 * патч зоны по умолчанию
 */
export function patch_prm(settings) {
  return (prm) => {
    settings(prm);
    for (const elm in predefined) {
      if(location.host.match(elm)) {
        prm.zone = predefined[elm].zone;
        break;
      }
    }
    return prm;
  };
}

/**
 * патч параметров подключения
 */
export function patch_cnn() {

  const {job_prm, wsql} = $p;

  for (const elm in predefined) {
    const prm = predefined[elm];
    if(location.host.match(elm)) {
      if(prm.zone) {
        (!wsql.get_user_param('zone') || elm.includes('dvlp')) && wsql.set_user_param('zone', prm.zone);
      }
      'log_level,splash,templates,keys'.split(',').forEach((name) => {
        if(prm.hasOwnProperty(name)) {
          if(typeof job_prm[name] === 'object') {
            Object.assign(job_prm[name], prm[name]);
          }
          else {
            job_prm[name] = prm[name];
          }
        }
      });
    }
  }
}
