<template>
  <div>
    <LoadingScreen v-if="isLoading" />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import LoadingScreen from "@/components/LoaderComponent.vue";
import { onMounted, ref } from "vue";

var isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>
