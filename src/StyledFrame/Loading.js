/**
 * Индикатор загрузки
 *
 * @module Loading
 *
 * Created by Evgeniy Malyarov on 04.01.2022.
 */

const {React, Typography, LinearProgress} = $p.ui;

export default function Loading({text, title, classes}) {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      let step = 10;
      if(progress > 50) {
        step -= progress / 10;
      }
      if(progress > 100) {
        setProgress(0);
        setBuffer(10);
      }
      else {
        const diff = Math.random() * step;
        const diff2 = Math.random() * step;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={`${classes.head}`}>
      <Typography variant="h3">{title || 'Загрузка'}</Typography>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
      <Typography>{text || 'Получаем данные с сервера...'}</Typography>
    </div>
  );
}
Loading
