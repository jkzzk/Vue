<template>
  <div>
    儿子
    <slot name="s1"></slot>
    <hr>
    <slot name="s2" text="传递数据"></slot>
  </div>
</template>
<script>
  export default {
    name : "son",
    data() {
      return {

      }
    },
    methods : {

    }
  }
</script>
<style scoped>
  .color {
    color : red;
  }
</style>
