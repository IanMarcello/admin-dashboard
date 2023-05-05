<script setup>
const stats = [
  { name: "Total Transactions", stat: "87" },
  { name: "Transactions (This Month)", stat: "3" },
  { name: "Completed Transactions (This Month)", stat: "1" },
];
</script>

<template>
  <div>
    <dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.name"
        class="overflow-hidden rounded-lg bg-light-50 dark:bg-dark-450 px-4 py-5 shadow sm:p-6"
      >
        <dt
          class="truncate text-sm font-medium text-slate-500 dark:text-slate-400"
        >
          {{ item.name }}
        </dt>
        <dd
          class="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-200"
        >
          {{ item.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>
