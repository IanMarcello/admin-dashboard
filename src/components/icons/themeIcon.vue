<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { useThemeStore } from "@/stores/theme";
import IcOutlineLightMode from "~icons/ic/outline-light-mode";
import MdiWeatherNight from "~icons/mdi/weather-night";

const themeStore = useThemeStore();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const setTheme = () => {
  toggleDark();
  themeStore.theme_key = isDark.value ? "dark" : "light";
};
</script>

<template>
  <div
    @click.prevent="setTheme"
    class="transition duration-200 ease-in rounded-lg dark:bg-dark-700 dark:bg-opacity-20 hover:bg-light-400 hover:dark:bg-dark-500"
  >
    <button
      type="button"
      class="flex items-center justify-center px-4 py-2 font-medium outline-none cursor-pointer text-slate-900 dark:text-slate-200"
    >
      <IcOutlineLightMode
        class="absolute w-6 h-6 transition-all duration-1000 transform"
        :class="[isDark ? 'opacity-0 translate-y-3' : 'opacity-100']"
      />
      <MdiWeatherNight
        class="w-6 h-6 transition-all duration-1000 transform"
        :class="[isDark ? 'opacity-100' : 'opacity-0 translate-y-3']"
      />
    </button>
  </div>
</template>
