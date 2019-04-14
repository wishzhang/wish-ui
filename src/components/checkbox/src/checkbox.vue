<template>
  <div
    class="app-checkbox">
    <span
      @click="handleClick"
      :class="{active:checked}">
    </span>
    <span
      class="checkbox-label"
      v-if="$slots.default">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "AppCheckbox",
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: Boolean
    },
    methods: {
      handleClick: function () {
        this.$emit('change', !this.checked);
      }
    }
  };
</script>

<style scoped lang="scss">
  .app-checkbox {
    display: inline-block;
    vertical-align: middle;
    font-size: 0;

    span {
      display: inline-block;
      vertical-align: middle;

      &:first-child {
        @include circle($app-checkbox-input-width/2);
        @include border;
        cursor: pointer;

        &.active {
          background: $app-color-theme;
          @include border(none);
        }
      }

      &.checkbox-label {
        margin-left: $app-checkbox-lable-padding;
        font-size: $app-fs-main;
        color: $app-fc-ordinary;
      }
    }
  }
</style>
