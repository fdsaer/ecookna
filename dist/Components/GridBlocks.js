const {
  React,
  Box,
  Typography,
  Grid
} = $p.ui;
export default function CardGrid({
  images,
  width = '218px',
  sRow = '3',
  sCol = '2'
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
    width: width
  }, React.createElement("img", {
    src: image,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      boxSizing: 'border-box'
    }
  }), React.createElement(Box, {
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