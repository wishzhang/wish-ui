<template>
  <div
    class="app-form-select">
    <div
      :class="headerClass"
      @click="headerClick"
      class="header-default-theme header">
      <span>{{title||getPlaceholder}}</span>
      <span class="arrow" :class="triangleClass"></span>
    </div>

    <div
      class="content">
      <transition
        :css="false"
        @before-enter="contentBeforeEnter"
        @after-enter="contentAfterEnter"
        @enter="contentEnter"
        @leave="contentLeave"
        @before-leave="contentBeforeLeave"
        @after-leave="contentAfterLeave">
        <ul
          v-show="!isShow"
          class="main">
          <li
            @click="optionClick(item)"
            :key="index"
            v-for="(item,index) in options"
            class="item">
            <span>{{item.label}}</span>
          </li>
        </ul>
      </transition>
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
      value: [String, Number, Boolean],
      placeholder: {
        type: String,
        default: '请选择'
      },
      options: {
        type: Array,
        required: true
      }
    },
    data: function () {
      return {
        isShow: false,
        title: '',
        isHeaderClass: true
      };
    },
    computed: {
      getPlaceholder: function () {
        return this.placeholder;
      },
      triangleClass: function () {
        return {
          rotate180: this.isShow
        };
      },
      headerClass: function () {
        return {
          open: this.isHeaderClass
        };
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
      },
      contentBeforeEnter: function (el) {
        const self = this;
        setTimeout(function () {
          self.isHeaderClass = false;
        }, 300);
        el.style.maxHeight = 0;
      },
      contentAfterEnter: function (el) {
      },
      contentEnter: function (el, done) {
        el.style.transition = 'max-height 0.3s';
      },
      contentLeave: function (el, done) {
        el.style.transition = 'max-height 0.3s';
      },
      contentBeforeLeave: function (el) {
        el.style.maxHeight = this.options.length * 30 + 'px';
        this.isHeaderClass = true;
      },
      contentAfterLeave: function (el) {
      }
    }
  };
</script>

<style scoped lang="scss">
  $time: 0.5s;

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

      &.open {
        border-radius: $app-select-border-radius $app-select-border-radius 0 0;
      }

      .arrow {
        &:after, &:before {
          display: inline-block;
          content: '';
          position: absolute;
          right: $app-select-padding-horizontal;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 0;
          height: 0;
          border-right: 5px solid transparent;
          border-left: 5px solid transparent;
          border-top: calc(5px) solid $app-select-triangle-color;
          transition: transform $time;
        }

        &:before {
          border-top-color: white;
          top: -2px;
          z-index: 1;
        }

        &.rotate180 {
          &:before, &:after {
            transform: rotate(-180deg);
          }

          &:before {
            top: 0px;
          }

          &:after {
            top: -2px;
          }
        }
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
        border-radius: 0 0 $app-br-big $app-br-big;
        max-height: 0;
        overflow: hidden;

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
