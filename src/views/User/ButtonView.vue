<script setup>
import ButtonDefault from "@/views/User/Buttons/ButtonDefault.vue";
</script>

<template>
  <div>
    <div class="m-4 px-2">
      <div class="flex items-center justify-start flex-1">
        <span
          class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl"
        >
          Button Component (Default)
        </span>
      </div>

      <div>
        <ButtonDefault />
      </div>
    </div>

    <div class="m-4 px-2">
      <div class="flex items-center justify-start flex-1">
        <span
          class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl"
        >
          Floating Button Component
        </span>
      </div>

      <div>
        <ButtonDefault />
      </div>
    </div>

    <div class="m-4 px-2">
      <div class="flex items-center justify-start flex-1">
        <span
          class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl"
        >
          Outline Button Component
        </span>
      </div>

      <div>
        <ButtonDefault />
      </div>
    </div>

    <div class="m-4 px-2">
      <div class="flex items-center justify-start flex-1">
        <span
          class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl"
        >
          Outline Button Component with Hover Offset
        </span>
      </div>

      <div>
        <ButtonDefault />
      </div>
    </div>
  </div>
</template>
