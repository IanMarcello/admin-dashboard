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
import { useThemeStore } from "@/stores/theme";
import { useToggleStore } from "@/stores/state";

const toggleStore = useToggleStore();
const themeStore = useThemeStore();

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
    text: "Users Categorized by Gender",
    top: 10,
    left: "center",
    textStyle: {
      fontFamily: "Chillax-Regular",
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "horizontal",
    left: "center",
    bottom: "0",
    data: ["Male", "Female", "Others"],
  },
  series: [
    {
      name: "Users Categorized by Gender",
      type: "pie",
      radius: "70%",
      center: ["50%", "50%"],
      data: [
        { value: 50328, name: "Male" },
        { value: 14379, name: "Female" },
        { value: 7191, name: "Others" },
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
  backgroundColor: "transparent",
});
</script>

<template>
  <v-chart
    class="chart font-italic"
    :option="option"
    :key="toggleStore.show"
    :autoresize="true"
  />
</template>
