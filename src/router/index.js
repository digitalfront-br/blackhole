import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/rede",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "lista_ips" */ "../views/ListPage.vue")
  },
  {
    path: "/ip",
    name: "Single",
    component: () =>
      import(/* webpackChunkName: "single_ips" */ "../views/SinglePage.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
