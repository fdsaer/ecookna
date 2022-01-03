/**
 * Заполнения текущего изделия
 *
 * @module ProductGlasses
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

const {React, Typography} = $p.ui;

export default function ProductGlasses({row, totals, classes}) {
  const {nom, characteristic, quantity} = row;
  return <Typography>{characteristic.name}</Typography>;
}
