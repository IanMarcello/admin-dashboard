<script setup>
import { useAuthStore } from "@/stores/auth";
import themeIcon from "@/components/icons/themeIcon.vue";
import localeIcon from "@/components/icons/localeIcon.vue";
import authLogoIcon from "@/components/icons/authLogoIcon.vue";

const authStore = useAuthStore();
</script>

<template>
  <main
    class="flex flex-col justify-center min-h-screen py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-100 to-light-300 dark:bg-gradient-to-tl dark:from-dark-600 dark:to-dark-800"
  >
    <section class="flex flex-row items-center justify-center gap-x-3 mb-6">
      <localeIcon />
      <themeIcon />
    </section>

    <section
      class="flex flex-col items-center text-dark-900 dark:text-light-200"
    >
      <authLogoIcon />
      <h2 class="mt-6 text-3xl font-bold tracking-tight">
        {{ $t("forgot.reset") }}
      </h2>
    </section>

    <section class="mt-8 flex justify-center">
      <div
        class="w-full max-w-md px-10 py-8 rounded-lg shadow-lg text-dark-900 dark:text-light-200 bg-light-200 dark:bg-dark-600"
      >
        <form class="space-y-6" @submit.prevent="password_reset">
          <div>
            <label for="email" class="block text-sm font-medium">{{
              $t("forgot.email_address")
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
            <button
              type="submit"
              class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm transition ease-in duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ $t("forgot.reset") }}
            </button>
          </div>
        </form>
      </div>
    </section>

    <section
      class="flex mt-8 items-center justify-evenly sm:mx-auto sm:w-full sm:max-w-md"
    >
      <div class="pr-2">
        <div>
          <router-link
            :to="{ name: 'register' }"
            class="text-base font-medium dark:text-indigo-500 dark:hover:text-indigo-400 text-indigo-600 hover:text-indigo-500"
          >
            <span aria-hidden="true"> &larr;</span>
            {{ $t("forgot.register") }}
          </router-link>
        </div>
      </div>

      <div class="pr-2">
        <div>
          <router-link
            :to="{ name: 'login' }"
            class="text-base font-medium dark:text-indigo-500 dark:hover:text-indigo-400 text-indigo-600 hover:text-indigo-500"
          >
            {{ $t("forgot.login") }}
            <span aria-hidden="true"> &rarr;</span>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>
