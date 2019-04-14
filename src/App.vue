<template>
  <div class="test">
    <div>
      <app-button @click="testClick" plain >aaad</app-button>
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
      <app-checkbox :checked="true" v-model="checked">
        多选框
      </app-checkbox>
    </div>
    <div>
      <app-tabs>
        <app-tab-pane label="选项卡1">
          选项卡1内容
        </app-tab-pane>
        <app-tab-pane label="选项卡2">
          选项卡w内容
        </app-tab-pane>
      </app-tabs>
    </div>

    <div>
      <app-switch  v-model="isSwitch"></app-switch>
    </div>

    <div>
      <app-select v-model="value" :placeholder="placeholder"></app-select>
    </div>

    <!--单选-->
    <div>
  <!--    <app-radio-group></app-radio-group>-->
      <app-radio name="1" v-model="radio" label="good">11</app-radio>
      <app-radio name="1" v-model="radio" label="bad">22</app-radio>

      <app-radio name="2" v-model="radio" label="up">11</app-radio>
      <app-radio name="2" v-model="radio" label="down"></app-radio>
    </div>
  </div>

</template>

<script>
import guid from './utils/guid';

export default {
  name: 'app',
  data () {
    return {
      //文本框
      value:'aaa',
      //表格
      tableData:{
        ths:[
          {id:guid(),title:'col1',ctitle:'列一'},
          {id:guid(),title:'col2',ctitle:'列二'}
        ],
        trs:[
          {id:guid(),col1:'11',col2:'12'},
          {id:guid(),col1:'21',col2:'22'}
        ]
      },
      //多选框
      checked:false,
      //开关
      isSwitch:false,
      //下拉
      placeholder:'hihi',
      //单选
      radio:'hi'
    }
  },
  methods:{
    //测试值
    testClick:function () {
      this.placeholder='aa'
      console.log(this.radio);
    }
  }
}
</script>

<style lang="scss">
  .test{
    >div{
      padding:10px 0;
    }
  }

  .a{
    position:relative;
    height:0;
    .b{
      position:absolute;
      width:100%;
      height:500px;
      background: red;
    }
  }
</style>
