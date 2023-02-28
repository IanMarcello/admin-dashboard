<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();
const router = useRouter();
const authStore = useAuthStore();

const user = JSON.parse(sessionStorage.getItem("user"));

const logout = async () => {
  await authStore.logout();

  router.push({ name: "login" });
};
</script>

<template>
  <nav
    class="fixed w-full px-2 transition-transform -translate-x-full bg-white border-r-0 max-h-fit top-20 sm:top-0 sm:relative sm:order-first sm:border-r sm:w-64 sm:flex dark:border-slate-500 border-slate-300 text-slate-900 dark:bg-slate-800 dark:text-slate-200 md:translate-x-0 md:shadow-lg"
    :class="toggleStore.show ? 'translate-x-0 shadow-lg' : '-translate-x-full'"
  >
    <div class="flex flex-col justify-between h-full px-3 py-4">
      <div
        class="mb-2 overflow-y-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800"
      >
        <ul>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">{{ $t("sidenav.link") }}#1</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">{{ $t("sidenav.link") }}#2</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">{{ $t("sidenav.link") }}#3</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg white hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">{{ $t("sidenav.link") }}#4</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">{{ $t("sidenav.link") }}#5</span>
            </router-link>
          </li>
          <li>
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex flex-row w-full gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
              >
                <span class="material-symbols-outlined"> fast_forward </span>
                <span class="ml-3">{{ $t("sidenav.link") }}#6</span>
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

              <DisclosurePanel
                class="pb-2 pl-10 mr-5 text-sm text-gray-500 sm:mr-0 l-3"
              >
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">{{ $t("sidenav.link") }}#6-1</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">{{ $t("sidenav.link") }}#6-2</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">{{ $t("sidenav.link") }}#6-3</span>
                </router-link>
                <router-link
                  :to="{ name: '' }"
                  class="flex flex-row p-2 font-normal rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
                >
                  <span class="ml-3">{{ $t("sidenav.link") }}#6-4</span>
                </router-link>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </div>

      <div class="md:hidden">
        <ul>
          <hr class="mb-2 border-1" />
          <li>
            <router-link
              :to="{ name: 'login' }"
              v-if="typeof user === undefined || user === null"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> login </span>
              <span class="ml-3">{{ $t("sidenav.login") }}</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'register' }"
              v-if="typeof user === undefined || user === null"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> app_registration </span>
              <span class="ml-3">{{ $t("sidenav.register") }}</span>
            </router-link>
          </li>

          <li>
            <a
              v-if="!(typeof user === undefined || user === null)"
              @click="logout"
              class="flex flex-row gap-2 p-2 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span class="material-symbols-outlined"> logout </span>
              <span class="ml-3">{{ $t("sidenav.logout") }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
