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
    class="fixed z-50 w-full sm:items-center sm:flex sm:relative shadow-sm shadow-[#dee2e6] dark:shadow-[#00263a] sm:h-16 text-slate-900 bg-[#ffffff] dark:bg-[#003049] dark:text-slate-200"
  >
    <nav class="w-full px-3 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex flex-row justify-between w-full h-full py-3">
        <div class="flex flex-row items-center justify-center">
          <menuIcon v-if="!(typeof user === undefined || user === null)" />
          <logoIcon class="w-10 hidden md:inline" />
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
        </div>
      </div>
    </nav>
  </header>
</template>
