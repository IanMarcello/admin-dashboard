<script setup>
import { notify } from "notiwind";
import { onMounted } from "vue";
import PieChart from "@/views/User/Charts/PieChart.vue";
import StackedAreaChart from "@/views/User/Charts/StackedAreaChart.vue";
// import IcSharpAccountCircle from "~icons/ic/sharp-account-circle";

onMounted(() => {
  const session = sessionStorage.getItem("session");

  if (!session) {
    notify(
      {
        bg: "bg-green-500",
        type: "success",
        color: "text-green-500",
        group: "foo",
        title: "Success",
        text: "Login successful!",
      },
      2000
    );
  }

  sessionStorage.setItem("session", true);
});

const user = JSON.parse(sessionStorage.getItem("user")).name;

const stats = [
  { name: "Total Users", stat: "71,897" },
  { name: "Active Users", stat: "58.16%" },
  { name: "Inactive Users", stat: "41.84%" },
];
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
      <div>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            v-for="item in stats"
            :key="item.name"
            class="overflow-hidden rounded-lg bg-white dark:bg-[#003049] px-4 py-5 shadow sm:p-6"
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
    </section>
    <section class="grid grid-rows-2 gap-4 lg:grid-cols-12 md:grid-rows-none">
      <div
        class="overflow-auto rounded-lg lg:col-span-8 h-96 bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
      >
        <StackedAreaChart />
      </div>
      <div
        class="overflow-auto rounded-lg lg:col-span-4 h-96 bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
      >
        <PieChart />
      </div>
    </section>
    <section class="grid grid-rows-2 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto rounded-lg sm:col-span-6 h-96 bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.six") }}
      </div>
      <div
        class="grid grid-rows-2 p-3 overflow-auto rounded-lg sm:col-span-6 gap-y-4 h-96 bg-white dark:bg-[#003049]"
      >
        <div
          class="p-3 overflow-auto rounded-lg bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
        >
          {{ $t("dashboard.grid") }}{{ $t("dashboard.number.seven") }}
        </div>
        <div
          class="p-3 overflow-auto rounded-lg bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
        >
          {{ $t("dashboard.grid") }}{{ $t("dashboard.number.eight") }}
        </div>
      </div>
    </section>
    <section class="grid grid-rows-2 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto rounded-lg sm:col-span-6 h-44 bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.nine") }}
      </div>
      <div
        class="p-3 overflow-auto rounded-lg sm:col-span-6 h-44 bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.ten") }}
      </div>
    </section>
    <section class="grid">
      <div
        class="p-3 overflow-auto shadow-md rounded-lg h-44 bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.eleven") }}
      </div>
    </section>
  </div>
</template>
