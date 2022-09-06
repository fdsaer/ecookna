const { React, Box, Link } = $p.ui;

export default function LinksBlock({ links, children }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ height: '60px' }}
    >
      {children}
      {links &&
        links.length > 0 &&
        links.map(({ image, id, link }) => {
          return (
            <Link
              key={id}
              underline="none"
              color="inherit"
              href={link}
              style={{ marginRight: '20px' }}
            >
              <Box sx={{ height: '60px', minHeight: '100%', display: 'flex' }}>
                <img
                  src={image}
                  style={{
                    display: 'block',
                    width: '100%',
                    minHeight: '100%',
                    boxSizing: 'border-box',
                  }}
                />
              </Box>
            </Link>
          );
        })}
    </Box>
  );
}
