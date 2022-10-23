import LogoImage from '../img/offer61/logo.svg';
import Logo from '../Components/Logo.js';
const { React, Box } = $p.ui;

export default function HeaderOffer61(props) {
  const { obj, classes } = props;
  return (
    <Box
      pl={1.8}
      pr={1.8}
      display="flex"
      justifyContent="center"
      sx={{
        position: 'relative',
        backgroundColor: '#E30613',
      }}
    >
      <Box
        pt={3.75}
        pb={3.75}
        sx={{
          position: 'relative',
        }}
      >
        <Logo pt={3.75} pb={3.75} width={275} src={LogoImage} />
      </Box>
    </Box>
  );
}
