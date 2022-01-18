/**
 * Аналог dhtmlx '3.4 Заполнения'
 *
 * @module Glasses34
 *
 * Created by Evgeniy Malyarov on 03.01.2022.
 */

const {React, Table, TableBody, TableCell,  TableHead, TableRow} = $p.ui;
import PrnProto from '../PrnProto.js';
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js')); // стили могут зависеть от организации, офиса и т.д.
const Header = React.lazy(() => import('../Header/HeaderGlasses.js'));  // заголовок
const Footer = React.lazy(() => import('../Footer/index.js'));          // подвал
const Products = React.lazy(() => import('../Glasses/Products.js'));    // табчасть

class Glasses34 extends PrnProto {

  componentDidMount() {
    const {attr, obj, print} = this.props;
    obj.load_linked_refs()
      .then(async () => {
        this.setState({loaded: true});
        // получим список заполнений, которым нужны эскизы
        const imgs = new Map();
        for(const {characteristic} of obj.production) {
          for(const {elm, is_rectangular} of characteristic.glasses) {
            if(!is_rectangular || characteristic.coordinates.find({parent: elm})) {
              if(imgs.has(characteristic)) {
                imgs.get(characteristic).push(elm);
              }
              else {
                imgs.set(characteristic, [elm]);
              }
            }
          }
        }
        const attr = {res: new Map()};
        for(const [ox, elm] of imgs) {
          attr.elm = elm;
          await ox.draw(attr);
        }
        this.setState({imgs: attr.res});
      })
      .catch((err) => {
        this.setState({err: err.message});
      });
  }

  render() {
    const {props: {obj, attr}, state: {imgs, loaded, err}, classes} = this;
    // в totals накопим итоги
    const totals = {imgs, q: new Map(), s: new Map(), m: new Map()};
    const title = `Заполнения заказа №${obj.number_doc} от ${moment(obj.date).format('DD.MM.YYYY')}`;
    let loading = loaded ?  (imgs ? '' : 'Формируем эскизы заполнений...') : 'Читаем продукции заказа...';

    const Cell = ({right, ...props}) => <TableCell className={`${classes.tableCell} ${right ? classes.alignRight : ''}`} {...props}/>;

    return <React.Suspense fallback="Загрузка...">
      <StyledFrame obj={obj} attr={attr} classes={classes} setClasses={this.setClasses} title={title} loading={loading} err={err}>
        <Header title={title}/>
        <Products totals={totals} Cell={Cell}/>
        <Footer />
      </StyledFrame>
    </React.Suspense>;
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Glasses34.ref = 'cefdf4d0-6c86-11ec-bee3-8b4e33301a47';
Glasses34.destination = 'doc.calc_order';
Glasses34.title = '3.4 Заполнения_ (jsx)';

export default Glasses34;
