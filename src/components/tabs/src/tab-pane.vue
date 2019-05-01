<template>
  <div v-show="active" class="app-tab-pane">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: "AppTabPane",
    props: {
      label: String
    },
    data: function () {
      return {
        active:false
      };
    },
    created: function () {
      this.validateLabel();
    },
    beforeUpdate: function () {
      console.log('tab-pane beforeUpdate');
    },
    updated: function () {
      console.log('tab-pane updated');
    },
    methods: {
      validateLabel: function () {
        if (!(this.label || this.$slots.label)) {
          throw new Error('需给label属性赋值或定义名为label的插槽内容');
        }
      }
    }
  };
</script>

<style scoped lang="scss">
</style>
