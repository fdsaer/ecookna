const {React, TableRow} = $p.ui;

export default function ImgRow({svg, Cell}) {
  const __html = $p.utils.scale_svg(svg, 200, 0);
  return <TableRow>
    <Cell colSpan={2}><div style={{marginTop: 8}} dangerouslySetInnerHTML={{__html}}></div></Cell>
    <Cell colSpan={3}>Раскладка</Cell>
  </TableRow>;
}
