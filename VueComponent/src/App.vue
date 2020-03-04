<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <HelloWorld/>-->
    <Customer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Customer from './components/Customer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Customer
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
