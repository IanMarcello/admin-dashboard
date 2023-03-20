<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SidenavComponent from "@/components/SidenavComponent.vue";
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-col flex-1 sm:flex-row">
    <main
      :onclick="toggleStore.show ? toggleStore.toggleShow : ''"
      class="flex-1 mt-16 bg-[#f8f9fa] sm:-ml-64 sm:mt-0 md:ml-0 dark:bg-[#002b42] md:filter-none"
      :class="toggleStore.show ? 'brightness-50 select-none' : 'filter-none'"
    >
      <RouterView v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component" />
          </div>
        </transition>
      </RouterView>
      <FooterComponent />
    </main>
    <SidenavComponent />
  </div>
</template>
