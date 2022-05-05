import Vue from "vue";
import VueRouter from "vue-router";
import Works from "../views/Works.vue";
import Blog from "../views/Blog.vue";
import DarkRoom from "../views/DarkRoom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Works",
    component: Works,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/darkroom",
    name: "DarkRoom",
    component: DarkRoom,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
