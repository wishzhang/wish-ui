<template>
  <label class="app-label">
    标签
    <input
      v-bind="$attrs"
      type="text"
      :value="value"
      v-on="inputListeners"
      class="app-input-text"/>
  </label>
</template>

<script>
  export default {
    name: "AppInput",
    inheritAttrs: false,
    model:{
      props:'value',
      event:'input'
    },
    props:{
      value:[String,Number]
    },
    computed:{
      inputListeners:function () {
        let vm=this;
        return Object.assign(
          {},
          vm.$listeners,
          {
            input:function (evt) {
              vm.$emit('input',evt.target.value);
            }
          }
        )
      }
    },
    data: function () {
      return {};
    }
  };
</script>

<style scoped lang="scss">
  .app-label{
    font-size: $app-fs-main;
    color: #333333;
  }
  .app-input-text {
    width: 150px;
    height: 30px;
    @include border;
    font-size:$app-fs-main;
    color: $app-fc-ordinary;
    padding: 0 12px;
    border-radius: $app-br-big;
  }
</style>
