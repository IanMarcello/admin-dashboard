<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-col flex-1 sm:flex-row">
    <main
      :onclick="toggleStore.show ? toggleStore.toggleShow : ''"
      class="flex-1 mt-16 bg-slate-100 sm:-ml-64 sm:mt-0 md:ml-0 dark:bg-slate-900 md:filter-none"
      :class="toggleStore.show ? 'brightness-50 select-none' : 'filter-none'"
    >
      <div class="flex items-center justify-center flex-1 px-2">
        <h1
          class="mt-2 text-4xl font-bold tracking-tight uppercase text-slate-900 dark:text-slate-200 sm:text-5xl"
        >
          {{ $t("guest.content") }}
        </h1>
      </div>
      <FooterComponent />
    </main>
  </div>
</template>
