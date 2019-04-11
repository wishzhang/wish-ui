import comps from './main';
import App from './App.vue';
import Vue from 'vue';

Vue.use(comps);

new Vue({
  el:'#app',
  template:'<App></App>',
  components:{App}
});
