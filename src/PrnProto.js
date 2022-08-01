/**
 * Прототип печатных форм
 */

const {React} = $p.ui;

class PrnProto extends React.Component {

  constructor(props) {
    super(props);
    props.skipCss && props.skipCss();
    this.state = {loaded: false};
    this.setClasses = (classes) => {
      this.classes = classes;
      props.copyStyles && props.copyStyles();
    };
  }

  render() {
    return 'PrnProto';
  }
}


export default PrnProto;
