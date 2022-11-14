/**
 * Пример печатной формы
 *
 * @module Invoice1
 *
 * Created by Evgeniy Malyarov on 19.04.2020.
 */

const { React, Typography } = $p.ui;
const StyledFrame = React.lazy(() => import('../StyledFrame/Base.js'));
const Header = React.lazy(() => import('../Header/index.js'));
const Footer = React.lazy(() => import('../Footer/footerTextDate.js'));
import PrnProto from '../PrnProto.js';

class Invoice1 extends PrnProto {
  render() {
    const { attr, obj, print } = this.props;

    return (
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <StyledFrame
          obj={obj}
          attr={attr}
          setClasses={this.setClasses}
          classes={this.classes}
        >
          <Header {...this.props} />
          {/*
      <Middle {...this.props} />
      <Table1 {...this.props} />
      <Table2 {...this.props} />
      */}
          <Footer {...this.props} />
        </StyledFrame>
      </React.Suspense>
    );
  }
}

// идентификатор - должен быть уникальным для каждой виртуальной формулы
Invoice1.ref = '80ecfed0-8263-11ea-a364-7bbe5c31efe8';
Invoice1.destination = 'doc.calc_order';
Invoice1.title = 'JSX / Демо счет вирт. формула';

export default Invoice1;
