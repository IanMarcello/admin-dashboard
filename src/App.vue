<script setup>
import { RouterView } from "vue-router";
import NotificationComponent from "@/components/NotificationComponent.vue";
</script>

<template>
  <NotificationComponent />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
