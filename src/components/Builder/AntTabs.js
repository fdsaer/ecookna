import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
    marginBottom: 8,
  },
})(Tabs);

export default AntTabs;
