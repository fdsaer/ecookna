import LogoImage from '../img/offer61/logoRed.svg';
import Logo from '../Components/Logo.js';
const { React, Box, Typography } = $p.ui;

export default function HeaderOffer61(props) {
  const { order, manager, office } = props;
  return (
    <Box
      mt={2.5}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box>
        <Logo width={210} src={LogoImage} />
      </Box>
      <Box sx={{ flex: '0 0 50%' }}>
        {order && (
          <Typography component="p" color="textPrimary" fontSize={10}>
            <Box fontWeight={600}>Коммерческое предложение:</Box>
            {order}
          </Typography>
        )}

        {manager && (
          <Box
            mt={1.25}
            mb={1.25}
            display="flex"
            flexDirection="column"
            sx={{ flex: '0 0 50%' }}
          >
            <Typography component="p" color="textPrimary" fontSize={10}>
              <Box fontWeight={600}>Ваш персональный менеджер:</Box>
              {manager.name}
            </Typography>

            <Typography component="p" color="textPrimary" fontSize={10}>
              телефон: {manager.phone_number || '+7 777 777-77-77'}
            </Typography>
            <Typography color="textPrimary" fontSize={10}>
              email: {manager.email_address || 'test@ecookna.ru'}
            </Typography>
          </Box>
        )}

        {office && (
          <Box mb={2.5}>
            <Typography component="p" color="textPrimary" fontSize={10}>
              <Box fontWeight={600}>Офис продаж:</Box>
              {office.address || 'г. Пушкино, ул. Напрудная, 33'}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
