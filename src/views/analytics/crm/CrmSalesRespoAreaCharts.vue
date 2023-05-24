<!-- eslint-disable sonarjs/no-unused-collection -->
<script setup>
import { getDonutCrmChartConfig } from '@/@core/libs/apex-chart/donutCrmAdmissionConfig'
import axiosIns from '@/plugins/axios'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'


const vuetifyTheme = useTheme()
const expenseRationChartConfig = computed(() => getDonutCrmChartConfig(vuetifyTheme.current.value, primiryLabels))

const loaded = ref(false)

const seriesValues =ref( [])
let primiryLabels  = []


onMounted( async() => {
  await axiosIns.get('getCrmData/').then(res=>{
    for (let i = 0; i < res.data.test_mission_by_ressponsable.length; i++) {
      if(!res.data.test_mission_by_ressponsable[i].
        count_test_admission){
        continue
      }
      seriesValues.value.push(Number( res.data.test_mission_by_ressponsable[i].
        count_test_admission))
      if(res.data.test_mission_by_ressponsable[i].
        responsable ){
    
        primiryLabels.push( res.data.test_mission_by_ressponsable[i].
          responsable)
      }else{
        primiryLabels.push('anonymos')
      }
    }    
  }).catch(err=>{
    console.log(err)
  })
  loaded.value = true
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
