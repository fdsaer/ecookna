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
          fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
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
    fontFamily: ['Museo', 'Open Sans', 'Arial', 'sans-serif'].join(','),
    lineHeight: 1.15,
    h1: {
      fontSize: '53px',
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
    body1: {
      fontFamily: ['Museo', 'Open Sans', 'Arial', 'sans-serif'].join(','),
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
      main: '#BFD7B5',
      light: '#dddddd',
      dark: '#999999',
    },
    mode: 'dark',
    text: {
      primary: '#1A322C',
      secondary: '#007455',
    },
    productParams: {
      textHead: '#1A322C',
    },
    tableProducts: {
      headCell: '#dddddd',
      headText: '#1A322C',
      bodyCell: '#ffffff',
      bodyText: '#1A322C',
      footerCell: '#dddddd',
      footerText: '#1A322C',
    },
  },
  shape: {
    borderRadius: 6,
  },
});
