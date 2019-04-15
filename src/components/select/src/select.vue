<template>
  <div
    class="app-form-select">
    <div
      @click="headerClick"
      class="header-default-theme header">
      <span>{{title||getPlaceholder}}</span>
      <span></span>
    </div>
    <div
      v-if="isShow"
      class="content">
      <ul class="main">
        <li
          @click="optionClick(item)"
          :key="index"
          v-for="(item,index) in options"
          class="item">
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppSelect",
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: [String,Number,Boolean],
      placeholder: {
        type: String,
        default: '请选择'
      },
      options: {
        type: Array,
        required:true
      }
    },
    data: function () {
      return {
        isShow: false,
        title: ''
      };
    },
    computed: {
      getPlaceholder: function () {
        return this.placeholder;
      }
    },
    methods: {
      optionClick: function (item) {
        this.isShow = !this.isShow;
        this.title = item.label;
        this.$emit('change', item.value);
      },
      headerClick: function () {
        this.isShow = !this.isShow;
      }
    }
  };
</script>

<style scoped lang="scss">
  .app-form-select {
    position: relative;
    display: inline-block;
    width: $app-select-width;
    font-size: $app-fs-main;
    text-align: left;
    background: $app-color-white;
    cursor: pointer;

    .header {
      position: relative;
      width: 100%;
      height: $app-select-height;
      line-height: $app-select-height;
      padding: 0 $app-select-padding-horizontal;
      @include border;
      border-radius: $app-select-border-radius;

      span:last-child {
        position: absolute;
        right: $app-select-padding-horizontal;
        top: ($app-select-height - 8px) / 2;
        width: 0;
        height: 0;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-top: 8px solid #4a5363;
      }
    }

    .content {
      position: relative;
      width: 100%;
      height: 0;
      z-index: 1;

      ul.main {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: $app-br-big;

        li.item {
          position: relative;
          height: $app-select-height;
          line-height: $app-select-height;
          padding: 0 $app-select-padding-horizontal;
          color: $app-fc-ordinary;
          background: $app-color-white;
          @include border;
          border-top: 0;

          &:hover {
            color: $app-color-theme;
          }

          &:not(:last-child) {
            @include border($location: bottom);
          }
        }
      }
    }
  }
</style>
