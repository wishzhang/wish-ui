import './assets/css/base.scss';
import Button from './components/button/index';
import Input from './components/input/index';
import Table from './components/table/index';
import Checkbox from './components/checkbox/index';
import TabPane from './components/tab-pane/index';
import Tabs from './components/tabs/index';
import Switch from './components/switch/index';
import Select from './components/select/index';

const components = [
  Button,
  Input,
  Table,
  Checkbox,
  TabPane,
  Tabs,
  Switch,
  Select
];

//若有Vue全局环境，则自动安装组件
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Input,
  Table,
  Checkbox,
  TabPane,
  Tabs,
  Switch,
  Select
};
