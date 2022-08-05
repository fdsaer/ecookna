/**
 * Аналог dhtmlx '5.9 КП Калева'
 *
 * @module TestForm
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

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
  Box,
} = $p.ui;
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));

class TestForm extends PrnProto {
  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { classes } = this;
    console.log('############');
    let loading = '';
    return (
      <React.Suspense fallback="Загрузка...">
        <StyledFrame
          setClasses={this.setClasses}
          classes={classes}
          loading={loading}
        >
          <Box
            color="blue"
            bgcolor="background.paper"
            fontFamily="h6.fontFamily"
            fontSize={{
              xs: 'h6.fontSize',
              sm: 'h4.fontSize',
              md: 'h3.fontSize',
            }}
            p={{ xs: 2, sm: 3, md: 4 }}
          >
            Hello!!!!
          </Box>
        </StyledFrame>
      </React.Suspense>
    );
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
TestForm.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a49';
TestForm.destination = 'doc.calc_order';
TestForm.title = 'Тестовая форма (jsx)';

export default TestForm;
