<template>
  <div>
    <ul>
      <li>
        <router-link :to="urlData.world">world</router-link>
      </li>
      <li>
        <router-link :to="urlData.zzk">zzk</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          urlData : {
            world : "/world",
            zzk : "/zzk"
          }
        }
      },
      methods : {

      }
    }
</script>
<style>
  a {
    text-decoration: none;
  }
  ul {
    text-align: center;
  }
  ul li {
    display: inline-block;
    list-style: none;
    font-size: 20px;
    color: orangered;
    background-color: aqua;
    margin: 0 20px;
  }
</style>
