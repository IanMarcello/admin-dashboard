<script setup>
import { notify } from "notiwind";
import { onMounted } from "vue";
import PieChart from "@/views/User/Charts/PieChart.vue";
import StackedAreaChart from "@/views/User/Charts/StackedAreaChart.vue";
import StatsView from "@/views/User/Dashboard/StatsView.vue";

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
    <section class="grid grid-rows-2 gap-4 lg:grid-cols-12 md:grid-rows-none">
      <div
        class="overflow-auto rounded-lg lg:col-span-8 h-96 bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200 shadow"
      >
        <StackedAreaChart />
      </div>
      <div
        class="overflow-auto rounded-lg lg:col-span-4 h-96 bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200 shadow"
      >
        <PieChart />
      </div>
    </section>
    <section class="grid grid-rows-3 gap-4 sm:grid-cols-12 sm:grid-rows-none">
      <div
        class="overflow-auto rounded-lg sm:col-span-4 h-fit bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
      >
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
            <IcSharpAccountCircle
              class="w-12 h-12 bg-white dark:bg-[#003049]"
            />
          </div>
        </div>
      </div>
      <div
        class="overflow-auto rounded-lg sm:col-span-4 h-fit bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
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
            <IcSharpAccountCircle
              class="w-12 h-12 bg-white dark:bg-[#003049]"
            />
          </div>
        </div>
      </div>
      <div
        class="overflow-auto rounded-lg sm:col-span-4 h-fit bg-white dark:bg-[#003049] text-slate-900 dark:text-slate-200"
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
            <IcSharpAccountCircle
              class="w-12 h-12 bg-white dark:bg-[#003049]"
            />
          </div>
        </div>
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
