import { createRouter, createWebHistory } from "vue-router";
import GuestView from "@/views/GuestView.vue";

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
      component: () => import("@/views/User/BaseView.vue"),
      beforeEnter: guardRoute,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("@/views/User/Dashboard/DashboardView.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/User/Profile/ProfileView.vue"),
        },
        {
          path: "users",
          name: "users",
          component: () => import("@/views/User/Users/UsersView.vue"),
        },
        {
          path: "transactions",
          name: "transactions",
          component: () =>
            import("@/views/User/Transactions/TransactionsView.vue"),
        },
        {
          path: "dummy3_1",
          name: "dummy3_1",
          component: () => import("@/views/User/Transactions/DummyView3_1.vue"),
        },
        {
          path: "dummy3_2",
          name: "dummy3_2",
          component: () => import("@/views/User/Transactions/DummyView3_2.vue"),
        },
        {
          path: "dummy3_3",
          name: "dummy3_3",
          component: () => import("@/views/User/Transactions/DummyView3_3.vue"),
        },
        {
          path: "dummy3_4",
          name: "dummy3_4",
          component: () => import("@/views/User/Transactions/DummyView3_4.vue"),
        },
        {
          path: "herosection",
          name: "herosection",
          component: () => import("@/views/User/HeroSection/HeroView.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("@/views/Auth/AuthView.vue"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/views/Auth/Login/LoginView.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/views/Auth/Register/RegisterView.vue"),
        },
        {
          path: "password_reset",
          name: "forgot",
          component: () =>
            import("@/views/Auth/ForgotPassword/ForgotPasswordView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/Template/NotFoundView.vue"),
    },
  ],
});

export default router;
