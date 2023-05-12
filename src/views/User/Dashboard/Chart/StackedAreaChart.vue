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
let line1Data = [];
let line2Data = [];

for (let i = 0; i < 12; i++) {
  let a = Math.round(Math.random() * 200);
  let b = Math.round(Math.random() * 200);
  let c = Math.round(Math.random() * 200);
  let d = Math.round(Math.random() * 200);
  line1Data.push(a + c);
  line2Data.push(d + b);
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
      data: line1Data,
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
      data: line2Data,
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
