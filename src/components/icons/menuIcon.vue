<script setup>
import { useToggleStore } from "@/stores/state";
import IcRoundMenu from "~icons/ic/round-menu";

const toggleStore = useToggleStore();
</script>

<template>
  <a
    class="flex items-start justify-center order-first p-2 rounded-lg md:hidden dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-900"
  >
    <span
      @click="toggleStore.toggleShow"
      class="text-slate-900 dark:text-slate-200"
    >
      <IcRoundMenu class="w-6 h-6" />
    </span>
  </a>
</template>
