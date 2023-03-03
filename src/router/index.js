import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/Auth/LoginView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import ForgotPasswordView from "@/views/Auth/ForgotPasswordView.vue";
import GuestView from "@/views/GuestView.vue";
import BaseView from "@/views/BaseView.vue";
import UserView from "@/views/User/UserView.vue";
import DashboardView from "@/views/User/DashboardView.vue";
import ProfileView from "@/views/User/ProfileView.vue";
import DummyView2 from "@/views/User/DummyView2.vue";
import DummyView3 from "@/views/User/DummyView3.vue";
import DummyView4 from "@/views/User/DummyView4.vue";
import DummyView5 from "@/views/User/DummyView5.vue";
import DummyView6_1 from "@/views/User/DummyView6_1.vue";
import DummyView6_2 from "@/views/User/DummyView6_2.vue";
import DummyView6_3 from "@/views/User/DummyView6_3.vue";
import DummyView6_4 from "@/views/User/DummyView6_4.vue";

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
          path: "dummy3",
          name: "dummy3",
          component: DummyView3,
        },
        {
          path: "dummy4",
          name: "dummy4",
          component: DummyView4,
        },
        {
          path: "dummy5",
          name: "dummy5",
          component: DummyView5,
        },
        {
          path: "dummy6_1",
          name: "dummy6_1",
          component: DummyView6_1,
        },
        {
          path: "dummy6_2",
          name: "dummy6_2",
          component: DummyView6_2,
        },
        {
          path: "dummy6_3",
          name: "dummy6_3",
          component: DummyView6_3,
        },
        {
          path: "dummy6_4",
          name: "dummy6_4",
          component: DummyView6_4,
        },
        {
          path: "profile",
          name: "profile",
          component: ProfileView,
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
