import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/views/HomePage";
import LoginPage from "@/views/LoginPage";
import NotFound from "@/views/NotFound";
import Dashboard from "@/views/Dashboard/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "/admin",
        component: () => import("../views/Admin"),
      },
      {
        path: "/ressources",
        component: () => import("../views/Ressources"),
      },
      {
        path: "/profile",
        component: () => import("../views/Profile"),
      },
      {
        path: "/user-list",
        component: () => import("../views/Users/UserList"),
      },
      {
        path: "/create-user",
        component: () => import("../views/Users/CreateUser"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
