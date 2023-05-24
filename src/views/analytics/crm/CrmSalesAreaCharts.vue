<!-- eslint-disable sonarjs/no-unused-collection -->
<script setup>
import { getDonutCrmChartConfig } from '@/@core/libs/apex-chart/donutCrmConfig'
import axiosIns from '@/plugins/axios'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'


const vuetifyTheme = useTheme()
const expenseRationChartConfig = computed(() => getDonutCrmChartConfig(vuetifyTheme.current.value))

const loaded = ref(false)

let seriesValues = []


onMounted( async() => {
  await axiosIns.get('getCrmData/').then(res=>{
    seriesValues.push(res.data.test_admission_by_result
      .positif)
    seriesValues.push(res.data.test_admission_by_result
      .negative)
    seriesValues.push(res.data.test_admission_by_result
      .enattente )
    loaded.value = true
  }).catch(err=>{
    console.log(err)
  })
})
</script>

<template>
  <VueApexCharts
    v-if="loaded"
    type="donut"
    height="410"
    :options="expenseRationChartConfig"
    :series="seriesValues"
  />
</template>
