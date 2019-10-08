<!--先把svg的圆圈画出来，再添加转动，再挂在vue实例上，完成-->

<template>
    <div class="app-loading__mask">
      <svg class="app-loading__circle">
        <circle cx="62" cy="62" r="20"  class="app-loading__path"></circle>
      </svg>
    </div>
</template>

<script>
  export default {
    name: "AppLoading"
  };
</script>

<style scoped lang="scss">
  $length:20px*3.14159*2;

  @keyframes app-loading-path {
    0%{
      stroke-dasharray:$length,$length;
      stroke-dashoffset:$length;
    }

    50%{
      stroke-dasharray: $length,$length;
      stroke-dashoffset:$length/3;
    }

    100%{
      stroke-dasharray:$length,$length;
      stroke-dashoffset:$length;
    }
  }

  @keyframes app-loading-circle {
    0%{
      transform: rotate(0);
    }

    100%{
      transform: rotate(360deg);
    }
  }

  @include b(loading){
    @include e(mask){
      display: flex;
      justify-content: center;
      align-items: center;
      position:fixed;
      width:100%;
      height:100%;
      background-color:hsla(0,0%,100%,0.9);
      z-index:9999;
    }

    @include e(circle){
      animation: app-loading-circle 2s linear infinite;
      width:$length;
      height:$length;
    }

    @include e(path){
      animation: app-loading-path 5s linear infinite;
      stroke: $app-color-theme;
      stroke-width: 3px;
      stroke-linecap: round;
      fill:none;
    }
  }
</style>
