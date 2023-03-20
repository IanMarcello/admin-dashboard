<template>
  <RouterView v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
  </RouterView>
</template>
