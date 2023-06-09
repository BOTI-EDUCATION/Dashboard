<script setup>
import { hexToRgb } from '@layouts/utils'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const props = defineProps({
  pageTitle :{
    type:null,
    required:true,
  },
  pageDesc :{
    type:null,
    required:true,
  },
  pageCount :{
    type:null,
    required:true,
  },
})

const vuetifyTheme = useTheme()
const series = [78]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  
  return {
    chart: {
      sparkline: { enabled: true },
      parentHeightOffset: 0,
      type: 'radialBar',
    },
    colors: [currentTheme.warning],
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: -90,
        endAngle: 90,
        hollow: { size: '65%' },
        track: {
          strokeWidth: '45%',
          background: `rgba(${ hexToRgb(String(variableTheme['border-color'])) },${ variableTheme['border-opacity'] })`,
        },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: '22px',
            color: `rgba(${ hexToRgb(currentTheme['on-background']) },${ variableTheme['high-emphasis-opacity'] })`,
            fontWeight: 600,
            offsetY: -5,
          },
        },
      },
    },
    grid: {
      show: false,
      padding: { bottom: 5 },
    },
    stroke: { lineCap: 'round' },
    labels: ['Progress'],
    responsive: [
      {
        breakpoint: 1442,
        options: {
          chart: { height: 120 },
          plotOptions: {
            radialBar: {
              dataLabels: { value: { fontSize: '18px' } },
              hollow: { size: '60%' },
            },
          },
        },
      },
      {
        breakpoint: 1025,
        options: {
          chart: { height: 136 },
          plotOptions: {
            radialBar: {
              hollow: { size: '65%' },
              dataLabels: { value: { fontSize: '18px' } },
            },
          },
        },
      },
      {
        breakpoint: 769,
        options: {
          chart: { height: 120 },
          plotOptions: { radialBar: { hollow: { size: '55%' } } },
        },
      },
      {
        breakpoint: 426,
        options: {
          chart: { height: 145 },
          plotOptions: { radialBar: { hollow: { size: '65%' } } },
          dataLabels: { value: { offsetY: 0 } },
        },
      },
      {
        breakpoint: 376,
        options: {
          chart: { height: 105 },
          plotOptions: { radialBar: { hollow: { size: '60%' } } },
        },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <div>
        <h6 class="text-h6">
          {{ props.pageCount }}
        </h6>
        <span class="text-disabled text-sm">{{ props.pageTitle }}</span>
      </div>

      <VueApexCharts
        v-if="false"
        :options="chartOptions"
        :series="series"
        type="radialBar"
        :height="145"
      />

      <div
        v-if="false"
        class="text-sm text-center text-disabled mt-6"
      >
        {{ props.pageDesc }}
      </div>
    </VCardText>
  </VCard>
</template>

