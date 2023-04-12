<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { useThemeStore } from "@/stores/theme";
import IcOutlineLightMode from "~icons/ic/outline-light-mode";

const themeStore = useThemeStore();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const setTheme = () => {
  toggleDark();
  themeStore.theme_key = isDark.value ? "dark" : "light";
};
</script>

<template>
  <div @click.prevent="setTheme">
    <span
      class="inline-flex justify-center px-4 py-2 font-medium cursor-pointer text-slate-900 dark:text-slate-200"
    >
      <IcOutlineLightMode class="w-6 h-6" />
    </span>
  </div>
</template>
