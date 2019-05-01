import Item from '../list/src/item';

Item.install = function (Vue) {
  Vue.component(Item.name, Item);
};

export default Item;
