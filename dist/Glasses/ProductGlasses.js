const {
  React,
  Typography
} = $p.ui;
export default function ProductGlasses({
  row,
  totals,
  classes
}) {
  const {
    nom,
    characteristic,
    quantity
  } = row;
  return React.createElement(Typography, null, characteristic.name);
}