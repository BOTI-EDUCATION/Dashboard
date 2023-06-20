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
let colors = ["#F7AD3E", "#FF0000"];

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
