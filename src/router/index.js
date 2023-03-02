import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/Auth/LoginView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import ForgotPasswordView from "@/views/Auth/ForgotPasswordView.vue";
import UserView from "@/views/UserView.vue";
import GuestView from "@/views/GuestView.vue";
import BaseView from "@/views/BaseView.vue";
import DashboardView from "@/views/DashboardView.vue";

function guardRoute(to, from, next) {
  var isAuthenticated = false;

  if (sessionStorage.getItem("user")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next();
  } else {
    next({ name: "home" });
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/landing",
      name: "home",
      component: GuestView,
    },
    {
      path: "/",
      component: BaseView,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: DashboardView,
          beforeEnter: guardRoute,
        },
        {
          path: "profile",
          name: "profile",
          component: UserView,
          beforeEnter: guardRoute,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/password_reset",
      name: "forgot",
      component: ForgotPasswordView,
    },
  ],
});

export default router;
