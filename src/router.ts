import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Home from "@/views/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    component: Home,
    path: "/",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
