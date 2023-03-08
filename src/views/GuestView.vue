<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
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
      <div class="flex items-center justify-center flex-1">
        <!-- <h1
          class="mt-2 text-4xl font-bold tracking-tight uppercase text-slate-900 dark:text-slate-200 sm:text-5xl"
        >
          {{ $t("guest.content") }}
        </h1> -->

        <div
          class="py-20 w-full px-4 m-4 rounded-md"
          style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
        >
          <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold mb-2">
              Devil May Cry 4 Special Edition
            </h2>
            <h3 class="text-2xl mb-8">
              The fourth installment of Devil May Cry game series.
            </h3>

            <button
              class="font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
            >
              Pre Order
            </button>
          </div>
        </div>
      </div>

      <div>
        <section class="container mx-auto px-6 p-10">
          <h2 class="text-4xl font-bold text-center mb-8">Characters</h2>
          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2">
              <h4 class="text-3xl font-bold mb-3">Nero</h4>
              <p class="mb-8">
                One of the main protagonists of the Devil May Cry franchise. He
                first appeared as a playable character in Devil May Cry 4, and
                later in Devil May Cry 5. He was raised in Fortuna and served as
                a Holy Knight in the Order of the Sword, a religious group that
                worships Sparda and fights to protect the world from demons. It
                is later revealed that he is the son of Vergil, nephew of
                Legendary Devil Hunter Dante, and grandson of Legendary Dark
                Knight Sparda.
              </p>
            </div>
            <div class="w-full md:w-1/2">
              <img src="@/assets/images/nero.png" alt="Nero" />
            </div>
          </div>

          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2">
              <img src="@/assets/images/dante.png" alt="Dante" />
            </div>
            <div class="w-full md:w-1/2 pl-10">
              <h4 class="text-3xl font-bold mb-3">Dante</h4>
              <p class="mb-8">
                One of the main protagonists of the Devil May Cry franchise, and
                the main playable character for the majority of the games in the
                series. He is the second son of the demon Sparda and the human
                Eva, the younger twin brother of Vergil, and the uncle of Nero.
                Dante is a paranormal mercenary, private investigator and
                vigilante Devil Hunter dedicated to exterminating evil demons
                and other malevolent supernatural forces; a mission he follows
                in pursuit of those that killed his mother and corrupted his
                brother.
              </p>
            </div>
          </div>

          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2">
              <h4 class="text-3xl font-bold mb-3">Vergil</h4>
              <p class="mb-8">
                The older twin brother of Dante and one of the main antagonists
                of the Devil May Cry franchise. Following the death of their
                mother as children, Vergil and Dante went their separate ways,
                with Vergil rejecting his humanity and embracing his demonic
                heritage, in contrast with his younger brother's embrace of
                humanity and initial rejection of the demonic. Stoic and
                reserved, Vergil displays a willingness to do anything in his
                quest to obtain the power of his father, Sparda.
              </p>
            </div>
            <div class="w-full md:w-1/2">
              <img src="@/assets/images/vergil.png" alt="Vergil" />
            </div>
          </div>
        </section>
      </div>

      <div>
        <section>
          <div class="container mx-auto px-6 py-20">
            <h2 class="text-4xl font-bold text-center mb-8">Review Scores</h2>
            <div class="flex flex-wrap md:flex-nowrap md:justify-between">
              <div class="w-full md:w-1/3 rounded shadow-lg py-4 px-4 mb-4">
                <p class="text-center font-bold text-2xl mb-5">9.0/10</p>
                <p class="text-center font-bold text-4xl">GameZone</p>
              </div>

              <div
                class="w-full md:w-1/3 md:mx-10 rounded shadow-lg py-4 px-2 mb-4 mx-0"
              >
                <p class="text-center font-bold text-2xl mb-5">8.0/10</p>
                <p class="text-center font-bold text-4xl">GameSpot</p>
              </div>

              <div class="w-full md:w-1/3 rounded shadow-lg py-4 px-2 mb-4">
                <p class="text-center font-bold text-2xl mb-5">8.7/10</p>
                <p class="text-center font-bold text-4xl">IGN</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section class="px-4 m-4 rounded-md" style="background-color: #667eea">
          <div class="container mx-auto px-6 text-center py-20">
            <h2 class="mb-6 text-4xl font-bold text-center">
              Limited in Stock
            </h2>
            <h3 class="my-4 text-2xl">
              Get yourself the Devil May Cry 4 Special Edition!
              <br />
              To Play as Vergil, Lady & Trish
            </h3>
            <button
              class="font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
            >
              Pre Order
            </button>
          </div>
        </section>
      </div>
      <FooterComponent />
    </main>
  </div>
</template>
