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
    image: images?.ExamplesIcon
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
export const getPayments61 = images => {
  const payments = [{
    id: 1,
    image: images?.CashPaymentIcon61,
    text: 'Наличные'
  }, {
    id: 2,
    image: images?.NonCashPaymentIcon61,
    text: 'Безналичные'
  }, {
    id: 3,
    image: images?.CardPaymentIcon61,
    text: 'Оплата картой'
  }, {
    id: 4,
    image: images?.InstallmentIcon61,
    text: 'Рассрочка'
  }, {
    id: 5,
    image: images?.FixedPriceIcon61,
    text: 'Фиксация цены'
  }];
  return payments;
};
export const getStatistics61 = () => {
  const statistics = [{
    id: 1,
    title: '300 000',
    text: 'довольных клиентов'
  }, {
    id: 2,
    title: '2 500 000',
    text: 'установленных окон'
  }, {
    id: 3,
    title: '25 лет',
    text: 'успешной работы'
  }];
  return statistics;
};
export const getAdvantages61 = images => {
  const advantages = [{
    id: 1,
    image: images?.OwnProductionIcon61,
    text: 'Собственный производственный комплекс с современным оборудованием'
  }, {
    id: 2,
    image: images?.ManagerIcon61,
    text: 'Индивидуальный менеджер для каждого клиента'
  }, {
    id: 3,
    image: images?.QualityIcon61,
    text: 'Гарантированное качество комплектующих, полного цикла изготовления и установки'
  }, {
    id: 4,
    image: images?.AccessoriesIcon61,
    text: 'Комплектующие от производителей с мировым именем: VEKA, Guardian, Roto'
  }, {
    id: 5,
    image: images?.PackageOfServicesIcon61,
    text: 'Полный пакет услуг: доставка, монтаж, обслуживание, комплексная отделка балконов и лоджий'
  }, {
    id: 6,
    image: images?.MountingBrigadesIcon61,
    text: 'Квалифицированные монтажные бригады с личной ответственностью за заказ'
  }];
  return advantages;
};
export const getAdditions61 = images => {
  const additions = [{
    id: 1,
    image: images?.RollerBlindsImage61,
    text: 'Рольшторы'
  }, {
    id: 2,
    image: images?.HiddenHardwareImage61,
    text: 'Скрытая фурнитура'
  }, {
    id: 3,
    image: images?.DecorImage61,
    text: 'Декор'
  }, {
    id: 4,
    image: images?.MosquitoNetsImage61,
    text: 'Москитные сетки'
  }, {
    id: 5,
    image: images?.WindowSillsImage61,
    text: 'Подоконники'
  }, {
    id: 6,
    image: images?.ChildLockImage61,
    text: 'Детские замки'
  }];
  return additions;
};
export const getAchievements61 = images => {
  const achievements = [{
    id: 1,
    image: images?.GoldenWindowImage61,
    title: '«Золотое окно»',
    text: '1 место в номинации «Самая известная оконная компания Москвы»'
  }, {
    id: 2,
    image: images?.PeoplesBrandImage61,
    title: 'Народная марка',
    text: '«Народная марка» в номинации «Пластиковые окна»'
  }, {
    id: 3,
    image: images?.CompanyOfTheYearImage61,
    title: 'Компания года',
    text: '«за индивидуальный подход к клиенту и профессионализм сотрудников»'
  }, {
    id: 4,
    image: images?.QualityStarImage61,
    title: 'Звезда качества',
    text: '«Звезда качества» во всероссийском рейтинге товаров и услуг'
  }, {
    id: 5,
    image: images?.EnvironmentallySafeImage61,
    title: 'Экологически безопасная продукция',
    text: 'Медаль выставки «Экологически безопасная продукция»'
  }];
  return achievements;
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