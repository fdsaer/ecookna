import ManagerIcon from '../img/managerIcon.svg';
const { React, Box, Typography } = $p.ui;

export const getManagerInfo = (obj) => {
  const managerData = {
    name: obj.manager.name ?? '',
    phone_number: '',
    email_address: '',
    address: '',
  };
  obj.manager.contact_information.forEach((row) => {
    switch (row.type.name) {
      case 'Адрес':
        if (row.presentation && !managerData.address) {
          managerData.address = row.presentation;
        }
        break;
      case 'Телефон':
        if (row.presentation && !managerData.phone_number) {
          managerData.phone_number = row.presentation;
        }
        break;
      case 'АдресЭлектроннойПочты':
        if (row.presentation && !managerData.email_address) {
          managerData.email_address = row.presentation;
        }
        break;
      default:
    }
  });
  return managerData;
};

export default function Manager({ title, manager }) {
  return (
    <Box>
      {title && (
        <Box color="textSecondary" fontSize={22}>
          <Typography variant="inherit" color="textSecondary" component="p">
            {title}
          </Typography>
        </Box>
      )}
      <Box display="flex" mt={5.5} alignItems="center">
        <Box sx={{ flex: '0 0 60px' }}>
          <img src={ManagerIcon} style={{ width: '100%' }} />
        </Box>
        <Box sx={{ flex: '0 1 auto' }} ml={2.5}>
          <Typography>
            Ваш персональный <br /> менеджер:
          </Typography>
        </Box>
        <Box sx={{ flex: '1 1 0%' }} ml={2.5}>
          {manager.name} <br />
          {[manager.phone_number, manager.email_address]
            .filter((value) => value !== '')
            .join(', ')}
        </Box>
      </Box>
    </Box>
  );
}
