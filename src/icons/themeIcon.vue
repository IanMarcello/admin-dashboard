<script setup>
import { onBeforeMount } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import IcOutlineLightMode from "~icons/ic/outline-light-mode";

onBeforeMount(() => {
  useToggle(isDark);
});

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="pr-2">
    <span
      @click="toggleDark()"
      class="inline-flex justify-center px-4 py-2 font-medium rounded-lg cursor-pointer dark:bg-black text-slate-900 dark:text-slate-200 material-symbols-outlined dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-40"
    >
      <IcOutlineLightMode class="w-6 h-6" />
    </span>
  </div>
</template>
