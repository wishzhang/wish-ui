import comps from './main';
import App from './App.vue';
import Vue from 'vue';
import './assets/iconfont/iconfont.css';


Vue.use(comps);


const app=new Vue({
  el:'#app',
  template:'<App></App>',
  components:{App}
});

