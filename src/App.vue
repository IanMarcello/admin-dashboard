<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SidenavComponent from "@/components/SidenavComponent.vue";
// import { useToggleStore } from "@/stores/state";

// const toggleStore = useToggleStore();
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-col flex-1 sm:flex-row">
    <main
      class="flex-1 bg-slate-100 sm:-ml-64 md:mt-0 md:ml-0 dark:bg-slate-900"
    >
      <RouterView />
      <FooterComponent />
    </main>
    <SidenavComponent />
  </div>
</template>
