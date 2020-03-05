<template>
  <div>
      Son
      <p>{{msg}}</p>
      <button @click="setMessage">设置信息</button>
  </div>
</template>
<script>
  export default {
    name : "son",
    data() {
      return {
        msg : "Ok!"
      }
    },
    methods : {
      setMessage() {
        this.msg = "No!"
      }
    }
  }
</script>
<style>

</style>
