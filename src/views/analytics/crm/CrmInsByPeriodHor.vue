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
  weeks: {
    type: null,
    required: true,
  },
  ins: {
    type: null,
    required: true,
  },
  reins: {
    type: null,
    required: true,
  },
})


const loaded =ref(false)
let maxValueIns = 0
let maxValueReins = 0
let maxValue = 0

onMounted(async () => {
  
    maxValueIns = Math.max.apply(Math, props.ins)
    maxValueReins = Math.max.apply(Math, props.reins)
    maxValue = Math.max.apply(Math, [maxValueIns,maxValueReins])

    loaded.value = true


})

const vuetifyTheme = useTheme()

const chartOptions = computed(() => getLatestBarChartConfig(vuetifyTheme.current.value, maxValue ? maxValue : 50))

// const chartOptions = computed(() => getHorizontalBarChartConfig(vuetifyTheme.current.value))

let dateObj = new Date()
let month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
let day = dateObj.getUTCDate()

let newdate = String(day) + '/'+ String(month)



const data = {
  labels: props.weeks ,

  datasets: [
    {
      maxBarThickness: 15,
      label:'Inscriptions',
      backgroundColor: props.colors.warningShade,
      borderColor: 'transparent',
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data:
        props.ins
      ,
    },
    {
      maxBarThickness: 15,
      label:'Réinscriptions',
      backgroundColor: props.colors.horizontalBarInfo,
      borderColor: 'transparent',
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: 
        props.reins
      ,
    },
  ],
}
</script>

<template>
  <BarChart
    v-if="loaded"
    :height="400"
    :chart-data="data"
    :chart-options="chartOptions"
  />
</template>
