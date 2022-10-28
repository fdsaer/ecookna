const {
  React,
  Typography,
  Box,
  List,
  ListItem
} = $p.ui;

const Svg = ({
  source,
  maxHeight
}) => {
  try {
    const __html = $p.utils.scale_svg(source, maxHeight, 0);

    return React.createElement("div", {
      style: {
        textAlign: 'center'
      },
      dangerouslySetInnerHTML: {
        __html
      }
    });
  } catch (err) {
    return null;
  }
};

const ParamItem = ({
  name,
  value,
  id
}) => React.createElement(ListItem, {
  disableGutters: true,
  dense: true,
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
}, value)));

var _ref = React.createElement(Typography, {
  variant: "subtitle2",
  component: "p"
}, " ");

export default function ProductParams({
  data,
  number,
  position,
  quantity,
  svg,
  index,
  size,
  svgMaxHeight = 246,
  rowHeight = 23,
  classes
}) {
  return React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    className: classes.productMargins,
    key: position
  }, React.createElement(Box, {
    sx: {
      flex: '0 0 400px'
    },
    className: `${classes.avoidBreakInside} ${classes.breakElementWithMargins}`
  }, React.createElement(Box, {
    bgcolor: "primary.light",
    p: 1,
    mb: 1.25
  }, React.createElement(Typography, {
    variant: "subtitle2",
    component: "p"
  }, "Номер: ", index, " (поз. ", position, ") - ", quantity, " шт.")), React.createElement(Box, {
    pr: 1,
    pl: 3
  }, React.createElement(Svg, {
    source: svg,
    maxHeight: size > (svgMaxHeight / rowHeight).round() ? svgMaxHeight : rowHeight * size
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
    return React.createElement(Box, {
      className: `${classes.avoidBreakInside} ${classes.breakElementWithMargins}`,
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
    }) => value && React.createElement(ParamItem, {
      name: name,
      value: value,
      id: id,
      key: id
    }))));
  }))));
}