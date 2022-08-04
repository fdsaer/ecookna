const { createTheme } = $p.ui;

export const theme = createTheme({
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    h5: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    h1: {
      color: 'yellow',
    },
    body3: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    color: '#333333',
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
      main: '#800080',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    mode: 'dark',

    // info: {
    //   main: color.accentPrimary,
    // },
    // secondary: {
    //   main: color.bg60,
    //   contrastText: color.textDark,
    // },
    // primary: {
    //   main: color.textPrimary,
    // },
    // success: {
    //   main: color.accentSuccess,
    //   contrastText: color.textPrimary,
    // },
    // error: {
    //   main: color.alertError,
    // },
    // warning: {
    //   main: color.alertErrorSecondary,
    // },
    // alertSuccess: {
    //   main: color.alertSuccess,
    // },
    // neutral: {
    //   main: '#64748B',
    //   contrastText: color.textPrimary,
    // },
    // textLink: {
    //   main: color.textLink,
    //   contrastText: color.textPrimary,
    // },
    text: {
      primary: '#000',
    },
    // grey: {
    //   600: color.bg60,
    //   700: color.bg70,
    //   800: color.bg80,
    //   900: color.bg90,
    // },
    // background: {
    //   paper: color.bg100,
    //   default: color.bg100,
    // },
  },
  shape: {
    borderRadius: 6,
  },
});
