<script setup>
import { getColumnChartAbsences } from "@core/libs/apex-chart/apexCharConfig";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const props = defineProps({
  series: {
    type: null,
    required: true,
  },
  labels: {
    type: null,
    required: true,
  },
});
let colors = ["#57D38E", "#7367F0", "#0AD1E9", "#D25380", , "#8BAAAD"];

const vuetifyTheme = useTheme();
const chartConfig = computed(() =>
  getColumnChartAbsences(vuetifyTheme.current.value, props.labels, colors)
);
</script>

<template>
  <VueApexCharts
    type="bar"
    height="400"
    :options="chartConfig"
    :series="props.series"
  />
</template>
