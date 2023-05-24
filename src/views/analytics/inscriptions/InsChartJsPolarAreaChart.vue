<script setup>
import { getPolarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import PolarAreaChart from '@core/libs/chartjs/components/PolarAreaChart'
import { useTheme } from 'vuetify'

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
  dataanl: {
    type: null,
    required: true,
  },
})



const vuetifyTheme = useTheme()
const chartConfig = computed(() => getPolarChartConfig(vuetifyTheme.current.value))
</script>

<template>
  <PolarAreaChart
    :height="400"
    :chart-data="props.dataanl"
    :chart-options="chartConfig"
  />
</template>
