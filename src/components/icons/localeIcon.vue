<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import IcOutlineLanguage from "~icons/ic/round-language";
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full px-4 py-2 text-sm font-light rounded-lg dark:bg-black text-slate-900 dark:text-slate-200 dark:bg-opacity-20 hover:bg-slate-200 hover:dark:bg-opacity-30"
      >
        <span>
          <IcOutlineLanguage class="w-6 h-6" />
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
        class="absolute right-0 z-20 mt-2 origin-top-right bg-white divide-y rounded-md shadow-lg divide-slate-400 dark:divide-slate-200 dark:bg-slate-800 w-28 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem>
            <button
              @click="$i18n.locale = 'en'"
              class="flex items-center w-full px-2 py-2 text-sm rounded-lg text-slate-900 dark:text-slate-200 group hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              {{ $t("locale.english") }}
            </button>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem>
            <button
              @click="$i18n.locale = 'sw'"
              class="flex items-center w-full px-2 py-2 text-sm rounded-lg text-slate-900 dark:text-slate-200 group hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              {{ $t("locale.swahili") }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
