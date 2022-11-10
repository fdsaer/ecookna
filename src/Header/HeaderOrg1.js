const {React, Typography} = $p.ui;

export default function Header(props) {
  const {obj, classes} = props;

  return <div className={`${classes.head} ${classes.flex}`}>
    <Typography>{obj.toString()}</Typography>
    <div className={classes.full}></div>
    <div>Лого справа</div>
  </div>;
}
