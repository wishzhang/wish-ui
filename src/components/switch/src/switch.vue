<template>
  <div
    :style="style"
    :class="[active?'active':'inactive']"
    @click="handleClick"
    class="app-switch">
    <span :class="[active?'right':'left']"></span>
  </div>
</template>

<script>
  export default {
    name: "AppSwitch",
    model: {
      prop: 'active',
      event: 'change'
    },
    props: {
      active: Boolean,
      activeColor:String,
      inactiveColor: String
    },
    computed: {
      style: function () {
        return {
          background: this.active ? this.activeColor : this.inactiveColor
        };
      }
    },
    methods: {
      handleClick: function () {
        this.$emit('change', !this.active);
      }
    }
  };
</script>

<style scoped lang="scss">
  $app-switch-gap: 2px;
  $time: 0.3s;

  .app-switch {
    position: relative;
    display: inline-block;
    width: $app-switch-width;
    height: $app-switch-height;
    border-radius: $app-switch-height/2;
    cursor: pointer;
    transition: background $time;

    &.active {
      background: $app-switch-active-color;

      span {
        left: $app-switch-width - ($app-switch-height - $app-switch-gap);
      }
    }

    &.inactive {
      background: $app-switch-inactive-color;
    }

    span {
      display: inline-block;
      position: absolute;
      left: $app-switch-gap;
      top: 0;
      bottom: 0;
      margin: auto;
      width: $app-switch-height - $app-switch-gap*2;
      height: $app-switch-height - $app-switch-gap*2;
      border-radius: ($app-switch-height - $app-switch-gap*2)/2;
      background: $app-color-white;
      transition: left $time;
    }
  }
</style>
