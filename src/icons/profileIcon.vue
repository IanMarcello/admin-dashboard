<template>
  <Menu as="div" class="relative inline-block">
    <div>
      <MenuButton>
        <span
          class="inline-block w-10 h-10 overflow-hidden bg-gray-100 rounded-full cursor-pointer"
        >
          <svg
            class="w-full h-full text-slate-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
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
        class="absolute right-0 z-20 mt-2 origin-top-right bg-white divide-y rounded-md shadow-lg w-36 divide-slate-400 dark:divide-slate-200 dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem>
            <button
              class="flex items-center w-full px-2 py-2 text-sm rounded-lg group hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              {{ $t("profile.link") }}#12
            </button>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem>
            <button
              class="flex items-center w-full px-2 py-2 text-sm rounded-lg group hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:dark:from-slate-600 hover:dark:to-slate-800"
            >
              {{ $t("profile.link") }}#13
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
