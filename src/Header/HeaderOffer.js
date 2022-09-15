import OCover1 from '../img/o-cover__logo.png';
import OCover17 from '../img/o-cover__photo.png';
import HeaderBackImage from '../img/headerBack.jpg';
import Contacts from '../Components/Contacts.js';

const { React, Typography, Link, Box } = $p.ui;

export default function HeaderOffer(props) {
  const { headerTitle, order, description, manager, office, classes } = props;
  return (
    <Box
      bgcolor="primary.main"
      mx="auto"
      maxWidth="794px"
      boxSizing="border-box"
      px={7.5}
      pb={3}
      className={classes.pageBreakAfter}
    >
      <img src={HeaderBackImage} style={{ width: '100%' }} />
      {headerTitle && (
        <Box mt={5.75} mb={2.5}>
          <Typography variant="h1" component="h1" color="textPrimary">
            {headerTitle}
          </Typography>
        </Box>
      )}
      {description && (
        <Box fontSize={28} mt={-2} mb={2.5} lineHeight={1.3}>
          <Typography variant="inherit" component="p">
            {description}
          </Typography>
        </Box>
      )}
      {order && (
        <Box mt={4.25} mb={2.5} fontSize={15}>
          <Typography color="textSecondary">{order}</Typography>
        </Box>
      )}
      {(office || manager) && (
        <Contacts withLogo office={office} manager={manager} />
      )}
    </Box>
  );
}
