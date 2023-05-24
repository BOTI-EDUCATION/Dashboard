<script setup>
import { getColumnChartNote } from '@core/libs/apex-chart/apexCharConfig'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const props = defineProps({
  series:{
    type:null,
    required:true,
  },
  labels:{
    type:null,
    required:true,
  },
})

const vuetifyTheme = useTheme()
const chartConfig = computed(() => getColumnChartNote(vuetifyTheme.current.value , props.labels))
</script>

<template>
  <VueApexCharts
    type="bar"
    height="400"
    :options="chartConfig"
    :series="props.series"
  />
</template>
