<script setup>
import { useAuthStore } from "@/stores/auth";
import themeIcon from "@/components/icons/themeIcon.vue";
import localeIcon from "@/components/icons/localeIcon.vue";
import authLogoIcon from "@/components/icons/authLogoIcon.vue";

const authStore = useAuthStore();
</script>

<template>
  <div
    class="flex flex-col justify-center min-h-screen py-6 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900"
  >
    <div class="flex items-center justify-center gap-3 mb-6">
      <localeIcon />
      <themeIcon />
    </div>

    <div
      class="sm:mx-auto sm:w-full sm:max-w-md text-slate-900 dark:text-slate-200"
    >
      <authLogoIcon />
      <h2 class="mt-6 text-3xl font-bold tracking-tight text-center">
        {{ $t("forgot.reset") }}
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="px-4 py-8 shadow-lg text-slate-900 dark:text-slate-200 rounded-md bg-slate-50 dark:bg-slate-800 sm:rounded-lg sm:px-10"
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
                class="block w-full px-3 py-2 bg-white border rounded-md shadow-sm appearance-none border-slate-300 dark:border-slate-500 dark:bg-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                v-model="authStore.email"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
            >
              {{ $t("forgot.reset") }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <div
      class="flex mt-8 items-center justify-evenly sm:mx-auto sm:w-full sm:max-w-md"
    >
      <div class="pr-2">
        <div>
          <router-link
            :to="{ name: 'register' }"
            class="text-base font-medium text-indigo-600 hover:text-indigo-900 dark:hover:text-indigo-500"
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
            class="text-base font-medium text-indigo-600 hover:text-indigo-900 dark:hover:text-indigo-500"
          >
            {{ $t("forgot.login") }}
            <span aria-hidden="true"> &rarr;</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
