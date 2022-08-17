import OCover1 from '../img/o-cover__logo.png';
import OCover17 from '../img/o-cover__photo.png';

const { React, Typography, Link, Box } = $p.ui;

export default function HeaderOffer(props) {
  const { title, managerContacts, officeContacts, obj } = props;
  return (
    <Box
      bgcolor="primary.main"
      mx="auto"
      maxWidth="794px"
      boxSizing="border-box"
      px={7.5}
      pb={3}
    >
      <img src={OCover17} />
      <Box mt={5.75} mb={2.5}>
        <Typography variant="h1" component="h1" color="textPrimary">
          Коммерческое <br /> предложение
        </Typography>
      </Box>
      <Box fontSize={28} mt={-2} mb={2.5} lineHeight={1.3}>
        <Typography variant="inherit" component="p">
          по изготовлению и установке <br />
          светопрозрачных конструкций
        </Typography>
      </Box>
      <Box mt={4.25} mb={2.5} fontSize={15}>
        <Typography color="textSecondary">{title}</Typography>
      </Box>
      <Box mt={4.25} mb={2.5} fontSize={15}>
        <Typography variant="inherit" component="p">
          Предложение действительно в течении 10 календарных дней
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" fontSize={15}>
        <Box sx={{ flex: '1 1 0%' }}>
          <Box mt={1.5} mb={1}>
            <Typography variant="inherit" component="p">
              Ваш персональный менеджер:
            </Typography>
          </Box>
          <Box bgcolor="background.paper" p={1} display="flex">
            <Box sx={{ flex: '1 1 0%' }}>
              <Typography variant="inherit" component="p">
                {obj.manager.name}
              </Typography>
              <Box mt={0.625}>
                <Typography variant="inherit" component="p">
                  {managerContacts.phone_number}
                </Typography>
              </Box>
            </Box>
            <Typography variant="inherit">
              {managerContacts.email_address}
            </Typography>
          </Box>
          {officeContacts.address && (
            <>
              <Box mt={2.5} mb={1}>
                <Typography variant="inherit" component="p">
                  Офис продаж:
                </Typography>
              </Box>
              <Box bgcolor="background.paper" p={1}>
                <Typography variant="inherit">
                  {officeContacts.address}
                </Typography>
              </Box>
            </>
          )}
        </Box>
        <Box ml={8} mt={4.75}>
          <Box width="184px">
            <img src={OCover1} />
          </Box>
          <Box fontSize={27} textAlign="center" mb={2.5}>
            <Typography variant="inherit">ecookna.ru</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
