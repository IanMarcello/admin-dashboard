<script setup>
import { notify } from "notiwind";
import { onMounted } from "vue";
import PieChart from "@/views/User/Dashboard/Chart/PieChart.vue";
import StackedAreaChart from "@/views/User/Dashboard/Chart/StackedAreaChart.vue";
import TableView from "@/views/User/Dashboard/Table/TransactionTableView.vue";
import StatsView from "@/views/User/Dashboard/StatsCard/UserStatsView.vue";
import TransactionStatsView from "@/views/User/Dashboard/StatsCard/TransactionStatsView.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

onMounted(() => {
  const session = sessionStorage.getItem("session");

  if (!session) {
    notify(
      {
        bg: "bg-green-500",
        type: "success",
        color: "text-green-500",
        group: "foo",
        title: t("notification.success.title"),
        text: t("notification.success.login"),
      },
      2000
    );
  }

  sessionStorage.setItem("session", true);
});

const user = JSON.parse(sessionStorage.getItem("user")).name;
</script>

<template>
  <div class="grid gap-2 m-5">
    <section class="grid">
      <div class="p-3 h-fit overflow-auto text-slate-900 dark:text-slate-200">
        <p class="text-base font-semibold text-indigo-600">
          {{ $t("user.welcome") }},
        </p>
        <h1
          class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 capitalize sm:text-3xl"
        >
          {{ user }}
        </h1>
      </div>
    </section>
    <section>
      <StatsView />
    </section>
    <section
      class="mt-3 grid grid-rows-2 gap-4 lg:grid-cols-12 md:grid-rows-none"
    >
      <div
        class="overflow-auto rounded-lg lg:col-span-8 h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        <StackedAreaChart />
      </div>
      <div
        class="overflow-auto rounded-lg lg:col-span-4 h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        <PieChart />
      </div>
    </section>
    <section class="mt-3">
      <TransactionStatsView />
    </section>
    <section class="grid grid-rows-2 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto rounded-lg sm:col-span-6 h-96 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.six") }}
      </div>
      <div
        class="grid grid-rows-2 p-3 overflow-auto rounded-lg sm:col-span-6 gap-y-4 h-96 bg-light-50 dark:bg-dark-450 shadow"
      >
        <div
          class="p-3 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow-sm"
        >
          {{ $t("dashboard.grid") }}{{ $t("dashboard.number.seven") }}
        </div>
        <div
          class="p-3 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow-sm"
        >
          {{ $t("dashboard.grid") }}{{ $t("dashboard.number.eight") }}
        </div>
      </div>
    </section>
    <section class="grid grid-rows-2 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto rounded-lg sm:col-span-6 h-44 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.nine") }}
      </div>
      <div
        class="p-3 overflow-auto rounded-lg sm:col-span-6 h-44 bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200 shadow"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.ten") }}
      </div>
    </section>
    <section class="grid">
      <div
        class="p-3 overflow-auto shadow rounded-lg bg-light-50 dark:bg-dark-450 text-slate-900 dark:text-slate-200"
      >
        <TableView />
      </div>
    </section>
  </div>
</template>
