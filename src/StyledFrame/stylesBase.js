/**
 * Пример стилей по умолчанию
 */

export default function styles(theme){
  return {
    root: {
      width: '100%',
      '& hr': {
        marginTop: '4mm',
      },
      '& h3': {
        fontSize: '1.7rem',
        paddingBottom: '4mm',
      },
      '& h4': {
        fontSize: '0.9rem',
        paddingBottom: '4mm',
      },
    },
    head: {
      fontSize: 'small',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      fontSize: '0.6rem',
    },
    flex: {
      display: 'flex',
    },
    tableCell: {
      border: '1px solid rgba(224, 224, 224, 1)',
      padding: 4,
    },
    table: {
      borderCollapse: 'collapse',
      fontSize: '0.8rem',
    },
    alignRight: {
      textAlign: 'right',
    },
    full: {
      flex: 1,
    },
    w100: {
      width: '100%'
    }
  };
}
