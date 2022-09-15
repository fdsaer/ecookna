/**
 * Прототип печатных форм
 */

const { React } = $p.ui;

const addPrintStyles = (selector) => {
  // const css = `@page {margin: 0; margin-top: 10mm; margin-bottom: 10mm} @page :first {margin: 0}`;
  const css = `@page {margin: 0}`;
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.media = 'print';
  style.setAttribute(selector, '');
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
};

const removePrintStyles = (selector) => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const customPrintStyles = document.querySelectorAll(selector);
  customPrintStyles.forEach((styleTag) => {
    head.removeChild(styleTag);
  });
};
class PrnProto extends React.Component {
  constructor(props) {
    super(props);
    // props.skipCss && props.skipCss();
    this.state = { loaded: false };
    this.setClasses = (classes) => {
      addPrintStyles('data-custom-print');
      this.classes = classes;
      props.copyStyles && props.copyStyles();
    };
    this.componentWillUnmount = () => {
      removePrintStyles('[data-custom-print]');
    };
  }

  render() {
    return 'PrnProto';
  }
}

export default PrnProto;
