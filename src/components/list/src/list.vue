<template>
  <div>
    <AppItem></AppItem>
  </div>
</template>

<script>
  import AppItem from './item';
  export default {
    name: "AppList",
    components:{
      AppItem
    },
    beforeCreate(){
      console.log('list beforeCreate');
    },
    created(){
      console.log('list created');
    },
    beforeMount(){
      console.log('list beforeMount');
    },
    mounted() {
      console.log('list mounted');
    },
    beforeUpdate() {
      console.log('list beforeUpdate');
    },
    updated() {
      console.log('list updated');
    },
    activated(){
      console.log('list activated');
    },
    deactivated(){
      console.log('list deactivated');
    },
    beforeDestroy() {
      console.log('list beforeDestroy');
    },
    destroyed() {
      console.log('list destroyed');
    },
    errorCaptured(err, vm, info) {
      console.log('list errorCaptured');
    }
  };
</script>

<style scoped>

</style>
