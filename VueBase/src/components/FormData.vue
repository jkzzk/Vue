<template>
    <div>
      <p>FormData</p>
      <input type="text" v-model.number="msg">
      <p>{{ msg }}</p>

      <!--   探究事件修饰符   -->
      <div class="box1" @click="alert(1)">
        <div class="box2" @click="alert(2)">
          <div class="box3" @click="alert(3)">
            <div class="box4" @click.stop="alert(4)"></div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
    export default {
      name : "FormData",
      data() {
        return {
          msg : ""
        }
      },
      methods : {
        alert : function (num) {
            alert(num);
        }
      },
      computed : {

      },
      watch : {
        msg : function (data) {
          console.log(data);
        }
      }
    }
</script>
<style>
    .box1 {
      width: 300px;
      height: 300px;
      background-color: aqua;
    }
    .box2 {
      width: 200px;
      height: 200px;
      background-color: bisque;
    }
    .box3 {
      width: 100px;
      height: 100px;
      background-color: darkred;
    }
    .box4 {
      width: 50px;
      height: 50px;
      background-color: greenyellow;
    }
</style>
