import Logo from './Logo.js';
const { React, Box, Typography } = $p.ui;

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
              <Typography variant="inherit">
                {[office.name, office.address]
                  .filter((value) => value)
                  .join(', ')}
              </Typography>
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
