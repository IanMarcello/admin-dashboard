<script setup>
import { useToggleStore } from "@/stores/state";
// import IcRoundMenu from "~icons/ic/round-menu";

const toggleStore = useToggleStore();
</script>

<template>
  <!-- <a
    class="flex items-start justify-center order-last p-2 rounded-lg dark:bg-[#002b42] hover:bg-[#f8f9fa] dark:hover:bg-[#002b42]"
  > -->
  <!-- <span
    @click.prevent="toggleStore.toggleShow"
    class="text-slate-900 dark:text-slate-200"
  > -->
  <!-- <IcRoundMenu class="w-6 h-6" /> -->
  <button class="relative" @click.prevent="toggleStore.toggleShow">
    <div
      class="relative flex items-center rounded-lg hover:bg-[#f8f9fa] dark:hover:bg-[#002b42] justify-center w-10 h-10 transform transition-all"
    >
      <div
        class="flex flex-col justify-between w-4 h-4 overflow-hidden transform transition-all duration-500 origin-center"
        :class="[toggleStore.openSidebar ? '-rotate-180' : 'rotate-180']"
      >
        <div
          class="bg-dark-500 dark:bg-light-300 h-[2px] w-6 transform transition-all duration-500"
          :class="[
            toggleStore.openSidebar
              ? ''
              : '-rotate-45 -translate-x-1 translate-y-[0rem]',
          ]"
        ></div>
        <div
          class="bg-dark-500 dark:bg-light-300 h-[2px] w-6 rounded transform transition-all duration-500"
        ></div>
        <div
          class="bg-dark-500 dark:bg-light-300 h-[2px] w-6 transform transition-all duration-500"
          :class="[
            toggleStore.openSidebar
              ? ''
              : 'rotate-45 -translate-x-1 translate-y-[0rem]',
          ]"
        ></div>
      </div>
    </div>
  </button>
  <!-- </span> -->
  <!-- </a> -->
</template>
