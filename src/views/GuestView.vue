<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
// import FooterComponent from "@/components/FooterComponent.vue";
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-col flex-1 sm:flex-row">
    <main
      :onclick="toggleStore.show ? toggleStore.toggleShow : ''"
      class="flex-1 mt-16 bg-slate-100 sm:-ml-64 sm:mt-0 md:ml-0 dark:bg-slate-900 md:filter-none text-slate-900 dark:text-slate-200"
      :class="toggleStore.show ? 'brightness-50 select-none' : 'filter-none'"
    >
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
          class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
        >
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
            alt="hero"
            src="@/assets/images/content/hero_icon2.png"
          />
          <div class="text-center lg:w-5/12 w-full">
            <h1 class="my-4 text-5xl font-bold leading-tight">
              Lorem ipsum dolor sit amet.
            </h1>
            <p class="text-2xl mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas.
            </p>
            <div class="flex justify-center mx-auto">
              <button
                class="py-4 px-8 bg-white text-gray-800 font-semibold border rounded-full hover:bg-slate-100 hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
              >
                Lorem, ipsum.
              </button>
              <button
                class="ml-4 py-4 px-8 bg-white text-gray-800 font-semibold border rounded-full hover:bg-slate-100 hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
              >
                Lorem
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <FooterComponent /> -->
    </main>
  </div>
</template>
