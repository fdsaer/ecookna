/**
 * Маршрутизатор подвалов
 */

const {React, Divider} = $p.ui;

export default function Footer(props) {
  const {obj, classes} = props;
  return <footer className={`${classes.footer} ${classes.w100}`}>
    <Divider light />
    <div className={classes.flex}>
      <span>{`Распечатано ${moment().format('DD MMMM YYYY, hh:mm')}`}</span>
    </div>
  </footer>;
}
