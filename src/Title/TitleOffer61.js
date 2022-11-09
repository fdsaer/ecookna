import HeaderBackImage from '../img/offer61/titleBack.jpg';
import LogoImage from '../img/offer61/logo.svg';
import Logo from '../Components/Logo.js';

const { React, Typography, Link, Box } = $p.ui;

export default function TitleOffer61(props) {
  const { title, order, description, manager, office, classes } = props;
  return (
    <Box
      bgcolor="primary.main"
      className={` ${classes.wrapperPage} ${classes.pageBreakAfter} ${classes.pageHeight}`}
      sx={{ position: 'relative' }}
    >
      {/* header */}
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
          className={`${classes.logo}`}
        >
          <Logo pt={3.75} pb={3.75} width={275} src={LogoImage} />
        </Box>
      </Box>

      <img src={HeaderBackImage} style={{ maxWidth: '100%' }} />

      <Box
        sx={{
          padding: '35px',
          width: '345px',
          position: 'absolute',
          bottom: '142px',
          right: 0,
          backgroundColor: '#E30613',
        }}
      >
        {order && (
          <Box fontSize={16} mb={2.5}>
            <Typography color={'textSecondary'} component="p">
              {order}
            </Typography>
          </Box>
        )}
        {title && (
          <Typography variant="p" component="p" color="textSecondary">
            <Box
              fontSize={32}
              mt={2.5}
              mb={2.5}
              fontWeight={500}
              sx={{ textTransform: 'uppercase' }}
            >
              {title}
            </Box>
          </Typography>
        )}
        {description && (
          <Box fontSize={16} mt={2.5}>
            <Typography component="p" color="textSecondary">
              {description}
            </Typography>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          padding: '40px',
          backgroundColor: '#303942',
        }}
      >
        {office && (
          <Box mb={2.5}>
            <Typography component="p" color="textSecondary">
              <Box fontWeight={600}>Офис продаж:</Box>
            </Typography>
            <Box>
              <Typography color="textSecondary">
                {office.address || 'г. Пушкино, ул. Напрудная, 33'}
              </Typography>
            </Box>
          </Box>
        )}

        <Box fontSize={16} mt={2.5} display="flex" flexDirection="row">
          {manager && (
            <Box display="flex" flexDirection="column" sx={{ flex: '0 0 50%' }}>
              <Typography component="p" color="textSecondary">
                <Box fontWeight={600}>Ваш персональный менеджер:</Box>
              </Typography>

              <Typography component="p" color="textSecondary">
                {manager.name}
              </Typography>
              <Typography component="p" color="textSecondary">
                телефон: {manager.phone_number || '+7 777 777-77-77'}
              </Typography>
              <Typography color="textSecondary">
                email: {manager.email_address || 'test@ecookna.ru'}
              </Typography>
            </Box>
          )}
          <Box fontSize={16} sx={{ flex: '0 0 50%' }}>
            <Typography component="p" color="textSecondary">
              Предложение действительно <br /> в течение трех календарных дней
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
