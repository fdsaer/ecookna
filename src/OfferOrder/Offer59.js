/**
 * Аналог dhtmlx '5.9 КП Калева'
 *
 * @module Offer59
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

const { React, Table, TableBody, TableCell, TableHead, TableRow } = $p.ui;
import PrnProto from '../PrnProto.js';
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
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));

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
          <p>{constructionName}:</p>
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
    console.log(
      product.characteristic.params.map((param) => {
        if (param.cnstr !== i) return null;
        return param;
      })
    );
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
          <p class="o-details__20 green">Номер: {product.row}</p>
          <div class="o-details__18">
            <Svg source={product.characteristic.svg} />
          </div>
        </div>
        <div class="o-details__16">
          <p class="o-details__19 green">Позиция: {product.row}</p>
          <div class="o-details__17">
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
                <p>Стеклопакеты:</p>
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
                <p>Примечание:</p>
                <ul>
                  <li class="green">{product.note}</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
class Offer59 extends PrnProto {
  componentDidMount() {
    const { attr, obj, print } = this.props;
    console.log(obj);
    obj
      // метод .load_linked_refs здесь на самом деле не нужен, но почему то svg в production.characteristic не доступны
      // поэтому пока эта обертка здесь есть, а когда svg будут на своем месте ее можно будет убрать.
      .load_linked_refs()
      .then(async () => {
        this.setState({ loaded: true });
        // получим список заполнений, которым нужны эскизы
        const products = obj.production;
        this.setState({ products });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
    this.setState({ loaded: true });
  }

  render() {
    const {
      props: { obj, attr },
      // state: { imgs, loaded, err },
      state: { loaded, products },
      classes,
    } = this;
    const managerContacts = { phone: '', email: '' };
    const fullSquare =
      products &&
      products
        .map((product) => product.s * product.quantity)
        .reduce((acc, productSquare) => (acc += productSquare), 0)
        .round(2);
    const getProductWeight = (product) =>
      product.characteristic.constructions
        .map((construction) =>
          product.characteristic.elm_weight(-1 * construction.cnstr)
        )
        .reduce((acc, constructionWeight) => (acc += constructionWeight), 0);
    const fullWeight =
      products &&
      products
        .map((product) => getProductWeight(product) * product.quantity)
        .reduce((acc, productWeight) => (acc += productWeight), 0)
        .round();
    obj.leading_manager.contact_information.forEach((contact) => {
      if (contact.type === 'Телефон')
        managerContacts.phone = contact.presentation;
      if (contact.type === 'АдресЭлектроннойПочты')
        managerContacts.email = contact.presentation;
    });

    console.log({ managerContacts });
    const title = `Заполнения заказа №${obj.number_doc} от ${moment(
      obj.date
    ).format('DD MMMM YYYY')} г.`;
    let loading = '';

    const Cell = ({ right, ...props }) => (
      <TableCell
        className={`${classes.tableCell} ${right ? classes.alignRight : ''}`}
        {...props}
      />
    );

    return (
      <React.Suspense fallback="Загрузка...">
        <StyledFrame
          obj={obj}
          attr={attr}
          classes={classes}
          setClasses={this.setClasses}
          title={title}
          loading={loading}
          // err={err}
        >
          <div class="o-cover">
            <OCover1 />
            <h1 class="o-cover__2">
              Коммерческое <br /> предложение
            </h1>
            <p class="o-cover__3">
              по изготовлению и установке <br />
              светопрозрачных конструкций
            </p>
            <p class="o-cover__4 green">{title}</p>
            <p class="o-cover__5">
              Предложение действительно в течении 10 календарных дней
            </p>
            <div class="o-cover__6">
              <div class="o-cover__9">
                <p class="o-cover__7">Ваш персональный менеджер:</p>
                <div class="o-cover__8">
                  <div class="o-cover__10">
                    <div class="o-cover__11 green">{obj.manager.name}</div>
                    <div class="o-cover__12">Телефон менеджера</div>
                  </div>
                  <div class="o-cover__13">Почта менеджера</div>
                </div>
                <p class="o-cover__14">Офис продаж:</p>
                <div class="o-cover__15">Адрес офиса</div>{' '}
                {/* Как получить данные офиса и контакты менеджера? */}
              </div>
              <div class="o-cover__16">
                <OCover17 />
                <p class="o-cover__18">ecookna.ru</p>
              </div>
            </div>
          </div>

          <div class="o-details">
            <div class="o-details__1">
              <div class="o-details__2">
                <ODetails3 />
              </div>
              <div class="o-details__4">
                <p class="o-details__13">{title}</p>
                <div class="o-details__10">
                  <div class="o-details__11">
                    Ваш персональный <br /> менеджер:
                  </div>
                  <div class="o-details__12 green">
                    {obj.manager.name} <br />
                    {/* span Ниже нужен только для того, чтобы прописать в него класс, в верстке его не было */}
                    <span class="red">
                      +7 916 358-56-98, kolesnikov@ecookna.ru
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p class="o-details__5">В комплектацию Вашего заказа входит:</p>
            <div class="o-details__6"></div>
            <div class="o-details__7">
              <div class="o-details__8">
                Площадь изделий, кв.м: <span class="green">{fullSquare}</span>
              </div>
              <div class="o-details__9">
                Масса изделий, кг: <span class="green">{fullWeight}</span>
              </div>
            </div>
            {products &&
              products.map((product) => <Products product={product} />)}
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
                  <td>Скидка, %</td>
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
                      <td class="green">{product.discount_percent}</td>
                      <td class="green">
                        {product.price *
                          product.quantity *
                          (1 - product.discount)}
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
                    {/* не понятно как суммировать скидку */}
                    {products &&
                      products
                        .map((product) => product.discount_percent)
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
            <p class="o-details__22">
              *Предложение действительно в течение 10 календарных дней.
            </p>
            <p class="o-details__23">
              Для вашего удобства, точный расчет стоимости, заключение договора
              и оплата могут быть осуществлены на объекте в день проведения
              замера.
            </p>
            <div class="o-details__24">
              <div class="o-details__25">
                Будем рады вашему отзыву о работе наших специалистов
              </div>
              <div class="o-details__26">
                <a
                  class="o-details__27"
                  target="_blank"
                  href="https://www.ecookna.ru/clients/napisat-otzyv/"
                >
                  Оставить отзыв
                </a>
              </div>
            </div>
          </div>

          <div class="o-info">
            <div class="o-info__top">
              <OInfo1 />
              <p class="o-info__2">
                Мы производим особенные окна для Вас. Учитываем не только
                интерьерные и экстерьерные особенности помещения, но и
                функциональную нагрузку каждой комнаты и строения.
              </p>
              <p class="o-info__3">
                Что мы предлагаем? - Тысячи комбинаций окон, дверей и других
                продуктов, для самых взыскательных заказчиков.
              </p>
              <OInfo4 />
              <p class="o-info__5">Комплектующие от мировых лидеров:</p>
            </div>
            <div class="o-info__6">
              <OInfo6 />
            </div>
            <div class="o-info__bottom">
              <OInfo7 />
              <div class="o-info__11">
                <div class="o-info__9">
                  <span>Переходите</span> по сылкам:
                </div>
                <div class="o-info__8">
                  <div class="o-info__10">
                    <a href="https://www.youtube.com/watch?v=X6lQcjH1Jc4">
                      <div>
                        <OInfo10_1 />
                      </div>
                      <p>Собственное производство </p>
                    </a>
                  </div>
                  <div class="o-info__10">
                    <a href="https://www.ecookna.ru/clients/3d/">
                      <div>
                        <OInfo10_2 />
                      </div>
                      <p>Панорама нашего шоу-рума </p>
                    </a>
                  </div>
                  <div class="o-info__10">
                    <a href="https://www.youtube.com/watch?v=pHthiLw2RpA">
                      <div>
                        <OInfo10_3 />
                      </div>
                      <p>Производство окон ПВХ</p>
                    </a>
                  </div>
                  <div class="o-info__10">
                    <a href="https://www.youtube.com/watch?v=zkKJTZ90QVo">
                      <div>
                        <OInfo10_4 />
                      </div>
                      <p>Постоянный участник телепроектов</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledFrame>
      </React.Suspense>
    );
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Offer59.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a48';
Offer59.destination = 'doc.calc_order';
Offer59.title = '5.9 КП Калева (jsx)';

export default Offer59;
