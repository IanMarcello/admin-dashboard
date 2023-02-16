<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SidenavComponent from "@/components/SidenavComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-1 flex-col sm:flex-row">
    <main
      class="flex-1 sm:-ml-64 md:ml-0 bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-200"
    >
      <RouterView />
      <FooterComponent />
    </main>
    <SidenavComponent />
  </div>
</template>
