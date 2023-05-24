<script setup>
import { getColumnChartConfig } from '@core/libs/apex-chart/apexCharConfig'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const props = defineProps({
  series:{
    type:null,
    required:true,
  },
})

const vuetifyTheme = useTheme()
const chartConfig = computed(() => getColumnChartConfig(vuetifyTheme.current.value))
</script>

<template>
  <VueApexCharts
    type="bar"
    height="400"
    :options="chartConfig"
    :series="props.series"
  />
</template>
