import { fullSquare, fullWeight, getProductWeight } from './OfferData.js';
export default function getProductsData(products, tableRowsPerPage) {
  const productsTotalPrice = products => products && products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0);

  const productsTotalSum = products => products && products.map(product => product.amount).reduce((acc, price) => acc += price, 0);

  const productsTotalQuantity = (products) => products && products.map(product => product.quantity).reduce((acc, quantity) => acc += quantity, 0).round(0);

  const productListSvg = products.map(product => {
    if (product.characteristic.cnn_elmnts._obj.length || product.characteristic.coordinates._obj.length) {
      return product;
    }
  }).filter(product => product);
  const productListExtraItems = products.map(product => {
    if (!product.nom.is_service && !product.characteristic.cnn_elmnts._obj.length && !product.characteristic.coordinates._obj.length) {
      return product;
    }
  }).filter(product => product);
  const productIsService = products.map(product => {
    if (product.nom.is_service) {
      return product;
    }
  }).filter(product => product);
  const totalSum = productsTotalSum(productListSvg) + productsTotalSum(productListExtraItems) + productsTotalSum(productIsService);
  const totalPrice = productsTotalPrice(productListSvg) + productsTotalPrice(productListExtraItems) + productsTotalPrice(productIsService);
  const tables = [{
    id: '0',
    title: $p.msg.printing_form.table_titles.products,
    head: [{
      text: $p.msg.printing_form.table_columns.label,
      width: 'auto',
      id: 0
    }, {
      text: $p.msg.printing_form.table_columns.color,
      width: 'auto',
      id: 1
    }, {
      text: $p.msg.printing_form.table_columns.quantity,
      width: '5%',
      id: 2
    }, {
      text: $p.msg.printing_form.table_columns.weight,
      width: '10%',
      id: 3
    }, {
      text: $p.msg.printing_form.table_columns.square,
      width: '10%',
      id: 4
    }, {
      text: $p.msg.printing_form.table_columns.price,
      width: '10%',
      id: 5
    }, {
      text: $p.msg.printing_form.table_columns.discount,
      width: '7%',
      id: 6
    }, {
      text: $p.msg.printing_form.table_columns.final_price,
      width: '10%',
      id: 7
    }],
    rows: productListSvg ? productListSvg.map((product, index) => ({
      id: index,
      data: [{
        text: product.nom.name ? product.nom.name : product.characteristic.sys.name,
        id: 0
      }, {
        text: product.characteristic.clr.presentation,
        id: 1
      }, {
        text: product.quantity.round(0),
        id: 2
      }, {
        text: (getProductWeight(product) * product.quantity).round(2),
        id: 3
      }, {
        text: (product.s * product.quantity).round(2),
        id: 4
      }, {
        text: (product.price * product.quantity).round(0),
        id: 5
      }, {
        text: product.discount_percent.round(0),
        id: 6
      }, {
        text: (product.price * product.quantity * (1 - product.discount_percent / 100)).round(0),
        id: 7
      }]
    })) : null,
    total: productListSvg ? [{
      text: $p.msg.printing_form.table_columns.totalProducts,
      id: 0
    }, {
      text: productsTotalQuantity(productListSvg),
      id: 1
    }, {
      text: fullWeight(productListSvg),
      id: 2
    }, {
      text: fullSquare(productListSvg),
      id: 3
    }, {
      text: productsTotalPrice(productListSvg).round(0),
      id: 4
    }, {
      text: productsTotalPrice(productListSvg) ? (100 - productsTotalSum(productListSvg) / productsTotalPrice(productListSvg) * 100).round(0) : 0,
      id: 5
    }, {
      text: productsTotalSum(productListSvg).round(0),
      id: 6
    }] : null
  }, {
    id: '1',
    title: $p.msg.printing_form.table_titles.extra_items,
    head: [{
      text: $p.msg.printing_form.table_columns.label,
      width: 'auto',
      id: 0
    }, {
      text: $p.msg.printing_form.table_columns.quantity,
      width: '10%',
      id: 1
    }, {
      text: $p.msg.printing_form.table_columns.price,
      width: '10%',
      id: 2
    }, {
      text: $p.msg.printing_form.table_columns.discount,
      width: '7%',
      id: 3
    }, {
      text: $p.msg.printing_form.table_columns.final_price,
      width: '10%',
      id: 4
    }],
    rows: productListExtraItems ? productListExtraItems.map((product, index) => ({
      id: index,
      data: [{
        text: product.nom.name && product.characteristic.prod_nom.name_full !== 'Аксессуары' ? product.nom.name : product.characteristic.name,
        id: 0
      }, {
        text: product.quantity.round(0),
        id: 1
      }, {
        text: (product.price * product.quantity).round(0),
        id: 2
      }, {
        text: product.discount_percent.round(0),
        id: 3
      }, {
        text: (product.price * product.quantity * (1 - product.discount_percent / 100)).round(0),
        id: 4
      }]
    })) : null,
    total: productListExtraItems ? [{
      text: $p.msg.printing_form.table_columns.totalExtraItems,
      id: 0
    }, {
      text: productsTotalQuantity(productListExtraItems),
      id: 1
    }, {
      text: productsTotalPrice(productListExtraItems).round(0),
      id: 2
    }, {
      text: productsTotalPrice(productListExtraItems) ? (100 - productsTotalSum(productListExtraItems) / productsTotalPrice(productListExtraItems) * 100).round(0) : 0,
      id: 3
    }, {
      text: productsTotalSum(productListExtraItems).round(0),
      id: 4
    }] : null
  }, {
    id: '2',
    title: $p.msg.printing_form.table_titles.services,
    head: [{
      text: $p.msg.printing_form.table_columns.label,
      width: 'auto',
      id: 0
    }, {
      text: $p.msg.printing_form.table_columns.quantity,
      width: '10%',
      id: 1
    }, {
      text: $p.msg.printing_form.table_columns.price,
      width: '10%',
      id: 2
    }, {
      text: $p.msg.printing_form.table_columns.discount,
      width: '7%',
      id: 3
    }, {
      text: $p.msg.printing_form.table_columns.final_price,
      width: '10%',
      id: 4
    }],
    rows: productIsService ? productIsService.map((product, index) => ({
      id: index,
      data: [{
        text: product.nom.name ? product.nom.name : product.nom.name_full,
        id: 0
      }, {
        text: product.quantity.round(0),
        id: 1
      }, {
        text: (product.price * product.quantity).round(0),
        id: 2
      }, {
        text: product.discount_percent.round(0),
        id: 3
      }, {
        text: (product.price * product.quantity * (1 - product.discount_percent / 100)).round(0),
        id: 4
      }]
    })) : null,
    total: productIsService ? [{
      text: $p.msg.printing_form.table_columns.totalService,
      id: 0
    }, {
      text: productsTotalQuantity(productIsService),
      id: 1
    }, {
      text: productsTotalPrice(productIsService).round(0),
      id: 2
    }, {
      text: productsTotalPrice(productIsService) ? (100 - productsTotalSum(productIsService) / productsTotalPrice(productIsService) * 100).round(0) : 0,
      id: 3
    }, {
      text: productsTotalSum(productIsService).round(0),
      id: 4
    }] : null
  }, {
    id: '3',
    title: '',
    head: totalSum || totalPrice ? [{
      text: $p.msg.printing_form.table_titles.total,
      width: 'auto',
      id: 0
    }, {
      text: totalPrice.round(0),
      width: '10%',
      id: 2
    }, {
      text: totalPrice ? (100 - totalSum / totalPrice * 100).round(0) : 0,
      width: '7%',
      id: 3
    }, {
      text: totalSum.round(0),
      width: '10%',
      id: 4
    }] : null,
    rows: null,
    total: null
  }];
  const tablesChunks = tables.reduce((acc, table) => {
    const tableRowsNumber = Array.isArray(table.rows) ? table.rows.length : 0;
    const lastChunk = acc[acc.length - 1];
    const newAcc = acc.slice();
    const lastChunkRowsSumm = Array.isArray(lastChunk) ? lastChunk.reduce((acc, {
      rows
    }) => rows ? acc += rows.length : 0, 0) : 0;

    if (Array.isArray(lastChunk) && tableRowsNumber + lastChunkRowsSumm < tableRowsPerPage) {
      newAcc[newAcc.length - 1].push(table);
    } else {
      newAcc.push([table]);
    }

    return newAcc;
  }, []);
  return tablesChunks;
}