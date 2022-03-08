import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Home from "@/views/Home.vue";
import Ressource from "@/views/Ressource.vue";
import { useAuthStore } from "@/stores/auth";

const routes: RouteRecordRaw[] = [
  {
    component: Home,
    path: "/",
    name: "Home",
  },
  {
    //Lazyloading de route
    component: () => import("@/views/About.vue"),
    path: "/about",
    name: "About",
  },
  {
    //Lazyloading de route
    component: () => import("@/views/Admin/Admin.vue"),
    path: "/admin",
    name: "Admin",
    meta: { needAuth: true },
    children: [
      {
        component: () => import("@/views/Admin/Management.vue"),
        path: "management",
        name: "AdminManagement",
      },
      {
        component: () => import("@/views/Admin/Validation.vue"),
        path: "validation",
        name: "AdminValidation",
      },
    ],
  },
  {
    component: Ressource,
    path: "/ressource/:id",
    name: "Ressource",
  },
  {
    //Lazyloading de route
    component: () => import("@/views/Login.vue"),
    path: "/login",
    name: "Login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const { token } = authStore.user;
  const isPageProtected = to.matched.some((route) => route.meta.needAuth);

  if (!token && isPageProtected) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
