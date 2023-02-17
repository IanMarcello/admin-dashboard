<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();
</script>

<template>
  <nav
    class="order-first w-64 px-2 transition-transform -translate-x-full bg-white border-r sm:flex dark:border-slate-500 border-slate-300 text-slate-900 dark:bg-slate-800 dark:text-slate-200 md:translate-x-0 md:shadow-lg"
    :class="toggleStore.show ? 'translate-x-0 ' : '-translate-x-full'"
  >
    <div class="flex flex-col justify-between h-full px-3 py-4">
      <div
        class="flex overflow-y-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800"
      >
        <ul>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #1</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #2</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #3</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg white hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #4</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #5</span>
            </router-link>
          </li>
          <li>
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
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
              <DisclosurePanel class="pb-2 pl-10 text-sm text-gray-500">
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">Dummy Link #5</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">Dummy Link #5</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">Dummy Link #5</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">Dummy Link #5</span>
                </router-link>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </div>

      <div class="flex md:hidden">
        <ul>
          <hr class="w-full mb-2 sm:w-42" />
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #6</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Dummy Link #7</span>
            </router-link>
          </li>

          <li>
            <a
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
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
