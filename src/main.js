import './assets/css/base.scss';
import Button from './components/button/index';
import Input from './components/input/index';
import Table from './components/table/index';
import TableColumn from './components/table-column/index';
import Checkbox from './components/checkbox/index';
import TabPane from './components/tab-pane/index';
import Tabs from './components/tabs/index';
import Switch from './components/switch/index';
import Select from './components/select/index';
import RadioGroup from './components/radio-group/index';
import Radio from './components/radio/index';
import MessageBox from './components/message-box/index';
//测试
import List from './components/list/index';
import Item from './components/item/index';
import Detail from './components/detail/index';

import 'wish-ui/src/assets/iconfont/iconfont.css';

const components = [
  Button,
  Input,
  Table,
  TableColumn,
  Checkbox,
  TabPane,
  Tabs,
  Switch,
  Select,
  RadioGroup,
  Radio,
  List,
  Item,
  Detail
];

//若有Vue全局环境，则自动安装组件
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$confirm=MessageBox.confirm;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,
  Button,
  Input,
  Table,
  TableColumn,
  Checkbox,
  TabPane,
  Tabs,
  Switch,
  Select,
  RadioGroup,
  Radio,
  List,
  Item,
  Detail
};
