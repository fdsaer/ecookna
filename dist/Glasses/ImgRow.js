const {
  React,
  TableRow
} = $p.ui;
export default function ImgRow({
  svg,
  Cell
}) {
  const __html = $p.utils.scale_svg(svg, 200, 0);

  return React.createElement(TableRow, null, React.createElement(Cell, {
    colSpan: 2
  }, React.createElement("div", {
    style: {
      marginTop: 8
    },
    dangerouslySetInnerHTML: {
      __html
    }
  })), React.createElement(Cell, {
    colSpan: 3
  }, "Раскладка"));
}