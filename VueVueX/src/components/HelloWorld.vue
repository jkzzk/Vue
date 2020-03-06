<template>
  <div class="hello">
    <h1>{{ getCount }}</h1>
    <button @click="add">佳佳</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.$store.state.count
    }
  },
  computed : {
      getCount() {
        this.msg = this.$store.getters.getState;
        return this.msg;
      }
  },
  methods : {
    add () {
      // this.$store.commit("increment");
      this.$store.dispatch("increment");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
