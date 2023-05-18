<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";

import { onMounted, onBeforeUnmount, ref } from "vue";

var isMounted = ref(true);

onMounted(() => {
  isMounted.value = true;
});

onBeforeUnmount(() => {
  isMounted.value = false;
});
</script>

<template>
  <HeaderComponent />
  <div
    class="flex flex-col flex-1 sm:flex-row"
    :class="isMounted ? 'fade-in' : 'fade-out'"
  >
    <main class="flex-1 text-slate-900 dark:text-slate-200">
      <div
        class="h-full text-white"
        style="
          background: linear-gradient(
            90deg,
            rgba(131, 126, 226, 1) 24%,
            rgba(114, 114, 226, 1) 58%,
            rgba(0, 212, 255, 1) 100%
          );
        "
      >
        <div
          class="mx-auto flex px-5 py-24 items-center justify-center flex-col"
        >
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
            alt="hero"
            src="@/assets/images/dmc_heroicon.png"
          />
          <div class="text-center lg:w-5/12 w-full">
            <h1
              class="my-4 text-5xl font-bold leading-tight text-slate-900 dark:text-slate-200"
            >
              Lorem ipsum dolor sit amet.
            </h1>
            <p class="text-2xl mb-8 text-slate-900 dark:text-slate-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas.
            </p>
            <div class="flex justify-center mx-auto">
              <button
                class="py-4 px-8 dark:bg-dark-600 bg-light-50 text-gray-800 font-semibold border dark:border-transparent rounded-full hover:bg-light-100 hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 dark:text-slate-200"
              >
                Lorem, ipsum.
              </button>
              <button
                class="ml-4 py-4 px-8 dark:bg-dark-600 bg-light-50 text-gray-800 font-semibold border dark:border-transparent rounded-full hover:bg-light-100 hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 dark:text-slate-200"
              >
                Lorem
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.fade-in {
  -webkit-animation: fade-in ease 1s;
  -moz-animation: fade-in ease 1s;
  -o-animation: fade-in ease 1s;
  -ms-animation: fade-in ease 1s;
  animation: fade-in ease-in 1s;
  animation-fill-mode: forwards;
}

.fade-out {
  -webkit-animation: fade-out ease 5s;
  -moz-animation: fade-out ease 5s;
  -o-animation: fade-out ease 5s;
  -ms-animation: fade-out ease 5s;
  animation: fade-out ease 5s;
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
