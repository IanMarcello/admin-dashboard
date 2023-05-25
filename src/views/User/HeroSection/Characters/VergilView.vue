<script setup>
import IcRoundFormatListNumbered from "~icons/ic/round-format-list-numbered";
import IcRoundExpandMore from "~icons/ic/round-expand-more";
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();
</script>

<template>
  <div class="grid gap-2 m-5 text-dark-900 dark:text-light-300">
    <section class="grid">
      <div class="px-2">
        <div>
          <router-link
            :to="{ name: 'herosection' }"
            class="text-base font-medium dark:text-indigo-500 dark:hover:text-indigo-400 text-indigo-600 hover:text-indigo-500"
          >
            <span aria-hidden="true"> &larr;</span>
            Back to HeroSection
          </router-link>
        </div>
      </div>

      <div
        class="overflow-hidden my-2 w-52 rounded-sm bg-light-200 dark:bg-dark-400 shadow-md hover:shadow-lg transition-all duration-500"
        :class="toggleStore.openList ? 'h-full' : 'h-10'"
      >
        <div
          class="flex flex-row justify-between p-2 bg-light-200 dark:bg-dark-400 mb-1 relative z-10 border-b-2 border-light-500 dark:border-dark-500"
        >
          <div class="flex flex-row">
            <IcRoundFormatListNumbered class="w-6 h-6" />
            <span>CONTENT</span>
          </div>

          <div
            class="duration-300 transition-all hover:bg-light-400 dark:hover:bg-dark-500 rounded cursor-pointer"
            @click.prevent="toggleStore.toggleList"
            :class="toggleStore.openList ? 'rotate-0' : '-rotate-180 '"
          >
            <IcRoundExpandMore class="w-6 h-6" />
          </div>
        </div>

        <div
          class="px-2 transition-all transform duration-300"
          :class="toggleStore.openList ? 'translate-y-0' : '-translate-y-44'"
        >
          <ol class="list-decimal px-5">
            <li
              v-scroll-to="'#gridOne'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Content #1
            </li>
            <li
              v-scroll-to="'#gridTwo'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Content #2
            </li>
            <li
              v-scroll-to="'#gridThree'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Content #3
            </li>
            <li
              v-scroll-to="'#gridFour'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Content #4
            </li>
            <li>
              <ol>
                <li
                  v-scroll-to="'#gridFive'"
                  class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
                >
                  Content #5
                </li>
                <li
                  v-scroll-to="'#gridFiveOne'"
                  class="relative ml-2 list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
                >
                  Content #5.1
                </li>
                <li
                  v-scroll-to="'#gridFiveTwo'"
                  class="relative ml-2 list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
                >
                  Content #5.2
                </li>
                <li
                  v-scroll-to="'#gridFiveThree'"
                  class="relative ml-2 list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
                >
                  Content #5.3
                </li>
                <li
                  v-scroll-to="'#gridFiveFour'"
                  class="relative ml-2 list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
                >
                  Content #5.4
                </li>
              </ol>
            </li>
            <li
              v-scroll-to="'#gridSix'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Content #6
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section class="grid">
      <!-- <div class="flex items-center flex-wrap mb-5">
        <div class="w-full md:w-1/2">
          <h4 class="glitch text-3xl font-bold mb-3" data-glitch="Vergil">
            Vergil
          </h4>
          <p class="mb-8 dark:text-light-500">
            The older twin brother of Dante and one of the main antagonists of
            the Devil May Cry franchise. Following the death of their mother as
            children, Vergil and Dante went their separate ways, with Vergil
            rejecting his humanity and embracing his demonic heritage, in
            contrast with his younger brother's embrace of humanity and initial
            rejection of the demonic. Stoic and reserved, Vergil displays a
            willingness to do anything in his quest to obtain the power of his
            father, Sparda.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="@/assets/images/content/vergil.png"
            class="mx-auto md:mr-auto md:ml-0"
            alt="Vergil"
          />
        </div>
      </div> -->
    </section>
    <section class="grid">
      <div
        id="gridOne"
        class="p-3 overflow-auto rounded-lg h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        GRID ONE
      </div>
    </section>
    <section class="grid">
      <div
        id="gridTwo"
        class="p-3 overflow-auto rounded-lg h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        GRID TWO
      </div>
    </section>
    <section class="grid">
      <div
        id="gridThree"
        class="p-3 overflow-auto rounded-lg h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        GRID THREE
      </div>
    </section>
    <section class="grid">
      <div
        id="gridFour"
        class="p-3 overflow-auto rounded-lg h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        GRID FOUR
      </div>
    </section>
    <section class="grid">
      <div
        class="grid grid-rows-4 p-3 overflow-auto rounded-lg sm:col-span-6 gap-y-4 h-96 bg-light-50 dark:bg-dark-450 shadow"
      >
        <span id="gridFive">GRID FIVE</span>
        <div
          id="gridFiveOne"
          class="p-3 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
        >
          GRID 5.1
        </div>
        <div
          id="gridFiveTwo"
          class="p-3 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
        >
          GRID 5.2
        </div>
        <div
          id="gridFiveThree"
          class="p-3 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
        >
          GRID 5.3
        </div>
        <div
          id="gridFiveFour"
          class="p-3 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
        >
          GRID 5.4
        </div>
      </div>
    </section>
    <section class="grid">
      <div
        id="gridSix"
        class="p-3 overflow-auto rounded-lg h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        GRID SIX
      </div>
    </section>
  </div>
</template>

<style>
.glitch {
  position: relative;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    infinite;
  color: #00ffff;
  z-index: -1;
}

.glitch:after {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
    infinite;
  color: #5900ff;
  z-index: -2;
}

@keyframes glitch-color {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
}
</style>
