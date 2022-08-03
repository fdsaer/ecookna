const {
  createTheme
} = $p.ui;
export const theme = createTheme({
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    h5: {
      fontSize: '1.4rem',
      fontWeight: 600
    },
    body3: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    color: '#333333'
  },
  transitions: {
    duration: {
      shorter: 150
    }
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00'
    },
    mode: 'dark',
    text: {
      primary: '#000'
    }
  },
  shape: {
    borderRadius: 6
  }
});