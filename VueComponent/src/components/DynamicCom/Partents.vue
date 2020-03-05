<template>
  <div>
    Partents
    <keep-alive>
      <component :is="dynamicCom"></component>
    </keep-alive>
    <button @click="getComp">切换组件</button>
  </div>
</template>
<script>
  import Daughter from "./Daughter";
  import Son from "./Son";

  export default {
    name : "partents",
    data() {
      return {
        dynamicCom : "Son",
        flag : true
      }
    },
    methods : {
      getComp() {
        if(this.flag) {
          this.dynamicCom = "Daughter";
          this.flag = false;
        }else {
          this.dynamicCom = "Son";
          this.flag = true;
        }
      }
    },
    components : {
      Daughter,
      Son
    }
  }
</script>
<style>

</style>
