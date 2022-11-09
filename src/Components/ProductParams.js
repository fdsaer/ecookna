const { React, Typography, Box, List, ListItem } = $p.ui;

const Svg = ({ source, maxHeight }) => {
  try {
    const __html = $p.utils.scale_svg(source, maxHeight, 0); // Фактически здесь задается максимальная высота. См. метод scale_svg
    return (
      <div
        style={{ textAlign: 'center' }}
        dangerouslySetInnerHTML={{ __html }}
      ></div>
    );
  } catch (err) {
    return null;
  }
};

const ParamItem = ({ name, value, id }) => (
  <ListItem disableGutters dense={true} key={id}>
    <Typography component="p" variant="body2">
      {name && (
        <Typography variant="subtitle2" component="b">
          {`${name}: `}
        </Typography>
      )}
      {name && ' '}
      <Typography
        variant="body2"
        component="span"
        style={{ wordBreak: 'break-word' }}
      >
        {value}
      </Typography>
    </Typography>
  </ListItem>
);

export default function ProductParams({
  data,
  position,
  quantity,
  svg,
  index,
  size,
  svgMaxHeight = 246,
  rowHeight = 23,
  classes,
  color,
}) {
  return (
    <Box display="flex" flexDirection="row" className={classes.productMargins}>
      <Box
        sx={{ flex: '0 0 400px' }}
        className={`${classes.avoidBreakInside} ${classes.breakElementWithMargins}`}
      >
        <Box bgcolor="primary.light" p={1} mb={1.25}>
          {/* <Typography variant="subtitle2" component="p">
                  Номер: {number}
              </Typography> */}

          <Typography variant="subtitle2" component="p" color={color}>
            Номер: {index} (поз. {position}) - {quantity} шт.
          </Typography>
        </Box>
        <Box pr={1} pl={3}>
          <Svg
            source={svg}
            maxHeight={
              size > (svgMaxHeight / rowHeight).round() // в зависимости от количества строк в параметре меняем высоту изображения, с тем, чтобы оно было не выше чем блок с параметрами.
                ? svgMaxHeight
                : rowHeight * size
            }
          />
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 0%' }}>
        <Box bgcolor="primary.light" p={1} pl={5.25}>
          {/* <Typography variant="subtitle2" component="p">
                  Позиция: {position}
                </Typography>   */}
          <Typography variant="subtitle2" component="p">
            &nbsp;
          </Typography>
        </Box>
        <Box pl={5.25}>
          {data &&
            data.map(({ subtitle, paramsList, id }) => {
              return (
                <Box
                  className={`${classes.avoidBreakInside} ${classes.breakElementWithMargins}`}
                  key={id}
                >
                  {subtitle && paramsList.length > 0 && (
                    <Box bgcolor="primary.light" p={1}>
                      <Typography variant="subtitle2" color={color}>
                        {subtitle}:
                      </Typography>
                    </Box>
                  )}
                  <List>
                    {paramsList.map(
                      ({ name, value, id }) =>
                        value && (
                          <ParamItem
                            name={name}
                            value={value}
                            id={id}
                            key={id}
                          />
                        )
                    )}
                  </List>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
