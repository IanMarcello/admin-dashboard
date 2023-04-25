<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useToggleStore } from "@/stores/state";
import IcOutlineKeyboardDoubleArrowRight from "~icons/ic/outline-keyboard-double-arrow-right";
import IcRoundDashboard from "~icons/ic/round-dashboard";
import IcRoundExpandMore from "~icons/ic/round-expand-more";

const toggleStore = useToggleStore();
</script>

<template>
  <nav
    class="fixed min-h-screen w-2/4 px-2 transition-transform top-16 sm:top-0 sm:sticky sm:h-fit sm:order-first sm:w-64 sm:flex text-slate-900 bg-light-50 dark:bg-[#003049] dark:text-slate-200 shadow-sm shadow-[#dee2e6] dark:shadow-[#00263a]"
    :class="[
      toggleStore.openSidebar ? 'translate-x-0 shadow-lg' : '-translate-x-full',
    ]"
  >
    <div class="flex flex-col justify-between h-full px-3 py-4">
      <div
        class="mb-2 overflow-y-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800"
      >
        <ul class="h-[100vh]">
          <li class="mb-1">
            <router-link
              :to="{ name: 'dashboard' }"
              active-class="active bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-800"
              exact-active-class="active bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-800"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span>
                <IcRoundDashboard class="w-6 h-6" />
              </span>
              <span class="ml-3">{{ $t("sidenav.dashboard") }}</span>
            </router-link>
          </li>
          <li class="mb-1">
            <router-link
              :to="{ name: 'dummy2' }"
              active-class="active bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-800"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span>
                <IcOutlineKeyboardDoubleArrowRight class="w-6 h-6" />
              </span>
              <span class="ml-3">{{ $t("sidenav.button") }}</span>
            </router-link>
          </li>
          <li class="mb-1">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex flex-row w-full gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
              >
                <span>
                  <IcOutlineKeyboardDoubleArrowRight class="w-6 h-6" />
                </span>
                <span class="ml-3">{{ $t("sidenav.link") }}#3</span>
                <span
                  :class="
                    open
                      ? '-rotate-180 duration-300 transition'
                      : 'rotate-0 duration-300 transition'
                  "
                >
                  <IcRoundExpandMore class="w-6 h-6" />
                </span>
              </DisclosureButton>

              <DisclosurePanel
                class="pb-2 pl-10 mr-5 text-sm text-slate-900 dark:text-slate-200 sm:mr-0 l-3"
              >
                <router-link
                  :to="{ name: 'dummy3_1' }"
                  active-class="active bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-800"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">{{ $t("sidenav.link") }}#3-1</span>
                </router-link>
                <router-link
                  :to="{ name: 'dummy3_2' }"
                  active-class="active bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-800"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">{{ $t("sidenav.link") }}#3-2</span>
                </router-link>
                <router-link
                  :to="{ name: 'dummy3_3' }"
                  active-class="active bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-800"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">{{ $t("sidenav.link") }}#3-3</span>
                </router-link>
                <router-link
                  :to="{ name: 'dummy3_4' }"
                  active-class="active bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-800"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">{{ $t("sidenav.link") }}#3-4</span>
                </router-link>
              </DisclosurePanel>
            </Disclosure>
          </li>
          <li class="mb-1">
            <router-link
              :to="{ name: 'herosection' }"
              active-class="active bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-800"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span>
                <IcOutlineKeyboardDoubleArrowRight class="w-6 h-6" />
              </span>
              <span class="ml-3">Hero Section</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
