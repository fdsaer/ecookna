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
import PrnProto from '../PrnProto.js';
import { OCover1, OCover17, ODetails, ODetails3, OInfo1, OInfo4, OInfo6, OInfo7, OInfo10_1, OInfo10_2, OInfo10_3, OInfo10_4 } from '../img/index.js';
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));
const theme = createTheme();

class TestForm extends PrnProto {
  componentDidMount() {}

  render() {
    console.log('############');
    console.log(theme);
    return React.createElement(React.Suspense, {
      fallback: "Загрузка..."
    }, React.createElement(StyledFrame, {
      setClasses: this.setClasses
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