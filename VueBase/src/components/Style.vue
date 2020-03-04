<template>
  <div>
      <p v-bind:class="{active : isActive, size : isSize}">我是一个P标签</p>
      <button @click="handleActiveOff">取消显示</button>
      <p v-bind:class="'demo-' + id">我是一个P标签</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isActive : true,
        isSize : true,
        id : 10
      }
    },
    methods : {
      handleActiveOff : function () {
          this.isActive = false;
          this.isSize = false;
      }
    },
    computed : {

    }
  }
</script>
<style>
  .active {
    color : red;
  }
  .size {
    font-size : 50px;
  }
</style>
