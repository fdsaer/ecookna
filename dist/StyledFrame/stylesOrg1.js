import stylesBase from './stylesBase.js';
export default function styles(theme) {
  const base = stylesBase(theme);
  base.head.fontColor = 'blue';
  return base;
}