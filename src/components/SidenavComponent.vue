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
    class="fixed min-h-screen w-64 px-1 transition-transform top-16 z-20 sm:top-0 sm:sticky sm:h-screen sm:order-first sm:w-64 sm:flex text-slate-900 bg-light-50 dark:bg-dark-450 dark:text-slate-200 shadow-sm shadow-light-300 dark:shadow-light-800"
    :class="[
      toggleStore.openSidebar ? 'translate-x-0 shadow-lg' : '-translate-x-full',
    ]"
  >
    <div class="flex flex-col justify-between w-full h-full px-3 py-4">
      <div
        class="mb-2 overflow-y-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800"
      >
        <ul class="w-full">
          <li class="mb-1">
            <router-link
              :to="{ name: 'dashboard' }"
              active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
              exact-active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
            >
              <div>
                <IcRoundDashboard class="w-6 h-6" />
              </div>
              <div class="ml-3 text-left flex-1">
                {{ $t("sidenav.dashboard") }}
              </div>
            </router-link>
          </li>
          <li class="mb-1">
            <router-link
              :to="{ name: 'users' }"
              active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
            >
              <div>
                <IcOutlineKeyboardDoubleArrowRight class="w-6 h-6" />
              </div>
              <div class="ml-3 text-left flex-1">
                {{ $t("sidenav.button") }}
              </div>
            </router-link>
          </li>
          <li class="mb-1">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex flex-row w-full gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
              >
                <div>
                  <IcOutlineKeyboardDoubleArrowRight class="w-6 h-6" />
                </div>
                <div class="ml-3 text-left flex-1">
                  {{ $t("sidenav.transaction.index") }}
                </div>
                <div
                  :class="
                    open
                      ? '-rotate-180 duration-300 transition'
                      : 'rotate-0 duration-300 transition'
                  "
                >
                  <IcRoundExpandMore class="w-6 h-6" />
                </div>
              </DisclosureButton>

              <DisclosurePanel
                class="pb-2 pl-10 mr-5 text-sm text-slate-900 dark:text-slate-200 sm:mr-0 l-3"
              >
                <router-link
                  :to="{ name: 'transactions' }"
                  active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
                  class="flex flex-row px-1 py-2 mt-1 font-normal rounded-lg hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
                >
                  <div class="ml-3 text-left flex-1">
                    {{ $t("sidenav.transaction.all") }}
                  </div>
                </router-link>
                <router-link
                  :to="{ name: 'completed_transactions' }"
                  active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
                  class="flex flex-row px-1 py-2 mt-1 font-normal rounded-lg hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
                >
                  <div class="ml-3 text-left flex-1">
                    {{ $t("sidenav.transaction.completed") }}
                  </div>
                </router-link>
                <router-link
                  :to="{ name: 'pending_transactions' }"
                  active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
                  class="flex flex-row px-1 py-2 mt-1 font-normal rounded-lg hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
                >
                  <div class="ml-3 text-left flex-1">
                    {{ $t("sidenav.transaction.pending") }}
                  </div>
                </router-link>
                <router-link
                  :to="{ name: 'reverse_transactions' }"
                  active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
                  class="flex flex-row px-1 py-2 mt-1 font-normal rounded-lg hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
                >
                  <div class="ml-3 text-left flex-1">
                    {{ $t("sidenav.transaction.reversed") }}
                  </div>
                </router-link>
                <router-link
                  :to="{ name: 'failed_transactions' }"
                  active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
                  class="flex flex-row px-1 py-2 mt-1 font-normal rounded-lg hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
                >
                  <div class="ml-3 text-left flex-1">
                    {{ $t("sidenav.transaction.failed") }}
                  </div>
                </router-link>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
