/**
 * Вариант оформления поля ввода
 *
 * @module PropField
 *
 * Created by Evgeniy Malyarov on 24.02.2020.
 */

import React from 'react';
import PropTypes from 'prop-types';
import DataField from 'metadata-react/DataField';
import withStyles, {extClasses} from 'metadata-react/DataField/stylesPropertyGrid';

function PropField({classes, ...props}) {
  return <DataField extClasses={extClasses(classes)} fullWidth isTabular={false} {...props}/>;
}

PropField.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(PropField);
