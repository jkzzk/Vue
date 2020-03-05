<template>
    <div>
      <input v-focus type="text">
      <p>{{ price | getMoenyKind }}</p>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          price : 20
        }
      },
      methods : {

      },
      directives : {
        focus : {
          inserted : function(el) {
            el.focus();
          }
        }
      },
      filters : {
        getMoenyKind(value) {
          if(typeof value === "number") {
            return "￥" + value;
          }else {
            return value;
          }
        }
      }
    }
</script>
<style>

</style>
