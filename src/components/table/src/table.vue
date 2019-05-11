<template>
  <div class="app-table">
    <table>
      <!--表头-->
      <tr v-if="!hideHeader" :style="trStyleObj()">
        <th v-for="th in ths" v-if="!th.isHide">{{th.ctitle}}</th>
      </tr>
      <!--单元格-->
      <tr
        :style="trStyleObj(tr)" v-for="(tr,trIndex) in trs" :key="tr.id">
        <td
          v-if="!th.isHide"
          :key="th.id"
          :style="[th.colStyle,tdStyle,tdStyleObj]"
          v-for="(th,thIndex) in ths">
          <template
            v-if="typeof tr[th.title]!=='object'">
            {{tr[th.title]}}
          </template>
          <template v-else>
            <span :id="th.title+th.id"></span>
          </template>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  //基础表格：仅用于显示数据。
  // 可显示/隐藏列，显示/隐藏表头，可定义单元格内容，
  // 可设置单元格和列样式（越具体优先）
  //!数据必须要有唯一id,不然可能出错。这未写提示要求，未改进。
  export default {
    name: "AppTable",
    props: {
      hideHeader: {
        type: Boolean
      },
      tdStyle: {
        type: Object
      },
      trStyle: {
        type: Object,
        require: false
      },
      ths: {
        type: Array,
        require: true
      },
      trs: {
        type: Array,
        require: true
      }
    },
    updated: function () {
      console.log('tryy....')
      this.mountComponent();
    },
    mounted: function () {
      this.mountComponent();
    },
    data: function () {
      return {};
    },
    created: function () {
      console.log(this.trs);
    },
    methods: {
      mountComponent: function () {
        for (var i = 0; i < this.trs.length; i++) {
          var tr = this.trs[i];
          for (var j = 0; j < this.ths.length; j++) {
            var th = this.ths[j];
            if (typeof tr[th.title] === 'object') {
              var Comp = th.tplRender(tr, tr[th.title]);
              if (Comp) {
                var comp = new Comp();
                //防止无效挂载
                comp.$mount('#' + th.title + th.id);
                /*            var id = document.getElementById('#' + th.title + th.id);
                            if (id) {
                                comp.$mount('#' + th.title + th.id);
                            }*/
              }
            }
          }
        }
      },
      trStyleObj: function (tr) {
        var style = {};
        for (var key in this.trStyle) {
          if (this.trStyle.hasOwnProperty(key)) {
            style[key] = this.trStyle[key];
          }
        }
        if (tr && typeof tr.operator === 'object') {
          style.background = tr.operator.isSelect ? 'rgba(9,190,209,0.1)' : 'white';
        }
        return style;
      }
    },
    computed: {
      tdStyleObj: function () {
        return {};
      }
    }
  };
</script>

<style scoped lang="scss">
  .app-table {
    width: 100%;
    overflow: auto;

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      @include border;

      tr {
        font-size: 0;

        &:hover {
          background: rgba($app-color-theme, $app-opacity-light);
        }
      }
    }

    td, th {
      @include border($location: top);
      @include border($location: bottom);
      text-align: center;
      padding: $app-table-td-padding-vertical $app-table-td-padding-horizontal;
      @include ellipsis;
    }

    th {
      padding: $app-table-th-padding-vertical $app-table-th-padding-horizontal;
      font-size: $app-fs-main;
      font-weight: bold;
      color: $app-fc-ordinary;
    }

    td {
      font-size: $app-fs-main;
      color: $app-fc-ordinary;
    }
  }
</style>
