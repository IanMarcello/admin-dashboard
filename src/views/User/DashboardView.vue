<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide, computed } from "vue";
import { notify } from "notiwind";
import { onMounted } from "vue";
import { useThemeStore } from "@/stores/theme";

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

const themeStore = useThemeStore();
const user = JSON.parse(sessionStorage.getItem("user")).name;

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(
  THEME_KEY,
  computed(() => themeStore.theme_key)
);

const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "horizontal",
    left: "center",
    bottom: "bottom",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "70%",
      center: ["50%", "50%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
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
      <!-- <div
        class="p-3 overflow-auto border rounded-lg sm:col-span-8 h-96 border-slate-400 dark:border-slate-500 bg-slate-200 dark:bg-slate-800"
      > -->
      <div
        class="p-3 overflow-auto rounded-lg sm:col-span-8 h-96 shadow-2xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        {{ $t("dashboard.grid") }}{{ $t("dashboard.number.one") }}
      </div>
      <div
        class="overflow-auto rounded-lg sm:col-span-4 h-96 shadow-2xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        <!-- {{ $t("dashboard.grid") }}{{ $t("dashboard.number.two") }} -->
        <v-chart class="chart" :option="option" autoresize :key="key" />
      </div>
    </section>
    <section class="grid grid-rows-3 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="overflow-auto rounded-lg sm:col-span-4 h-fit shadow-2xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        <!-- {{ $t("dashboard.grid") }}{{ $t("dashboard.number.three") }} -->
        <div
          class="flex divide-x-2 divide-slate-400 dark:divide-slate-200 h-full w-full"
        >
          <div class="flex flex-col items-start px-5 w-3/4 py-6">
            <div class="mb-3">
              <span>Title 1</span>
            </div>

            <div class="text-2xl">
              <span>12435454</span>
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center w-1/4 px-5 py-6"
          >
            <img
              src="https://api.iconify.design/ic:baseline-account-circle.svg"
              class="w-12 h-12 bg-slate-200 dark:bg-slate-800"
            />
          </div>
        </div>
      </div>
      <div
        class="overflow-auto rounded-lg sm:col-span-4 h-fit shadow-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        <!-- {{ $t("dashboard.grid") }}{{ $t("dashboard.number.four") }} -->
        <div
          class="flex divide-x-2 divide-slate-400 dark:divide-slate-200 h-full w-full"
        >
          <div class="flex flex-col items-start px-5 w-3/4 py-6">
            <div class="mb-3">
              <span>Title 2</span>
            </div>

            <div class="text-2xl">
              <span>12435454</span>
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center w-1/4 px-5 py-6"
          >
            <img
              src="https://api.iconify.design/ic:baseline-account-circle.svg"
              class="w-12 h-12 bg-slate-200 dark:bg-slate-800"
            />
          </div>
        </div>
      </div>
      <div
        class="overflow-auto rounded-lg sm:col-span-4 h-fit shadow-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
      >
        <!-- {{ $t("dashboard.grid") }}{{ $t("dashboard.number.five") }} -->
        <div
          class="flex divide-x-2 divide-slate-400 dark:divide-slate-200 h-full w-full"
        >
          <div class="flex flex-col items-start px-5 w-3/4 py-6">
            <div class="mb-3">
              <span>Title 3</span>
            </div>

            <div class="text-2xl">
              <span>12435454</span>
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center w-1/4 px-5 py-6"
          >
            <img
              src="https://api.iconify.design/ic:baseline-account-circle.svg"
              class="w-12 h-12 bg-slate-200 dark:bg-slate-800"
            />
          </div>
        </div>
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
