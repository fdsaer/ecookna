/**
 * Универсальные стили без привязки к организации заказа
 */

const {React, makeStyles} = $p.ui;
import stylesBase from './stylesBase.js';
import Loading from './Loading.js';

export default function StyledFrame({children, classes, setClasses, title, loading, ...props}) {

  if(!classes) {
    classes = makeStyles(stylesBase)();
    setClasses(classes);
  }

  return <div className={classes.root}>
    {loading ?
      <Loading classes={classes} title={title} text={loading} />
      :
      React.Children.map(children, (child) => child ? React.cloneElement(child, {...props, classes}) : null)}
  </div>;
}
