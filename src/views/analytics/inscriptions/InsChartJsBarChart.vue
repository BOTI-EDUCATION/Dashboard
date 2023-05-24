<!-- eslint-disable sonarjs/no-unused-collection -->
<script setup>
import { getDonutChartConfig } from '@core/libs/apex-chart/donutConfig'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'


const props = defineProps({
  seriesValues: {
    type: null,
    required: true,
  },
})

const vuetifyTheme = useTheme()
const expenseRationChartConfig = computed(() => getDonutChartConfig(vuetifyTheme.current.value))
</script>

<template>
  <VueApexCharts
    
    type="donut"
    height="410"
    :options="expenseRationChartConfig"
    :series="seriesValues"
  />
</template>
