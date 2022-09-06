/**
 * Пример стилей для организации №1
 * Эта организация наследует базовые стили и кое-что изменяет
 */

import stylesBase from './stylesBase.js';

export default function styles(theme) {
  const base = stylesBase(theme);
  base.head.fontColor = 'blue';
  return base;
}

