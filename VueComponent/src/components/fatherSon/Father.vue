<template>
    <div>
      父亲
      <p class="color">我是父组件中的内容</p>
      <Son>
        <p slot="s1" class="color">我是子组件插槽里的内容1</p>
        <p slot="s1" class="color">我是子组件插槽里的内容2</p>
        <p slot="s2" class="color" slot-scope="props">
          {{props.text}}
        </p>
      </Son>
    </div>
</template>
<script>
  import Son from "./Son";

  export default {
    name : "father",
    data() {
      return {

      }
    },
    methods : {

    },
    components : {
      Son
    }
  }
</script>
<style>

</style>
