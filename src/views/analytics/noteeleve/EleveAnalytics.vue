<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const props = defineProps({
  data: Array,
  labels: Array
})

const data = [
  {
    data: props.data,
  },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const borderColor = `rgba(${ hexToRgb(String(variableTheme['border-color'])) },${ variableTheme['border-opacity'] })`
  const labelColor = `rgba(${ hexToRgb(currentTheme['on-surface']) },${ variableTheme['disabled-opacity'] })`
  const legendColor = `rgba(${ hexToRgb(currentTheme['on-background']) },${ variableTheme['high-emphasis-opacity'] })`
  
  return {
    chart: {
      type: 'radar',
      toolbar: { show: false },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: borderColor,
          connectorColors: borderColor,
        },
      },
    },
    stroke: {
      show: false,
      width: 0,
    },
    legend: {
      show: false,
      // fontSize: '14px',
      // position: 'bottom',
      // labels: {
      //   colors: legendColor,
      //   useSeriesColors: false,
      // },
      // markers: {
      //   height: 10,
      //   width: 10,
      //   offsetX: -3,
      // },
      // itemMargin: { horizontal: 10 },
      // onItemHover: { highlightDataSeries: false },
    },
    colors: [
      currentTheme.primary,
      currentTheme.info,
    ],
    fill: {
      opacity: [
        1,
        0.7,
      ],
    },
    markers: { size: 0 },
    grid: {
      show: false,
      padding: {
        top: 0,
        bottom: -5,
      },
    },
    xaxis: {
      categories: props.labels,
      labels: {
        show: true,
        style: {
          colors: [
            labelColor,
            labelColor,
            labelColor,
            labelColor,
            labelColor,
            labelColor,
          ],
          fontSize: '14px',
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 20,
      tickAmount: 4,
    },
    responsive: [{
      breakpoint: 769,
      options: { chart: { height: 372 } },
    }],
  }
})
</script>

<template>
  <VueApexCharts
    :options="chartOptions"
    :series="data"
    height="355"
  />
</template>
