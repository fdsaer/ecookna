const {
  React,
  Box,
  Typography,
  Grid
} = $p.ui;
export default function GridImages({
  images,
  widthImage = '100%',
  width = '218px',
  flexDirection = 'column',
  sRow = 3,
  sCol = 2
}) {
  return React.createElement(Grid, {
    container: true,
    spacing: sRow
  }, images && images.map(({
    id,
    image,
    text
  }) => React.createElement(Grid, {
    item: true,
    key: id,
    xs: 4,
    spacing: sCol
  }, React.createElement(Box, {
    width: width,
    display: "flex",
    flexDirection: flexDirection
  }, image && React.createElement("img", {
    src: image,
    style: {
      display: 'block',
      width: widthImage,
      height: 'auto',
      boxSizing: 'border-box'
    }
  }), text && React.createElement(Box, {
    fontWeight: 600,
    fontSize: 16,
    sx: {
      backgroundColor: '#303942',
      padding: '10px 16px'
    }
  }, React.createElement(Typography, {
    variant: "inherit",
    color: "textSecondary",
    component: "span"
  }, text))))));
}