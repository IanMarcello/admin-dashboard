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
        class="overflow-hidden m-2 w-52 rounded-sm bg-light-200 dark:bg-dark-400 shadow-md hover:shadow-lg transition-all duration-500"
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
          <h4
            class="glitch-noise text-3xl font-bold mb-3"
            data-glitch-noise="Nero"
          >
            Nero
          </h4>
          <p class="mb-8 dark:text-light-500">
            One of the main protagonists of the Devil May Cry franchise. He
            first appeared as a playable character in Devil May Cry 4, and later
            in Devil May Cry 5. He was raised in Fortuna and served as a Holy
            Knight in the Order of the Sword, a religious group that worships
            Sparda and fights to protect the world from demons. It is later
            revealed that he is the son of Vergil, nephew of Legendary Devil
            Hunter Dante, and grandson of Legendary Dark Knight Sparda.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="@/assets/images/content/nero.png"
            class="block mx-auto md:mr-auto md:ml-0"
            alt="Nero"
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
.glitch-noise {
  position: relative;
  z-index: 1;
}

.glitch-noise:before {
  content: attr(data-glitch-noise);
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch-noise:after {
  content: attr(data-glitch-noise);
  position: absolute;
  top: 0;
  left: 2px;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-after 2s infinite linear alternate-reverse;
}

@keyframes noise-before {
  0% {
    clip: rect(61px, 9999px, 52px, 0);
  }

  5% {
    clip: rect(33px, 9999px, 144px, 0);
  }

  10% {
    clip: rect(121px, 9999px, 115px, 0);
  }

  15% {
    clip: rect(144px, 9999px, 162px, 0);
  }

  20% {
    clip: rect(62px, 9999px, 180px, 0);
  }

  25% {
    clip: rect(34px, 9999px, 42px, 0);
  }

  30% {
    clip: rect(147px, 9999px, 179px, 0);
  }

  35% {
    clip: rect(99px, 9999px, 63px, 0);
  }

  40% {
    clip: rect(188px, 9999px, 122px, 0);
  }

  45% {
    clip: rect(154px, 9999px, 14px, 0);
  }

  50% {
    clip: rect(63px, 9999px, 37px, 0);
  }

  55% {
    clip: rect(161px, 9999px, 147px, 0);
  }

  60% {
    clip: rect(109px, 9999px, 175px, 0);
  }

  65% {
    clip: rect(157px, 9999px, 88px, 0);
  }

  70% {
    clip: rect(173px, 9999px, 131px, 0);
  }

  75% {
    clip: rect(62px, 9999px, 70px, 0);
  }

  80% {
    clip: rect(24px, 9999px, 153px, 0);
  }

  85% {
    clip: rect(138px, 9999px, 40px, 0);
  }

  90% {
    clip: rect(79px, 9999px, 136px, 0);
  }

  95% {
    clip: rect(25px, 9999px, 34px, 0);
  }

  100% {
    clip: rect(173px, 9999px, 166px, 0);
  }
}

@keyframes noise-after {
  0% {
    clip: rect(26px, 9999px, 33px, 0);
  }

  5% {
    clip: rect(140px, 9999px, 198px, 0);
  }

  10% {
    clip: rect(184px, 9999px, 89px, 0);
  }

  15% {
    clip: rect(121px, 9999px, 6px, 0);
  }

  20% {
    clip: rect(181px, 9999px, 99px, 0);
  }

  25% {
    clip: rect(154px, 9999px, 133px, 0);
  }

  30% {
    clip: rect(134px, 9999px, 169px, 0);
  }

  35% {
    clip: rect(26px, 9999px, 187px, 0);
  }

  40% {
    clip: rect(147px, 9999px, 137px, 0);
  }

  45% {
    clip: rect(31px, 9999px, 52px, 0);
  }

  50% {
    clip: rect(191px, 9999px, 109px, 0);
  }

  55% {
    clip: rect(74px, 9999px, 54px, 0);
  }

  60% {
    clip: rect(145px, 9999px, 75px, 0);
  }

  65% {
    clip: rect(153px, 9999px, 198px, 0);
  }

  70% {
    clip: rect(99px, 9999px, 136px, 0);
  }

  75% {
    clip: rect(118px, 9999px, 192px, 0);
  }

  80% {
    clip: rect(1px, 9999px, 83px, 0);
  }

  85% {
    clip: rect(145px, 9999px, 98px, 0);
  }

  90% {
    clip: rect(121px, 9999px, 154px, 0);
  }

  95% {
    clip: rect(156px, 9999px, 44px, 0);
  }

  100% {
    clip: rect(67px, 9999px, 122px, 0);
  }
}
</style>
