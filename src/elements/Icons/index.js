const { SvgIcon, React } = $p.ui;

export const Dot = (props) => {
  return (
    <SvgIcon {...props}>
      <circle cx="50%" cy="50%" r="2" />
    </SvgIcon>
  );
};
