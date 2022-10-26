import Advantages from './Advantages.js';
import Payments from './Payments.js';
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

const getParamCount = data => {
  return data.reduce((acc, {
    paramsList,
    subtitle
  }) => {
    const usefulParams = paramsList.filter(({
      value
    }) => value);
    return acc += usefulParams.length + (usefulParams.length > 0 && !!subtitle ? 1 : 0);
  }, 0);
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
  advantages,
  payments,
  rowsPerPage = 24,
  svgMaxHeight = 246,
  rowHeight = 23
}) {
  var _ref3 = React.createElement(Payments, {
    paymentList: payments,
    classes: classes
  });

  var _ref = React.createElement(Advantages, {
    withLogo: true,
    advantagesList: advantages
  });

  let index = 0;
  const productListChunks = productList.reduce((acc, product) => {
    const count = getParamCount(product.data);
    const lastChunk = acc[acc.length - 1];
    const newAcc = acc.slice();
    const lastChunkRowsSumm = Array.isArray(lastChunk) ? lastChunk.reduce((acc, lastChunkItem) => acc + getParamCount(lastChunkItem.data), 0) : 0;

    if (Array.isArray(lastChunk) && count + lastChunkRowsSumm < rowsPerPage) {
      newAcc[newAcc.length - 1].push(product);
    } else {
      newAcc.push([product]);
    }

    return newAcc;
  }, []);
  return React.createElement(Box, {
    className: classes.breakElementWithMargins
  }, productListChunks.map(chunk => {
    return React.createElement(Box, {
      className: `${classes.pageBreakAfter} ${classes.pageFrame}`,
      key: chunk[0]?.position
    }, React.createElement(Box, {
      mt: 3,
      className: classes.displayInPrint
    }, _ref), chunk.map(({
      data,
      number,
      position,
      quantity,
      svg
    }) => {
      const count = getParamCount(data);
      index++;
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
        maxHeight: count > (svgMaxHeight / rowHeight).round() ? svgMaxHeight : rowHeight * count
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
    }), React.createElement(Box, {
      className: classes.displayInPrint
    }, _ref3));
  }));
}