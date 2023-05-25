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
        class="overflow-hidden m-2 w-80 rounded-sm bg-light-200 dark:bg-dark-400 shadow-md hover:shadow-lg transition-all duration-500"
        :class="toggleStore.openList ? 'h-full' : 'h-14'"
      >
        <div
          class="flex flex-row justify-between p-4 bg-light-200 dark:bg-dark-400 mb-1 relative z-10 border-b-2 border-light-500 dark:border-dark-500"
        >
          <div class="flex flex-row">
            <IcRoundFormatListNumbered class="w-6 h-6 mr-1" />
            <span class="font-semibold">Contents</span>
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
          class="px-4 transition-all transform duration-300"
          :class="toggleStore.openList ? 'translate-y-0' : '-translate-y-44'"
        >
          <ol class="list-decimal px-5">
            <li
              v-scroll-to="'#gridOne'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Appearance
            </li>
            <li
              v-scroll-to="'#gridTwo'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Personality
            </li>
            <li
              v-scroll-to="'#gridThree'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Powers and Abilities
            </li>
            <!-- <li
              v-scroll-to="'#gridFour'"
              class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
            >
              Equipment
            </li> -->
            <li>
              <ol>
                <li
                  v-scroll-to="'#gridFive'"
                  class="relative list before:bg-light-600 dark:before:bg-dark-600 hover:text-light-600 cursor-pointer dark:hover:text-light-500"
                >
                  Equipment
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
              Gameplay
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section class="grid">
      <!-- <div class="flex items-center flex-wrap mb-5">
        <div class="w-full md:w-1/2 md:px-8">
          <img
            src="@/assets/images/content/dante.png"
            class="block mx-auto md:mr-0 md:ml-auto"
            alt="Dante"
          />
        </div>
        <div class="w-full md:w-1/2">
          <h4 class="glitch-transform text-3xl font-bold mb-3">Dante</h4>
          <p class="mb-8 dark:text-light-500">
            One of the main protagonists of the Devil May Cry franchise, and the
            main playable character for the majority of the games in the series.
            He is the second son of the demon Sparda and the human Eva, the
            younger twin brother of Vergil, and the uncle of Nero. Dante is a
            paranormal mercenary, private investigator and vigilante Devil
            Hunter dedicated to exterminating evil demons and other malevolent
            supernatural forces; a mission he follows in pursuit of those that
            killed his mother and corrupted his brother.
          </p>
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
.glitch-transform {
  position: relative;
  animation: shift 4s ease-in-out infinite alternate;
  transform: skewX(0deg);
  z-index: 1;
}

@keyframes shift {
  0%,
  40%,
  44%,
  58%,
  61%,
  65%,
  69%,
  73%,
  100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg);
  }

  60% {
    transform: skewX(-40deg);
  }

  63% {
    transform: skewX(10deg);
  }

  70% {
    transform: skewX(-50deg);
  }

  71% {
    transform: skewX(10deg);
  }
}

/* ol {
  counter-reset: item;
} */
/* 
li {
  display: block;
} */

/* li:before {
  content: counters(item, ".") " ";
  counter-increment: item;
} */

.list {
  padding: 2px 0px 2px 0px;
}

.list::before {
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  bottom: 0;
  left: 0;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.list:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
