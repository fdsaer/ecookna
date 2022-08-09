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
import Products from './Products.js';
const {
  React,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Typography,
  Link,
  Box,
} = $p.ui;

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
      <Box
        bgcolor="primary.main"
        mx="auto"
        maxWidth="794px"
        boxSizing="border-box"
        px={7.5}
        pb={3}
      >
        <OCover1 />
        <Box mt={5.75} mb={2.5}>
          <Typography variant="h1" component="h1" color="textPrimary">
            Коммерческое <br /> предложение
          </Typography>
        </Box>
        <Box fontSize={28} mt={-2} mb={2.5} lineHeight={1.3}>
          <Typography variant="inherit" component="p">
            по изготовлению и установке <br />
            светопрозрачных конструкций
          </Typography>
        </Box>
        <Typography color="textSecondary">{title}</Typography>
        <Box mt={5.75} mb={2.5} fontSize={15}>
          <Typography variant="inherit">
            Предложение действительно в течении 10 календарных дней
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" fontSize={15}>
          <Box sx={{ flex: '1 1 0%' }} mt={1.5} mb={1}>
            <Box mt={1.5} mb={1}>
              <Typography variant="inherit">
                Ваш персональный менеджер:
              </Typography>
            </Box>
            <Box bgcolor="background.default" p={1} display="flex">
              <Box sx={{ flex: '1 1 0%' }}>
                <Typography variant="inherit">{obj.manager.name}</Typography>
                <Typography variant="inherit">
                  {managerContacts.phone_number}
                </Typography>
              </Box>
              <Typography variant="inherit">
                {managerContacts.email_address}
              </Typography>
            </Box>
            {officeContacts.address && (
              <>
                <Box mt={2.5} mb={1}>
                  <Typography variant="inherit">Офис продаж:</Typography>
                </Box>
                <Box bgcolor="background.default" p={1}>
                  <Typography variant="inherit">
                    {officeContacts.address}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
          <Box ml={8} mt={4.75}>
            <Box width="184px">
              <OCover17 />
            </Box>
            <Box fontSize={27}>
              <Typography variant="inherit">ecookna.ru</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        mx="auto"
        maxWidth="794px"
        boxSizing="border-box"
        px={3.75}
        pt={2}
        pb={2}
      >
        <Box display="flex" pt={2.5}>
          <Box width={114}>
            <ODetails3 />
          </Box>
          <Box ml={4}>
            <Box mt={-0.5} mb={2.5} fontSize={22}>
              <Typography variant="inherit" color="textSecondary">
                {title}
              </Typography>
            </Box>
            <Box display="flex">
              <Box sx={{ flex: '0 1 auto' }}>
                <Typography>
                  Ваш персональный <br /> менеджер:
                </Typography>
              </Box>
              <Box sx={{ flex: '1 1 0%' }} ml={2.5}>
                {obj.manager.name} <br />
                {[managerContacts.phone_number, managerContacts.email_address]
                  .filter((value) => value !== '')
                  .join(', ')}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box ml={18.25} mt={1.5} mb={0.75}>
          <Typography>В комплектацию Вашего заказа входит:</Typography>
        </Box>
        <div class="o-details__6"></div>
        <Box display="flex" flexDirection="row" sx={{ flex: '0 0 400px' }}>
          <Box sx={{ flex: '0 0 400px' }}>
            <Typography variant="subtitle2" component="p">
              Площадь изделий, кв.м:{' '}
              <Typography variant="subtitle2" component="span">
                {fullSquare}
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 0%' }} pl={5.25}>
            <Typography variant="subtitle2" component="p">
              Масса изделий, кг:{' '}
              <Typography variant="subtitle2" component="span">
                {fullWeight}
              </Typography>
            </Typography>
          </Box>
        </Box>
        {products &&
          products.map((product) => (
            <Products key={product.row} product={product} classes={classes} />
          ))}
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
                <tr key={product.row}>
                  <td>{product.characteristic.prod_nom.name_full}</td>
                  <td>{product.characteristic.clr.presentation}</td>
                  <td>{product.quantity}</td>
                  <td>{(product.s * product.quantity).round(2)}</td>
                  <td>{product.price * product.quantity}</td>
                  <td>{product.price * product.discount}</td>
                  <td>
                    {product.price * product.quantity * (1 - product.discount)}
                  </td>
                </tr>
              ))}
            <tr>
              <td colspan="2">Всего</td>
              <td>
                {products &&
                  products
                    .map((product) => product.quantity)
                    .reduce((acc, quantity) => (acc += quantity), 0)}
              </td>
              <td>
                {products &&
                  products
                    .map((product) => product.s * product.quantity)
                    .reduce((acc, square) => (acc += square), 0)
                    .round(2)}
              </td>
              <td>
                {products &&
                  products
                    .map((product) => product.price * product.quantity)
                    .reduce((acc, price) => (acc += price), 0)}
              </td>
              <td>
                {products &&
                  products
                    .map(
                      (product) =>
                        product.price * product.quantity * product.discount
                    )
                    .reduce((acc, discount) => (acc += discount), 0)}
              </td>
              <td>
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
        <Box mb={2.5}>
          <table>
            <colgroup>
              <col width="61%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
            </colgroup>
            <tr>
              <th>ИТОГО</th>
              <th>
                {products &&
                  products
                    .map((product) => product.price * product.quantity)
                    .reduce((acc, price) => (acc += price), 0)}
              </th>
              <th>0</th>
              <th>
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
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box mt={11.25} mb={2.5}>
          <Typography>
            *Предложение действительно в течение 10 календарных дней.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography>
            Для вашего удобства, точный расчет стоимости, заключение договора и
            оплата могут быть осуществлены на объекте в день проведения замера.
          </Typography>
        </Box>
        <Box display="flex">
          <Box fontSize={19} sx={{ flex: '1 1 0%' }}>
            <Typography color="textSecondary" variant="inherit">
              Будем рады вашему отзыву о работе наших специалистов
            </Typography>
          </Box>
          <Box ml={0.6} p={0.6} px={2} bgcolor="primary.main">
            <Link
              underline="none"
              color="inherit"
              target="_blank"
              href="https://www.ecookna.ru/clients/napisat-otzyv/"
            >
              Оставить отзыв
            </Link>
          </Box>
        </Box>
      </Box>

      <Box mx="auto" maxWidth="794px" boxSizing="border-box">
        <Box boxSizing="border-box" pt={2.5} pb={2} px={3.75}>
          <OInfo1 />
          <Box mt={4.25} mb={2.5}>
            <Typography>
              Мы производим особенные окна для Вас. Учитываем не только
              интерьерные и экстерьерные особенности помещения, но и
              функциональную нагрузку каждой комнаты и строения.
            </Typography>
          </Box>
          <Box mt={3.75} mb={2.5} fontSize={19}>
            <Typography variant="inherit" color="textSecondary">
              Что мы предлагаем? - Тысячи комбинаций окон, дверей и других
              продуктов, для самых взыскательных заказчиков.
            </Typography>
          </Box>
          <OInfo4 />
          <Box mt={3.75} color="textSecondary" fontSize={19}>
            <Typography variant="inherit" color="textSecondary">
              Комплектующие от мировых лидеров:
            </Typography>
          </Box>
        </Box>
        <Box>
          <OInfo6 />
        </Box>
        <Box boxSizing="border-box" pt={2.5} pb={2} px={3.75}>
          <Box mt={3.75}>
            <OInfo7 />
          </Box>
          <Box display="flex" mt={3}>
            <Box
              sx={{ flex: '0 1 auto' }}
              mr={1.25}
              mt={2.5}
              mb={2.5}
              fontSize={14}
            >
              <Typography component="p" variant="inherit">
                Переходите
                <br />
                по сылкам:
              </Typography>
            </Box>
            <Box display="flex" sx={{ flex: '1 1 0%' }}>
              <Link
                underline="none"
                color="inherit"
                href="https://www.youtube.com/watch?v=X6lQcjH1Jc4"
              >
                <Box display="flex" sx={{ flex: '1 1 0%' }}>
                  <Box sx={{ flex: '0 0 60px' }}>
                    <OInfo10_1 />
                  </Box>
                  <Box fontSize={10} ml={1.25} mt={2.5} mb={2.5}>
                    <Typography
                      variant="inherit"
                      component="span"
                      color="inherit"
                    >
                      Собственное производство
                    </Typography>
                  </Box>
                </Box>
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="https://www.ecookna.ru/clients/3d/"
              >
                <Box display="flex" sx={{ flex: '1 1 0%' }} ml={1.75}>
                  <Box sx={{ flex: '0 0 60px' }}>
                    <OInfo10_2 />
                  </Box>
                  <Box fontSize={10} ml={1.25} mt={2.5} mb={2.5}>
                    <Typography
                      variant="inherit"
                      component="span"
                      color="inherit"
                    >
                      Панорама нашего шоу-рума
                    </Typography>
                  </Box>
                </Box>
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="https://www.youtube.com/watch?v=pHthiLw2RpA"
              >
                <Box display="flex" sx={{ flex: '1 1 0%' }} ml={1.75}>
                  <Box sx={{ flex: '0 0 60px' }}>
                    <OInfo10_3 />
                  </Box>
                  <Box fontSize={10} ml={1.25} mt={2.5} mb={2.5}>
                    <Typography
                      variant="inherit"
                      component="span"
                      color="inherit"
                    >
                      Производство окон ПВХ
                    </Typography>
                  </Box>
                </Box>
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="https://www.youtube.com/watch?v=zkKJTZ90QVo"
              >
                <Box display="flex" sx={{ flex: '1 1 0%' }} ml={1.75}>
                  <Box sx={{ flex: '0 0 60px' }}>
                    <OInfo10_4 />
                  </Box>
                  <Box fontSize={10} ml={1.25} mt={2.5} mb={2.5}>
                    <Typography
                      variant="inherit"
                      component="span"
                      color="inherit"
                    >
                      Постоянный участник телепроектов
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
