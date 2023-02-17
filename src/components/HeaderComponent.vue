<script setup>
import { useToggleStore } from "@/stores/state";
import LocaleComponent from "@/components/LocaleComponent.vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const toggleStore = useToggleStore();
</script>

<template>
  <header
    class="flex items-center px-6 bg-white border-b border-slate-300 dark:border-slate-500 drop-shadow-md sm:h-20 text-slate-900 dark:bg-slate-800 dark:text-slate-200"
  >
    <a class="items-start order-first p-2 bg-white md:hidden dark:bg-slate-800">
      <span
        @click="toggleStore.toggleShow"
        class="p-2 rounded-lg material-symbols-outlined text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-900"
      >
        menu
      </span>
    </a>
    <nav class="w-full px-4 mx-auto sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex flex-row justify-between w-full py-3">
        <div class="flex flex-row items-center justify-center">
          <router-link :to="{ name: '' }">
            <span class="sr-only">Your Company</span>
            <span
              class="text-base font-medium cursor-pointer text-slate-900 dark:text-slate-200 sm:inline-block sm:px-4"
              >Logo</span
            >
          </router-link>
        </div>
        <div class="flex flex-row gap-x-1 md:gap-x-2">
          <div>
            <LocaleComponent />
          </div>
          <div class="pr-2">
            <span
              @click="toggleDark()"
              class="inline-block px-2 py-2 font-medium rounded-lg dark:bg-black text-slate-900 dark:text-slate-200 material-symbols-outlined dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
            >
              light_mode
            </span>
          </div>
          <div>
            <span
              class="inline-block w-10 h-10 overflow-hidden bg-gray-100 rounded-full cursor-pointer"
            >
              <svg
                class="w-full h-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
          </div>
          <div>
            <router-link
              :to="{ name: '' }"
              class="hidden px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >Dummy Link #6</router-link
            >
          </div>
          <div>
            <router-link
              :to="{ name: '' }"
              class="hidden px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >Dummy Link #7</router-link
            >
          </div>
          <div>
            <a
              class="hidden px-3 py-2 text-base font-medium border border-transparent rounded-md cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 md:inline-block sm:px-4 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
              >Dummy Link #8</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
