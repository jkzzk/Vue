<template>
  <div class="hello">
    {{hello}}
    {{1+1}}
    {{哈哈}}
    {{"哈哈"}}
    {{0<10 ? "对的" : "错的"}}
    <p v-html="hello"></p>
    <p v-text="hello1"></p>

    <template v-if="show">
      <span>我是if标签中的内容</span>
    </template>
    <template v-else>
      <span>我是else中的内容</span>
    </template>

    <span v-bind:class="ha">我是ha</span>

    <ul>
      <li v-for="(index,name) in names" v-bind:key="index">{{ name }}-{{index}}</li>
    </ul>

    <ul>
      <li v-for="(wife,index) in wifes" :key="index">
          <span>{{wife.name}}</span>
          <span>{{wife.status}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      hello:"Hello VUE",
      hello1:"<p>Hello VUE</p>",
      哈哈:"哈哈",
      ha:"ha1",
      show:false,
      names:["I","love","王彩霞"],
      wifes:[
        {id:0,name:"王彩霞",status:"开心"},
        {id:1,name:"王彩霞",status:"生气"},
        {id:2,name:"王彩霞",status:"哭哭"},
        {id:3,name:"王彩霞",status:"打张泽昆"},
        {id:3,name:"王彩霞",status:"被张泽昆打"}
      ]
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
.ha {
  color: #42B983;
}

.ha1 {
  color: brown;
}
</style>
