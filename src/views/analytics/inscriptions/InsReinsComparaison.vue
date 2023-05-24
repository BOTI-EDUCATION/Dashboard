<script setup>
import { getHorizontalBarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import BarChart from '@core/libs/chartjs/components/BarChart'
import { useTheme } from 'vuetify'

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
  reinsCount: {
    type: null,
    required: true,
  },
  insCount: {
    type: null,
    required: true,
  },
  levelInsLabels: {
    type: null,
    required: true,
  },
})

const vuetifyTheme = useTheme()
const chartOptions = computed(() => getHorizontalBarChartConfig(vuetifyTheme.current.value))










const data = {
  labels: props.levelInsLabels
  ,
  datasets: [
    {
      maxBarThickness: 15,
      label: 'Inscriptions 2022/2023',
      backgroundColor: props.colors.warningShade,
      borderColor: 'transparent',
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: props.insCount
      ,
    },
    {
      maxBarThickness: 15,
      label: 'Réinscriptions 2023/2024',
      backgroundColor: props.colors.primary,
      borderColor: props.colors.primary,
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: props.reinsCount
      ,
    },
  
  ],
}
</script>

<template>
  <BarChart
    :height="375"
    :chart-data="data"
    :chart-options="chartOptions"
  />
</template>
