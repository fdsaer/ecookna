/**
 * Пример стилей по умолчанию
 */

export default function styles(theme){
  return {
    root: {
      fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
      marginLeft: theme.spacing(),
      marginRight: theme.spacing(),
    },
    head: {
      fontSize: 'small'
    },
    footer: {
      fontSize: 'x-small'
    },
    flex: {
      display: 'flex',
    },
    full: {
      flex: 1,
    }
  };
}
