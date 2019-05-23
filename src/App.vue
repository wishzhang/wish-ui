<template>
  <div class="test">

    <!--按钮-->
    <div>
      <app-button @click="handleClick" type="primary" plain active>主要按钮</app-button>
    </div>

    <!--生命周期测试-->
    <div>
      <app-list>
      </app-list>
    </div>

    <!--下拉框-->
    <div>
      <app-select :options="options" :placeholder="placeholder"></app-select>
    </div>


    <div>
      <app-input
        placeholder="hihi"
        v-model="value">
      </app-input>
    </div>
    <div>
      <app-table
        :trs="tableData.trs"
        :ths="tableData.ths">
      </app-table>
    </div>
    <div>
      <app-checkbox v-model="checked">
        多选框
      </app-checkbox>
    </div>

    <!--选项卡-->
    <div>
      <app-tabs>
        <app-tab-pane :label="tab.tab1Name">
          {{tab.tab1Content}}
        </app-tab-pane>
        <app-tab-pane :label="tab.tab2Name">
          {{tab.tab2Content}}
        </app-tab-pane>
      </app-tabs>
    </div>

    <!--开关-->
    <div>
      <app-switch v-model="isSwitch"></app-switch>
    </div>

    <!--单选-->
    <div>
      <!--    <app-radio-group></app-radio-group>-->
      <app-radio name="1" v-model="radio" label="good">好的</app-radio>
      <app-radio name="1" v-model="radio" label="bad">不好的</app-radio>

      <app-radio name="2" v-model="radio" label="up">11</app-radio>
      <app-radio name="2" v-model="radio" label="down"></app-radio>
    </div>
  </div>

</template>

<script>
  import guid from './utils/guid';

  export default {
    name: 'app',
    data() {
      return {
        //文本框
        value: 'aaa',
        //表格
        tableData: {
          ths: [
            {id: guid(), title: 'col1', ctitle: '列一'},
            {id: guid(), title: 'col2', ctitle: '列二'}
          ],
          trs: [
            {id: guid(), col1: '11', col2: '12'},
            {id: guid(), col1: '21', col2: '22'}
          ]
        },
        //多选框
        checked: false,
        //开关
        isSwitch: false,
        //下拉
        options: [
          {value: 'v1', label: 'l1'},
          {value: 'v2', label: 'l2'},
          {value: 'v3', label: 'l3'}
        ],
        placeholder: 'hihi',
        //单选
        radio: 'hi',
        // 标签页
        tab:{
          tab1Name:'选项卡1',
          tab1Content:'选项卡1内容',
          tab2Name:'选项卡2',
          tab2Content:'选项卡2内容',
        }
      };
    },
    methods: {
      //测试值
      testClick: function () {
        alert();
        console.log(this.radio);
      },
      handleClick:function () {
        this.$confirm({
          title:'这是标题',
          subtitle:'（这是小标题）',
          content:'这是内容',
          confirmClick:function () {
            console.log('点击确定');
          }
        })
      }
    }
  };
</script>

<style lang="scss">
  .test {
    > div {
      padding: 10px 0;
    }
  }

  .a {
    position: relative;
    height: 0;

    .b {
      position: absolute;
      width: 100%;
      height: 500px;
      background: red;
    }
  }
</style>
