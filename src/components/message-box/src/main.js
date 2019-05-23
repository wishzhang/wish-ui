import MessageBox from './message-box';
import Vue from 'vue';
import merge from 'wish-ui/src/utils/merge';

const MessageBoxFun=function () {};

MessageBoxFun.confirm=function (option) {
  const opt=merge({
    title:'',
    subtitle:'',
    content:'',
    confirmClick:function(){}
  },option);

  const Comp=Vue.extend({
    template:
      '<message-box @confirm-click="opt.confirmClick">' +
      ' <template v-slot:title>{{opt.title}}</template>'+
      ' <template v-slot:subtitle>{{opt.subtitle}}</template>'+
      ' <template v-slot:content>{{opt.content}}</template>'+
      '</message-box>',
    components:{
      MessageBox
    },
    data:function () {
      return{
        opt:opt
      }
    }
  });

  document.body.appendChild(new Comp().$mount().$el);
};

export default MessageBoxFun;







