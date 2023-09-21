<script setup>
import { getHorizontalBarChartConfig } from "@core/libs/chartjs/chartjsConfig";
import BarChart from "@core/libs/chartjs/components/BarChart";
import { useTheme } from "vuetify";

const props = defineProps({
  traited: {
    type: null,
    required: true,
  },
  in_progress: {
    type: null,
    required: true,
  },
  labels: {
    type: null,
    required: true,
  },
  colors: {
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
      label: "En cours",
      backgroundColor: props.colors.warningShade,
      borderColor: "transparent",
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: props.in_progress,
    },

    {
      maxBarThickness: 15,
      backgroundColor: props.colors.horizontalBarInfo,
      label: "Traitées",
      borderColor: "transparent",
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: props.traited,
    },
  ],
};
</script>

<template>
  <BarChart
    v-if="traited.length > 0"
    :height="375"
    :chart-data="data"
    :chart-options="chartOptions"
  />
</template>
