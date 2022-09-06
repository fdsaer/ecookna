const {
  React,
  TableRow
} = $p.ui;
export default function ImgRow({
  svg,
  Cell
}) {
  const __html = $p.utils.scale_svg(svg, 200, 0);

  return React.createElement(TableRow, {
    className: "no-break"
  }, React.createElement(Cell, {
    colSpan: 3
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