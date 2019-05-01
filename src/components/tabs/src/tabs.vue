<template>
  <div class="app-tabs">
    <div class="header">
      <slot></slot>
    </div>
    <div class="panels">
      <slot name="panels"></slot>
    </div>
  </div>
</template>

<script>
  //todo:bug tab content 区域在DOM更新后不显示
  export default {
    name: "AppTabs",
    data: function () {
      return {
        panes: [],
        curIndex: 0
      };
    },
    created: function () {
    },
    beforeUpdate: function () {
      //插槽是虚拟DOM，当页面更新访问时，会重新计算。所以在更新前重新赋值
      this.$slots.panels = this.panes[this.curIndex].$slots.default;
    },
    updated: function () {
    },
    mounted: function () {
      this.calcPaneInstances();

      let vm = this;
      for (var i = 0; i < vm.panes.length; i++) {
        (function (ind) {
          vm.panes[ind].$el.onclick = function () {
            vm.handleTabClick(vm.panes[ind], ind);
          };
        })(i);
      }
      //初始化第一个选项卡
      if (vm.panes.length > 0) {
        vm.handleTabClick(vm.panes[vm.curIndex], vm.curIndex);
      }
    },
    methods: {
      calcPaneInstances: function () {
        var vm = this;
        //给直接子组件app-tab-pane添加点击事件
        if (this.$slots.default) {
          var paneSlots = this.$slots.default.filter(function (vnode) {
            return vnode.tag && vnode.componentOptions &&
              vnode.componentOptions.Ctor.options.name === 'AppTabPane';
          });
          vm.panes = paneSlots.map(function (vnode) {
            return vnode.componentInstance;
          });
        }
      },
      handleTabClick: function (tab, index) {
        //切换选项卡
        this.panes.forEach(function (pane) {
          pane.$data.active = false;
        });
        tab.$data.active = true;
        this.curIndex = index;

        //将tab-pane内容移到tabs下

        this.$slots.panels = tab.$slots.default;
        this.$forceUpdate();
        this.$emit('tab-click', tab, index);
      }
    }
  };
</script>

<style scoped lang="scss">
  .app-tabs {
    .header {
      display: flex;
    }

    .panels {

    }
  }
</style>
