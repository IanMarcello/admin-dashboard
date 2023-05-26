import { createRouter, createWebHistory } from "vue-router";
import GuestView from "@/views/GuestView.vue";

function checkAuthentication() {
  var isAuthenticated = false;

  if (sessionStorage.getItem("user")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  return isAuthenticated;
}

function AuthGuardRoutes(to, from, next) {
  var isAuthenticated = checkAuthentication();

  if (isAuthenticated) {
    next({ name: "dashboard" });
  } else {
    next();
  }
}

function UserGuardRoutes(to, from, next) {
  var isAuthenticated = checkAuthentication();

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
      beforeEnter: AuthGuardRoutes,
      component: GuestView,
    },
    {
      path: "/",
      component: () => import("@/views/User/BaseView.vue"),
      beforeEnter: UserGuardRoutes,
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
          path: "completed_transactions",
          name: "completed_transactions",
          component: () =>
            import("@/views/User/Transactions/CompletedTransactionsView.vue"),
        },
        {
          path: "failed_transactions",
          name: "failed_transactions",
          component: () =>
            import("@/views/User/Transactions/FailedTransactionsView.vue"),
        },
        {
          path: "pending_transactions",
          name: "pending_transactions",
          component: () =>
            import("@/views/User/Transactions/PendingTransactionsView.vue"),
        },
        {
          path: "reverse_transactions",
          name: "reverse_transactions",
          component: () =>
            import("@/views/User/Transactions/ReverseTransactionsView.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("@/views/Auth/AuthView.vue"),
      beforeEnter: AuthGuardRoutes,
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
