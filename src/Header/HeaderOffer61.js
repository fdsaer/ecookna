import LogoImage from '../img/offer61/logoRed.svg';
import Logo from '../Components/Logo.js';
const { React, Box, Typography } = $p.ui;

export default function HeaderOffer61(props) {
  const { order, manager, office, classes } = props;
  return (
    <Box>
      <Box
        mt={2.5}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        fontSize={10}
      >
        <Box sx={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <Logo width={210} src={LogoImage} />
        </Box>

        <Box sx={{ flex: '0 0 50%', maxWidth: '50%' }} fontSize={10} pl={2.5}>
          {order && (
            <Box display="flex">
              <Box fontWeight={600}>Коммерческое предложение: </Box>
              <Typography
                variant="inherit"
                component="span"
                color="textPrimary"
              >
                {order}
              </Typography>
            </Box>
          )}

          {manager && (
            <Box
              mt={1.25}
              mb={1.25}
              display="flex"
              flexDirection="column"
              sx={{ flex: '0 0 50%' }}
            >
              <Box display="flex">
                <Box fontWeight={600}>Ваш персональный менеджер:</Box>
                <Box>{manager.name || 'Кучер В.В.'}</Box>
              </Box>

              <Typography variant="inherit" component="p" color="textPrimary">
                Телефон: {manager.phone_number || '+7 777 777-77-77'}
              </Typography>
              <Typography variant="inherit" color="textPrimary">
                Email: {manager.email_address || 'test@ecookna.ru'}
              </Typography>
            </Box>
          )}

          {office && (
            <Box mb={2.5} display="flex">
              <Box fontWeight={600}>Офис продаж:</Box>
              <Typography
                variant="inherit"
                component="span"
                color="textPrimary"
              >
                {office.address || 'г. Пушкино, ул. Напрудная, 33'}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      {classes && (
        <Box className={classes.headerLine}>
          Спасибо, что выбрали «Окна Роста»!
        </Box>
      )}
    </Box>
  );
}
