function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  React,
  TableCell
} = $p.ui;
import PrnProto from '../../PrnProto.js';
const StyledFrame = React.lazy(() => import('../../StyledFrame/index.js'));

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

var _ref = React.createElement("b", null, "Масса общ/зап, кг:");

var _ref2 = React.createElement("b", null, "Количество, шт:");

var _ref3 = React.createElement("b", null, "Проф.система:");

var _ref4 = React.createElement("li", {
  class: "red"
}, React.createElement("b", null, "Цвет основы:"), " Белая");

var _ref5 = React.createElement("b", null, "Цвет:");

var _ref6 = React.createElement("p", null, "Дополнительные параметры:");

var _ref7 = React.createElement("ul", null, React.createElement("li", null, React.createElement("b", null, "Цвет уплотнения:"), " Серый"));

var _ref8 = React.createElement("p", null, "Стеклопакеты:");

var _ref9 = React.createElement("p", null, "201 GU UNI JET Пов/Откидное:");

var _ref10 = React.createElement("ul", null, React.createElement("li", {
  class: "red"
}, React.createElement("b", null, "Ручка/Цвет:"), " Maco Rhapsody/Белый"), React.createElement("li", {
  class: "red"
}, React.createElement("b", null, "Цвет накладок:"), " Белый"), React.createElement("li", {
  class: "red"
}, React.createElement("b", null, "Тип Оконных петель:"), " Стандарт"), React.createElement("li", {
  class: "red"
}, React.createElement("b", null, "Микропроветривание:"), " щелевое"));

var _ref11 = React.createElement("p", null, "Примечание:");

var _ref12 = React.createElement("div", {
  class: "o-details__21"
}, React.createElement("table", null, React.createElement("colgroup", null, React.createElement("col", {
  width: "60%"
}), React.createElement("col", {
  width: "15%"
}), React.createElement("col", {
  width: "15%"
})), React.createElement("tr", null, React.createElement("th", null, "Наименование"), React.createElement("th", null, "Цвет"), React.createElement("th", null, "Кол-во, шт.")), React.createElement("tr", null, React.createElement("td", null, "Подставочный профиль Veka"), React.createElement("td", null), React.createElement("td", null, "1"))));

const Products = ({
  props,
  product
}) => {
  const glasses = product.characteristic.glasses;
  const prod_nom = product.prod_nom;
  const glassesWeight = glasses.map(glass => product.characteristic.elm_weight(glass.elm)).reduce((acc, glassWeight) => acc += glassWeight, 0).round();
  const constructionsWeight = product.characteristic.constructions.map(construction => product.characteristic.elm_weight(-1 * construction.cnstr)).reduce((acc, constructionWeight) => acc += constructionWeight, 0).round();
  return React.createElement(React.Fragment, null, React.createElement("div", {
    class: "o-details__14"
  }, React.createElement("div", {
    class: "o-details__15"
  }, React.createElement("p", {
    class: "o-details__20 green"
  }, "Номер: ", product.row), React.createElement("div", {
    class: "o-details__18"
  }, React.createElement(Svg, {
    source: product.characteristic.svg
  }))), React.createElement("div", {
    class: "o-details__16"
  }, React.createElement("p", {
    class: "o-details__19 green"
  }, "Позиция: ", product.row), React.createElement("div", {
    class: "o-details__17"
  }, React.createElement("ul", null, React.createElement("li", {
    class: "green"
  }, _ref, ` ${constructionsWeight}/${glassesWeight}`), React.createElement("li", {
    class: "green"
  }, _ref2, " ", product.quantity), React.createElement("li", {
    class: "green"
  }, _ref3, " ", product.characteristic.prod_nom.name), _ref4, React.createElement("li", {
    class: "green"
  }, _ref5, " ", product.characteristic.clr.presentation)), _ref6, _ref7, glasses && React.createElement(React.Fragment, null, _ref8, React.createElement("ul", null, glasses.map(glass => React.createElement("li", {
    class: "green"
  }, `${glass.formula} (${glass.thickness} мм)`)))), _ref9, _ref10, product.note && React.createElement(React.Fragment, null, _ref11, React.createElement("ul", null, React.createElement("li", {
    class: "green"
  }, product.note)))))), _ref12);
};

var _ref13 = React.createElement("h1", {
  class: "o-cover__2"
}, "Коммерческое ", React.createElement("br", null), " предложение");

var _ref14 = React.createElement("p", {
  class: "o-cover__3"
}, "по изготовлению и установке ", React.createElement("br", null), "светопрозрачных конструкций");

var _ref15 = React.createElement("p", {
  class: "o-cover__5"
}, "Предложение действительно в течении 10 календарных дней");

var _ref16 = React.createElement("p", {
  class: "o-cover__7"
}, "Ваш персональный менеджер:");

var _ref17 = React.createElement("div", {
  class: "o-cover__12"
}, "Телефон менеджера");

var _ref18 = React.createElement("div", {
  class: "o-cover__13"
}, "Почта менеджера");

var _ref19 = React.createElement("p", {
  class: "o-cover__14"
}, "Офис продаж:");

var _ref20 = React.createElement("div", {
  class: "o-cover__15"
}, "Адрес офиса");

var _ref21 = React.createElement("p", {
  class: "o-cover__18"
}, "ecookna.ru");

var _ref22 = React.createElement("div", {
  class: "o-details__11"
}, "Ваш персональный ", React.createElement("br", null), " менеджер:");

var _ref23 = React.createElement("br", null);

var _ref24 = React.createElement("span", {
  class: "red"
}, "+7 916 358-56-98, kolesnikov@ecookna.ru");

var _ref25 = React.createElement("p", {
  class: "o-details__5"
}, "В комплектацию Вашего заказа входит:");

var _ref26 = React.createElement("div", {
  class: "o-details__6"
});

var _ref27 = React.createElement("colgroup", null, React.createElement("col", {
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

var _ref28 = React.createElement("tr", null, React.createElement("td", null, "Изделия"), React.createElement("td", null, "Цвет"), React.createElement("td", null, "Кол-во, шт."), React.createElement("td", null, "Площадь, кв.м."), React.createElement("td", null, "Цена ", React.createElement("br", null), "без скидки"), React.createElement("td", null, "Скидка, %"), React.createElement("td", null, "Сумма"));

var _ref29 = React.createElement("td", {
  colspan: "2"
}, "Всего");

var _ref30 = React.createElement("colgroup", null, React.createElement("col", {
  width: "61%"
}), React.createElement("col", {
  width: "13%"
}), React.createElement("col", {
  width: "13%"
}), React.createElement("col", {
  width: "13%"
}));

var _ref31 = React.createElement("th", null, "ИТОГО");

var _ref32 = React.createElement("th", null, "0");

var _ref33 = React.createElement("p", {
  class: "o-details__22"
}, "*Предложение действительно в течение 10 календарных дней.");

var _ref34 = React.createElement("p", {
  class: "o-details__23"
}, "Для вашего удобства, точный расчет стоимости, заключение договора и оплата могут быть осуществлены на объекте в день проведения замера.");

var _ref35 = React.createElement("div", {
  class: "o-details__24"
}, React.createElement("div", {
  class: "o-details__25"
}, "Будем рады вашему отзыву о работе наших специалистов"), React.createElement("div", {
  class: "o-details__26"
}, React.createElement("a", {
  class: "o-details__27",
  target: "_blank",
  href: "https://www.ecookna.ru/clients/napisat-otzyv/"
}, "Оставить отзыв")));

var _ref36 = React.createElement("p", {
  class: "o-info__2"
}, "Мы производим особенные окна для Вас. Учитываем не только интерьерные и экстерьерные особенности помещения, но и функциональную нагрузку каждой комнаты и строения.");

var _ref37 = React.createElement("p", {
  class: "o-info__3"
}, "Что мы предлагаем? - Тысячи комбинаций окон, дверей и других продуктов, для самых взыскательных заказчиков.");

var _ref38 = React.createElement("p", {
  class: "o-info__5"
}, "Комплектующие от мировых лидеров:");

var _ref39 = React.createElement("div", {
  class: "o-info__9"
}, React.createElement("span", null, "Переходите"), " по сылкам:");

var _ref40 = React.createElement("p", null, "Собственное производство ");

var _ref41 = React.createElement("p", null, "Панорама нашего шоу-рума ");

var _ref42 = React.createElement("p", null, "Производство окон ПВХ");

var _ref43 = React.createElement("p", null, "Постоянный участник телепроектов");

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
    const imagesImport = import('./OfferImages.js');
    imagesImport.then(module => {
      this.setState({
        images: {
          OCover1: module.OCover1,
          OCover17: module.OCover17,
          ODetails3: module.ODetails3,
          OInfo1: module.OInfo1,
          OInfo4: module.OInfo4,
          OInfo6: module.OInfo6,
          OInfo7: module.OInfo7,
          OInfo10_1: module.OInfo10_1,
          OInfo10_2: module.OInfo10_2,
          OInfo10_3: module.OInfo10_3,
          OInfo10_4: module.OInfo10_4
        }
      });
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
        products,
        images
      },
      classes
    } = this;
    const managerContacts = {
      phone: '',
      email: ''
    };
    const fullSquare = products && products.map(product => product.s * product.quantity).reduce((acc, productSquare) => acc += productSquare, 0).round(2);

    const getProductWeight = product => product.characteristic.constructions.map(construction => product.characteristic.elm_weight(-1 * construction.cnstr)).reduce((acc, constructionWeight) => acc += constructionWeight, 0);

    const fullWeight = products && products.map(product => getProductWeight(product) * product.quantity).reduce((acc, productWeight) => acc += productWeight, 0).round();
    obj.leading_manager.contact_information.forEach(contact => {
      if (contact.type === 'Телефон') managerContacts.phone = contact.presentation;
      if (contact.type === 'АдресЭлектроннойПочты') managerContacts.email = contact.presentation;
    });
    console.log({
      managerContacts
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
      loading: !images
    }, React.createElement("div", {
      class: "o-cover"
    }, React.createElement("img", {
      src: images?.OCover1
    }), _ref13, _ref14, React.createElement("p", {
      class: "o-cover__4 green"
    }, title), _ref15, React.createElement("div", {
      class: "o-cover__6"
    }, React.createElement("div", {
      class: "o-cover__9"
    }, _ref16, React.createElement("div", {
      class: "o-cover__8"
    }, React.createElement("div", {
      class: "o-cover__10"
    }, React.createElement("div", {
      class: "o-cover__11 green"
    }, obj.leading_manager.name), _ref17), _ref18), _ref19, _ref20, ' '), React.createElement("div", {
      class: "o-cover__16"
    }, React.createElement("img", {
      src: images?.OCover17
    }), _ref21))), React.createElement("div", {
      class: "o-details"
    }, React.createElement("div", {
      class: "o-details__1"
    }, React.createElement("div", {
      class: "o-details__2"
    }, React.createElement("img", {
      src: images?.ODetails3
    })), React.createElement("div", {
      class: "o-details__4"
    }, React.createElement("p", {
      class: "o-details__13"
    }, title), React.createElement("div", {
      class: "o-details__10"
    }, _ref22, React.createElement("div", {
      class: "o-details__12 green"
    }, obj.manager.name, " ", _ref23, _ref24)))), _ref25, _ref26, React.createElement("div", {
      class: "o-details__7"
    }, React.createElement("div", {
      class: "o-details__8"
    }, "Площадь изделий, кв.м: ", React.createElement("span", {
      class: "green"
    }, fullSquare)), React.createElement("div", {
      class: "o-details__9"
    }, "Масса изделий, кг: ", React.createElement("span", {
      class: "green"
    }, fullWeight))), products && products.map(product => React.createElement(Products, {
      product: product
    })), React.createElement("div", {
      class: "o-details__21 o-details__21--2"
    }, React.createElement("table", null, _ref27, _ref28, products && products.map(product => React.createElement("tr", null, React.createElement("td", {
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
    }, product.discount_percent), React.createElement("td", {
      class: "green"
    }, product.price * product.quantity * (1 - product.discount)))), React.createElement("tr", null, _ref29, React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.quantity).reduce((acc, quantity) => acc += quantity, 0)), React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.s * product.quantity).reduce((acc, square) => acc += square, 0).round(2)), React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0)), React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.discount_percent).reduce((acc, discount) => acc += discount, 0)), React.createElement("td", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0))))), React.createElement("div", {
      class: "o-details__21 o-details__21--3"
    }, React.createElement("table", null, _ref30, React.createElement("tr", null, _ref31, React.createElement("th", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0)), _ref32, React.createElement("th", {
      class: "green"
    }, products && products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0))))), _ref33, _ref34, _ref35), React.createElement("div", {
      class: "o-info"
    }, React.createElement("div", {
      class: "o-info__top"
    }, React.createElement("img", {
      src: images?.OInfo1
    }), _ref36, _ref37, React.createElement("img", {
      src: images?.OInfo4
    }), _ref38), React.createElement("div", {
      class: "o-info__6"
    }, React.createElement("img", {
      src: images?.OInfo6
    })), React.createElement("div", {
      class: "o-info__bottom"
    }, React.createElement("img", {
      src: images?.OInfo7
    }), React.createElement("div", {
      class: "o-info__11"
    }, _ref39, React.createElement("div", {
      class: "o-info__8"
    }, React.createElement("div", {
      class: "o-info__10"
    }, React.createElement("a", {
      href: "https://www.youtube.com/watch?v=X6lQcjH1Jc4"
    }, React.createElement("div", null, React.createElement("img", {
      src: images?.OInfo10_1
    })), _ref40)), React.createElement("div", {
      class: "o-info__10"
    }, React.createElement("a", {
      href: "https://www.ecookna.ru/clients/3d/"
    }, React.createElement("div", null, React.createElement("img", {
      src: images?.OInfo10_2
    })), _ref41)), React.createElement("div", {
      class: "o-info__10"
    }, React.createElement("a", {
      href: "https://www.youtube.com/watch?v=pHthiLw2RpA"
    }, React.createElement("div", null, React.createElement("img", {
      src: images?.OInfo10_3
    })), _ref42)), React.createElement("div", {
      class: "o-info__10"
    }, React.createElement("a", {
      href: "https://www.youtube.com/watch?v=zkKJTZ90QVo"
    }, React.createElement("div", null, React.createElement("img", {
      src: images?.OInfo10_4
    })), _ref43))))))));
  }

}

Offer59.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a50';
Offer59.destination = 'doc.calc_order';
Offer59.title = '5.9 КП Калева (css)';
export default Offer59;