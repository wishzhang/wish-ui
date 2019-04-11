<template>
  <div class="app-tab" :class="{active:active}">
    <slot name="label">{{label}}</slot>
  </div>
</template>

<script>
  //!label插槽为标签名，默认插槽作为标签页内容
  export default {
    name: "AppTabPane",
    props: {
      label: String
    },
    data: function () {
      return {
        active: false
      };
    },
    created: function () {
      this.validateLabel();
    },
    methods: {
      validateLabel: function () {
        if (!(this.label || this.$slots.label)) {
          throw new Error('需给AppTabPane组件的label属性赋值或在该组件内定义名为label的插槽内容');
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .app-tab{
    padding:$app-tabs-tab-padding-vertical 0;
    font-size: $app-fs-main;
    text-align: center;
    cursor:pointer;

    &:not(:last-child){
      padding-right:  $app-tabs-tab-padding-horizontal;
    }

    &.active {
      color: $app-color-theme;
    }
  }
</style>
