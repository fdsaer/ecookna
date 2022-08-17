/**
 * Тело печатной формы
 *
 * @module Offer
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

import OCover1 from '../img/o-cover__logo.png';
import OCover17 from '../img/o-cover__photo.png';
import ODetails3 from '../img/o-details__3.jpg';
import OInfo1 from '../img/o-info__1.jpg';
import OInfo4 from '../img/o-info__4.png';
import OInfo6 from '../img/o-info__6.jpg';
import OInfo7 from '../img/o-info__7.png';
import OInfo10_1 from '../img/o-info__10-1.png';
import OInfo10_2 from '../img/o-info__10-2.png';
import OInfo10_3 from '../img/o-info__10-3.png';
import OInfo10_4 from '../img/o-info__10-4.png';
import Products from './Products.js';
import OfferTable from './OfferTable.js';
import OfferTableTotal from './OfferTableTotal.js';

const { React, Typography, Link, Box } = $p.ui;

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
        mx="auto"
        maxWidth="794px"
        boxSizing="border-box"
        px={3.75}
        pt={2}
        pb={2}
      >
        <Box display="flex" pt={2.5}>
          <Box width={114}>
            <img src={ODetails3} />
          </Box>
          <Box ml={4}>
            <Box mt={-0.5} mb={2.5} fontSize={22}>
              <Typography variant="inherit" color="textSecondary" component="p">
                {title}
              </Typography>
            </Box>
            <Box display="flex">
              <Box sx={{ flex: '0 1 auto' }} textAlign="right">
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
        <Box p={0.625} sx={{ borderBottom: '1px solid #999' }} mb={2.5}></Box>
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

        <Box mt={2.5}>{products && <OfferTable products={products} />}</Box>
        <Box mt={2.5}>
          {products && <OfferTableTotal products={products} />}
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
            <Typography color="textSecondary" variant="inherit" component="p">
              Будем рады вашему отзыву о работе наших специалистов
            </Typography>
          </Box>
          <Link
            underline="none"
            color="inherit"
            target="_blank"
            href="https://www.ecookna.ru/clients/napisat-otzyv/"
          >
            <Box ml={0.6} p={0.6} px={2} bgcolor="primary.main" fontSize={20}>
              Оставить отзыв
            </Box>
          </Link>
        </Box>
      </Box>

      <Box mx="auto" maxWidth="794px" boxSizing="border-box">
        <Box boxSizing="border-box" pt={2.5} pb={2} px={3.75}>
          <Box mt={2}>
            <img src={OInfo1} />
          </Box>
          <Box mt={4.25} mb={2.5}>
            <Typography>
              Мы производим особенные окна для Вас. Учитываем не только
              интерьерные и экстерьерные особенности помещения, но и
              функциональную нагрузку каждой комнаты и строения.
            </Typography>
          </Box>
          <Box mt={3.75} mb={2.5} fontSize={19}>
            <Typography variant="inherit" color="textSecondary" component="p">
              Что мы предлагаем? - Тысячи комбинаций окон, дверей и других
              продуктов, для самых взыскательных заказчиков.
            </Typography>
          </Box>
          <Box pt={1}>
            <img src={OInfo4} />
          </Box>
          <Box mt={3.75} color="textSecondary" fontSize={19}>
            <Typography variant="inherit" color="textSecondary" component="p">
              Комплектующие от мировых лидеров:
            </Typography>
          </Box>
        </Box>
        <Box>
          <img src={OInfo6} />
        </Box>
        <Box boxSizing="border-box" pt={2.5} pb={2} px={3.75}>
          <Box mt={3.75}>
            <img src={OInfo7} />
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
                <Box
                  display="flex"
                  sx={{ flex: '1 1 0%', minHeight: '100%' }}
                  alignItems="center"
                >
                  <Box sx={{ flex: '0 0 60px' }}>
                    <img src={OInfo10_1} />
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
                <Box
                  display="flex"
                  sx={{ flex: '1 1 0%', minHeight: '100%' }}
                  ml={1.75}
                  alignItems="center"
                >
                  <Box sx={{ flex: '0 0 60px' }}>
                    <img src={OInfo10_2} />
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
                <Box
                  display="flex"
                  sx={{ flex: '1 1 0%', minHeight: '100%' }}
                  ml={1.75}
                  alignItems="center"
                >
                  <Box sx={{ flex: '0 0 60px' }}>
                    <img src={OInfo10_3} />
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
                <Box
                  display="flex"
                  sx={{ flex: '1 1 0%', minHeight: '100%' }}
                  ml={1.75}
                  alignItems="center"
                >
                  <Box sx={{ flex: '0 0 60px' }}>
                    <img src={OInfo10_4} />
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
