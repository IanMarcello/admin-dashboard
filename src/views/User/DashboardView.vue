<script setup>
import { ref } from "vue";
import { notify } from "notiwind";

const user = JSON.parse(sessionStorage.getItem("session")).name;

notify(
  {
    group: "foo",
    title: "Success",
    text: "Your account was registered!",
  },
  4000
); // 4s

const options = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
  theme: {
    mode: "dark",
  },
});

const series = ref([
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
]);

// const user = JSON.parse(sessionStorage.getItem("user")).name;
</script>

<template>
  <div class="grid gap-2 m-5">
    <section class="grid">
      <div class="p-3 h-fit overflow-auto text-slate-900 dark:text-slate-200">
        <!-- {{ $t("dashboard.grid") }}{{ $t("dashboard.number.zero") }} -->
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
    <section class="grid grid-rows-2 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-8 h-96 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800"
      >
        <!-- {{ $t("dashboard.grid") }}{{ $t("dashboard.number.one") }} -->
        <apexchart
          class="text-slate-900 dark:text-slate-200"
          width="100%"
          height="100%"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
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
