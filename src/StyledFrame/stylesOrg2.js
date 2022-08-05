/**
 * Пример стилей для организации №2
 * Эта организация определяет свои стили полностью, не считаясь с базовыми
 */

export default function styles(theme) {
  console.log(theme);
  return {
    root: {
      lineHeight: 1.15,
      width: '100%',
      color: theme.palette.primary.main,
      '& hr': {
        boxSizing: 'content-box',
        height: 0,
        overflow: 'visible',
      },
      '& h1': {
        fontSize: '2em',
        margin: '0.67em 0',
      },
      '& h3': {
        fontSize: '1.7rem',
        paddingBottom: '4mm',
      },
      '& h4': {
        fontSize: '0.9rem',
        paddingBottom: '4mm',
      },
      '& pre': {
        fontFamily: 'monospace, monospace',
        fontSize: '1em',
      },
      '& a': {
        backgroundColor: 'transparent',
      },
      '& img, & video, & canvas': {
        maxWidth: '100%',
        height: 'auto',
        boxSizing: 'border-box',
      },
      '& table': {
        borderCollapse: 'collapse',
      },
      '& .o-cover': {
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '794px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '12px',
        backgroundColor: '#BFD7B5',
      },
      '& .o-cover__1': {
        display: 'block',
        margin: '0 auto',
      },
      '& .o-cover__2': {
        fontSize: '40px',
        color: '#1A322C',
      },
      '& .o-cover__3': {
        fontSize: '22px',
        lineHeight: 1.3,
      },
      '& .o-cover__4': {
        fontSize: '16px',
        color: '#007455',
      },
      '& .o-cover__5': {
        fontSize: '15px',
      },
      '& .o-cover__6, & .o-cover__8': {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        fontSize: '15px',
      },
      '& .o-cover__8': {
        backgroundColor: '#fff',
        padding: '8px',
        marginTop: '-12px',
      },
      '& .o-cover__9, & .o-cover__10, & .o-cover__13': {
        flex: '1 1 0%',
      },
      '& .o-cover__12': {
        marginTop: '5px',
      },
      '& .o-cover__13': {
        marginTop: '5px',
      },
      '& .o-cover__15': {
        backgroundColor: '#fff',
        padding: '8px',
        marginTop: '-12px',
      },
      '& .o-cover__16': {
        marginTop: '20px',
      },
      '& .o-cover__17': {
        width: '100px',
      },
      '& .o-cover__18': {
        marginTop: '0',
        marginLeft: '12px',
      },
      '& .o-details': {
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '794px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '15px',
        paddingBottom: '15px',
      },
      '& .o-details__1': {
        display: 'flex',
      },
      '& .o-details__2 img': {
        display: 'none',
      },
      '& .o-details__4:nth-of-type(1n+2)': {
        flex: '1 1 0%',
      },
      '& .o-details__6': {
        padding: '5px',
        borderBottom: '1px solid #999',
        marginBottom: '20px',
      },
      '& .o-details__7': {
        display: 'flex',
        flexDirection: 'column',
      },
      '& .o-details__8, & .o-details__9': {
        flex: '1 1 0%',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        fontWeight: '700',
      },
      '& .o-details__9:nth-of-type(1n+2)': {
        marginTop: '20px',
      },
      '& .o-details__10': {
        display: 'flex',
        flexDirection: 'column',
      },
      '& .o-details__11': {
        marginBottom: '20px',
      },
      '& .o-details__12': {
        fontFamily: 'Arial, sans-serif',
      },
      '& .o-details__13': {
        color: '#007455',
        fontSize: '22px',
      },
      '& .o-details__14': {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
      },
      '& .o-details__14 p': {
        backgroundColor: '#ddd',
        padding: '7px',
        fontWeight: '700',
      },
      '& .o-details__15': {
        flex: '1 1 0%',
      },
      '& .o-details__16': {
        flex: '1 1 0%',
      },
      '& .o-details__15 img': {
        display: 'block',
        margin: '0 auto',
      },
      '& .o-details__16:nth-of-type(1n+2)': {
        marginTop: '20px',
      },
      '& .o-details__17 p': {
        margin: '7px 0 7px',
      },
      '& .o-details__17 ul': {
        listStyleType: 'none',
        paddingLeft: '0',
        marginBottom: '10px',
        marginTop: '10px',
      },
      '& .o-details__17 li': {
        marginBottom: '7px',
      },
      '& .o-details__17 li:last-child': {
        marginBottom: '0',
      },
      '& .o-details__20, & .o-details__19': {
        marginBottom: '7px',
      },
      '& .o-details__21': {
        overflow: 'auto',
        marginTop: '20px',
      },
      '& .o-details__21 table': {
        width: '100%',
      },
      '& .o-details__21 table td, & .o-details__21 table th': {
        border: '1px solid #999',
        padding: '4px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
      },
      '& .o-details__21 th': {
        backgroundColor: '#ddd',
        textAlign: 'left',
      },
      '& .o-details__21--2 tr:first-child': {
        backgroundColor: '#ddd',
        verticalAlign: 'top',
      },
      '& .o-details__21--2 tr:last-child': {
        fontWeight: '700',
      },
      '& .o-details__21--3 table th': {
        border: 'none',
      },
      '& .o-details__24': {
        display: 'flex',
        flexDirection: 'column',
      },
      '& .o-details__25': {
        flex: '1 1 0%',
        color: '#007455',
        fontSize: '19px',
      },
      '& .o-details__26': {
        boxSizing: 'border-box',
        flex: '0 1 auto',
        marginTop: '20px',
      },
      '& .o-details__27': {
        fontSize: '20px',
        display: 'inline-block',
        padding: '5px 17px',
        color: '#000',
        backgroundColor: '#BFD7B5',
        textDecoration: 'none',
        cursor: 'pointer',
      },
      '& .o-info': {
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '794px',
      },
      '& .o-info__3': {
        fontSize: '19px',
        color: '#007455',
      },
      '& .o-info__6 img': {
        display: 'block',
        maxWidth: '100%',
      },
      '& .o-info__top, & .o-info__bottom': {
        boxSizing: 'border-box',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '20px',
        paddingBottom: '15px',
      },
      '& .o-info__bottom img': {
        display: 'block',
      },
      '& .o-info__5': {
        marginBottom: '0',
        fontSize: '19px',
        color: '#007455',
      },
      '& .o-info__10:nth-of-type(1n+2)': {
        marginTop: '20px',
      },
      '& .o-info__10 a': {
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        textDecoration: 'none',
        fontSize: '10px',
      },
      '& .o-info__10 div': {
        flex: '0 0 60px',
      },
      '& .o-info__10 p': {
        flex: '1 1 0%',
        marginLeft: '10px',
      },
      '& .o-info__11': {
        display: 'flex',
        flexDirection: 'column',
      },
      '& .o-info__9': {
        fontSize: '14px',
        flex: '1 1 0%',
        marginTop: '20px',
        marginBottom: '20px',
      },
      '& .o-info__8': {
        flex: '1 1 0%',
      },
      '& .green': {
        color: 'green',
      },
      '& .red': {
        color: 'red',
      },
    },
    head: {
      fontSize: 'small',
    },
    footer: {
      position: 'fixed',
      bottom: 0,
      fontSize: '0.6rem',
      display: 'table-footer-group',
    },
    noBreak: {
      breakInside: 'avoid',
    },
    flex: {
      display: 'flex',
    },
    tableCell: {
      border: '1px solid rgba(224, 224, 224, 1)',
      padding: 6,
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
      width: '100%',
    },
  };
}
