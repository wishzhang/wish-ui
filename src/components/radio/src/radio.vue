<template>
  <div
    @click="handleClick"
    class="app-radio">
    <span class="dot" :class="{active:active}"></span>
    <span class="label" v-if="$slots.default"><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: "AppRadio",
    model:{
      prop:'value',
      event:'change'
    },
    props: {
      name:{
        type:String,
        required:true
      },
      //value为选中的值
      value:{
        type:[String,Number,Boolean]
      },
      //label为供选择的值
      label:{
        type:[String,Number,Boolean],
        required:true
      }
    },
    data:function () {
      return{
        active:false
      }
    },
    methods:{
      handleClick:function () {
        let self=this;
        //找到页面所有的目标组件
        let list=[];
        (function findAll($comp){
          if(!$comp)return;
          if($comp.$options._componentTag==='app-radio'&&$comp.$props.name===self.name){
            list.push($comp);
          }
          for(let i=0;i<$comp.$children.length;i++){
            findAll($comp.$children[i]);
          }
        })(this.$root);

        for(let i=0;i<list.length;i++){
          list[i].$data.active=false;
        }
        this.active=true;

        this.$emit('change',this.label);
      }
    },
    computed:{

    }
  };
</script>

<style scoped lang="scss">
  .app-radio {
    display: inline-block;
    font-size: 0;
    vertical-align: middle;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    span {
      display: inline-block;
      vertical-align: middle;

      &.dot{
        width: $app-radio-border-width;
        height: $app-radio-border-width;
        border-radius: $app-radio-border-width/2;
        @include border;

        &.active {
          background: $app-color-theme;
          border: none;
        }
      }

      &.label {
        margin-left: 6px;
        font-size: $app-fs-main;
        color: $app-fc-ordinary;
      }
    }
  }
</style>
