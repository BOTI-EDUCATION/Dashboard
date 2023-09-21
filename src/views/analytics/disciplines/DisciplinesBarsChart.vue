<script setup>
import BarChart from '@/@core/libs/chartjs/components/BarChart'

// import { getHorizontalBarChartConfig } from '@core/libs/chartjs/chartjsConfig'

import { getLatestBarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import { useTheme } from 'vuetify'

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
  labels: {
    type: null,
    required: true,
  },
  values: {
    type: null,
    required: true,
  },
  max: {
    type: null,
    required: true,
  },
  
})


const loaded =ref(false)
let maxValueIns = 0
let maxValueReins = 0
let maxValue = 0

 
const vuetifyTheme = useTheme()

const chartOptions = computed(() => getLatestBarChartConfig(vuetifyTheme.current.value, props.max ? props.max : 180))

// const chartOptions = computed(() => getHorizontalBarChartConfig(vuetifyTheme.current.value))



const data = {
  labels: props.labels ,

  datasets: [
    {
      maxBarThickness: 15,
      label:'',
      backgroundColor: props.colors.warningShade,
      borderColor: 'transparent',
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data:
        props.values
      ,
    },
     
  ],
}
</script>

<template>
  <BarChart
    
    :height="400"
    :chart-data="data"
    :chart-options="chartOptions"
  />
</template>
