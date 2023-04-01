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
      :onclick="
        toggleStore.showSidebar && toggleStore.openSidebar
          ? toggleStore.toggleShow
          : ''
      "
      class="flex-1 mt-16 bg-light-100 sm:-ml-64 sm:mt-0 dark:bg-dark-600 md:filter-none"
      :class="[
        // toggleStore.showSidebar ? 'brightness-50 select-none' : 'filter-none',
        toggleStore.openSidebar ? 'md:ml-0' : 'md:-ml-64',
      ]"
    >
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
      <FooterComponent />
    </main>
    <SidenavComponent />
  </div>
</template>
