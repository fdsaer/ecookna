const {
  React,
  Box
} = $p.ui;
export default function Wrapper({
  children,
  classes
}) {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    mx: "auto",
    maxWidth: "794px",
    boxSizing: "border-box",
    px: 3.75,
    pb: 2,
    className: classes?.wrapper
  }, children));
}