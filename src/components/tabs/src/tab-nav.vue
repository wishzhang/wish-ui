<template>
  <div :class="{active:active}" @click="handleClick" class="app-tab-nav">
    <slot>{{label}}</slot>
  </div>
</template>

<script>

  export default {
    name: "TabNav",
    props: {
      label: String,
      active:false
    },
    data: function () {
      return {
      };
    },
    created: function () {
    },
    methods: {
      handleClick:function (e) {
        this.$emit('click',e);
      }
    }
  };
</script>

<style scoped lang="scss">
  .app-tab-nav {
    padding: $app-tabs-tab-padding-vertical 0;
    font-size: $app-fs-main;
    text-align: center;
    cursor: pointer;

    &:not(:last-child) {
      padding-right: $app-tabs-tab-padding-horizontal;
    }

    &.active {
      color: $app-color-theme;
    }
  }
</style>
