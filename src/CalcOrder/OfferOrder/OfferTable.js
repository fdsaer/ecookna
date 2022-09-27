import { fullSquare, fullWeight, getProductWeight } from './OfferData.js';

export default function getProductsData(products) {
  const productsTotalPrice = (products) =>
    products &&
    products
      .map((product) => product.price * product.quantity)
      .reduce((acc, price) => (acc += price), 0)
      .round(0);

  const productsTotalDiscount = (products) =>
    products &&
    products
      .map((product) => product.price * product.quantity * product.discount)
      .reduce((acc, discount) => (acc += discount), 0);

  const productsTotalSum = (products) =>
    products &&
    products
      .map(
        (product) => product.price * product.quantity * (1 - product.discount)
      )
      .reduce((acc, price) => (acc += price), 0)
      .round(0);

  const productsTotalQuantity = (
    products // Считаем сумму количества изделий в заказе
  ) =>
    products &&
    products
      .map((product) => product.quantity)
      .reduce((acc, quantity) => (acc += quantity), 0);

  const productListSvg = products
    .map((product) => {
      // if (!product.nom.is_service && !product.nom.grouping && !product.nom.is_accessory && product.nom.name !== "Аксессуары") {
      //   return product;
      // }
      if (
        product.characteristic.cnn_elmnts._obj.length ||
        product.characteristic.coordinates._obj.length
      ) {
        return product;
      }
    })
    .filter((product) => product);

  const productListExtraItems = products
    .map((product) => {
      // if (!product.nom.is_service && product.nom.grouping || product.nom.is_accessory || product.nom.name === "Аксессуары") {
      //   return product;
      // }
      if (
        !product.nom.is_service &&
        !product.characteristic.cnn_elmnts._obj.length &&
        !product.characteristic.coordinates._obj.length
      ) {
        return product;
      }
    })
    .filter((product) => product);

  const productIsService = products
    .map((product) => {
      if (product.nom.is_service) {
        return product;
      }
    })
    .filter((product) => product);

  return {
    head: [
      //Шапка таблицы изделий
      { text: 'Название', width: '25%', id: 0 },
      { text: 'Цвет', width: 'auto', id: 1 },
      { text: 'Количество (шт.)', width: '13%', id: 2 },
      { text: 'Общий вес (кг)', width: '13%', id: 3 },
      { text: 'Общая площадь (м2)', width: '13%', id: 4 },
      { text: 'Цена без скидки (руб.)', width: '13%', id: 5 },
      { text: 'Скидка (%)', width: '13%', id: 6 },
      { text: 'Цена со скидкой (руб.)', width: '13%', id: 7 },
    ],
    headExtraItem: [
      //Шапка таблицы доп.комплектации
      { text: 'Название', width: '25%', id: 0 },
      { text: 'Количество (шт.)', width: '13%', id: 1 },
      { text: 'Цена без скидки (руб.)', width: '13%', id: 2 },
      { text: 'Скидка (%)', width: '13%', id: 3 },
      { text: 'Цена со скидкой (руб.)', width: '13%', id: 4 },
    ],
    headService: [
      //Шапка таблицы услуг
      { text: 'Название', width: '25%', id: 0 },
      { text: 'Цена без скидки (руб.)', width: '13%', id: 1 },
      { text: 'Скидка (%)', width: '13%', id: 2 },
      { text: 'Цена со скидкой (руб.)', width: '13%', id: 3 },
    ],
    rows: productListSvg
      ? productListSvg.map((product) => {
          return [
            {
              text: product.characteristic.prod_nom.name_full
                ? product.characteristic.prod_nom.name_full
                : product.characteristic.sys.name,
              id: 0,
            },
            { text: product.characteristic.clr.presentation, id: 1 },
            { text: product.quantity.round(0), id: 2 },
            {
              text: (getProductWeight(product) * product.quantity).round(2),
              id: 4,
            }, // Вычисляем массу каждого изделия
            { text: (product.s * product.quantity).round(2), id: 3 },
            { text: (product.price * product.quantity).round(0), id: 5 },
            { text: (product.price * product.discount).round(0), id: 6 },
            {
              text: (
                product.price *
                product.quantity *
                (1 - product.discount)
              ).round(0),
              id: 7,
            },
          ];
        })
      : null,
    //Строки таблицы доп.комплектации
    rowsExtraItem: productListExtraItems
      ? productListExtraItems.map((product) => {
          return [
            // {
            //   text: product.characteristic.prod_nom.name_full
            //     ? product.characteristic.prod_nom.name_full
            //     : product.nom.name_full,
            //   id: 0,
            // },
            {
              text:
                product.characteristic.prod_nom.name_full &&
                product.characteristic.prod_nom.name_full !== 'Аксессуары'
                  ? product.characteristic.prod_nom.name_full
                  : product.characteristic.name,
              id: 0,
            },
            { text: product.quantity.round(0), id: 1 },
            { text: (product.price * product.quantity).round(0), id: 2 },
            { text: (product.price * product.discount).round(0), id: 3 },
            {
              text: (
                product.price *
                product.quantity *
                (1 - product.discount)
              ).round(0),
              id: 7,
            },
          ];
        })
      : null,
    //Строки таблицы услуг
    rowsService: productIsService
      ? productIsService.map((product) => {
          return [
            {
              text: product.characteristic.prod_nom.name_full
                ? product.characteristic.prod_nom.name_full
                : product.nom.name_full,
              id: 0,
            },
            { text: (product.price * product.quantity).round(0), id: 1 },
            { text: (product.price * product.discount).round(0), id: 2 },
            {
              text: (
                product.price *
                product.quantity *
                (1 - product.discount)
              ).round(0),
              id: 3,
            },
          ];
        })
      : null,
    total: productListSvg
      ? [
          //Итого для таблицы изделий
          {
            text: 'Всего',
            id: 0,
          },
          {
            text: productsTotalQuantity(productListSvg),
            id: 1,
          },
          {
            text: fullWeight(productListSvg),
            id: 2,
          },
          {
            text: fullSquare(productListSvg),
            id: 3,
          },
          {
            text: productsTotalPrice(productListSvg),
            id: 4,
          },
          {
            text: productsTotalDiscount(productListSvg),
            id: 5,
          },
          {
            text: productsTotalSum(productListSvg),
            id: 6,
          },
        ]
      : null,
    totalExtraItem: productListExtraItems
      ? [
          //Итого для таблицы доп.комплектации
          { text: 'Всего', id: 0 },
          {
            text: productsTotalQuantity(productListExtraItems),
            id: 1,
          },
          {
            text: productsTotalPrice(productListExtraItems),
            id: 4,
          },
          {
            text: productsTotalDiscount(productListExtraItems),
            id: 5,
          },
          {
            text: productsTotalSum(productListExtraItems),
            id: 6,
          },
        ]
      : null,
    totalService: productIsService
      ? [
          //Итого для таблицы услуг
          {
            text: 'Всего',
            id: 0,
          },
          {
            text: productsTotalPrice(productIsService),
            id: 3,
          },
          {
            text: productsTotalDiscount(productIsService),
            id: 4,
          },
          {
            text: productsTotalSum(productIsService),
            id: 5,
          },
        ]
      : null,
  };
}
