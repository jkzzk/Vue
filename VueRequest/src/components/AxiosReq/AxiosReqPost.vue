<template>
  <div>
    Post
  </div>
</template>
<script>
  import qs from "qs";
  export default {
    data() {
      return {

      }
    },
    methods : {

    },
    created() {
      this.$axios.post(this.HOST + "/financeVoucher/communityMaintainAccountPage",
        qs.stringify({
          pageSize : 10,
          pageNumber : 1,
          data : {
          }
        }))
      .then( res => {
          console.log(res.data);
      })
      .catch( error => {
        console.log(error);
      })
    }
  }
</script>
<style>

</style>
