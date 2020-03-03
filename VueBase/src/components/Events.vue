<template>
  <!-- 在template中只能存在一个根组件 -->
  <div class="event">
      <ul>
        <li v-on:click="getItemInfo(index)" v-for="(name,index) in namesArray">{{ name }}</li>
      </ul>
  </div>

</template>
<script>

  //导出可被外部访问
  export default {
    data(){
      return {
        namesArray : ["zzk","jkzzk","hkzzk"]
      }
    },
    methods:{
      getItemInfo(index) {
        alert(this.namesArray[index]);
      }
    }
  }


</script>
<style></style>
