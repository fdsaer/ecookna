import Logo from './Logo.js';
const {
  React,
  Box,
  Typography
} = $p.ui;
var _ref = React.createElement(Box, {
  mt: 1.5,
  mb: 1
}, React.createElement(Typography, {
  variant: "inherit",
  component: "p"
}, "Ваш персональный менеджер:"));
var _ref2 = React.createElement(Box, {
  mt: 2.5,
  mb: 1
}, React.createElement(Typography, {
  variant: "inherit",
  component: "p"
}, "Офис продаж:"));
var _ref3 = React.createElement(Box, {
  ml: 8,
  mt: 4.75
}, React.createElement(Logo, null));
export default function Contacts({
  withLogo = true,
  manager,
  office
}) {
  return React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    fontSize: 15
  }, React.createElement(Box, {
    sx: {
      flex: '1 1 0%'
    }
  }, manager && React.createElement(React.Fragment, null, _ref, React.createElement(Box, {
    bgcolor: "background.paper",
    p: 1,
    display: "flex"
  }, React.createElement(Box, {
    sx: {
      flex: '1 1 0%'
    }
  }, React.createElement(Typography, {
    variant: "inherit",
    component: "p"
  }, manager.name), React.createElement(Box, {
    mt: 0.625
  }, React.createElement(Typography, {
    variant: "inherit",
    component: "p"
  }, manager.phone_number))), React.createElement(Typography, {
    variant: "inherit"
  }, manager.email_address))), office && React.createElement(React.Fragment, null, _ref2, React.createElement(Box, {
    bgcolor: "background.paper",
    p: 1
  }, React.createElement(Typography, {
    variant: "inherit"
  }, office.address)))), withLogo && _ref3);
}