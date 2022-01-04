export default function styles(theme) {
  return {
    root: {
      fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
      marginLeft: '24mm',
      marginRight: '12mm',
      width: '297mm',
      '& hr': {
        marginTop: '4mm'
      },
      '& h3': {
        fontSize: '2rem',
        paddingBottom: '4mm'
      },
      '& h4': {
        fontSize: '1rem',
        paddingBottom: '4mm'
      }
    },
    head: {
      fontSize: 'small'
    },
    footer: {
      fontSize: 'small'
    },
    flex: {
      display: 'flex'
    },
    full: {
      flex: 1
    },
    w100: {
      width: '100%'
    }
  };
}