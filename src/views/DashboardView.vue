<script setup></script>

<template>
  <div class="grid gap-2 m-4">
    <section class="grid grid-rows-2 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-8 h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.one") }}
      </div>
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-4 h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.two") }}
      </div>
    </section>
    <section class="grid grid-rows-3 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-4 h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.three") }}
      </div>
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-4 h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.four") }}
      </div>
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-4 h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.five") }}
      </div>
    </section>
    <section class="grid grid-rows-2 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-6 h-68 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.six") }}
      </div>
      <div
        class="grid grid-rows-2 p-3 overflow-auto border rounded-lg sm:col-span-6 gap-y-4 h-fit border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800"
      >
        <div
          class="p-3 overflow-auto border rounded-lg h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
        >
          {{ $t("dashboard.grid") }}{{ $t("dashboard.number.seven") }}
        </div>
        <div
          class="p-3 overflow-auto border rounded-lg h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
        >
          {{ $t("dashboard.grid") }}{{ $t("dashboard.number.eight") }}
        </div>
      </div>
    </section>
    <section class="grid grid-rows-2 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-6 h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.nine") }}
      </div>
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-6 h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.ten") }}
      </div>
    </section>
    <section class="grid">
      <div
        class="p-3 overflow-auto border rounded-lg h-44 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.eleven") }}
      </div>
    </section>
  </div>
</template>
