const ManagerIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1NiA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjkyMzEgMC4yMDAwMTJDNDMuMDIzMSAwLjIwMDAxMiA1NS4zMjMxIDEyLjUgNTUuMzIzMSAyNy42QzU1LjMyMzEgNDIuNyA0My4wMjMxIDU1IDI3LjkyMzEgNTVDMTIuODIzMSA1NSAwLjUyMzA3MSA0Mi43IDAuNTIzMDcxIDI3LjZDMC41MjMwNzEgMTIuNSAxMi44MjMxIDAuMjAwMDEyIDI3LjkyMzEgMC4yMDAwMTJaIiBmaWxsPSIjQkFEMUFFIi8+CjxwYXRoIGQ9Ik00My4zMjMgMzIuM0M0My4yMjMgMjguNCA0MC4wMjMgMjUuMyAzNi4xMjMgMjUuMkgzMy4zMjNWMjMuMUMzNC4xMjMgMjIuMSAzNC42MjMgMjAuOCAzNC43MjMgMTkuNVYxNi4yQzM1LjIyMyAxNiAzNS42MjMgMTUuNyAzNi4wMjMgMTUuNUwzNi4yMjMgMTUuNFYxMy43QzM2LjIyMyAxMCAzMy4xMjMgNi45MDAwMiAyOS4zMjMgNi45MDAwMkgyNi43MjNDMjIuOTIzIDYuOTAwMDIgMTkuODIzIDkuOTAwMDIgMTkuODIzIDEzLjdWMTguMUgyMC4zMjNDMjAuNjIzIDE4LjEgMjAuOTIzIDE4LjEgMjEuMjIzIDE4LjFWMTkuNUMyMS4zMjMgMjAuOSAyMS44MjMgMjIuMiAyMi43MjMgMjMuMlYyNS4xSDIwLjIyM0gyMC4xMjNDMjAuMTIzIDI1LjEgMjAuMTIzIDI1LjEgMjAuMDIzIDI1LjFDMTYuMDIzIDI1LjEgMTIuODIzIDI4LjIgMTIuNjIzIDMyVjQyLjNDMTIuNjIzIDQzLjMgMTMuNDIzIDQ0LjEgMTQuNDIzIDQ0LjFIMzMuNDIzQzM0LjAyMyA0NC4xIDM0LjUyMyA0My42IDM0LjUyMyA0M0MzNC41MjMgNDIuNCAzNC4wMjMgNDIgMzMuNDIzIDQySDMxLjUyM0wzMC4xMjMgMzEuNkwzMS4xMjMgMjkuOUwzMS42MjMgMzAuM0MzMS45MjMgMzAuNiAzMi40MjMgMzAuNiAzMi44MjMgMzAuNEMzMy4yMjMgMzAuMiAzMy41MjMgMjkuOCAzMy41MjMgMjkuNFYyNy4ySDM2LjAyM0gzNi4xMjNDMzkuMDIzIDI3LjIgNDEuNDIzIDI5LjUgNDEuNDIzIDMyLjNWMzIuNFY0Mi45QzQxLjQyMyA0My41IDQxLjkyMyA0NCA0Mi41MjMgNDRDNDMuMTIzIDQ0IDQzLjYyMyA0My41IDQzLjYyMyA0Mi45VjMyLjVWMzIuNEM0My4zMjMgMzIuNCA0My4zMjMgMzIuMyA0My4zMjMgMzIuM1pNMjQuMzIzIDQySDE0LjcyM1YzMi40VjMyLjFDMTQuOTIzIDI5LjQgMTcuMjIzIDI3LjMgMTkuOTIzIDI3LjNDMjAuMTIzIDI3LjMgMjAuMjIzIDI3LjMgMjAuNDIzIDI3LjNIMjAuODIzSDIyLjYyM1YyOS42QzIyLjYyMyAzMCAyMi44MjMgMzAuMyAyMy4yMjMgMzAuNUMyMy42MjMgMzAuNyAyNC4wMjMgMzAuNiAyNC4zMjMgMzAuNEwyNC43MjMgMzBMMjUuNjIzIDMxLjZMMjQuMzIzIDQyWk0yNC43MjMgMjcuNVYyNS4xQzI1LjQyMyAyNS40IDI2LjEyMyAyNS43IDI2LjgyMyAyNS44TDI0LjcyMyAyNy41Wk0yNi41MjMgNDJMMjcuOTIzIDMxLjlMMjkuMzIzIDQySDI2LjUyM1pNMjguNTIzIDI5LjhIMjcuMTIzTDI2LjQyMyAyOC43TDI3LjgyMyAyNy42TDI5LjIyMyAyOC43TDI4LjUyMyAyOS44Wk0yOC44MjMgMjUuN0MyOS42MjMgMjUuNiAzMC40MjMgMjUuMyAzMS4xMjMgMjVWMjcuNkwyOC44MjMgMjUuN1pNMzIuMjIzIDE0LjhDMzIuMDIzIDE0LjggMzEuODIzIDE0LjkgMzEuNzIzIDE0LjlIMzEuNjIzQzMxLjMyMyAxNC45IDMwLjkyMyAxNSAzMC42MjMgMTVDMjguODIzIDE1IDI3LjEyMyAxNC40IDI1LjcyMyAxMy40TDI1LjMyMyAxMy4xTDI1LjAyMyAxMy40QzI0LjgyMyAxMy43IDI0LjUyMyAxNCAyNC4yMjMgMTQuMkwyMy44MjMgMTQuNkwyNC4zMjMgMTVDMjYuMTIzIDE2LjQgMjguNDIzIDE3LjIgMzAuNzIzIDE3LjJDMzEuNDIzIDE3LjIgMzIuMDIzIDE3LjEgMzIuNzIzIDE3VjE4LjdDMzIuNzIzIDE4LjggMzIuNzIzIDE5IDMyLjcyMyAxOS4xQzMyLjcyMyAxOS4yIDMyLjcyMyAxOS40IDMyLjcyMyAxOS41QzMyLjUyMyAyMS45IDMwLjUyMyAyMy43IDI4LjEyMyAyMy43QzI1LjcyMyAyMy43IDIzLjcyMyAyMS45IDIzLjUyMyAxOS41VjE5LjRWMTkuM1YxOC45VjE4LjhWMTguN1YxNy41QzI0LjAyMyAxNy4zIDI0LjUyMyAxNy4xIDI0LjkyMyAxNi44TDI1LjQyMyAxNi41TDIzLjgyMyAxNUwyMy4yMjMgMTUuMkMyMi43MjMgMTUuNSAyMi4zMjMgMTUuNyAyMS44MjMgMTUuOFYxMy42QzIxLjgyMyAxMS4xIDI0LjAyMyA5LjAwMDAyIDI2LjUyMyA5LjAwMDAySDI5LjEyM0MzMS43MjMgOS4wMDAwMiAzMy44MjMgMTEuMSAzMy44MjMgMTMuN1YxNC4yQzMzLjgyMyAxNC4yIDMzLjgyMyAxNC4yIDMzLjcyMyAxNC4yQzMzLjMyMyAxNC41IDMyLjcyMyAxNC43IDMyLjIyMyAxNC44WiIgZmlsbD0iIzFEMzIyQiIvPgo8cGF0aCBkPSJNMzguMTIzIDMzLjZIMzMuODIzQzMzLjIyMyAzMy42IDMyLjcyMyAzNC4xIDMyLjcyMyAzNC43QzMyLjcyMyAzNS4zIDMzLjIyMyAzNS44IDMzLjgyMyAzNS44SDM4LjEyM0MzOC43MjMgMzUuOCAzOS4yMjMgMzUuMyAzOS4yMjMgMzQuN0MzOS4yMjMgMzQuMSAzOC42MjMgMzMuNiAzOC4xMjMgMzMuNloiIGZpbGw9IiMxRDMyMkIiLz4KPHBhdGggZD0iTTM4LjYwNiA0My45NjQ1QzM5LjAyOTUgNDMuNTI4OSAzOC45ODc2IDQyLjgwMTMgMzguNTEyNCA0Mi4zMzkzQzM4LjAzNzIgNDEuODc3MyAzNy4zMDg3IDQxLjg1NTkgMzYuODg1MiA0Mi4yOTE1QzM2LjQ2MTcgNDIuNzI3MSAzNi41MDM2IDQzLjQ1NDcgMzYuOTc4OCA0My45MTY3QzM3LjQ1NCA0NC4zNzg3IDM4LjE4MjUgNDQuNDAwMSAzOC42MDYgNDMuOTY0NVoiIGZpbGw9IiMxRDMyMkIiLz4KPC9zdmc+Cg==";
const {
  React,
  Box,
  Typography
} = $p.ui;
export const getManagerInfo = obj => {
  const managerData = {
    name: obj.manager.name ?? '',
    phone_number: '',
    email_address: '',
    address: ''
  };
  obj.manager.contact_information.forEach(row => {
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

var _ref = React.createElement(Typography, null, "Ваш персональный ", React.createElement("br", null), " менеджер:");

var _ref2 = React.createElement("br", null);

export default function Manager({
  title,
  manager
}) {
  return React.createElement(Box, null, title && React.createElement(Box, {
    color: "textSecondary",
    fontSize: 22
  }, React.createElement(Typography, {
    variant: "inherit",
    color: "textSecondary",
    component: "p"
  }, title)), React.createElement(Box, {
    display: "flex",
    mt: 5.5,
    alignItems: "center"
  }, React.createElement(Box, {
    sx: {
      flex: '0 0 60px'
    }
  }, React.createElement("img", {
    src: ManagerIcon,
    style: {
      width: '100%'
    }
  })), React.createElement(Box, {
    sx: {
      flex: '0 1 auto'
    },
    ml: 2.5
  }, _ref), React.createElement(Box, {
    sx: {
      flex: '1 1 0%'
    },
    ml: 2.5
  }, manager.name, " ", _ref2, [manager.phone_number, manager.email_address].filter(value => value !== '').join(', '))));
}