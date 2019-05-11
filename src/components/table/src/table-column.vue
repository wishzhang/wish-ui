<template>
  <th>{{label}}</th>
</template>

<script>
  export default {
    name: "AppTableColumn",
    props:{
      prop:String,
      label:String
    }
  };
</script>

<style scoped>

</style>
