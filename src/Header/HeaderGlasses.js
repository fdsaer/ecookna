const {React, Typography} = $p.ui;

export default function HeaderGlasses(props) {
  const {obj, classes} = props;
  return <div className={`${classes.head}`}>
    <Typography variant="h3">{`Заполнения заказа №${obj.number_doc} от ${moment(obj.date).format('DD.MM.YYYY')}`}</Typography>
  </div>;
}
