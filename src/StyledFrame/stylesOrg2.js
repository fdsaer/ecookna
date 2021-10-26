/**
 * Пример стилей для организации №2
 * Эта организация определяет свои стили полностью, не считаясь с базовыми
 */

export default function styles(theme) {
  return {
    root: {
      fontFamily: 'Georgia, "Gill Sans"',
      marginLeft: theme.spacing(2),
    },
    head: {
      fontSize: 'medium'
    },
    footer: {
      fontSize: 'x-large'
    },
  };
}
