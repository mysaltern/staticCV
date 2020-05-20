import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { Routes } from "./Routes";
import VueOnlinePlugin from "vue-navigator-online";

Vue.use(VueRouter);
Vue.use(VueOnlinePlugin);
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

new Vue({
  el: "#app",
  data: {
    // backgroundcolor :'white',
  },
  computed: {
    // myStyle: function() {
    //   return {
    //     color: "red",
    //     width: "200px"
    //   };
    // }
  },
  watch: {
    GetBackground: function() {
      // return  this.backgroundColor = 'red';
    }
  },
  router,
  render: h => h(App)
});
