<template>
    <div>
        父亲
        <Son :title="msg" title-content="传递数据" @sendMsg="getMsg" />
        {{ msg }}
    </div>
</template>
<script>
  import Son from "./son"
    export default {
      name : "father",
      data() {
        return {
          msg : 10
        }
      },
      methods : {
        getMsg(data) {
            this.msg = data;
        }
      },
      components : {
        Son
      }
    }
</script>

<style scoped>

</style>
