const { createTheme } = $p.ui;

export const theme = createTheme({
  overrides: {
    MuiList: {
      padding: {
        paddingTop: '4px',
        paddingBottom: '4px',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          '@media print': {
            width: '210mm',
            margin: 0,
            '& *, & *::before, & *::after': {
              printColorAdjust: 'exact',
            },
          },
          backgroundColor: '#FFFFFF',
          fontFamily: ['Open Sans', 'Arial', 'sans-serif'].join(','),
          fontSize: '.95rem',
          fontWeight: 400,
          letterSpacing: '.01071em',
          lineHeight: 1.43,
          '& *, & *::before, & *::after': {
            boxSizing: 'content-box',
          },
        },
      },
    },
  },

  typography: {
    fontFamily: ['Open Sans', 'Arial', 'sans-serif'].join(','),
    lineHeight: 1.15,
    h1: {
      fontSize: '32px',
    },
    h3: {
      fontSize: '1.7rem',
    },
    h4: {
      fontSize: '0.9rem',
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    p: {
      fontFamily: ['Open Sans', 'Arial', 'sans-serif'].join(','),
      lineHeight: 1.15,
    },
    body1: {
      fontFamily: ['Open Sans', 'Arial', 'sans-serif'].join(','),
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.15,
    },
    body2: {
      fontFamily: ['Arial', 'sans-serif'].join(','),
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.15,
    },
    subtitle2: {
      fontFamily: ['Arial', 'sans-serif'].join(','),
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: 1.15,
    },
  },
  transitions: {
    duration: {
      shorter: 150,
    },
  },
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1280,
      md: 794,
      sm: 640,
      xs: 0,
    },
  },
  palette: {
    primary: {
      main: '#303942', // серый цвет
      light: '#E30613', // красный цвет
      dark: '#999999',
    },
    mode: 'dark',
    text: {
      primary: '#303942', // серый цвет
      secondary: '#FFFFFF', // белый текст
    },
    error: {
      main: '#E30613', // красный цвет
    },
    productParams: {
      textHead: '#FFFFFF',
    },
    tableProducts: {
      headCell: '#E30613',
      headText: '#FFFFFF',
      bodyCell: '#FFFFFF',
      bodyText: '#303942',
      footerCell: '#303942',
      footerText: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 6,
  },
});