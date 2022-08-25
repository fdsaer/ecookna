import LogoImage from '../img/logo.svg';

const { React, Box } = $p.ui;

export default function Logo({ width = '184px', mr = '0' }) {
  return (
    <Box width={width} mr={mr}>
      <img
        src={LogoImage}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          boxSizing: 'border-box',
        }}
      />
    </Box>
  );
}
