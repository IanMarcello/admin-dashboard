<script setup>
import { useToggleStore } from "@/stores/state";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import LocaleComponent from "@/components/LocaleComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const router = useRouter();
const authStore = useAuthStore();

const toggleDark = useToggle(isDark);
const toggleStore = useToggleStore();

const user = JSON.parse(sessionStorage.getItem("user"));

const logout = async () => {
  await authStore.logout();

  router.push({ name: "login" });
};
</script>

<template>
  <header
    class="fixed z-50 w-full bg-white border-b sm:items-center sm:flex sm:relative border-slate-300 dark:border-slate-500 drop-shadow-md sm:h-20 text-slate-900 dark:bg-slate-800 dark:text-slate-200"
  >
    <nav class="w-full px-3 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex flex-row justify-between w-full h-full py-3">
        <div class="flex flex-row items-center justify-center">
          <a class="items-start order-first p-2 md:hidden dark:bg-slate-800">
            <span
              @click="toggleStore.toggleShow"
              class="p-2 rounded-lg material-symbols-outlined text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-900"
            >
              menu
            </span>
          </a>
          <router-link class="" :to="{ name: '' }">
            <span class="sr-only">Your Company</span>
            <span
              class="text-base font-medium cursor-pointer text-slate-900 dark:text-slate-200 sm:inline-block sm:px-4"
              >Logo</span
            >
          </router-link>
        </div>
        <div
          class="flex flex-row items-center justify-center gap-x-1 md:gap-x-2"
        >
          <LocaleComponent />

          <div class="pr-2">
            <span
              @click="toggleDark()"
              class="inline-block px-4 py-2 font-medium rounded-lg cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 material-symbols-outlined dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
            >
              light_mode
            </span>
          </div>
          <div>
            <ProfileComponent
              v-if="!(typeof user === undefined || user === null)"
            />
          </div>
          <div>
            <router-link
              :to="{ name: 'login' }"
              v-if="typeof user === undefined || user === null"
              class="hidden px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >Login</router-link
            >
          </div>
          <div>
            <router-link
              :to="{ name: 'register' }"
              v-if="typeof user === undefined || user === null"
              class="hidden px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >Register</router-link
            >
          </div>
          <div>
            <a
              v-if="!(typeof user === undefined || user === null)"
              @click="logout"
              class="hidden px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
