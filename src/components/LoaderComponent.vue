<template>
  <div
    class="absolute leading-[100vh] h-screen w-screen flex items-center z-50 text-center justify-center fade-in-out bg-gradient-to-br from-light-100 to-light-300 dark:bg-gradient-to-tl dark:from-dark-600 dark:to-dark-800"
  >
    <fingerprint-spinner
      :animation-duration="1250"
      :size="65"
      color="#ff1d5e"
    />
  </div>
</template>

<script setup>
import { FingerprintSpinner } from "epic-spinners";
</script>

<style>
.fade-in-out {
  -webkit-animation: fade-out ease 3s;
  -moz-animation: fade-out ease 3s;
  -o-animation: fade-out ease 3s;
  -ms-animation: fade-out ease 3s;
  animation: fade-out ease 3s;
  animation-fill-mode: forwards;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
