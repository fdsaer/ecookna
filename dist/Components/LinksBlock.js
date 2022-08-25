const {
  React,
  Box,
  Link
} = $p.ui;
export default function LinksBlock({
  links,
  children
}) {
  return React.createElement(Box, {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    sx: {
      height: '60px'
    }
  }, children, links && links.length > 0 && links.map(({
    image,
    id,
    link
  }) => {
    return React.createElement(Link, {
      key: id,
      underline: "none",
      color: "inherit",
      href: link,
      style: {
        marginRight: '20px'
      }
    }, React.createElement(Box, {
      sx: {
        height: '60px',
        minHeight: '100%',
        display: 'flex'
      }
    }, React.createElement("img", {
      src: image,
      style: {
        display: 'block',
        width: '100%',
        minHeight: '100%',
        boxSizing: 'border-box'
      }
    })));
  }));
}