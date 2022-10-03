import Advantages from './Advantages.js';
const { React, Typography, Box, List, ListItem } = $p.ui;

const Svg = ({ source }) => {
  try {
    const __html = $p.utils.scale_svg(source, 246, 0);
    return (
      <div
        style={{ textAlign: 'center' }}
        dangerouslySetInnerHTML={{ __html }}
      ></div>
    );
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default function ProductParams({
  title,
  productList,
  fullSquare,
  fullWeight,
  classes,
  advantages,
}) {
  return (
    <Box className={classes?.breakElementWithMargins}>
      {/* {title && (
        <>
          <Box mt={1.5} mb={0.75}>
            <Typography>{title}</Typography>
          </Box>
          <Box p={0.625} sx={{ borderBottom: '1px solid #999' }} mb={2.5}></Box>
        </>
      )}
      {fullSquare && fullWeight && (
        <Box display="flex" flexDirection="row" sx={{ flex: '0 0 400px' }}>
          <Box sx={{ flex: '0 0 400px' }}>
            <Typography variant="subtitle2" component="p">
              Площадь изделий, кв.м:{' '}
              <Typography variant="subtitle2" component="span">
                {fullSquare}
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 0%' }} pl={5.25}>
            <Typography variant="subtitle2" component="p">
              Масса изделий, кг:{' '}
              <Typography variant="subtitle2" component="span">
                {fullWeight}
              </Typography>
            </Typography>
          </Box>
        </Box>
      )} */}
      {productList.map(({ data, number, position, quantity, svg }, index) => {
        const count = data.reduce((acc, { paramsList }) => {
          return (acc += paramsList.length);
        }, 0);
        return (
          <Box className={classes?.pageBreakAfter}>
            <Box mt={3} className={classes?.displayInPrint}>
              <Advantages withLogo advantagesList={advantages} />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              className={classes?.productMargins}
            >
              <Box
                sx={{ flex: '0 0 400px' }}
                className={`${classes?.avoidBreakInside} ${classes?.breakElementWithMargins}`}
              >
                <Box bgcolor="primary.light" p={1} mb={1.25}>
                  {/* <Typography variant="subtitle2" component="p">
                  Номер: {number}
              </Typography> */}

                  <Typography variant="subtitle2" component="p">
                    Номер: {index + 1} (поз. {position}) - {quantity} шт.
                  </Typography>
                </Box>
                <Box pr={1} pl={3}>
                  <Svg source={svg} />
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
                          className={`${classes?.avoidBreakInside} ${classes?.breakElementWithMargins}`}
                          key={id}
                        >
                          {subtitle && paramsList.length > 0 && (
                            <Box bgcolor="primary.light" p={1}>
                              <Typography variant="subtitle2">
                                {subtitle}:
                              </Typography>
                            </Box>
                          )}
                          <List>
                            {paramsList.map(
                              ({ name, value, id }) =>
                                value && (
                                  <ListItem
                                    disableGutters
                                    dense="false"
                                    key={id}
                                  >
                                    <Typography component="p" variant="body2">
                                      {name && (
                                        <Typography
                                          variant="subtitle2"
                                          component="b"
                                        >
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
                                )
                            )}
                          </List>
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
