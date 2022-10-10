import { fullSquare, fullWeight, getProductWeight } from './OfferData.js';

const getRowsNumber = table => {
  return data.reduce((acc, {
    paramsList
  }) => {
    const usefulParams = paramsList.filter(({
      value
    }) => value);
    return acc += usefulParams.length;
  }, 0);
};

export default function getProductsData(products, tableRowsPerPage) {
  const productsTotalPrice = products => products && products.map(product => product.price * product.quantity).reduce((acc, price) => acc += price, 0).round(0);

  const productsTotalDiscount = products => products && products.map(product => product.price * product.quantity * product.discount).reduce((acc, discount) => acc += discount, 0);

  const productsTotalSum = products => products && products.map(product => product.price * product.quantity * (1 - product.discount)).reduce((acc, price) => acc += price, 0).round(0);

  const productsTotalQuantity = (products) => products && products.map(product => product.quantity).reduce((acc, quantity) => acc += quantity, 0);

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
  const tables = [{
    id: '0',
    title: 'Изделия',
    head: [{
      text: $p.msg.printing_form.table_columns.label,
      width: '25%',
      id: 0
    }, {
      text: $p.msg.printing_form.table_columns.color,
      width: 'auto',
      id: 1
    }, {
      text: $p.msg.printing_form.table_columns.quantity,
      width: '13%',
      id: 2
    }, {
      text: $p.msg.printing_form.table_columns.weight,
      width: '13%',
      id: 3
    }, {
      text: $p.msg.printing_form.table_columns.square,
      width: '13%',
      id: 4
    }, {
      text: $p.msg.printing_form.table_columns.price,
      width: '13%',
      id: 5
    }, {
      text: $p.msg.printing_form.table_columns.discount,
      width: '13%',
      id: 6
    }, {
      text: $p.msg.printing_form.table_columns.final_price,
      width: '13%',
      id: 7
    }],
    rows: productListSvg ? productListSvg.map((product, index) => ({
      id: index,
      data: [{
        text: product.characteristic.prod_nom.name_full ? product.characteristic.prod_nom.name_full : product.characteristic.sys.name,
        id: 0
      }, {
        text: product.characteristic.clr.presentation,
        id: 1
      }, {
        text: product.quantity.round(0),
        id: 2
      }, {
        text: (getProductWeight(product) * product.quantity).round(2),
        id: 4
      }, {
        text: (product.s * product.quantity).round(2),
        id: 3
      }, {
        text: (product.price * product.quantity).round(0),
        id: 5
      }, {
        text: (product.price * product.discount).round(0),
        id: 6
      }, {
        text: (product.price * product.quantity * (1 - product.discount)).round(0),
        id: 7
      }]
    })) : null,
    total: productListSvg ? [{
      text: $p.msg.printing_form.table_columns.total,
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
      text: productsTotalPrice(productListSvg),
      id: 4
    }, {
      text: productsTotalDiscount(productListSvg),
      id: 5
    }, {
      text: productsTotalSum(productListSvg),
      id: 6
    }] : null
  }, {
    id: '1',
    title: 'Дополнительная комплектация',
    head: [{
      text: $p.msg.printing_form.table_columns.label,
      width: '25%',
      id: 0
    }, {
      text: $p.msg.printing_form.table_columns.quantity,
      width: '13%',
      id: 1
    }, {
      text: $p.msg.printing_form.table_columns.price,
      width: '13%',
      id: 2
    }, {
      text: $p.msg.printing_form.table_columns.discount,
      width: '13%',
      id: 3
    }, {
      text: $p.msg.printing_form.table_columns.final_price,
      width: '13%',
      id: 4
    }],
    rows: productListExtraItems ? productListExtraItems.map((product, index) => ({
      id: index,
      data: [{
        text: product.characteristic.prod_nom.name_full && product.characteristic.prod_nom.name_full !== 'Аксессуары' ? product.characteristic.prod_nom.name_full : product.characteristic.name,
        id: 0
      }, {
        text: product.quantity.round(0),
        id: 1
      }, {
        text: (product.price * product.quantity).round(0),
        id: 2
      }, {
        text: (product.price * product.discount).round(0),
        id: 3
      }, {
        text: (product.price * product.quantity * (1 - product.discount)).round(0),
        id: 7
      }]
    })) : null,
    total: productListExtraItems ? [{
      text: $p.msg.printing_form.table_columns.total,
      id: 0
    }, {
      text: productsTotalQuantity(productListExtraItems),
      id: 1
    }, {
      text: productsTotalPrice(productListExtraItems),
      id: 4
    }, {
      text: productsTotalDiscount(productListExtraItems),
      id: 5
    }, {
      text: productsTotalSum(productListExtraItems),
      id: 6
    }] : null
  }, {
    id: '2',
    title: 'Услуги',
    head: [{
      text: $p.msg.printing_form.table_columns.label,
      width: '25%',
      id: 0
    }, {
      text: $p.msg.printing_form.table_columns.price,
      width: '13%',
      id: 1
    }, {
      text: $p.msg.printing_form.table_columns.discount,
      width: '13%',
      id: 2
    }, {
      text: $p.msg.printing_form.table_columns.final_price,
      width: '13%',
      id: 3
    }],
    rows: productIsService ? productIsService.map((product, index) => ({
      id: index,
      data: [{
        text: product.characteristic.prod_nom.name_full ? product.characteristic.prod_nom.name_full : product.nom.name_full,
        id: 0
      }, {
        text: (product.price * product.quantity).round(0),
        id: 1
      }, {
        text: (product.price * product.discount).round(0),
        id: 2
      }, {
        text: (product.price * product.quantity * (1 - product.discount)).round(0),
        id: 3
      }]
    })) : null,
    total: productIsService ? [{
      text: $p.msg.printing_form.table_columns.total,
      id: 0
    }, {
      text: productsTotalPrice(productIsService),
      id: 3
    }, {
      text: productsTotalDiscount(productIsService),
      id: 4
    }, {
      text: productsTotalSum(productIsService),
      id: 5
    }] : null
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