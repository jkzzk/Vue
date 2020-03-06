<template>
  <div>
    <NavList />
    <router-view/>
  </div>
</template>

<script>

  import NavList from "@/components/NavList";

  export default {
    name: 'app',
    components : {
      NavList
    }
  }
</script>

<style>
  .active {
    color: orangered;
  }
</style>
