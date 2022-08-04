/**
 * Тело печатной формы
 *
 * @module Offer
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

import {
  OCover1,
  OCover17,
  ODetails,
  ODetails3,
  OInfo1,
  OInfo4,
  OInfo6,
  OInfo7,
  OInfo10_1,
  OInfo10_2,
  OInfo10_3,
  OInfo10_4,
} from '../img/index.js';
const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Link,
  Box,
} = $p.ui;

const Svg = ({ source }) => {
  const __html = $p.utils.scale_svg(source, 246, 0);
  return (
    <div
      style={{ textAlign: 'center' }}
      dangerouslySetInnerHTML={{ __html }}
    ></div>
  );
};

const ExtendedParams = ({ paramsArr }) =>
  paramsArr.length > 0 &&
  paramsArr.map(
    ([constructionName, params]) =>
      params.length > 0 && (
        <>
          <Typography>{constructionName}:</Typography>
          <ul>
            {params.map(([paramName, paramValue]) => (
              <li class="green">
                <b>{paramName}:</b> {paramValue}
              </li>
            ))}
          </ul>
        </>
      )
  );

const Products = ({ props, product }) => {
  const constructionCount = product.characteristic.constructions._obj.length;
  const extendedParams = {};
  for (let i = 0; i <= constructionCount; i += 1) {
    let key = '';
    if (i === 0) {
      key = 'Дополнительные параметры';
    } else {
      const currentConstruction = product.characteristic.constructions.get(
        i - 1
      );
      key = currentConstruction?.furn?.name
        ? `${
            currentConstruction.furn.name
          } Исполнение - ${currentConstruction.direction.name.toLowerCase()}`
        : '';
    }
    extendedParams[key] = product.characteristic.params
      .map((param) => {
        if (param.cnstr !== i) return null;
        return param;
      })
      .filter((param) => param !== null && !param.hide)
      .map((param) => [param.param.name, param.value.name]);
  }
  const commonExtendedParams = Object.entries(extendedParams).filter(
    ([key]) => key === 'Дополнительные параметры'
  );
  const extendedParamsByConstruction = Object.entries(extendedParams).filter(
    ([key]) => key && key !== 'Дополнительные параметры'
  );
  const glasses = product.characteristic.glasses;
  const glassesWeight = glasses
    .map((glass) => product.characteristic.elm_weight(glass.elm))
    .reduce((acc, glassWeight) => (acc += glassWeight), 0)
    .round();
  const constructionsWeight = product.characteristic.constructions
    .map((construction) =>
      product.characteristic.elm_weight(-1 * construction.cnstr)
    )
    .reduce((acc, constructionWeight) => (acc += constructionWeight), 0)
    .round();
  return (
    <>
      <div class="o-details__14">
        <div class="o-details__15">
          <Typography class="o-details__20 green">
            Номер: {product.row}
          </Typography>
          <div class="o-details__18">
            <Svg source={product.characteristic.svg} />
          </div>
        </div>
        <div class="o-details__16">
          <Typography color="yellow" class="o-details__19 green">
            Позиция: {product.row}
          </Typography>
          <Box color="primary.main" class="o-details__17">
            <ul>
              <li class="green">
                <b>Масса общ/зап, кг:</b>
                {` ${constructionsWeight}/${glassesWeight}`}
              </li>
              <li class="green">
                <b>Количество, шт:</b> {product.quantity}
              </li>
              <li class="green">
                <b>Проф.система:</b> {product.characteristic.prod_nom.name}
              </li>
              <li class="red">
                <b>Цвет основы:</b> Белая
              </li>
              <li class="green">
                <b>Цвет:</b> {product.characteristic.clr.presentation}
              </li>
            </ul>
            <ExtendedParams paramsArr={commonExtendedParams} />
            {glasses && (
              <>
                <Typography>Стеклопакеты:</Typography>
                <ul>
                  {glasses.map((glass) => (
                    <li class="green">{`${glass.formula} (${glass.thickness} мм)`}</li>
                  ))}
                </ul>
              </>
            )}
            <ExtendedParams paramsArr={extendedParamsByConstruction} />
            {product.note && (
              <>
                <Typography>Примечание:</Typography>
                <ul>
                  <li class="green">{product.note}</li>
                </ul>
              </>
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default function Offer(props) {
  let {
    obj,
    classes,
    title,
    officeContacts,
    managerContacts,
    fullSquare,
    fullWeight,
    products,
  } = props;

  return (
    <>
      <div class="o-cover">
        <OCover1 />
        <Typography variant="h1" component="h1" color="blue">
          Коммерческое <br /> предложение
        </Typography>
        <Typography className="o-cover__3">
          по изготовлению и установке <br />
          светопрозрачных конструкций
        </Typography>
        <Typography class="o-cover__4 green">{title}</Typography>
        <Typography class="o-cover__5">
          Предложение действительно в течении 10 календарных дней
        </Typography>
        <Box
          //  class="o-cover__6"
          display="flex"
          flexDirection={{
            xs: 'column',
            sm: 'row',
          }}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          <div class="o-cover__9">
            <Typography class="o-cover__7">
              Ваш персональный менеджер:
            </Typography>
            <div class="o-cover__8">
              <div class="o-cover__10">
                <div class="o-cover__11 green">{obj.manager.name}</div>
                <div class="o-cover__12 green">
                  {managerContacts.phone_number}
                </div>
              </div>
              <div class="o-cover__13 green">
                {managerContacts.email_address}
              </div>
            </div>
            {officeContacts.address && (
              <>
                <Typography class="o-cover__14">Офис продаж:</Typography>
                <div class="o-cover__15 green">
                  {officeContacts.address}
                </div>{' '}
              </>
            )}
          </div>
          <div class="o-cover__16">
            <OCover17 />
            <Typography class="o-cover__18">ecookna.ru</Typography>
          </div>
        </Box>
      </div>

      <div class="o-details">
        <div class="o-details__1">
          <div class="o-details__2">
            <ODetails3 />
          </div>
          <div class="o-details__4">
            <Typography class="o-details__13">{title}</Typography>
            <div class="o-details__10">
              <div class="o-details__11">
                Ваш персональный <br /> менеджер:
              </div>
              <div class="o-details__12 green">
                {obj.manager.name} <br />
                {[managerContacts.phone_number, managerContacts.email_address]
                  .filter((value) => value !== '')
                  .join(', ')}
              </div>
            </div>
          </div>
        </div>
        <Typography class="o-details__5">
          В комплектацию Вашего заказа входит:
        </Typography>
        <div class="o-details__6"></div>
        <div class="o-details__7">
          <div class="o-details__8">
            Площадь изделий, кв.м:{' '}
            <Typography component="span" class="green">
              {fullSquare}
            </Typography>
          </div>
          <div class="o-details__9">
            Масса изделий, кг:{' '}
            <Typography component="span" class="green">
              {fullWeight}
            </Typography>
          </div>
        </div>
        {products && products.map((product) => <Products product={product} />)}
        <div class="o-details__21 o-details__21--2">
          <table>
            <colgroup>
              <col width="25%" />
              <col />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
            </colgroup>
            <tr>
              <td>Изделия</td>
              <td>Цвет</td>
              <td>Кол-во, шт.</td>
              <td>Площадь, кв.м.</td>
              <td>
                Цена <br />
                без скидки
              </td>
              <td>Скидка</td>
              <td>Сумма</td>
            </tr>
            {products &&
              products.map((product) => (
                <tr>
                  <td class="green">
                    {product.characteristic.prod_nom.name_full}
                  </td>
                  <td class="green">
                    {product.characteristic.clr.presentation}
                  </td>
                  <td class="green">{product.quantity}</td>
                  <td class="green">
                    {(product.s * product.quantity).round(2)}
                  </td>
                  <td class="green">{product.price * product.quantity}</td>
                  <td class="green">{product.price * product.discount}</td>
                  <td class="green">
                    {product.price * product.quantity * (1 - product.discount)}
                  </td>
                </tr>
              ))}
            <tr>
              <td colspan="2">Всего</td>
              <td class="green">
                {products &&
                  products
                    .map((product) => product.quantity)
                    .reduce((acc, quantity) => (acc += quantity), 0)}
              </td>
              <td class="green">
                {products &&
                  products
                    .map((product) => product.s * product.quantity)
                    .reduce((acc, square) => (acc += square), 0)
                    .round(2)}
              </td>
              <td class="green">
                {products &&
                  products
                    .map((product) => product.price * product.quantity)
                    .reduce((acc, price) => (acc += price), 0)}
              </td>
              <td class="green">
                {products &&
                  products
                    .map(
                      (product) =>
                        product.price * product.quantity * product.discount
                    )
                    .reduce((acc, discount) => (acc += discount), 0)}
              </td>
              <td class="green">
                {products &&
                  products
                    .map(
                      (product) =>
                        product.price *
                        product.quantity *
                        (1 - product.discount)
                    )
                    .reduce((acc, price) => (acc += price), 0)}
              </td>
            </tr>
          </table>
        </div>
        <div class="o-details__21 o-details__21--3">
          <table>
            <colgroup>
              <col width="61%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
            </colgroup>
            <tr>
              <th>ИТОГО</th>
              <th class="green">
                {products &&
                  products
                    .map((product) => product.price * product.quantity)
                    .reduce((acc, price) => (acc += price), 0)}
              </th>
              <th>0</th>
              <th class="green">
                {products &&
                  products
                    .map(
                      (product) =>
                        product.price *
                        product.quantity *
                        (1 - product.discount)
                    )
                    .reduce((acc, price) => (acc += price), 0)}
              </th>
            </tr>
          </table>
        </div>
        <Typography class="o-details__22">
          *Предложение действительно в течение 10 календарных дней.
        </Typography>
        <Typography class="o-details__23">
          Для вашего удобства, точный расчет стоимости, заключение договора и
          оплата могут быть осуществлены на объекте в день проведения замера.
        </Typography>
        <div class="o-details__24">
          <Typography class="o-details__25">
            Будем рады вашему отзыву о работе наших специалистов
          </Typography>
          <div class="o-details__26">
            <Link
              class="o-details__27"
              target="_blank"
              href="https://www.ecookna.ru/clients/napisat-otzyv/"
            >
              Оставить отзыв
            </Link>
          </div>
        </div>
      </div>

      <div class="o-info">
        <div class="o-info__top">
          <OInfo1 />
          <Typography class="o-info__2">
            Мы производим особенные окна для Вас. Учитываем не только
            интерьерные и экстерьерные особенности помещения, но и
            функциональную нагрузку каждой комнаты и строения.
          </Typography>
          <Typography class="o-info__3">
            Что мы предлагаем? - Тысячи комбинаций окон, дверей и других
            продуктов, для самых взыскательных заказчиков.
          </Typography>
          <OInfo4 />
          <Typography class="o-info__5">
            Комплектующие от мировых лидеров:
          </Typography>
        </div>
        <div class="o-info__6">
          <OInfo6 />
        </div>
        <Box color="yellow" class="o-info__bottom">
          <OInfo7 />
          <div class="o-info__11">
            <div class="o-info__9">
              <Typography component="span">Переходите</Typography> по сылкам:
            </div>
            <div class="o-info__8">
              <div class="o-info__10">
                <Link href="https://www.youtube.com/watch?v=X6lQcjH1Jc4">
                  <div>
                    <OInfo10_1 />
                  </div>
                  <Typography>Собственное производство </Typography>
                </Link>
              </div>
              <div class="o-info__10">
                <Link href="https://www.ecookna.ru/clients/3d/">
                  <div>
                    <OInfo10_2 />
                  </div>
                  <Typography>Панорама нашего шоу-рума </Typography>
                </Link>
              </div>
              <div class="o-info__10">
                <Link href="https://www.youtube.com/watch?v=pHthiLw2RpA">
                  <div>
                    <OInfo10_3 />
                  </div>
                  <Typography>Производство окон ПВХ</Typography>
                </Link>
              </div>
              <div class="o-info__10">
                <Link href="https://www.youtube.com/watch?v=zkKJTZ90QVo">
                  <div>
                    <OInfo10_4 />
                  </div>
                  <Typography>Постоянный участник телепроектов</Typography>
                </Link>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
