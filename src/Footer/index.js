/**
 * Маршрутизатор подвалов
 */

const {React, Divider, Typography} = $p.ui;

export default function Footer(props) {
  const {obj, classes} = props;
  return <div className={`${classes.footer} ${classes.w100}`}>
    <Divider light />
    <div className={classes.flex}>
      <Typography>{`Распечатано ${moment().format('DD MMMM YYYY, hh:mm')}`}</Typography>
    </div>
  </div>;
}
