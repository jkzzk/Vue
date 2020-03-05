<template>
  <div>
      get
      <p>{{ msg.msg }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          msg : {}
      }
    },
    methods : {
    },
    created() {
      this.$axios.get("http://localhost:8096/login",{
        params : {
          username : "admin",
          password : "123456"
        }
      })
      .then(res => {
          console.log(res);
          this.msg = res.data;
      })
      .catch(error => {
          console.log(error);
      })
    }
  }
</script>
<style>

</style>
