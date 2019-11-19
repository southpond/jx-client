import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant, { Toast } from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    Toast("需要登录！");
    next();
  } else {
    Toast("无需登录！");
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
