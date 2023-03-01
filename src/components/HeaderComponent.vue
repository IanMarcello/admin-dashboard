<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import themeIcon from "@/icons/themeIcon.vue";
import menuIcon from "@/icons/menuIcon.vue";
import localeIcon from "@/icons/localeIcon.vue";
import logoIcon from "@/icons/logoIcon.vue";
import profileIcon from "@/icons/profileIcon.vue";

const router = useRouter();
const authStore = useAuthStore();

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
          <menuIcon v-if="!(typeof user === undefined || user === null)" />
          <logoIcon class="w-10" />
        </div>
        <div
          class="flex flex-row items-center justify-center gap-x-1 md:gap-x-2"
        >
          <localeIcon />
          <themeIcon />
          <div>
            <profileIcon v-if="!(typeof user === undefined || user === null)" />
          </div>
          <div>
            <router-link
              :to="{ name: 'login' }"
              v-if="typeof user === undefined || user === null"
              class="px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >{{ $t("header.login") }}</router-link
            >
          </div>
          <div>
            <router-link
              :to="{ name: 'register' }"
              v-if="typeof user === undefined || user === null"
              class="px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >{{ $t("header.register") }}</router-link
            >
          </div>
          <div>
            <a
              v-if="!(typeof user === undefined || user === null)"
              @click="logout"
              class="px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >{{ $t("header.logout") }}</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
