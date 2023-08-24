import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from 'vue'

const DEFAULT_TITLE = 'Admin Template'

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
    next({ name: "login" });
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/User/BaseView.vue"),
      beforeEnter: UserGuardRoutes,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          meta: { title: 'AT: Dashboard' },
          component: () => import("@/views/User/Dashboard/DashboardView.vue"),
        },
        {
          path: "profile",
          name: "profile",
          meta: { title: 'AT: Profile' },
          component: () => import("@/views/User/Profile/ProfileView.vue"),
        },
        {
          path: "users",
          name: "users",
          meta: { title: 'AT: Users' },
          component: () => import("@/views/User/Users/UsersView.vue"),
        },
        {
          path: "transactions",
          name: "transactions",
          meta: { title: 'AT: Transactions' },
          component: () =>
            import("@/views/User/Transactions/TransactionsView.vue"),
        },
        {
          path: "completed_transactions",
          name: "completed_transactions",
          meta: { title: 'AT: Completed Transactions' },
          component: () =>
            import("@/views/User/Transactions/CompletedTransactionsView.vue"),
        },
        {
          path: "failed_transactions",
          name: "failed_transactions",
          meta: { title: 'AT: Failed Transactions' },
          component: () =>
            import("@/views/User/Transactions/FailedTransactionsView.vue"),
        },
        {
          path: "pending_transactions",
          name: "pending_transactions",
          meta: { title: 'AT: Pending Transactions' },
          component: () =>
            import("@/views/User/Transactions/PendingTransactionsView.vue"),
        },
        {
          path: "reverse_transactions",
          name: "reverse_transactions",
          meta: { title: 'AT: Reverse Transactions' },
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
          meta: { title: 'AT Auth: Login' },
          component: () => import("@/views/Auth/Login/LoginView.vue"),
        },
        {
          path: "register",
          name: "register",
          meta: { title: 'AT Auth: Register' },
          component: () => import("@/views/Auth/Register/RegisterView.vue"),
        },
        {
          path: "password_reset",
          name: "forgot",
          meta: { title: 'AT Auth: Forgot Password' },
          component: () =>
            import("@/views/Auth/ForgotPassword/ForgotPasswordView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      meta: { title: 'AT: Page Not Found' },
      component: () => import("@/views/Template/NotFoundView.vue"),
    },
  ],
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router;
