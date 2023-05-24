<script setup>
import { getHorizontalBarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import BarChart from '@core/libs/chartjs/components/BarChart'
import { useTheme } from 'vuetify'

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
  levelInsLabels: {
    type: null,
    required: true,
  },
  levelInsCount: {
    type: null,
    required: true,
  },
  levelReinsCount: {
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
      label: 'Inscriptions',
      backgroundColor: props.colors.warningShade,
      borderColor: 'transparent',
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: props.levelInsCount
      ,
    },
  

    {
      maxBarThickness: 15,
      backgroundColor: props.colors.horizontalBarInfo,
      label: 'Reinscriptions',
      borderColor: 'transparent',
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: props.levelReinsCount,
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
