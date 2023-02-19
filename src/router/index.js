import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";

// function guardRoute(to, from, next) {
//   var isAuthenticated = false;

//   if (sessionStorage.getItem("user")) {
//     isAuthenticated = true;
//   } else {
//     isAuthenticated = false;
//   }

//   if (isAuthenticated) {
//     next();
//   } else {
//     next({ name: "login" });
//   }
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
    },
  ],
});

export default router;
