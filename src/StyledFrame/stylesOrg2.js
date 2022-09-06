/**
 * Пример стилей для организации №2
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
      },
      '& img': {
        display: 'block',
      },
      '& table': {
        borderCollapse: 'collapse',
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
