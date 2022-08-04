function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Link,
  Box
} = $p.ui;
import PrnProto from '../PrnProto.js';
import { OCover1, OCover17, ODetails, ODetails3, OInfo1, OInfo4, OInfo6, OInfo7, OInfo10_1, OInfo10_2, OInfo10_3, OInfo10_4 } from '../img/index.js';
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));

const Svg = ({
  source
}) => {
  const __html = $p.utils.scale_svg(source, 246, 0);

  return React.createElement("div", {
    style: {
      textAlign: 'center'
    },
    dangerouslySetInnerHTML: {
      __html
    }
  });
};

const ExtendedParams = ({
  paramsArr
}) => paramsArr.length > 0 && paramsArr.map(([constructionName, params]) => params.length > 0 && React.createElement(React.Fragment, null, React.createElement(Typography, null, constructionName, ":"), React.createElement("ul", null, params.map(([paramName, paramValue]) => React.createElement("li", {
  class: "green"
}, React.createElement("b", null, paramName, ":"), " ", paramValue)))));

var _ref = React.createElement("b", null, "Масса общ/зап, кг:");

var _ref2 = React.createElement("b", null, "Количество, шт:");

var _ref3 = React.createElement("b", null, "Проф.система:");

var _ref4 = React.createElement("li", {
  class: "red"
}, React.createElement("b", null, "Цвет основы:"), " Белая");

var _ref5 = React.createElement("b", null, "Цвет:");

var _ref6 = React.createElement(Typography, null, "Стеклопакеты:");

var _ref7 = React.createElement(Typography, null, "Примечание:");

const Products = ({
  props,
  product
}) => {
  const constructionCount = product.characteristic.constructions._obj.length;
  const extendedParams = {};

  for (let i = 0; i <= constructionCount; i += 1) {
    let key = '';

    if (i === 0) {
      key = 'Дополнительные параметры';
    } else {
      const currentConstruction = product.characteristic.constructions.get(i - 1);
      key = currentConstruction?.furn?.name ? `${currentConstruction.furn.name} Исполнение - ${currentConstruction.direction.name.toLowerCase()}` : '';
    }

    extendedParams[key] = product.characteristic.params.map(param => {
      if (param.cnstr !== i) return null;
      return param;
    }).filter(param => param !== null && !param.hide).map(param => [param.param.name, param.value.name]);
  }

  const commonExtendedParams = Object.entries(extendedParams).filter(([key]) => key === 'Дополнительные параметры');
  const extendedParamsByConstruction = Object.entries(extendedParams).filter(([key]) => key && key !== 'Дополнительные параметры');
  const glasses = product.characteristic.glasses;
  const glassesWeight = glasses.map(glass => product.characteristic.elm_weight(glass.elm)).reduce((acc, glassWeight) => acc += glassWeight, 0).round();
  const constructionsWeight = product.characteristic.constructions.map(construction => product.characteristic.elm_weight(-1 * construction.cnstr)).reduce((acc, constructionWeight) => acc += constructionWeight, 0).round();
  return React.createElement(React.Fragment, null, React.createElement("div", {
    class: "o-details__14"
  }, React.createElement("div", {
    class: "o-details__15"
  }, React.createElement(Typography, {
    class: "o-details__20 green"
  }, "Номер: ", product.row), React.createElement("div", {
    class: "o-details__18"
  }, React.createElement(Svg, {
    source: product.characteristic.svg
  }))), React.createElement("div", {
    class: "o-details__16"
  }, React.createElement(Typography, {
    color: "yellow",
    class: "o-details__19 green"
  }, "Позиция: ", product.row), React.createElement(Box, {
    color: "primary.main",
    class: "o-details__17"
  }, React.createElement("ul", null, React.createElement("li", {
    class: "green"
  }, _ref, ` ${constructionsWeight}/${glassesWeight}`), React.createElement("li", {
    class: "green"
  }, _ref2, " ", product.quantity), React.createElement("li", {
    class: "green"
  }, _ref3, " ", product.characteristic.prod_nom.name), _ref4, React.createElement("li", {
    class: "green"
  }, _ref5, " ", product.characteristic.clr.presentation)), React.createElement(ExtendedParams, {
    paramsArr: commonExtendedParams
  }), glasses && React.createElement(React.Fragment, null, _ref6, React.createElement("ul", null, glasses.map(glass => React.createElement("li", {
    class: "green"
  }, `${glass.formula} (${glass.thickness} мм)`)))), React.createElement(ExtendedParams, {
    paramsArr: extendedParamsByConstruction
  }), product.note && React.createElement(React.Fragment, null, _ref7, React.createElement("ul", null, React.createElement("li", {
    class: "green"
  }, product.note)))))));
};

var _ref8 = React.createElement(OCover1, null);

var _ref9 = React.createElement(Typography, {
  variant: "h1",
  component: "h1",
  color: "blue"
}, "Коммерческое ", React.createElement("br", null), " предложение");

var _ref10 = React.createElement(Typography, {
  className: "o-cover__3"
}, "по изготовлению и установке ", React.createElement("br", null), "светопрозрачных конструкций");

var _ref11 = React.createElement(Typography, {
  class: "o-cover__5"
}, "Предложение действительно в течении 10 календарных дней");

var _ref12 = React.createElement(Typography, {
  class: "o-cover__7"
}, "Ваш персональный менеджер:");

var _ref13 = React.createElement(Typography, {
  class: "o-cover__14"
}, "Офис продаж:");

var _ref14 = React.createElement("div", {
  class: "o-cover__16"
}, React.createElement(OCover17, null), React.createElement(Typography, {
  class: "o-cover__18"
}, "ecookna.ru"));

var _ref15 = React.createElement("div", {
  class: "o-details__2"
}, React.createElement(ODetails3, null));

var _ref16 = React.createElement("div", {
  class: "o-details__11"
}, "Ваш персональный ", React.createElement("br", null), " менеджер:");

var _ref17 = React.createElement("br", null);

var _ref18 = React.createElement(Typography, {
  class: "o-details__5"
}, "В комплектацию Вашего заказа входит:");

var _ref19 = React.createElement("div", {
  class: "o-details__6"
});

var _ref20 = React.createElement("colgroup", null, React.createElement("col", {
  width: "25%"
}), React.createElement("col", null), React.createElement("col", {
  width: "13%"
}), React.createElement("col", {
  width: "13%"
}), React.createElement("col", {
  width: "13%"
}), React.createElement("col", {
  width: "13%"
}), React.createElement("col", {
  width: "13%"
}));

var _ref21 = React.createElement("tr", null, React.createElement("td", null, "Изделия"), React.createElement("td", null, "Цвет"), React.createElement("td", null, "Кол-во, шт."), React.createElement("td", null, "Площадь, кв.м."), React.createElement("td", null, "Цена ", React.createElement("br", null), "без скидки"), React.createElement("td", null, "Скидка"), React.createElement("td", null, "Сумма"));

var _ref22 = React.createElement("td", {
  colspan: "2"
}, "Всего");

var _ref23 = React.createElement("colgroup", null, React.createElement("col", {
  width: "61%"
}), React.createElement("col", {
  width: "13%"
}), React.createElement("col", {
  width: "13%"
}), React.createElement("col", {
  width: "13%"
}));

var _ref24 = React.createElement("th", null, "ИТОГО");

var _ref25 = React.createElement("th", null, "0");

var _ref26 = React.createElement(Typography, {
  class: "o-details__22"
}, "*Предложение действительно в течение 10 календарных дней.");

var _ref27 = React.createElement(Typography, {
  class: "o-details__23"
}, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера.");

var _ref28 = React.createElement("div", {
  class: "o-details__24"
}, React.createElement(Typography, {
  class: "o-details__25"
}, "Будем рады вашему отзыву о работе наших специалистов"), React.createElement("div", {
  class: "o-details__26"
}, React.createElement(Link, {
  class: "o-details__27",
  target: "_blank",
  href: "https://www.ecookna.ru/clients/napisat-otzyv/"
}, "Оставить отзыв")));

var _ref29 = React.createElement("div", {
  class: "o-info"
}, React.createElement("div", {
  class: "o-info__top"
}, React.createElement(OInfo1, null), React.createElement(Typography, {
  class: "o-info__2"
}, "Мы производим особенные окна для Вас. Учитываем не только интерьерные и экстерьерные особенности помещения, но и функциональную нагрузку каждой комнаты и строения."), React.createElement(Typography, {
  class: "o-info__3"
}, "Что мы предлагаем? - Тысячи комбинаций окон, дверей и других продуктов, для самых взыскательных заказчиков."), React.createElement(OInfo4, null), React.createElement(Typography, {
  class: "o-info__5"
}, "Комплектующие от мировых лидеров:")), React.createElement("div", {
  class: "o-info__6"
}, React.createElement(OInfo6, null)), React.createElement(Box, {
  color: "yellow",
  class: "o-info__bottom"
}, React.createElement(OInfo7, null), React.createElement("div", {
  class: "o-info__11"
}, React.createElement("div", {
  class: "o-info__9"
}, React.createElement(Typography, {
  component: "span"
}, "Переходите"), " по сылкам:"), React.createElement("div", {
  class: "o-info__8"
}, React.createElement("div", {
  class: "o-info__10"
}, React.createElement(Link, {
  href: "https://www.youtube.com/watch?v=X6lQcjH1Jc4"
}, React.createElement("div", null, React.createElement(OInfo10_1, null)), React.createElement(Typography, null, "Собственное производство "))), React.createElement("div", {
  class: "o-info__10"
}, React.createElement(Link, {
  href: "https://www.ecookna.ru/clients/3d/"
}, React.createElement("div", null, React.createElement(OInfo10_2, null)), React.createElement(Typography, null, "Панорама нашего шоу-рума "))), React.createElement("div", {
  class: "o-info__10"
}, React.createElement(Link, {
  href: "https://www.youtube.com/watch?v=pHthiLw2RpA"
}, React.createElement("div", null, React.createElement(OInfo10_3, null)), React.createElement(Typography, null, "Производство окон ПВХ"))), React.createElement("div", {
  class: "o-info__10"
}, React.createElement(Link, {
  href: "https://www.youtube.com/watch?v=zkKJTZ90QVo"
}, React.createElement("div", null, React.createElement(OInfo10_4, null)), React.createElement(Typography, null, "Постоянный участник телепроектов")))))));

class Offer59 extends PrnProto {
  componentDidMount() {
    const {
      attr,
      obj,
      print
    } = this.props;
    console.log(obj);
    obj.load_linked_refs().then(async () => {
      this.setState({
        loaded: true
      });
      const products = obj.production;
      this.setState({
        products
      });
    }).catch(err => {
      this.setState({
        err: err.message
      });
    });
    this.setState({
      loaded: true
    });
  }

  render() {
    const {
      props: {
        obj,
        attr
      },
      state: {
        loaded,
        products
      },
      classes
    } = this;
    const managerContacts = {
      phone_number: '',
      email_address: '',
      address: ''
    };
    const officeContacts = {
      phone_number: '',
      email_address: '',
      address: ''
    };
    const fullSquare = products && products.map(product => product.s * product.quantity).reduce((acc, productSquare) => acc += productSquare, 0).round(2);

    const getProductWeight = product => product.characteristic.constructions.map(construction => product.characteristic.elm_weight(-1 * construction.cnstr)).reduce((acc, constructionWeight) => acc += constructionWeight, 0);

    const fullWeight = products && products.map(product => getProductWeight(product) * product.quantity).reduce((acc, productWeight) => acc += productWeight, 0).round();
    obj.manager.contact_information.forEach(row => {
      switch (row.type.name) {
        case 'Адрес':
          if (row.presentation && !managerContacts.address) {
            managerContacts.address = row.presentation;
          }

          break;

        case 'Телефон':
          if (row.presentation && !managerContacts.phone_number) {
            managerContacts.phone_number = row.presentation;
          }

          break;

        case 'АдресЭлектроннойПочты':
          if (row.presentation && !managerContacts.email_address) {
            managerContacts.email_address = row.presentation;
          }

          break;

        default:
      }
    });
    obj.organization.contact_information.forEach(row => {
      switch (row.type.name) {
        case 'Адрес':
          if (row.presentation && !officeContacts.address) {
            officeContacts.address = row.presentation;
          }

          break;

        case 'Телефон':
          if (row.presentation && !officeContacts.phone_number) {
            officeContacts.phone_number = row.presentation;
          }

          break;

        case 'АдресЭлектроннойПочты':
          if (row.presentation && !officeContacts.email_address) {
            officeContacts.email_address = row.presentation;
          }

          break;

        default:
      }
    });
    const title = `Заполнения заказа №${obj.number_doc} от ${moment(obj.date).format('DD MMMM YYYY')} г.`;
    let loading = '';

    const Cell = ({
      right,
      ...props
    }) => React.createElement(TableCell, _extends({
      className: `${classes.tableCell} ${right ? classes.alignRight : ''}`
    }, props));

    return React.createElement(React.Suspense, {
      fallback: "Загрузка..."
    }, React.createElement(StyledFrame, {
      obj: obj,
      attr: attr,
      classes: classes,
      setClasses: this.setClasses,
      title: title,
      loading: loading
    }, React.createElement("div", {
      class: "o-cover"
    }, _ref8, _ref9, _ref10, React.createElement(Typography, {
      class: "o-cover__4 green"
    }, title), _ref11, React.createElement(Box, {
      display: "flex",
      flexDirection: {
        xs: 'column',
        sm: 'row'
      },
      p: {
        xs: 2,
        sm: 3,
        md: 4
      }
    }, React.createElement("div", {
      class: "o-cover__9"
    }, _ref12, React.createElement("div", {
      class: "o-cover__8"
    }, React.createElement("div", {
      class: "o-cover__10"
    }, React.createElement("div", {
      class: "o-cover__11 green"
    }, obj.manager.name), React.createElement("div", {
      class: "o-cover__12 green"
    }, managerContacts.phone_number)), React.createElement("div", {
      class: "o-cover__13 green"
    }, managerContacts.email_address)), officeContacts.address && React.createElement(React.Fragment, null, _ref13, React.createElement("div", {
      class: "o-cover__15 green"
    }, officeContacts.address), ' ')), _ref14)), React.createElement("div", {
      class: "o-details"
    }, React.createElement("div", {
      class: "o-details__1"
    }, _ref15, React.createElement("div", {
      class: "o-details__4"
    }, React.createElement(Typography, {
      class: "o-details__13"
    }, title), React.createElement("div", {
      class: "o-details__10"
    }, _ref16, React.createElement("div", {
      class: "o-details__12 green"
    }, obj.manager.name, " ", _ref17, [managerContacts.phone_number, managerContacts.email_address].filter(value => value !== '').join(', '))))), _ref18, _ref19, React.createElement("div", {
      class: "o-details__7"
    }, React.createElement("div", {
      class: "o-details__8"
    }, "Площадь изделий, кв.м:", ' ', React.createElement(Typography, {
      component: "span",
      class: "green"
    }, fullSquare)), React.createElement("div", {
      class: "o-details__9"
    }, "Масса изделий, кг:", ' ', React.createElement(Typography, {
      component: "span",
      class: "green"
    }, fullWeight))), products && products.map(product => React.createElement(Products, {
      product: product
    })), React.createElement("div", {
      class: "o-details__21 o-details__21--2"
    }, React.createElement("table", null, _ref20, _ref21, products && products.map(product => React.createElement("tr", null, React.createElement("td", {
      class: "green"
    }, product.characteristic.prod_nom.name_full), React.createElement("td", {
      class: "green"
    }, product.characteristic.clr.presentation), React.createElement("td", {
      class: "green"
    }, product.quantity), React.createElement("td", {
      class: "green"
    }, (product.s * product.quantity).round(2)), React.createElement("td", {
      class: "green"
    }, product.price * product.quantity), React.createElement("td", {
      class: "green"
    }, product.price * product.discount), React.createElement("td", {
      class: "green"
    }, product.price * product.quantity * (1 - product.discount)))), React.createElement("tr", null, _ref22, React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.quantity).reduce((acc, quantity) => acc += quantity, 0)), React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.s * product.quantity).reduce((acc, square) => acc += square, 0).round(2)), React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0)), React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity * product.discount).reduce((acc, discount) => acc += discount, 0)), React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0))))), React.createElement("div", {
      class: "o-details__21 o-details__21--3"
    }, React.createElement("table", null, _ref23, React.createElement("tr", null, _ref24, React.createElement("th", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0)), _ref25, React.createElement("th", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0))))), _ref26, _ref27, _ref28), _ref29));
  }

}

Offer59.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a48';
Offer59.destination = 'doc.calc_order';
Offer59.title = '5.9 КП Калева (jsx)';
export default Offer59;