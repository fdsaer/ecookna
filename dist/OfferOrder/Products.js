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
  const __html = $p.utils.scale_svg(source, 246, 0);

  return React.createElement("div", {
    style: {
      textAlign: 'center'
    },
    dangerouslySetInnerHTML: {
      __html
    }
  });
};

const ExtendedParams = ({
  paramsArr
}) => paramsArr.length > 0 && paramsArr.map(([constructionName, params]) => params.length > 0 && React.createElement(Box, {
  pl: 5.25,
  key: `${constructionName}`
}, React.createElement(Box, {
  bgcolor: "primary.light",
  p: 1
}, React.createElement(Typography, {
  variant: "subtitle2"
}, constructionName, ":")), React.createElement(List, null, params.map(([paramName, paramValue]) => React.createElement(ListItem, {
  disableGutters: true,
  dense: "false",
  key: `${paramName}-${paramValue}`
}, React.createElement(Typography, {
  component: "p",
  variant: "body2"
}, React.createElement(Typography, {
  variant: "subtitle2",
  component: "b"
}, paramName, ":"), '    ', React.createElement(Typography, {
  variant: "body2",
  component: "span"
}, `${paramValue}`)))))));

var _ref = React.createElement(Typography, {
  variant: "subtitle2",
  component: "b"
}, "Масса общ/зап, кг:");

var _ref2 = React.createElement(Typography, {
  variant: "subtitle2",
  component: "b"
}, "Количество, шт:");

var _ref3 = React.createElement(Typography, {
  variant: "subtitle2",
  component: "b"
}, "Проф.система:");

var _ref4 = React.createElement(Typography, {
  variant: "subtitle2",
  component: "b"
}, "Цвет:");

var _ref5 = React.createElement(Box, {
  bgcolor: "primary.light",
  p: 1
}, React.createElement(Typography, {
  variant: "subtitle2"
}, "Стеклопакеты:"));

var _ref6 = React.createElement(Box, {
  bgcolor: "primary.light",
  p: 1
}, React.createElement(Typography, {
  variant: "subtitle2"
}, "Примечание:"));

export default function Products({
  props,
  product,
  classes
}) {
  const constructionCount = product.characteristic.constructions._obj.length;
  const extendedParams = {};

  for (let i = 0; i <= constructionCount; i += 1) {
    let key = '';

    if (i === 0) {
      key = 'Дополнительные параметры';
    } else {
      const currentConstruction = product.characteristic.constructions.get(i - 1);
      key = currentConstruction?.furn?.name ? `${currentConstruction.furn.name} Исполнение - ${currentConstruction.direction.name.toLowerCase()}` : '';
    }

    extendedParams[key] = product.characteristic.params.map(param => {
      if (param.cnstr !== i) return null;
      return param;
    }).filter(param => param !== null && !param.hide).map(param => [param.param.name, param.value.name]);
  }

  const commonExtendedParams = Object.entries(extendedParams).filter(([key]) => key === 'Дополнительные параметры');
  const extendedParamsByConstruction = Object.entries(extendedParams).filter(([key]) => key && key !== 'Дополнительные параметры');
  const glasses = product.characteristic.glasses;
  const glassesWeight = glasses.map(glass => product.characteristic.elm_weight(glass.elm)).reduce((acc, glassWeight) => acc += glassWeight, 0).round();
  const constructionsWeight = product.characteristic.constructions.map(construction => product.characteristic.elm_weight(-1 * construction.cnstr)).reduce((acc, constructionWeight) => acc += constructionWeight, 0).round();
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
  }, "Номер: ", product.row)), React.createElement(Box, {
    pr: 1,
    pl: 3
  }, React.createElement(Svg, {
    source: product.characteristic.svg
  }))), React.createElement(Box, {
    sx: {
      flex: '1 1 0%'
    }
  }, React.createElement(Box, {
    bgcolor: "primary.light",
    p: 1,
    pl: 5.25
  }, React.createElement(Typography, {
    variant: "subtitle2",
    component: "p"
  }, "Позиция: ", product.row)), React.createElement(Box, {
    pl: 5.25
  }, React.createElement(List, null, React.createElement(ListItem, {
    disableGutters: true,
    dense: "false"
  }, React.createElement(Typography, {
    component: "p",
    variant: "body2"
  }, _ref, '    ', React.createElement(Typography, {
    variant: "body2",
    component: "span"
  }, ` ${constructionsWeight}/${glassesWeight}`))), React.createElement(ListItem, {
    disableGutters: true,
    dense: "false"
  }, React.createElement(Typography, {
    component: "p",
    variant: "body2"
  }, _ref2, ' ', React.createElement(Typography, {
    variant: "body2",
    component: "span"
  }, product.quantity))), React.createElement(ListItem, {
    disableGutters: true,
    dense: "false"
  }, React.createElement(Typography, {
    component: "p",
    variant: "body2"
  }, _ref3, ' ', React.createElement(Typography, {
    variant: "body2",
    component: "span"
  }, product.characteristic.prod_nom.name))), React.createElement(ListItem, {
    disableGutters: true,
    dense: "false"
  }, React.createElement(Typography, {
    component: "p",
    variant: "body2"
  }, _ref4, ' ', React.createElement(Typography, {
    variant: "body2",
    component: "span"
  }, product.characteristic.clr.presentation))))), React.createElement(ExtendedParams, {
    paramsArr: commonExtendedParams
  }), glasses && React.createElement(Box, {
    pl: 5.25
  }, _ref5, React.createElement(List, null, glasses.map(glass => React.createElement(ListItem, {
    disableGutters: true,
    dense: "false",
    key: `${glass.elm}`
  }, React.createElement(Typography, {
    variant: "body2"
  }, `${glass.formula} (${glass.thickness} мм)`))))), React.createElement(ExtendedParams, {
    paramsArr: extendedParamsByConstruction
  }), product.note && React.createElement(Box, {
    pl: 5.25
  }, _ref6, React.createElement(List, null, React.createElement(ListItem, {
    disableGutters: true,
    dense: "false"
  }, React.createElement(Typography, {
    variant: "body2"
  }, product.note))))));
}