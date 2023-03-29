<script setup>
import { useToggleStore } from "@/stores/state";
import IcRoundMenu from "~icons/ic/round-menu";

const toggleStore = useToggleStore();
</script>

<template>
  <a
    class="flex items-start justify-center order-last p-2 rounded-lg dark:bg-[#002b42] hover:bg-[#f8f9fa] dark:hover:bg-[#002b42]"
  >
    <span
      @click="toggleStore.toggleShow"
      class="text-slate-900 dark:text-slate-200"
    >
      <IcRoundMenu class="w-6 h-6" />
    </span>
  </a>
</template>
