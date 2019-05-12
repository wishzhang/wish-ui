import comps from './main';
import App from './App.vue';
import Vue from 'vue';

Vue.use(comps);

const abc='abvv';


const app=new Vue({
  abc,
  el:'#app',
  template:'<App></App>',
  components:{App}
});

