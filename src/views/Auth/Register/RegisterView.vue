<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { notify } from "notiwind";
import themeIcon from "@/components/icons/themeIcon.vue";
import localeIcon from "@/components/icons/localeIcon.vue";
import logoIcon from "@/components/icons/logoIcon.vue";

onMounted(() => {
  authStore.$reset();
});

const router = useRouter();
const authStore = useAuthStore();

const register = async () => {
  const response = await authStore.register();
  if (response.data.code == 201) {
    sessionStorage.setItem("register", true);
    router.push({ name: "login" });
  } else {
    notify(
      {
        bg: "bg-red-500",
        type: "error",
        color: "text-red-500",
        group: "foo",
        title: "Failed",
        text: "Registration Failed!",
      },
      2000
    );
    authStore.email = response.data.email;
  }
};
</script>

<template>
  <main
    class="flex flex-col justify-center min-h-screen py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-100 to-light-300 dark:bg-gradient-to-tl dark:from-dark-600 dark:to-dark-800"
  >
    <section class="flex items-center justify-center sm:justify-end gap-x-3">
      <localeIcon />
      <themeIcon />
    </section>

    <section
      class="flex flex-col items-center text-dark-900 dark:text-light-200"
    >
      <logoIcon />
      <h2 class="mt-6 text-3xl font-bold tracking-tight">
        {{ $t("register.register") }}
      </h2>
      <p class="mt-2 text-sm text-light-700 dark:text-light-500">
        {{ $t("register.have_account") }},
        <router-link
          :to="{ name: 'login' }"
          class="font-medium dark:text-indigo-500 dark:hover:text-indigo-400 text-indigo-600 hover:text-indigo-500"
        >
          {{ $t("register.login") }}
        </router-link>
      </p>
    </section>

    <section class="flex justify-center mt-8">
      <div
        class="w-full max-w-md px-10 py-8 rounded-lg shadow-lg text-dark-900 dark:text-light-200 bg-light-200 dark:bg-dark-600"
      >
        <form class="space-y-6" @submit.prevent="register">
          <div>
            <label for="name" class="block text-sm font-medium">{{
              $t("register.name")
            }}</label>
            <div class="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                class="block w-full px-3 py-2 bg-light-100 border rounded-md shadow-sm appearance-none border-slate-300 dark:border-dark-300 dark:bg-dark-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
                v-model="authStore.name"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium">{{
              $t("register.email_address")
            }}</label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full px-3 py-2 bg-light-100 border rounded-md shadow-sm appearance-none border-slate-300 dark:border-dark-300 dark:bg-dark-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
                v-model="authStore.email"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium">{{
              $t("register.password")
            }}</label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                class="block w-full px-3 py-2 bg-light-100 border rounded-md shadow-sm appearance-none border-slate-300 dark:border-dark-300 dark:bg-dark-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
                v-model="authStore.password"
              />
            </div>
          </div>

          <div>
            <label for="confirm_password" class="block text-sm font-medium">{{
              $t("register.confirm_password")
            }}</label>
            <div class="mt-1">
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                autocomplete="new-password"
                class="block w-full px-3 py-2 bg-light-100 border rounded-md shadow-sm appearance-none border-slate-300 dark:border-dark-300 dark:bg-dark-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
                v-model="authStore.confirm_password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm transition ease-in duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              {{ $t("register.register") }}
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div
                class="w-full border-t border-light-400 dark:border-dark-400"
              />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 rounded bg-light-100 dark:bg-dark-400">
                {{ $t("register.register_with") }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 mt-6">
            <div class="">
              <router-link
                :to="{}"
                class="inline-flex justify-center w-full px-4 py-2 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 text-sm font-medium bg-light-50 border rounded-md shadow-sm dark:bg-dark-700 dark:border-dark-500 border-light-400 text-light-800 dark:text-light-100 hover:bg-light-300 hover:dark:bg-dark-400"
              >
                <span class="sr-only">Sign up with Facebook</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
            </div>

            <div>
              <router-link
                :to="{}"
                class="inline-flex justify-center w-full px-4 py-2 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 text-sm font-medium bg-light-50 border rounded-md shadow-sm dark:bg-dark-700 dark:border-dark-500 border-light-400 text-light-800 dark:text-light-100 hover:bg-light-300 hover:dark:bg-dark-400"
              >
                <span class="sr-only">Sign up with Twitter</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </router-link>
            </div>

            <div>
              <router-link
                :to="{}"
                class="inline-flex justify-center w-full px-4 py-2 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 text-sm font-medium bg-light-50 border rounded-md shadow-sm dark:bg-dark-700 dark:border-dark-500 border-light-400 text-light-800 dark:text-light-100 hover:bg-light-300 hover:dark:bg-dark-400"
              >
                <span class="sr-only">Sign up with GitHub</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
