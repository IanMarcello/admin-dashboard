<script setup>
import { useToggleStore } from "@/stores/state";
import IcRoundMenu from "~icons/ic/round-menu";

const toggleStore = useToggleStore();
</script>

<template>
  <a class="items-start order-first p-2 md:hidden dark:bg-slate-800">
    <span
      @click="toggleStore.toggleShow"
      class="p-2 rounded-lg material-symbols-outlined text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-900"
    >
      <IcRoundMenu class="w-6 h-6" />
    </span>
  </a>
</template>
