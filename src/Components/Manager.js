import ManagerIcon from '../img/managerIcon.svg';
const { React, Box, Typography } = $p.ui;

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
