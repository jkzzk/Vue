<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <HelloWorld/>-->
<!--    <Customer />-->
<!--    <Father />-->
<!--    <Partents />-->
    <CustomerCmd />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Customer from './components/Father'
import Father from "./components/fatherSon/Father";
import Partents from "./components/DynamicCom/Partents";
import CustomerCmd from "./components/CustomerCmd/CustomerCmd";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Customer,
    Father,
    Partents,
    CustomerCmd
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
