<script setup>
import IcOutlineError from "~icons/ic/outline-error";
import IcSharpCheckCircle from "~icons/ic/sharp-check-circle";
</script>

<template>
  <NotificationGroup group="foo">
    <div
      class="fixed top-16 inset-0 flex items-start justify-center p-6 px-4 py-6 pointer-events-none"
    >
      <div class="w-full max-w-sm">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
          enter-to="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-light-100 dark:bg-dark-600 rounded-lg shadow-md"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div
              class="flex items-center justify-center w-12"
              :class="notification.bg"
            >
              <IcOutlineError
                class="w-6 h-6 text-white"
                v-if="notification.type === 'error'"
              />
              <IcSharpCheckCircle
                class="w-6 h-6 text-white"
                v-if="notification.type === 'success'"
              />
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold" :class="notification.color">
                  {{ notification.title }}
                </span>
                <p class="text-sm text-slate-900 dark:text-slate-200">
                  {{ notification.text }}
                </p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>
