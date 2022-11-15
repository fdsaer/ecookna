const {
  React,
  Box,
  Typography
} = $p.ui;

var _ref = React.createElement(Typography, {
  color: "textSecondary",
  variant: "inherit",
  component: "p"
}, "Оплата любым удобным вам способом");

export default function FooterOffer61({
  paymentList,
  classes
}) {
  return React.createElement(Box, {
    display: "flex",
    className: `${classes.localFooter}`
  }, React.createElement(Box, {
    fontSize: 10,
    display: "flex",
    alignItems: "center",
    sx: {
      flex: '0 0 22%',
      textTransform: 'uppercase',
      backgroundColor: '#303942',
      padding: '15px 5px'
    }
  }, _ref), paymentList && paymentList.length > 0 && paymentList.map(({
    image,
    text,
    id
  }) => {
    return React.createElement(Box, {
      key: id,
      fontSize: 10,
      display: "flex",
      alignItems: "center",
      sx: {
        backgroundColor: '#E30613',
        flex: '1 1 0%',
        padding: '15px 5px'
      }
    }, React.createElement("img", {
      src: image,
      style: {
        display: 'block',
        width: '20px',
        minHeight: '20px',
        boxSizing: 'border-box'
      }
    }), React.createElement(Box, {
      ml: 0.5,
      sx: {
        textTransform: 'uppercase'
      }
    }, React.createElement(Typography, {
      color: "textSecondary",
      variant: "inherit",
      component: "p"
    }, text)));
  }));
}