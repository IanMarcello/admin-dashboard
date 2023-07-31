<script setup>
import { notify } from "notiwind";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import IcRoundLogout from "~icons/ic/round-logout";
import IcOutlineAccountCircle from "~icons/ic/outline-account-circle";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  try {
    await authStore.logout();
    router.push({ name: "login" });
  } catch (error) {
    notify(
      {
        bg: "bg-red-500",
        type: "error",
        color: "text-red-500",
        group: "foo",
        title: t("notification.failed.title"),
        text: t("notification.failed.logout"),
      },
      2000
    );
  }
};
</script>

<template>
  <Menu as="div" class="relative inline-block">
    <div>
      <MenuButton class="outline-none">
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-light-300 dark:bg-dark-400"
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
        class="absolute right-0 z-20 mt-2 origin-top-right divide-y rounded-md shadow-lg bg-light-50 w-36 divide-slate-400 dark:divide-slate-200 dark:bg-dark-600"
      >
        <div class="px-1 py-1">
          <MenuItem>
            <router-link
              :to="{ name: 'profile' }"
              class="flex items-center w-full px-2 py-2 text-sm rounded-lg group hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
              active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
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
              class="flex items-center w-full px-2 py-2 text-sm rounded-lg group hover:bg-gradient-to-r hover:from-light-100 hover:to-light-200 hover:dark:from-dark-500 hover:dark:to-dark-600"
              active-class="active bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600"
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
