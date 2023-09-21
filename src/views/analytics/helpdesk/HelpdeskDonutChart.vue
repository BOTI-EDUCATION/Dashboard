<!-- eslint-disable sonarjs/no-unused-collection -->
<script setup>
import { getDonutChartConfig } from "@core/libs/apex-chart/donutHelpdeskConfig";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const props = defineProps({
  values: {
    type: null,
    required: true,
  },
  labels: {
    type: null,
    required: true,
  },
});

const vuetifyTheme = useTheme();
const expenseRationChartConfig = computed(() =>
  getDonutChartConfig(vuetifyTheme.current.value, props.values, props.labels)
);
</script>

<template>
  <VueApexCharts
    type="donut"
    height="410"
    :options="expenseRationChartConfig"
    :series="values"
  />
</template>
