<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { UniversalTransition } from "echarts/features";
import { ref, provide, computed } from "vue";
import { useThemeStore } from "@/stores/theme";
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();
const themeStore = useThemeStore();
let lineData = [];

for (let i = 0; i < 12; i++) {
  let b = Math.random() * 200;
  let d = Math.random() * 200;
  lineData.push(d + b);
}

use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

provide(
  THEME_KEY,
  computed(() => themeStore.theme_key)
);

const option = ref({
  title: {
    text: "Number of Transactions (Per Month)",
    top: 10,
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    orient: "horizontal",
    left: "center",
    bottom: "0",
    data: ["Transactions", "Transactions (Last Month)"],
  },
  grid: {
    left: "5%",
    right: "5%",
    bottom: "10%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Transactions",
      type: "line",
      smooth: true,
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: lineData,
    },
    {
      name: "Transactions (Last Month)",
      type: "line",
      smooth: true,
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: lineData,
    },
  ],
  backgroundColor: "transparent",
});
</script>

<template>
  <v-chart
    class="chart"
    :option="option"
    :key="toggleStore.show"
    :autoresize="true"
  />
</template>
