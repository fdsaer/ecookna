const {
  React,
  Box,
  Typography
} = $p.ui;

var _ref = React.createElement(Typography, {
  color: "textSecondary",
  variant: "inherit",
  component: "p"
}, "Оплата любым удобным для вас способом");

export default function Payments({
  paymentList,
  classes
}) {
  return React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    className: `${classes.localFooter}`
  }, React.createElement(Box, {
    fontSize: 19,
    sx: {
      flex: '0 0 225px'
    }
  }, _ref), paymentList && paymentList.length > 0 && paymentList.map(({
    image,
    id
  }) => {
    return React.createElement(Box, {
      key: id,
      sx: {
        height: '76px'
      }
    }, React.createElement("img", {
      src: image,
      style: {
        display: 'block',
        width: '100%',
        minHeight: '100%',
        boxSizing: 'border-box'
      }
    }));
  }));
}