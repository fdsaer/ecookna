const {
  createTheme
} = $p.ui;
export const theme = createTheme({
  overrides: {
    MuiList: {
      padding: {
        paddingTop: '4px',
        paddingBottom: '4px'
      }
    }
  },
  typography: {
    fontFamily: ['Museo', 'Open Sans', 'Arial', 'sans-serif'].join(','),
    lineHeight: 1.15,
    h1: {
      fontSize: '44px'
    },
    h3: {
      fontSize: '1.7rem'
    },
    h4: {
      fontSize: '0.9rem'
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 600
    },
    body1: {
      fontFamily: ['Museo', 'Open Sans', 'Arial', 'sans-serif'].join(','),
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: 1.15
    },
    body2: {
      fontFamily: ['Arial', 'sans-serif'].join(','),
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.15
    },
    subtitle2: {
      fontFamily: ['Arial', 'sans-serif'].join(','),
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: 1.15
    }
  },
  transitions: {
    duration: {
      shorter: 150
    }
  },
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1280,
      md: 794,
      sm: 640,
      xs: 0
    }
  },
  palette: {
    primary: {
      main: '#008000',
      light: '#90ee90',
      dark: '#006400'
    },
    mode: 'dark',
    text: {
      primary: '#0000ff',
      secondary: '#ff0000'
    }
  },
  shape: {
    borderRadius: 6
  }
});