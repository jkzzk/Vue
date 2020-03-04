<template>
  <div>
<!--      儿子 ： {{ titleContent }} &ndash;&gt; {{title}}-->
    <button @click="sendMsg">子向父组件传递数据</button>
  </div>
</template>
<script>
  export default {
    name : "son",
    data() {
      return {
          msg : "jkzzk"
      }
    },
    methods : {
      sendMsg(event) {
          this.$emit("sendMsg",this.msg)
      }
    },
    props: {
      titleContent : String,
      title : {
        type : [String,Number],
        required : true,
        default : 0
      }
    }
  }
</script>

<style scoped>

</style>
