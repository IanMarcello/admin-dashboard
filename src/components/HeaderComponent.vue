<script setup>
import themeIcon from "@/components/icons/themeIcon.vue";
import menuIcon from "@/components/icons/menuIcon.vue";
import localeIcon from "@/components/icons/localeIcon.vue";
import logoIcon from "@/components/icons/logoIcon.vue";
import profileIcon from "@/components/icons/profileIcon.vue";

const user = JSON.parse(sessionStorage.getItem("user"));
</script>

<template>
  <header
    class="fixed z-50 w-full sm:items-center sm:flex sm:flex-1 sm:relative sm:h-16 sm:min-w-full shadow-sm shadow-light-300 dark:shadow-light-800 text-slate-900 bg-light-50 dark:bg-dark-500 dark:text-slate-200"
  >
    <nav class="w-full px-3 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex flex-row justify-between w-full h-full py-3">
        <div class="flex flex-row gap-x-2 items-center justify-center">
          <logoIcon class="w-10 hidden md:inline" />
          <menuIcon v-if="!(typeof user === undefined || user === null)" />
        </div>
        <div
          class="flex flex-row items-center justify-center gap-x-1 md:gap-x-2"
        >
          <localeIcon
            class="rounded-lg transition-all duration-200 hover:bg-light-100 dark:hover:bg-dark-700"
          />
          <themeIcon
            class="rounded-lg transition-all duration-200 hover:bg-light-100 dark:hover:bg-dark-700"
          />
          <div>
            <profileIcon v-if="!(typeof user === undefined || user === null)" />
          </div>
          <div>
            <router-link
              :to="{ name: 'login' }"
              v-if="typeof user === undefined || user === null"
              class="px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-light-100 hover:dark:bg-opacity-30"
              >{{ $t("header.login") }}</router-link
            >
          </div>
          <div>
            <router-link
              :to="{ name: 'register' }"
              v-if="typeof user === undefined || user === null"
              class="px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-light-100 hover:dark:bg-opacity-30"
              >{{ $t("header.register") }}</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
