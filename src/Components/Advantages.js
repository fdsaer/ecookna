import Logo from '../Components/Logo.js';

const { React, Box } = $p.ui;

export default function Advantages({ withLogo = true, advantagesList }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: '60px' }}
    >
      {withLogo && <Logo width="90px" />}
      {advantagesList &&
        advantagesList.length > 0 &&
        advantagesList.map(({ image, id }) => {
          return (
            <Box
              key={id}
              sx={{ height: '60px', minHeight: '100%', display: 'flex' }}
            >
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
          );
        })}
    </Box>
  );
}
