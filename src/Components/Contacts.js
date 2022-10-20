import Logo from './Logo.js';
const { React, Box, Typography } = $p.ui;

export const getAddressInfo = (obj) => {
  const office = { phone_number: '', email_address: '', address: '' };
  obj.organization.contact_information.forEach((row) => {
    switch (row.type.name) {
      case 'Адрес':
        if (row.presentation && !office.address) {
          office.address = row.presentation;
        }
        break;
      case 'Телефон':
        if (row.presentation && !office.phone_number) {
          office.phone_number = row.presentation;
        }
        break;
      case 'АдресЭлектроннойПочты':
        if (row.presentation && !office.email_address) {
          office.email_address = row.presentation;
        }
        break;
      default:
    }
  });
  return office;
};

export default function Contacts({ withLogo = true, manager, office }) {
  return (
    <Box display="flex" flexDirection="row" fontSize={15}>
      <Box sx={{ flex: '1 1 0%' }}>
        {manager && (
          <>
            <Box mt={1.5} mb={1}>
              <Typography variant="inherit" component="p">
                Ваш персональный менеджер:
              </Typography>
            </Box>
            <Box bgcolor="background.paper" p={1} display="flex">
              <Box sx={{ flex: '1 1 0%' }}>
                <Typography variant="inherit" component="p">
                  {manager.name}
                </Typography>
                <Box mt={0.625}>
                  <Typography variant="inherit" component="p">
                    {manager.phone_number}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="inherit">{manager.email_address}</Typography>
            </Box>
          </>
        )}
        {office && (
          <>
            <Box mt={2.5} mb={1}>
              <Typography variant="inherit" component="p">
                Офис продаж:
              </Typography>
            </Box>
            <Box bgcolor="background.paper" p={1}>
              <Typography variant="inherit">{office.address}</Typography>
            </Box>
          </>
        )}
      </Box>
      {withLogo && (
        <Box ml={8} mt={4.75}>
          <Logo />
        </Box>
      )}
    </Box>
  );
}
