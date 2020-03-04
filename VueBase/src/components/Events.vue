<template>
  <!-- 在template中只能存在一个根组件 -->
  <div class="event">
      <ul>
        <li v-on:click="getItemInfo(index)" v-for="(name,index) in namesArray">{{ name }}</li>
      </ul>

      <ul>
        <li v-for="(number,index) in numbers">{{number}}</li>
      </ul>

    <input type="text" v-on:keyup="getKeyUp">
    <button v-on:click="getOddNumber()">获取奇数</button>

    <p>{{ messageRes }}</p>
  </div>

</template>
<script>

  //导出可被外部访问
  export default {
    data(){
      return {
        namesArray : ["zzk","jkzzk","hkzzk"],
        numbers : [1,3,1,35,26,2,4,2,6,6],
        message : "hellow"
      }
    },
    methods:{
      getItemInfo(index) {
        alert(this.namesArray[index]);
        this.namesArray.push("dszzk");
      },
      getKeyUp(event) {
        console.log(event);
      },
      getOddNumber() {
        const newnumber = this.numbers.filter(function (number) {
          if (number % 2 !== 0) {
            console.log(number);
          }
          return number % 2 !== 0;
        });
      }
    },
    computed: {
      messageRes : function() {
        return this.message.split('').reverse().join('');
      }
    }
  }


</script>
<style></style>
