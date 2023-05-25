<script setup>
import { useToggleStore } from "@/stores/state";
import IcRoundMenu from "~icons/ic/round-menu";
import IcRoundArrowForward from "~icons/ic/round-arrow-forward";

const toggleStore = useToggleStore();
</script>

<template>
  <a
    @click.prevent="toggleStore.toggleShow"
    class="flex p-2 cursor-pointer rounded-lg dark:bg-dark-600 hover:bg-light-100 dark:hover:bg-dark-700"
  >
    <div class="text-slate-900 dark:text-slate-200">
      <IcRoundMenu
        class="w-6 h-6 absolute transform transition-all duration-1000"
        :class="[
          toggleStore.openSidebar ? '-rotate-180' : 'rotate-90 opacity-0',
        ]"
      />
      <IcRoundArrowForward
        class="w-6 h-6 transform transition-all duration-1000"
        :class="[
          toggleStore.openSidebar ? 'opacity-0 -rotate-90' : 'opacity-100',
        ]"
      />
    </div>
  </a>
</template>
