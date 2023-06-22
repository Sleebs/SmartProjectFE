import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../components/Nav.vue"),
      children: [
        { path: "/", component: () => import("../views/Reservations.vue") },
        { path: "/sedi", component: () => import("../views/Sedi.vue") },
      ],
    },

    {
      path: "/login", component: () => import("../views/Login.vue"),
    },

    {
      path: "/signup", component: () => import("../views/Signup.vue"),
    },

    {
      path: "/prova", component: () => import("../views/Prova.vue"),
    }
  ],
});
