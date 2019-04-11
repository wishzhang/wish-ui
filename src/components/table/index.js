import Table from './src/table';

Table.install=function (Vue) {
  Vue.component(Table.name,AppTable);
};

export default Table;
