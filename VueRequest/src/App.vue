<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <HelloWorld/>-->
<!--    <AxiosReq />-->
    <AxiosReqPost />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AxiosReq from './components/AxiosReq/AxiosReq'
import AxiosReqPost from "./components/AxiosReq/AxiosReqPost";

export default {
  name: 'App',
  components: {
    HelloWorld,
    AxiosReq,
    AxiosReqPost
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
