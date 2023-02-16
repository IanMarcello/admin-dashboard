<script setup>
// import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

// const show = ref(false);

// function toggleShow() {
//   show.value = !show.value;
// }
</script>

<template>
  <nav
    class="order-first sm:flex hidden border-b-2 dark:border-slate-900 border-slate-400 px-2 sm:w-64 bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-200 -translate-x-full transition-transform md:translate-x-0 md:shadow-sm"
    :class="show ? 'translate-x-0 -translate-y-0' : '-translate-x-full'"
  >
    <div class="h-full flex flex-col justify-between px-3 py-4">
      <div
        class="overflow-y-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800"
      >
        <ul>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #1</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #2</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #3</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #4</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #5</span>
            </router-link>
          </li>
          <li>
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
              >
                <span class="material-symbols-outlined"> fast_forward </span>
                <span class="ml-3">Dummy Link #6</span>
                <span
                  :class="
                    open
                      ? '-rotate-180 duration-200 transform-transition'
                      : 'rotate-0 duration-200 transform-transition'
                  "
                  class="material-symbols-outlined"
                >
                  expand_more
                </span>
              </DisclosureButton>
              <DisclosurePanel class="pl-10 pb-2 text-sm text-gray-500">
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
                >
                  <span class="ml-3">Dummy Link #5</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
                >
                  <span class="ml-3">Dummy Link #5</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
                >
                  <span class="ml-3">Dummy Link #5</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
                >
                  <span class="ml-3">Dummy Link #5</span>
                </router-link>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <hr class="w-full mb-2 sm:w-42" />
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #6</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #7</span>
            </router-link>
          </li>

          <li>
            <a
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #8</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
