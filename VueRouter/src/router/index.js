import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from "../components/HelloWorld";
import HelloZzk from "../components/HelloZzk";
import HelloHkzzk from "../components/HelloHkzzk";
import HelloZzzk from "../components/HelloZzzk";
import HelloZzzzzk from "../components/HelloZzzzzk";
import HelloZzzzzzk from "../components/HelloZzzzzzk";

Vue.use(VueRouter);
Vue.config.productionTip = false;

export default new VueRouter({
  linkActiveClass : "active",
  routes: [
    {
      path: '/world',
      name:"world",
      component: HelloWorld
    },
    {
      path: '/zzk',
      name:"zzk",
      component: HelloZzk,
      children : [
        {
          path: '/zzzk',
          name:"zzzk",
          component: HelloZzzk
        },
        {
          path: '/zzzzzk',
          name:"zzzzzk",
          component: HelloZzzzzk
        },
        {
          path: '/zzzzzzk',
          name:"zzzzzzk",
          component: HelloZzzzzzk
        }
      ]
    },
    {
      path: '/hkzzk',
      name:"hkzzk",
      component: HelloHkzzk
    }
  ]
});
