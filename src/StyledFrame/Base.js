/**
 * Универсальные стили без привязки к организации заказа
 */

const { React, makeStyles, ThemeProvider } = $p.ui;
import { theme } from './theme1.js';
// import stylesBase from './stylesBase.js';
import stylesBase from './stylesOrg2.js';
import Loading from './Loading.js';

export default function StyledFrame({
  children,
  classes,
  setClasses,
  title,
  loading,
  ...props
}) {
  if (!classes) {
    classes = makeStyles(() => stylesBase(theme))();
    if (!loading) {
      loading = 'Загрузка...';
    }
  }
  setClasses(classes);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {loading ? (
          <Loading classes={classes} title={title} text={loading} />
        ) : (
          React.Children.map(children, (child) =>
            child
              ? React.cloneElement(child, {
                  ...props,
                  classes,
                  style: { ...child.props.style },
                })
              : null
          )
        )}
      </div>
    </ThemeProvider>
  );
}
