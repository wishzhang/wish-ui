<template>
  <div class="app-tabs">
    <div class="header">
      <tab-nav
        :key="index"
        :active="curIndex===index"
        @click="handleTabClick(pane,index)"
        v-for="(pane,index) in panes">
        {{pane.label}}
      </tab-nav>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import TabNav from './tab-nav';

  export default {
    name: "AppTabs",
    components:{
      TabNav
    },
    data: function () {
      return {
        panes: [],
        curIndex: 0
      };
    },
    computed:{
    },
    created: function () {
    },
    beforeUpdate: function () {
      console.log('tabs beforeUpdate');
    },
    updated: function () {
      console.log('tabs updated');
    },
    mounted: function () {
      this.calcPaneInstances();
      this.panes[this.curIndex].active=true;
    },
    methods: {
      calcPaneInstances: function () {
        var vm = this;
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
      handleTabClick: function (pane, index) {
        this.curIndex=index;

        for(let item of this.panes){
          item.active=false;
        }
        pane.active=true;

        this.$emit('tab-click', pane, index);
      }
    }
  };
</script>

<style scoped lang="scss">
  .app-tabs {
    .header {
      display: flex;
    }

    .content {

    }
  }
</style>
