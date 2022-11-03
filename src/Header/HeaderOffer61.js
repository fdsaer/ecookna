import LogoImage from '../img/offer61/logoRed.svg';
import Logo from '../Components/Logo.js';
import {
  getManagerInfo,
  getAddressInfo,
} from '../CalcOrder/OfferOrder/OfferData.js';
const { React, Box, Typography } = $p.ui;

export default function HeaderOffer61(props) {
  const { obj, classes, withCaption = false } = props;
  const order = `№${obj.number_doc} от ${moment(obj.date).format(
    'DD MMMM YYYY'
  )} г.`;
  const manager = getManagerInfo(obj);
  const office = getAddressInfo(obj);
  const colorCaption = withCaption ? 'error' : 'textSecondary';

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

        <Box sx={{ flex: '0 0 50%', maxWidth: '50%' }} fontSize={10}>
          <Box pl={2.5}>
            {order && (
              <Box>
                <Box fontWeight={600} display="inline">
                  Коммерческое предложение:{' '}
                </Box>
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
                <Box>
                  <Box fontWeight={600} display="inline">
                    Ваш персональный менеджер:{' '}
                  </Box>
                  <Typography
                    variant="inherit"
                    component="span"
                    color="textPrimary"
                  >
                    {manager.name || 'Кучер В.В.'}
                  </Typography>
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
              <Box mb={2.5}>
                <Box fontWeight={600} display="inline">
                  Офис продаж:{' '}
                </Box>
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
      </Box>

      {/* TODO: Сделать скрытие текста везде, кроме первого колонтитула. Но если нет текста - ломается линия */}
      {classes && (
        <Box mt={2.5} className={classes.headerLine}>
          <Typography component="p" color={colorCaption} variant="inherit">
            Спасибо, что выбрали «Окна Роста»!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
