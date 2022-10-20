export const getAssortmentLinks = images => {
  const assortmentLinks = [{
    id: 1,
    image: images?.WatchVideoIcon,
    link: 'https://youtu.be/sXf2ssofYUk'
  }];
  return assortmentLinks;
};
export const getLinks = images => {
  const links = [{
    id: 1,
    image: images?.FactoryIcon,
    link: 'https://youtu.be/X6lQcjH1Jc4'
  }, {
    id: 2,
    image: images?.ProductionIcon,
    link: 'https://youtu.be/pHthiLw2RpA'
  }, {
    id: 3,
    image: images?.ExamplesIcon,
    link: 'https://www.ecookna.ru/upload/email-links/portfolio/ecookna-portfolio.pdf'
  }];
  return links;
};
export const getAdvantages = images => {
  const advantages = [{
    id: 1,
    image: images?.AgeAdvantageImage
  }, {
    id: 2,
    image: images?.FreeSizingAdvantageIcon
  }, {
    id: 3,
    image: images?.GuaranteeAdvantageIcon
  }, {
    id: 4,
    image: images?.ClientsAdvantageIcon
  }];
  return advantages;
};
export const getPayments = images => {
  const payments = [{
    id: 1,
    image: images?.CashPaymentIcon
  }, {
    id: 2,
    image: images?.CardPaymentIcon
  }, {
    id: 3,
    image: images?.OnlinePaymentIcon
  }, {
    id: 4,
    image: images?.installmentIcon
  }];
  return payments;
};
export const getAdditions = images => {
  const additions = [{
    id: 1,
    text: $p.msg.printing_form.additions_labels.garage_gate,
    image: images?.GarageGateImage
  }, {
    id: 2,
    text: $p.msg.printing_form.additions_labels.balcony_decoration,
    image: images?.BalconyDecorationImage
  }, {
    id: 3,
    text: $p.msg.printing_form.additions_labels.curtains,
    image: images?.CurtainsImage
  }, {
    id: 4,
    text: $p.msg.printing_form.additions_labels.heating_radiator,
    image: images?.HeatingRadiatorImage
  }, {
    id: 5,
    text: $p.msg.printing_form.additions_labels.evolving_opacity,
    image: images?.EvolvingOpacityImage
  }, {
    id: 6,
    text: $p.msg.printing_form.additions_labels.orangery,
    image: images?.OrangeryImage
  }, {
    id: 7,
    text: $p.msg.printing_form.additions_labels.glass_door,
    image: images?.GlassDoorImage
  }, {
    id: 8,
    text: $p.msg.printing_form.additions_labels.glass_heater,
    image: images?.GlassHeaterImage
  }, {
    id: 9,
    text: $p.msg.printing_form.additions_labels.phone_charger,
    image: images?.PhoneChargerImage
  }];
  return additions;
};