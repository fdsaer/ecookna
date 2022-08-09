/**
 *
 *
 * @module GlassRow
 *
 * Created by Evgeniy Malyarov on 10.01.2022.
 */

const { React, Typography, Box, List, ListItem } = $p.ui;

const Svg = ({ source }) => {
  const __html = $p.utils.scale_svg(source, 246, 0);
  return (
    <div
      style={{ textAlign: 'center' }}
      dangerouslySetInnerHTML={{ __html }}
    ></div>
  );
};

const ExtendedParams = ({ paramsArr }) =>
  paramsArr.length > 0 &&
  paramsArr.map(
    ([constructionName, params]) =>
      params.length > 0 && (
        <Box pl={5.25} key={`${constructionName}`}>
          <Box bgcolor="primary.light" p={1}>
            <Typography variant="subtitle2">{constructionName}:</Typography>
          </Box>
          <List>
            {params.map(([paramName, paramValue]) => (
              <ListItem
                disableGutters
                dense="false"
                key={`${paramName}-${paramValue}`}
              >
                <Typography component="p">
                  <Typography variant="subtitle2" component="b">
                    {paramName}:
                  </Typography>
                  {'    '}
                  <Typography variant="body2" component="span">
                    {`${paramValue}`}
                  </Typography>
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )
  );

export default function Products({ props, product, classes }) {
  const constructionCount = product.characteristic.constructions._obj.length;
  const extendedParams = {};
  for (let i = 0; i <= constructionCount; i += 1) {
    let key = '';
    if (i === 0) {
      key = 'Дополнительные параметры';
    } else {
      const currentConstruction = product.characteristic.constructions.get(
        i - 1
      );
      key = currentConstruction?.furn?.name
        ? `${
            currentConstruction.furn.name
          } Исполнение - ${currentConstruction.direction.name.toLowerCase()}`
        : '';
    }
    extendedParams[key] = product.characteristic.params
      .map((param) => {
        if (param.cnstr !== i) return null;
        return param;
      })
      .filter((param) => param !== null && !param.hide)
      .map((param) => [param.param.name, param.value.name]);
  }
  const commonExtendedParams = Object.entries(extendedParams).filter(
    ([key]) => key === 'Дополнительные параметры'
  );
  const extendedParamsByConstruction = Object.entries(extendedParams).filter(
    ([key]) => key && key !== 'Дополнительные параметры'
  );
  const glasses = product.characteristic.glasses;
  const glassesWeight = glasses
    .map((glass) => product.characteristic.elm_weight(glass.elm))
    .reduce((acc, glassWeight) => (acc += glassWeight), 0)
    .round();
  const constructionsWeight = product.characteristic.constructions
    .map((construction) =>
      product.characteristic.elm_weight(-1 * construction.cnstr)
    )
    .reduce((acc, constructionWeight) => (acc += constructionWeight), 0)
    .round();

  return (
    <Box display="flex" flexDirection="row" mt={7.25}>
      <Box sx={{ flex: '0 0 400px' }}>
        <Box bgcolor="primary.light" p={1} mb={1.25}>
          <Typography variant="subtitle2" component="p">
            Номер: {product.row}
          </Typography>
        </Box>
        <Box pr={1} pl={3}>
          <Svg source={product.characteristic.svg} />
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 0%' }}>
        <Box bgcolor="primary.light" p={1} pl={5.25}>
          <Typography variant="subtitle2" component="p">
            Позиция: {product.row}
          </Typography>
        </Box>
        <Box pl={5.25}>
          <List>
            <ListItem disableGutters dense="false">
              <Typography variant="subtitle2" component="b">
                Масса общ/зап, кг:
              </Typography>
              {` ${constructionsWeight}/${glassesWeight}`}
            </ListItem>
            <ListItem disableGutters dense="false">
              <Typography variant="subtitle2" component="b">
                Количество, шт:
              </Typography>{' '}
              {product.quantity}
            </ListItem>
            <ListItem disableGutters dense="false">
              <Typography variant="subtitle2" component="b">
                Проф.система:
              </Typography>{' '}
              {product.characteristic.prod_nom.name}
            </ListItem>
            <ListItem disableGutters dense="false">
              <Typography variant="subtitle2" component="b">
                Цвет:
              </Typography>{' '}
              {product.characteristic.clr.presentation}
            </ListItem>
          </List>
        </Box>
        <ExtendedParams paramsArr={commonExtendedParams} />
        {glasses && (
          <Box pl={5.25}>
            <Box bgcolor="primary.light" p={1}>
              <Typography variant="subtitle2">Стеклопакеты:</Typography>
            </Box>
            <List>
              {glasses.map((glass) => (
                <ListItem disableGutters dense="false" key={`${glass.elm}`}>
                  <Typography variant="body2">{`${glass.formula} (${glass.thickness} мм)`}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        <ExtendedParams paramsArr={extendedParamsByConstruction} />
        {product.note && (
          <Box pl={5.25}>
            <Box bgcolor="primary.light" p={1}>
              <Typography variant="subtitle2">Примечание:</Typography>
            </Box>
            <List>
              <ListItem disableGutters dense="false">
                <Typography variant="body2">{product.note}</Typography>
              </ListItem>
            </List>
          </Box>
        )}
      </Box>
    </Box>
  );
}
