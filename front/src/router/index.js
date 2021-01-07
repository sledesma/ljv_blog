import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../views/Home.vue';
import Detalle from '../views/Detalle.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/detalle/:id",
    component: Detalle
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
