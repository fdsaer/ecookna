import Advantages from './Advantages.js';
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

var _ref2 = React.createElement(Typography, {
  variant: "subtitle2",
  component: "p"
}, " ");

export default function ProductParams({
  title,
  productList,
  fullSquare,
  fullWeight,
  classes,
  advantages
}) {
  var _ref = React.createElement(Advantages, {
    withLogo: true,
    advantagesList: advantages
  });

  return React.createElement(Box, {
    className: classes?.breakElementWithMargins
  }, productList.map(({
    data,
    number,
    position,
    quantity,
    svg
  }, index) => {
    const count = data.reduce((acc, {
      paramsList
    }) => {
      return acc += paramsList.length;
    }, 0);
    return React.createElement(Box, {
      className: classes?.pageBreakAfter
    }, React.createElement(Box, {
      mt: 3,
      className: classes?.displayInPrint
    }, _ref), React.createElement(Box, {
      display: "flex",
      flexDirection: "row",
      className: classes?.productMargins
    }, React.createElement(Box, {
      sx: {
        flex: '0 0 400px'
      },
      className: `${classes?.avoidBreakInside} ${classes?.breakElementWithMargins}`
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
    }, _ref2), React.createElement(Box, {
      pl: 5.25
    }, data && data.map(({
      subtitle,
      paramsList,
      productSystem,
      id
    }) => {
      return React.createElement(Box, {
        className: `${classes?.avoidBreakInside} ${classes?.breakElementWithMargins}`,
        key: id
      }, subtitle && (paramsList.length > 0 || productSystem) && React.createElement(Box, {
        bgcolor: "primary.light",
        p: 1
      }, React.createElement(Typography, {
        variant: "subtitle2"
      }, subtitle, ":")), React.createElement(List, null, productSystem && React.createElement(Typography, {
        variant: "subtitle2",
        component: "b"
      }, "Система:", React.createElement(Typography, {
        variant: "body2",
        component: "span",
        style: {
          wordBreak: 'break-word'
        }
      }, ` ${productSystem}`)), paramsList.map(({
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
        component: "span",
        style: {
          wordBreak: 'break-word'
        }
      }, value))))));
    })))));
  }));
}