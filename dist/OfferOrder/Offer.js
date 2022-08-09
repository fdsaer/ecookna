import { OCover1, OCover17, ODetails, ODetails3, OInfo1, OInfo4, OInfo6, OInfo7, OInfo10_1, OInfo10_2, OInfo10_3, OInfo10_4 } from '../img/index.js';
import Products from './Products.js';
const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Typography,
  Link,
  Box,
  withStyles
} = $p.ui;
const StyledTableRow = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light
  }
}))(TableRow);
const StyledTotalTableCell = withStyles(theme => ({
  root: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    border: 'none',
    lineHeight: theme.typography.lineHeight,
    fontWeight: theme.typography.fontWeightBold
  }
}))(TableCell);
const StyledTableCell = withStyles(theme => ({
  root: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    border: `1px solid ${theme.palette.primary.dark}`,
    lineHeight: theme.typography.lineHeight,
    fontWeight: theme.typography.fontWeightBold
  }
}))(TableCell);

var _ref = React.createElement(OCover1, null);

var _ref2 = React.createElement(Box, {
  mt: 5.75,
  mb: 2.5
}, React.createElement(Typography, {
  variant: "h1",
  component: "h1",
  color: "textPrimary"
}, "Коммерческое ", React.createElement("br", null), " предложение"));

var _ref3 = React.createElement(Box, {
  fontSize: 28,
  mt: -2,
  mb: 2.5,
  lineHeight: 1.3
}, React.createElement(Typography, {
  variant: "inherit",
  component: "p"
}, "по изготовлению и установке ", React.createElement("br", null), "светопрозрачных конструкций"));

var _ref4 = React.createElement(Box, {
  mt: 5.75,
  mb: 2.5,
  fontSize: 15
}, React.createElement(Typography, {
  variant: "inherit"
}, "Предложение действительно в течении 10 календарных дней"));

var _ref5 = React.createElement(Box, {
  mt: 1.5,
  mb: 1
}, React.createElement(Typography, {
  variant: "inherit"
}, "Ваш персональный менеджер:"));

var _ref6 = React.createElement(Box, {
  mt: 2.5,
  mb: 1
}, React.createElement(Typography, {
  variant: "inherit"
}, "Офис продаж:"));

var _ref7 = React.createElement(Box, {
  ml: 8,
  mt: 4.75
}, React.createElement(Box, {
  width: "184px"
}, React.createElement(OCover17, null)), React.createElement(Box, {
  fontSize: 27
}, React.createElement(Typography, {
  variant: "inherit"
}, "ecookna.ru")));

var _ref8 = React.createElement(Box, {
  width: 114
}, React.createElement(ODetails3, null));

var _ref9 = React.createElement(Typography, null, "Ваш персональный ", React.createElement("br", null), " менеджер:");

var _ref10 = React.createElement("br", null);

var _ref11 = React.createElement(Box, {
  ml: 18.25,
  mt: 1.5,
  mb: 0.75
}, React.createElement(Typography, null, "В комплектацию Вашего заказа входит:"));

var _ref12 = React.createElement(StyledTableCell, {
  align: "left"
}, "Цвет");

var _ref13 = React.createElement("br", null);

var _ref14 = React.createElement(StyledTableCell, {
  align: "left",
  colSpan: 2
}, "Всего");

var _ref15 = React.createElement(Box, {
  mt: 11.25,
  mb: 2.5
}, React.createElement(Typography, null, "*Предложение действительно в течение 10 календарных дней."));

var _ref16 = React.createElement(Box, {
  mb: 2
}, React.createElement(Typography, null, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера."));

var _ref17 = React.createElement(Typography, {
  color: "textSecondary",
  variant: "inherit"
}, "Будем рады вашему отзыву о работе наших специалистов");

var _ref18 = React.createElement(Box, {
  ml: 0.6,
  p: 0.6,
  px: 2,
  bgcolor: "primary.main"
}, React.createElement(Link, {
  underline: "none",
  color: "inherit",
  target: "_blank",
  href: "https://www.ecookna.ru/clients/napisat-otzyv/"
}, "Оставить отзыв"));

var _ref19 = React.createElement(Box, {
  boxSizing: "border-box",
  pt: 2.5,
  pb: 2,
  px: 3.75
}, React.createElement(OInfo1, null), React.createElement(Box, {
  mt: 4.25,
  mb: 2.5
}, React.createElement(Typography, null, "Мы производим особенные окна для Вас. Учитываем не только интерьерные и экстерьерные особенности помещения, но и функциональную нагрузку каждой комнаты и строения.")), React.createElement(Box, {
  mt: 3.75,
  mb: 2.5,
  fontSize: 19
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary"
}, "Что мы предлагаем? - Тысячи комбинаций окон, дверей и других продуктов, для самых взыскательных заказчиков.")), React.createElement(OInfo4, null), React.createElement(Box, {
  mt: 3.75,
  color: "textSecondary",
  fontSize: 19
}, React.createElement(Typography, {
  variant: "inherit",
  color: "textSecondary"
}, "Комплектующие от мировых лидеров:")));

var _ref20 = React.createElement(Box, null, React.createElement(OInfo6, null));

var _ref21 = React.createElement(Box, {
  mt: 3.75
}, React.createElement(OInfo7, null));

var _ref22 = React.createElement(Typography, {
  component: "p",
  variant: "inherit"
}, "Переходите", React.createElement("br", null), "по сылкам:");

var _ref23 = React.createElement(OInfo10_1, null);

var _ref24 = React.createElement(Box, {
  fontSize: 10,
  ml: 1.25,
  mt: 2.5,
  mb: 2.5
}, React.createElement(Typography, {
  variant: "inherit",
  component: "span",
  color: "inherit"
}, "Собственное производство"));

var _ref25 = React.createElement(OInfo10_2, null);

var _ref26 = React.createElement(Box, {
  fontSize: 10,
  ml: 1.25,
  mt: 2.5,
  mb: 2.5
}, React.createElement(Typography, {
  variant: "inherit",
  component: "span",
  color: "inherit"
}, "Панорама нашего шоу-рума"));

var _ref27 = React.createElement(OInfo10_3, null);

var _ref28 = React.createElement(Box, {
  fontSize: 10,
  ml: 1.25,
  mt: 2.5,
  mb: 2.5
}, React.createElement(Typography, {
  variant: "inherit",
  component: "span",
  color: "inherit"
}, "Производство окон ПВХ"));

var _ref29 = React.createElement(OInfo10_4, null);

var _ref30 = React.createElement(Box, {
  fontSize: 10,
  ml: 1.25,
  mt: 2.5,
  mb: 2.5
}, React.createElement(Typography, {
  variant: "inherit",
  component: "span",
  color: "inherit"
}, "Постоянный участник телепроектов"));

export default function Offer(props) {
  let {
    obj,
    classes,
    title,
    officeContacts,
    managerContacts,
    fullSquare,
    fullWeight,
    products
  } = props;
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    bgcolor: "primary.main",
    mx: "auto",
    maxWidth: "794px",
    boxSizing: "border-box",
    px: 7.5,
    pb: 3
  }, _ref, _ref2, _ref3, React.createElement(Typography, {
    color: "textSecondary"
  }, title), _ref4, React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    fontSize: 15
  }, React.createElement(Box, {
    sx: {
      flex: '1 1 0%'
    },
    mt: 1.5,
    mb: 1
  }, _ref5, React.createElement(Box, {
    bgcolor: "background.paper",
    p: 1,
    display: "flex"
  }, React.createElement(Box, {
    sx: {
      flex: '1 1 0%'
    }
  }, React.createElement(Typography, {
    variant: "inherit"
  }, obj.manager.name), React.createElement(Typography, {
    variant: "inherit"
  }, managerContacts.phone_number)), React.createElement(Typography, {
    variant: "inherit"
  }, managerContacts.email_address)), officeContacts.address && React.createElement(React.Fragment, null, _ref6, React.createElement(Box, {
    bgcolor: "background.paper",
    p: 1
  }, React.createElement(Typography, {
    variant: "inherit"
  }, officeContacts.address)))), _ref7)), React.createElement(Box, {
    mx: "auto",
    maxWidth: "794px",
    boxSizing: "border-box",
    px: 3.75,
    pt: 2,
    pb: 2
  }, React.createElement(Box, {
    display: "flex",
    pt: 2.5
  }, _ref8, React.createElement(Box, {
    ml: 4
  }, React.createElement(Box, {
    mt: -0.5,
    mb: 2.5,
    fontSize: 22
  }, React.createElement(Typography, {
    variant: "inherit",
    color: "textSecondary"
  }, title)), React.createElement(Box, {
    display: "flex"
  }, React.createElement(Box, {
    sx: {
      flex: '0 1 auto'
    }
  }, _ref9), React.createElement(Box, {
    sx: {
      flex: '1 1 0%'
    },
    ml: 2.5
  }, obj.manager.name, " ", _ref10, [managerContacts.phone_number, managerContacts.email_address].filter(value => value !== '').join(', '))))), _ref11, React.createElement(Box, {
    p: 0.625,
    sx: {
      borderBottom: '1px solid #999'
    },
    mb: 2.5
  }), React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    sx: {
      flex: '0 0 400px'
    }
  }, React.createElement(Box, {
    sx: {
      flex: '0 0 400px'
    }
  }, React.createElement(Typography, {
    variant: "subtitle2",
    component: "p"
  }, "Площадь изделий, кв.м:", ' ', React.createElement(Typography, {
    variant: "subtitle2",
    component: "span"
  }, fullSquare))), React.createElement(Box, {
    sx: {
      flex: '1 1 0%'
    },
    pl: 5.25
  }, React.createElement(Typography, {
    variant: "subtitle2",
    component: "p"
  }, "Масса изделий, кг:", ' ', React.createElement(Typography, {
    variant: "subtitle2",
    component: "span"
  }, fullWeight)))), products && products.map(product => React.createElement(Products, {
    key: product.row,
    product: product,
    classes: classes
  })), React.createElement(Box, {
    mt: 2.5
  }, React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(StyledTableRow, null, React.createElement(StyledTableCell, {
    style: {
      width: '25%'
    }
  }, "Изделия"), _ref12, React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Кол-во, шт."), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Площадь, кв.м."), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Цена ", _ref13, "без скидки"), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Скидка"), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "Сумма"))), React.createElement(TableBody, null, products && products.map(product => React.createElement(TableRow, {
    key: product.row
  }, React.createElement(StyledTableCell, {
    style: {
      width: '25%'
    }
  }, product.characteristic.prod_nom.name_full), React.createElement(StyledTableCell, {
    align: "left"
  }, product.characteristic.clr.presentation), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, product.quantity), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, (product.s * product.quantity).round(2)), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, product.price * product.quantity), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, product.price * product.discount), React.createElement(StyledTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, product.price * product.quantity * (1 - product.discount)))), React.createElement(TableRow, null, _ref14, React.createElement(StyledTableCell, {
    align: "left"
  }, products && products.map(product => product.quantity).reduce((acc, quantity) => acc += quantity, 0)), React.createElement(StyledTableCell, {
    align: "left"
  }, products && products.map(product => product.s * product.quantity).reduce((acc, square) => acc += square, 0).round(2)), React.createElement(StyledTableCell, {
    align: "left"
  }, products && products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0)), React.createElement(StyledTableCell, {
    align: "left"
  }, products && products.map(product => product.price * product.quantity * product.discount).reduce((acc, discount) => acc += discount, 0)), React.createElement(StyledTableCell, {
    align: "left"
  }, products && products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0)))))), React.createElement(Box, {
    mt: 2.5
  }, React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(StyledTableRow, null, React.createElement(StyledTotalTableCell, {
    style: {
      width: '61%'
    }
  }, "ИТОГО"), React.createElement(StyledTotalTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, ' ', products && products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0)), React.createElement(StyledTotalTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, "0"), React.createElement(StyledTotalTableCell, {
    align: "left",
    style: {
      width: '13%'
    }
  }, products && products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0)))))), _ref15, _ref16, React.createElement(Box, {
    display: "flex"
  }, React.createElement(Box, {
    fontSize: 19,
    sx: {
      flex: '1 1 0%'
    }
  }, _ref17), _ref18)), React.createElement(Box, {
    mx: "auto",
    maxWidth: "794px",
    boxSizing: "border-box"
  }, _ref19, _ref20, React.createElement(Box, {
    boxSizing: "border-box",
    pt: 2.5,
    pb: 2,
    px: 3.75
  }, _ref21, React.createElement(Box, {
    display: "flex",
    mt: 3
  }, React.createElement(Box, {
    sx: {
      flex: '0 1 auto'
    },
    mr: 1.25,
    mt: 2.5,
    mb: 2.5,
    fontSize: 14
  }, _ref22), React.createElement(Box, {
    display: "flex",
    sx: {
      flex: '1 1 0%'
    }
  }, React.createElement(Link, {
    underline: "none",
    color: "inherit",
    href: "https://www.youtube.com/watch?v=X6lQcjH1Jc4"
  }, React.createElement(Box, {
    display: "flex",
    sx: {
      flex: '1 1 0%'
    }
  }, React.createElement(Box, {
    sx: {
      flex: '0 0 60px'
    }
  }, _ref23), _ref24)), React.createElement(Link, {
    underline: "none",
    color: "inherit",
    href: "https://www.ecookna.ru/clients/3d/"
  }, React.createElement(Box, {
    display: "flex",
    sx: {
      flex: '1 1 0%'
    },
    ml: 1.75
  }, React.createElement(Box, {
    sx: {
      flex: '0 0 60px'
    }
  }, _ref25), _ref26)), React.createElement(Link, {
    underline: "none",
    color: "inherit",
    href: "https://www.youtube.com/watch?v=pHthiLw2RpA"
  }, React.createElement(Box, {
    display: "flex",
    sx: {
      flex: '1 1 0%'
    },
    ml: 1.75
  }, React.createElement(Box, {
    sx: {
      flex: '0 0 60px'
    }
  }, _ref27), _ref28)), React.createElement(Link, {
    underline: "none",
    color: "inherit",
    href: "https://www.youtube.com/watch?v=zkKJTZ90QVo"
  }, React.createElement(Box, {
    display: "flex",
    sx: {
      flex: '1 1 0%'
    },
    ml: 1.75
  }, React.createElement(Box, {
    sx: {
      flex: '0 0 60px'
    }
  }, _ref29), _ref30)))))));
}