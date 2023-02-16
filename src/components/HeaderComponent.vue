<script setup>
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();

const toggleShow = async () => {
  const response = await toggleStore.toggleShow();
  console.log(response);
};
</script>

<template>
  <header
    class="border-b-2 dark:border-slate-900 border-slate-400 sm:h-14 px-6 flex items-center bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
  >
    <a
      class="order-first p-2 sm:hidden bg-slate-300 dark:bg-slate-800 items-start"
    >
      <span
        @click="toggleShow"
        class="material-symbols-outlined text-slate-800 dark:text-slate-200 p-2 rounded-lg hover:bg-slate-500 dark:hover:bg-slate-900"
      >
        menu
      </span>
    </a>
    Header Component
  </header>
</template>
