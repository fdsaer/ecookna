import PrnProto from '../PrnProto.js';
const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Link,
  ThemeProvider,
  styled,
  NoSsr,
  createTheme,
  palette,
  spacing,
  typography,
  Box
} = $p.ui;
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));

class TestForm extends PrnProto {
  componentDidMount() {
    this.setState({
      loaded: true
    });
  }

  render() {
    const {
      classes
    } = this;
    console.log('############');
    let loading = '';
    return React.createElement(React.Suspense, {
      fallback: "Загрузка..."
    }, React.createElement(StyledFrame, {
      setClasses: this.setClasses,
      classes: classes,
      loading: loading
    }, React.createElement(Box, {
      color: "blue",
      bgcolor: "background.paper",
      fontFamily: "h6.fontFamily",
      fontSize: {
        xs: 'h6.fontSize',
        sm: 'h4.fontSize',
        md: 'h3.fontSize'
      },
      p: {
        xs: 2,
        sm: 3,
        md: 4
      }
    }, "Hello!!!!")));
  }

}

TestForm.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a49';
TestForm.destination = 'doc.calc_order';
TestForm.title = 'Тестовая форма (jsx)';
export default TestForm;