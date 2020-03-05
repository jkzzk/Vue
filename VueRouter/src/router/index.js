import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from "../components/HelloWorld";
import HelloZzk from "../components/HelloZzk";

Vue.use(VueRouter);
Vue.config.productionTip = false;

export default new VueRouter({
  routes: [
    {
      path: '/world',
      component: HelloWorld
    },
    {
      path: '/zzk',
      component: HelloZzk
    }
  ]
});
