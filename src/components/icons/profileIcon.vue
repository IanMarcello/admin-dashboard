<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import IcRoundLogout from "~icons/ic/round-logout";
import IcOutlineAccountCircle from "~icons/ic/outline-account-circle";

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();

  router.push({ name: "login" });
};
</script>

<template>
  <Menu as="div" class="relative inline-block">
    <div>
      <MenuButton>
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-light-300 dark:bg-dark-400"
        >
          <span
            class="font-medium leading-none text-dark-900 dark:text-light-200"
            >IM</span
          >
        </span>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 z-20 mt-2 origin-top-right bg-light-50 divide-y rounded-md shadow-lg w-36 divide-slate-400 dark:divide-slate-200 dark:bg-dark-600 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem>
            <router-link
              :to="{ name: 'profile' }"
              class="flex items-center w-full px-2 py-2 text-sm rounded-lg group hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span> <IcOutlineAccountCircle class="w-6 h-6" /> </span>
              <span class="ml-3">{{ $t("profile.profile") }}</span>
            </router-link>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem>
            <button
              @click.prevent="logout"
              class="flex items-center w-full px-2 py-2 text-sm rounded-lg group hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              <span> <IcRoundLogout class="w-6 h-6" /> </span>
              <span class="ml-3">{{ $t("profile.logout") }}</span>
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
