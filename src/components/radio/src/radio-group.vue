<template>
  <div>
    <app-radio
      :key="index"
      v-for="(item,index) in options"
      @click.native="checkClick(item,index)"
      :active="currentIndex===index">
      {{item.label}}
    </app-radio>
  </div>
</template>

<script>
  //该组件不能用
  import radio from './radio';
  export default {
    name: "AppRadioGroup",
    components:{
      radio
    },
    model:{
      prop:'value',
      event:'change'
    },
    props: {
      //TODO:未添加name功能
      name:String,
      value:String,
      options: {
        type: Array,
        default: function () {
          return [
            {
              value: 'yes',
              label: '是的'
            },
            {
              value: 'no',
              label: '不是'
            }
          ];
        },
        required:true
      }
    },
    data: function () {
      return {
        currentIndex:0
      };
    },
    created: function () {
    },
    methods: {
      checkClick: function (item,index) {
        this.currentIndex=index;
        this.$emit('change', item.value);
      }
    },
    computed: {},
  };
</script>

<style scoped lang="scss">

</style>
