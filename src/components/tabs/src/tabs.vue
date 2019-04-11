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
        panes: []
      }
    },
    created: function () {

    },
    updated:function(){
      console.log('updated')
     // this.calcPaneInstances();
/*      for(let i=0;i<this.panes.length;i++){
        if(this.panes[i].$data.active){
          this.$slots.panels=this.panes[i].$slots.default;
        }
      }*/
    },
    mounted: function () {
      console.log('mounted')
      this.calcPaneInstances();
    },
    methods: {
      calcPaneInstances:function(){
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

          for (var i = 0; i < vm.panes.length; i++) {
            (function (ind) {
              vm.panes[ind].$el.onclick = function () {
                vm.handleTabClick(vm.panes[ind], ind);
              };
            })(i);
          }
          //初始化第一个选项卡
          if(vm.panes.length>0){
            vm.handleTabClick(vm.panes[0], 0);
          }
        }
      },
      handleTabClick: function (tab, index) {
        //切换选项卡
        this.panes.forEach(function (pane) {
          pane.$data.active = false;
        });
        tab.$data.active = true;

        //将对应的插槽引用弄到tabs组件上

        this.$slots.panels = tab.$slots.default;
        this.$forceUpdate();

        this.$emit('tab-click', tab, index);
        console.dir(tab);
      }
    }
  };
</script>

<style scoped lang="scss">
  .app-tabs {
    .header {
      display: flex;
    }
    .panels{

    }
  }
</style>
