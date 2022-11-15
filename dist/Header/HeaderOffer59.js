import Logo from '../Components/Logo.js';
import { getAdvantages } from '../CalcOrder/OfferOrder/Templates.js';
const {
  React,
  Box
} = $p.ui;

var _ref = React.createElement(Logo, {
  width: "90px"
});

export default function HeaderOffer59({
  withLogo = true,
  images
}) {
  const advantagesList = images ? getAdvantages(images) : null;
  return React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    sx: {
      height: '60px'
    }
  }, withLogo && _ref, advantagesList && advantagesList.length > 0 && advantagesList.map(({
    image,
    id
  }) => {
    return React.createElement(Box, {
      key: id,
      sx: {
        height: '60px',
        minHeight: '100%',
        display: 'flex'
      }
    }, React.createElement("img", {
      src: image,
      style: {
        display: 'block',
        width: '100%',
        minHeight: '100%',
        boxSizing: 'border-box'
      }
    }));
  }));
}