<template>
<div>
  <ul>
    <li>
      <router-link :to="urlData.zzzzzzk">zzzzzzk</router-link></li>
    <li>
      <router-link :to="urlData.zzzzzk">zzzzzk</router-link>
    </li>
    <li>
      <router-link :to="urlData.zzzk">zzzk</router-link>
    </li>
  </ul>
  <div class="jkzzk">
      <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloZzk',
  data () {
    return {
      urlData : {
        zzzzzzk : "/zzzzzzk",
        zzzzzk : "/zzzzzk",
        zzzk : "/zzzk"
      }
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  ul {
    float: left;
    margin: 0px;
    padding: 0px;
  }
  ul li {
    display: block;
    list-style: none;
    font-size: 20px;
    color: orangered;
    background-color: aqua;
    margin: 20px 20px;
  }
  .jkzzk {
    float: left;
    margin-top: 50px;
  }
</style>
