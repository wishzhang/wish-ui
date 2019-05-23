<template>
  <div class="app-message-box" v-if="isShow">
    <div class="app-message-box__wrapper">
      <div class="app-message-box__header">
        <div class="app-message-box__title">
          <slot name="title"></slot>
        </div>
        <div class="app-message-box__subtitle">
          <slot name="subtitle"></slot>
        </div>
      </div>
      <div class="app-message-box__content">
        <slot name="content"></slot>
      </div>
      <div class="app-message-box__footer">
        <app-button class="app-message-box__cancel" @click="hideLayer">取消</app-button>
        <app-button class="app-message-box__confirm" type="primary" :active="true" @click="confirmClick">确定</app-button>
      </div>
      <i @click="hideLayer" class="app-message-box__close iconfont icon-31guanbi"></i>
    </div>
  </div>

</template>

<script>
  import AppButton from 'wish-ui/src/components/button';

  export default {
    components: {
      AppButton
    },
    data: function () {
      return {
        isShow: true
      };
    },
    mounted: function () {
      this.showLayer();
    },
    methods: {
      confirmClick: function (e) {
        this.hideLayer();
        this.$emit('confirm-click', e);
      },
      showLayer: function () {
        this.isShow = true;
        document.body.style['overflow'] = 'hidden';
      },
      hideLayer: function () {
        this.isShow = false;
        document.body.style['overflow'] = 'visible';
      }
    }
  };
</script>

<style scoped lang="scss">
  @include b(message-box) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;

    @include e(wrapper) {
      position:relative;
      min-width: 320px;
      padding: 20px 20px 10px;
      background-color: white;
      border-radius: $app-br-big;
    }

    @include e(header) {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      @include e(title) {
        font-size: $app-fs-title;
        color: $app-fc-main;
      }
      @include e(subtitle) {
        font-size: $app-fs-assist;
        color: $app-color-theme;
      }
    }

    @include e(content) {
      display: flex;
      justify-content: center;
      width: 70%;
      margin: 15px auto 0;
      line-height: $app-lh-ordinary;
    }

    @include e(footer) {
      display: flex;
      justify-content: flex-end;
      margin-top: 25px;
    }

    @include e(close) {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }

    @include e(cancel) {
      margin-right: 10px;
    }

    @include e(confirm) {
    }

  }
</style>
