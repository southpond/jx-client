import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    saveUserPool(state, userpool) {
      state.UserPool = userpool;
    },
    testMutations(state) {
      state.count++;
    }
  },
  actions: {
    testActions({ commit }) {
      commit("testMutations");
    }
  }
});
