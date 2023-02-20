<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import LocaleComponent from "@/components/LocaleComponent.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const router = useRouter();
const authStore = useAuthStore();
const toggleDark = useToggle(isDark);

const register = async () => {
  const response = await authStore.register();
  if (response.status == 201 || response.status == 200) {
    router.push({ name: "login" });
  }
};
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen sm:px-0">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <!-- <router-link :to="{ name: 'home' }">
        <img
          class="w-auto h-12 mx-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </router-link> -->
      <h2
        class="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900"
      >
        {{ $t("register") }}
      </h2>
      <p class="mt-2 text-sm text-center text-gray-600">
        {{ $t("have_account") }},
        {{ " " }}
        <router-link
          :to="{ name: 'login' }"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          >{{ $t("Log In") }}</router-link
        >
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="register">
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700"
              >{{ $t("email_address") }}</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                v-model="authStore.email"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {{ $t("register") }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex items-center justify-center gap-3 mt-8">
      <LocaleComponent />

      <div class="pr-2">
        <span
          @click="toggleDark()"
          class="inline-block px-4 py-2 font-medium rounded-lg cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 material-symbols-outlined dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
        >
          light_mode
        </span>
      </div>
    </div>

    <div class="fixed bottom-0 w-screen"></div>
  </div>
</template>
