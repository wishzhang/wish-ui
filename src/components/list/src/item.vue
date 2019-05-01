<template>

</template>

<script>
  export default {
    name: "AppItem",
    beforeCreate() {
      console.log('item beforeCreate');
    },
    created() {
      console.log('item created');
    },
    beforeMount() {
      console.log('item beforeMount');
    },
    mounted() {
      console.log('item mounted');
    },
    beforeUpdate() {
      console.log('item beforeUpdate');
    },
    updated() {
      console.log('item updated');
    },
    activated() {
      console.log('item activated');
    },
    deactivated() {
      console.log('item deactivated');
    },
    beforeDestroy() {
      console.log('item beforeDestroy');
    },
    destroyed() {
      console.log('item destroyed');
    },
    errorCaptured(err, vm, info) {
      console.log('item errorCaptured');
    }
  };
</script>

<style scoped>

</style>
