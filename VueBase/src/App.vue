<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <HelloWorld/>-->
<!--    <Events/>-->
<!--    <FormData />-->
    <Style />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Events from './components/Events'
import FormData from './components/FormData'
import Style from './components/Style'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Events,
    FormData,
    Style
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
