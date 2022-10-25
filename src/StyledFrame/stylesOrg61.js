/**
 * Пример стилей для организации Окна Роста
 * Эта организация определяет свои стили полностью, не считаясь с базовыми
 */

export default function styles(theme) {
  console.log(theme);
  console.log(theme.spacing(5));
  return {
    root: {
      lineHeight: 1.15,
      width: '100%',
      '& hr': {
        boxSizing: 'content-box',
        height: 0,
        overflow: 'visible',
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
        '@media print': {
          'break-inside': 'avoid',
        },
      },
      '& img': {
        display: 'block',
        '@media print': {
          'break-inside': 'avoid',
        },
      },
      '& table': {
        borderCollapse: 'collapse',
        '@media print': {
          'break-inside': 'avoid',
        },
      },
    },
    pageHeight: {
      '@media print': {
        height: '297mm',
      },
    },
    breakElementWithMargins: {
      '@media print': {
        'box-decoration-break': 'clone',
      },
    },
    avoidBreakInside: {
      '@media print': {
        'break-inside': 'avoid-page',
      },
    },
    pageBreakAfter: {
      '@media print': {
        'page-break-after': 'always',
      },
    },
    pageBreakBefore: {
      '@media print': {
        'page-break-before': 'always',
      },
    },
    topColontitulPrint: {
      '@media print': {
        position: 'fixed',
        top: 0,
        display: 'table-header-group',
      },
    },
    hideInPrint: {
      '@media print': {
        display: 'none',
      },
    },
    displayInPrint: {
      display: 'none',
      '@media print': {
        display: 'block',
      },
    },
    productMargins: {
      marginTop: theme.spacing(7.25),
      '@media print': {
        marginTop: theme.spacing(3),
      },
    },
    tableMargins: {
      marginTop: theme.spacing(5),
      '@media print': {
        marginTop: theme.spacing(3),
      },
    },
    wrapper: {
      paddingTop: theme.spacing(2),
      '@media print': {
        paddingTop: 0,
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
    localFooter: {
      '@media print': {
        position: 'absolute',
        bottom: '0',
      },
    },
    pageFrame: {
      '@media print': {
        height: '287mm',
        position: 'relative',
      },
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
    logo: {
      '&:after': {
        content: '""',
        width: 0,
        height: 0,
        bottom: '-25px',
        left: 0,
        right: 0,
        position: 'absolute',
        margin: '0 auto',
        borderLeft: '10px solid transparent',
        borderRight: '68px solid transparent',
        borderTop: '25px solid #E30613',
      },
    },
  };
}
