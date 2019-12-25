import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/city/:cityid",
      name: "city",
      meta: {
        needLogin: true
      },
      component: () => import("./views/City.vue")
    },
    {
      path: "/msite",
      name: "msite",
      meta: {
        needLogin: false
      },
      component: () => import("./views/Msite.vue")
    }
  ]
});
