<template>
  <button
    v-on="buttonListeners"
    class="app-button"
    :class="[getClass]">
    <slot>按钮</slot>
  </button>
</template>

<script>
  //todo:圆形未增加
  export default {
    name: 'AppButton',
    props: {
      plain: Boolean,
      active: Boolean,
      type: {
        type: String,
        default: 'default'
      }
    },
    created: function () {
    },
    computed: {
      getClass:function () {
          return [
            this.type?this.type:'',
            {
              plain:this.plain||'default',
              active:this.active
            },
          ]
      },
      buttonListeners:function () {
        return this.$listeners;
      }
    }
  };
</script>

<style scoped lang="scss">

  .app-button {
    min-width:$app-button-min-width;
    height: $app-button-height;
    font-size: $app-fs-main;
    border-radius: $app-br-big;
    cursor: pointer;

    //以外观分类
    &.default{
      background: white;
      color: $app-fc-ordinary;
      @include border;
      &.active,&:hover {
        background: rgba($app-color-theme,$app-opacity-light);
        color: $app-color-theme;
        @include border($color:rgba($app-color-theme,$app-opacity-light));
      }

      @mixin button-type($color:$app-color-theme){
        background: $color;
        color: white;
        @include border($color:$color);
        &.active,&:hover {
          background: rgba($color,$app-opacity-base);
          color: white;
          @include border($color:rgba($color,$app-opacity-base));
        }
      }
      //以职责分类
      &.primary{
        @include button-type($color:$app-color-theme);
      }
      &.success{
        @include button-type($color:$app-color-success);
      }
      &.warning{
        @include button-type($color:$app-color-warning);
      }
      &.danger{
        @include button-type($color:$app-color-danger);
      }
      &.info{
        @include button-type($color:$app-color-info);
      }
    }

    &.plain{
      background: white;
      color: $app-fc-ordinary;
      @include border;
      &.active,&:hover{
        color: $app-color-theme;
        background: white;
        @include border($color:$app-color-theme);
      }

      @mixin button-type($color:$app-color-theme){
        background: rgba($color,$app-opacity-light);
        color:$color;
        @include border($color:rgba($color,$app-opacity-light));
        &.active,&:hover {
          background: $color;
          color: white;
          @include border($color:$color);
        }
      }

      //以职责分类
      &.primary{
        @include button-type($app-color-theme);
      }
      &.success{
        @include button-type($app-color-success);
      }
      &.warning{
        @include button-type($app-color-warning);
      }
      &.danger{
        @include button-type($app-color-danger);
      }
      &.info{
        @include button-type($app-color-info);
      }
    }
  }
</style>
