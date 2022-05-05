import Vue from "vue";
import Vuex from "vuex";
import API from "../store/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    works: [],
    darkrooms: [],

    routes: [
      { title: "Works", route: "/" },
      { title: "Blog", route: "/blog" },
      { title: "Dark Room", route: "/darkroom" },
    ],
  },
  mutations: {
    setWorks: (state, payload) => {
      state.works = payload;
    },
    setDarkrooms: (state, payload) => {
      state.darkrooms = payload;
    },
  },
  actions: {
    fetchWorks() {
      API.getData("works").then((data) => {
        this.commit("setWorks", data);
      });
    },
    fetchDarkrooms() {
      API.getData("darkroom").then((data) => {
        this.commit("setDarkrooms", data);
      });
    },
  },
  modules: {},
  getters: {
    works: (state) => state.works,
    darkrooms: (state) => state.darkrooms,


    routes: (state) => state.routes,
  },
});
