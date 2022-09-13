/**
 * Пример стилей для организации №2
 * Эта организация определяет свои стили полностью, не считаясь с базовыми
 */

export default function styles(theme) {
  return {
    root: {
      lineHeight: 1.15,
      width: '100%',
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
        '@media (min-width: 794px), print': {
          paddingLeft: '60px',
          paddingRight: '60px',
        },
        '@media print': {
          height: '297mm',
          width: '210mm',
        },
      },
      '& .o-cover__1': {
        display: 'block',
        margin: '0 auto',
      },
      '& .o-cover__2': {
        fontSize: '40px',
        color: '#1A322C',
        '@media (min-width: 640px), print': {
          fontSize: '53px',
          marginTop: '46px',
        },
      },
      '& .o-cover__3': {
        fontSize: '22px',
        lineHeight: 1.3,
        '@media (min-width: 640px), print': {
          fontSize: '28px',
          marginTop: '-16px',
        },
      },
      '& .o-cover__4': {
        fontSize: '16px',
        color: '#007455',
        '@media (min-width: 640px), print': {
          marginTop: '34px',
        },
      },
      '& .o-cover__5': {
        fontSize: '15px',
        '@media (min-width: 640px), print': {
          marginTop: '34px',
        },
      },
      '& .o-cover__6, & .o-cover__8': {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        fontSize: '15px',
        '@media (min-width: 640px), print': {
          flexDirection: 'row',
        },
      },
      '& .o-cover__7': {
        '@media (min-width: 640px), print': {
          marginTop: '12px',
        },
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
        '@media (min-width: 640px), print': {
          marginTop: '0',
        },
      },
      '& .o-cover__13:nth-of-type(1n+2)': {
        '@media (min-width: 640px), print': {
          marginLeft: '5px',
          marginTop: '0',
          verticalAlign: 'bottom',
        },
      },
      '& .o-cover__15': {
        backgroundColor: '#fff',
        padding: '8px',
        marginTop: '-12px',
      },
      '& .o-cover__16': {
        marginTop: '20px',
        '@media (min-width: 640px), print': {
          marginTop: '38px',
        },
      },
      '& .o-cover__16:nth-of-type(1n+2)': {
        '@media (min-width: 640px), print': {
          marginLeft: '65px',
        },
      },
      '& .o-cover__17': {
        width: '100px',
        '@media (min-width: 640px), print': {
          width: '184px',
        },
      },
      '& .o-cover__18': {
        marginTop: '0',
        marginLeft: '12px',
        '@media (min-width: 640px), print': {
          marginTop: '0',
          marginLeft: '0',
          textAlign: 'center',
          fontSize: '27px',
        },
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
        '@media (min-width: 794px), print': {
          paddingLeft: '30px',
          paddingRight: '30px',
        },
        '@media print': {
          height: '297mm',
          width: '210mm',
        },
      },
      '& .o-details__1': {
        display: 'flex',
        '@media (min-width: 640px), print': {
          paddingTop: '20px',
        },
      },
      '& .o-details__2 img': {
        display: 'none',
        '@media (min-width: 640px), print': {
          flex: '0 1 auto',
          width: '114px',
          display: 'block',
        },
      },
      '& .o-details__4:nth-of-type(1n+2)': {
        flex: '1 1 0%',
        '@media (min-width: 640px), print': {
          marginLeft: '32px',
        },
      },
      '& .o-details__5': {
        '@media (min-width: 640px), print': {
          marginLeft: '146px',
          marginTop: '12px',
          marginBottom: '6px',
        },
      },
      '& .o-details__6': {
        padding: '5px',
        borderBottom: '1px solid #999',
        marginBottom: '20px',
      },
      '& .o-details__7': {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 640px), print': {
          flexDirection: 'row',
        },
      },
      '& .o-details__8, & .o-details__9': {
        flex: '1 1 0%',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        fontWeight: '700',
      },
      '& .o-details__9:nth-of-type(1n+2)': {
        marginTop: '20px',
        '@media (min-width: 640px), print': {
          marginLeft: '153px',
          marginTop: '0',
        },
      },
      '& .o-details__10': {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 640px), print': {
          flexDirection: 'row',
        },
      },
      '& .o-details__11': {
        marginBottom: '20px',
        '@media (min-width: 640px), print': {
          marginBottom: '0',
          flex: '0 1 auto',
          textAlign: 'right',
        },
      },
      '& .o-details__12': {
        fontFamily: 'Arial, sans-serif',
        '@media (min-width: 640px), print': {
          flex: '1 1 0%',
        },
      },
      '& .o-details__12:nth-of-type(1n+2)': {
        '@media (min-width: 640px), print': {
          marginLeft: '20px',
        },
      },
      '& .o-details__13': {
        color: '#007455',
        fontSize: '22px',
        '@media (min-width: 640px), print': {
          fontFamily: 'Arial, sans-serif',
          marginTop: '-4px',
        },
      },
      '& .o-details__14': {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        '@media (min-width: 640px), print': {
          flexDirection: 'row',
          marginTop: '58px',
        },
      },
      '& .o-details__14 p': {
        backgroundColor: '#ddd',
        padding: '7px',
        fontWeight: '700',
      },
      '& .o-details__15': {
        flex: '1 1 0%',
        '@media (min-width: 640px), print': {
          flex: '0 0 400px',
        },
      },
      '& .o-details__18': {
        '@media (min-width: 640px), print': {
          padding: '0 7px 0 24px',
        },
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
        '@media (min-width: 640px), print': {
          marginTop: '0',
        },
      },
      '& .o-details__17': {
        '@media (min-width: 640px), print': {
          paddingLeft: '42px',
        },
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
        '@media (min-width: 640px), print': {
          marginBottom: '10px',
        },
      },
      '& p.o-details__19': {
        '@media (min-width: 640px), print': {
          paddingLeft: '42px',
        },
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
      '& .o-details__21--2': {
        '@media (min-width: 640px), print': {
          marginTop: '70px',
        },
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
      '& .o-details__22': {
        '@media (min-width: 640px)': {
          marginTop: '90px',
        },
        '@media print': {
          marginTop: '60px',
        },
      },
      '& .o-details__23': {
        '@media (min-width: 640px), print': {
          marginBottom: '16px',
        },
      },
      '& .o-details__24': {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 640px), print': {
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
        },
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
        '@media (min-width: 640px), print': {
          marginTop: '0',
          marginLeft: '5px',
        },
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
      '& .o-details__27:after': {
        '@media print': {
          position: 'absolute',
          right: '0',
          bottom: '-22px',
          fontSize: '12px',
          color: '#000',
          content: '"(" attr(href) ")"',
        },
      },
      '& .o-info': {
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '794px',
        '@media print': {
          height: '297mm',
          width: '210mm',
        },
      },
      '& .o-info__1': {
        '@media (min-width: 640px), print': {
          marginTop: '14px',
        },
      },
      '& .o-info__2': {
        '@media (min-width: 640px), print': {
          marginTop: '35px',
        },
      },
      '& .o-info__3': {
        fontSize: '19px',
        color: '#007455',
        '@media (min-width: 640px), print': {
          marginTop: '30px',
        },
      },
      '& .o-info__4': {
        '@media (min-width: 640px), print': {
          marginTop: '8px',
        },
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
        '@media (min-width: 794px), print': {
          paddingLeft: '30px',
          paddingRight: '30px',
        },
      },
      '& .o-info__bottom img': {
        display: 'block',
      },
      '& .o-info__5': {
        marginBottom: '0',
        fontSize: '19px',
        color: '#007455',
        '@media (min-width: 640px), print': {
          marginTop: '30px',
        },
      },
      '& .o-info__7': {
        '@media (min-width: 640px)': {
          marginTop: '30px',
        },
        '@media print': {
          marginTop: '10px',
        },
      },
      '& .o-info__10:nth-of-type(1n+2)': {
        marginTop: '20px',
        '@media (min-width: 640px), print': {
          marginTop: '0',
          marginLeft: '10px',
        },
      },
      '& .o-info__10 a': {
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        textDecoration: 'none',
        fontSize: '10px',
        '@media print': {
          position: 'relative',
        },
      },
      '& .o-info__10 a:after': {
        '@media print': {
          position: 'absolute',
          right: '0',
          bottom: '-22px',
          fontSize: '9px',
          color: '#000',
          content: '"(" attr(href) ")"',
        },
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
        '@media (min-width: 640px), print': {
          flexDirection: 'row',
          marginTop: '24px',
        },
        '@media print': {
          marginTop: '14px',
        },
      },
      '& .o-info__9': {
        fontSize: '14px',
        flex: '1 1 0%',
        marginTop: '20px',
        marginBottom: '20px',
        '@media (min-width: 640px), print': {
          marginRight: '10px',
          flex: '0 1 auto',
        },
      },
      '& .o-info__9 span': {
        '@media (min-width: 640px), print': {
          display: 'block',
        },
      },
      '& .o-info__8': {
        flex: '1 1 0%',
        '@media (min-width: 640px), print': {
          display: 'flex',
          alignItems: 'center',
        },
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