const {
  React,
  Typography
} = $p.ui;

class Spec1 extends React.Component {
  render() {
    const {
      attr,
      obj,
      print
    } = this.props;
    return React.createElement(Typography, null, obj.toString());
  }

}

Spec1.ref = 'b7bb50e0-ed5d-11eb-bea7-3f8021c1bb8d';
Spec1.destination = 'cat.characteristics';
Spec1.title = 'JSX / Демо спецификация';
export default Spec1;