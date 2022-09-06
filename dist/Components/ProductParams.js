const {
  React,
  Typography,
  Box,
  List,
  ListItem
} = $p.ui;

const Svg = ({
  source
}) => {
  try {
    const __html = $p.utils.scale_svg(source, 246, 0);

    return React.createElement("div", {
      style: {
        textAlign: 'center'
      },
      dangerouslySetInnerHTML: {
        __html
      }
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

var _ref = React.createElement(Typography, {
  variant: "subtitle2",
  component: "p"
}, " ");

export default function ProductParams({
  title,
  productList,
  fullSquare,
  fullWeight
}) {
  return React.createElement(Box, null, productList.map(({
    data,
    number,
    position,
    quantity,
    svg
  }, index) => {
    return React.createElement(Box, {
      display: "flex",
      flexDirection: "row",
      mt: 7.25
    }, React.createElement(Box, {
      sx: {
        flex: '0 0 400px'
      }
    }, React.createElement(Box, {
      bgcolor: "primary.light",
      p: 1,
      mb: 1.25
    }, React.createElement(Typography, {
      variant: "subtitle2",
      component: "p"
    }, "Номер: ", index + 1, " (поз. ", position, ") - ", quantity, " шт.")), React.createElement(Box, {
      pr: 1,
      pl: 3
    }, React.createElement(Svg, {
      source: svg
    }))), React.createElement(Box, {
      sx: {
        flex: '1 1 0%'
      }
    }, React.createElement(Box, {
      bgcolor: "primary.light",
      p: 1,
      pl: 5.25
    }, _ref), React.createElement(Box, {
      pl: 5.25
    }, data && data.map(({
      subtitle,
      paramsList,
      id
    }) => {
      return React.createElement(React.Fragment, {
        key: id
      }, subtitle && paramsList.length > 0 && React.createElement(Box, {
        bgcolor: "primary.light",
        p: 1
      }, React.createElement(Typography, {
        variant: "subtitle2"
      }, subtitle, ":")), React.createElement(List, null, paramsList.map(({
        name,
        value,
        id
      }) => value && React.createElement(ListItem, {
        disableGutters: true,
        dense: "false",
        key: id
      }, React.createElement(Typography, {
        component: "p",
        variant: "body2"
      }, name && React.createElement(Typography, {
        variant: "subtitle2",
        component: "b"
      }, `${name}: `), name && ' ', React.createElement(Typography, {
        variant: "body2",
        component: "span"
      }, value))))));
    }))));
  }));
}