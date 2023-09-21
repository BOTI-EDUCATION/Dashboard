<script setup>
import { getHorizontalBarChartConfig } from "@core/libs/chartjs/chartjsConfig";
import BarChart from "@core/libs/chartjs/components/BarChart";
import { useTheme } from "vuetify";

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
  disciplines: {
    type: null,
    required: true,
  },
  labels: {
    type: null,
    required: true,
  },
});

const vuetifyTheme = useTheme();
const chartOptions = computed(() =>
  getHorizontalBarChartConfig(vuetifyTheme.current.value)
);

const data = {
  labels: props.labels,
  datasets: [
    {
      maxBarThickness: 15,
      label: "",
      backgroundColor: props.colors.warningShade,
      borderColor: "transparent",
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: props.disciplines,
    },
  ],
};
</script>

<template>
  <BarChart :height="375" :chart-data="data" :chart-options="chartOptions" />
</template>
