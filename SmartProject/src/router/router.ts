import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../components/Nav.vue"),
      children: [
        { path: "/", component: () => import("../views/Reservations.vue") },
        { path: "/report", component: () => import("../views/Report.vue") },

        // { path: "/user", component: () => import("../views/User.vue") },
        // { path: "/courier", component: () => import("../views/Courier.vue") },
      ],
    },
  ],
});
