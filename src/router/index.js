import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/Auth/LoginView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import ForgotPasswordView from "@/views/Auth/ForgotPasswordView.vue";
import GuestView from "@/views/GuestView.vue";
import BaseView from "@/views/BaseView.vue";
import AuthView from "@/views/AuthView.vue";
import UserView from "@/views/User/UserView.vue";
import DashboardView from "@/views/User/DashboardView.vue";
import ProfileView from "@/views/User/ProfileView.vue";
import DummyView2 from "@/views/User/DummyView2.vue";
import DummyView3_1 from "@/views/User/DummyView3_1.vue";
import DummyView3_2 from "@/views/User/DummyView3_2.vue";
import DummyView3_3 from "@/views/User/DummyView3_3.vue";
import DummyView3_4 from "@/views/User/DummyView3_4.vue";

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
      beforeEnter: guardRoute,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: DashboardView,
        },
        {
          path: "profile",
          name: "profile",
          component: UserView,
        },
        {
          path: "dummy2",
          name: "dummy2",
          component: DummyView2,
        },
        {
          path: "dummy3_1",
          name: "dummy3_1",
          component: DummyView3_1,
        },
        {
          path: "dummy3_2",
          name: "dummy3_2",
          component: DummyView3_2,
        },
        {
          path: "dummy3_3",
          name: "dummy3_3",
          component: DummyView3_3,
        },
        {
          path: "dummy3_4",
          name: "dummy3_4",
          component: DummyView3_4,
        },
        {
          path: "profile",
          name: "profile",
          component: ProfileView,
        },
      ],
    },
    {
      path: "/auth",
      component: AuthView,
      children: [
        {
          path: "login",
          name: "login",
          component: LoginView,
        },
        {
          path: "register",
          name: "register",
          component: RegisterView,
        },
        {
          path: "password_reset",
          name: "forgot",
          component: ForgotPasswordView,
        },
      ],
    },
  ],
});

export default router;
