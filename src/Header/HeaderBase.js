const {React, Typography} = $p.ui;

export default function Header(props) {
  const {obj, classes} = props;
  return <div className={`${classes.head} ${classes.flex}`}>
    <div>Лого слева</div>
    <div className={classes.full}></div>
    <Typography>{obj.toString()}</Typography>
  </div>;
}
