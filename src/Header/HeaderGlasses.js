const {React, Typography} = $p.ui;

export default function HeaderGlasses(props) {
  const {title, classes} = props;
  return <div className={`${classes.head}`}>
    <Typography variant="h3">{title}</Typography>
  </div>;
}
