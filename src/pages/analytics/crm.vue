<script setup>
import axiosIns from '@/plugins/axios'
import CrmInsByPeriodHor from '@/views/analytics/crm/CrmInsByPeriodHor.vue'
import CrmInscriptions from '@/views/analytics/crm/CrmInscriptions.vue'
import CrmInscriptionsTotal from '@/views/analytics/crm/CrmInscriptionsTotal.vue'

let loaded = ref(false) 
let crmIns = 90 
let crmReins = 40 
let crmNonRein = 100
let promotion = ''
let statistics = []
let weeks= []
let ins= []
let reins= []
onMounted(async() => {
  await axiosIns.get('/getCrmData').then(res=>{
    promotion = res.data.promotion
    crmIns = res.data.count_new_inscriptions
    crmReins = res.data.count_reinscriptions
    crmNonRein = res.data.count_non_resinsrit
    statistics.push(
      {
        title: 'Nouvelle inscriptions',
        stats: crmIns,
        icon: 'tabler-chart-pie-2',
        color: 'primary',
      },
      {
        title: 'Réinscriptions',
        stats: crmReins,
        icon: 'tabler-users',
        color: 'info',
      },
      {
        title: 'non réinscrits',
        stats: crmNonRein,
        icon: 'tabler-shopping-cart',
        color: 'error',
      },
    )
    loaded.value = true

  }).catch(err=>{
    console.log(err)
  })
  await axiosIns.get('getInsReinByWeek/').then(res=>{
    for (let i = 0; i < res.data.days.length; i++) {
      weeks.push( res.data.days[i])      
      ins.push( res.data.ins[i])
      reins.push( res.data.rein[i])
    }
    loaded.value = true
  }).catch(err=>{
    console.log(err)
  })
})



const chartJsCustomColors = {
  white: '#fff',
  yellow: '#ffe802',
  primary: '#836af9',
  areaChartBlue: '#2c9aff',
  barChartYellow: '#ffcf5c',
  polarChartGrey: '#4f5d70',
  polarChartInfo: '#299aff',
  lineChartYellow: '#d4e157',
  polarChartGreen: '#28dac6',
  lineChartPrimary: '#9e69fd',
  lineChartWarning: '#ff9800',
  horizontalBarInfo: '#26c6da',
  polarChartWarning: '#ff8131',
  scatterChartGreen: '#28c76f',
  warningShade: '#ffbd1f',
  areaChartBlueLight: '#84d0ff',
  areaChartGreyLight: '#edf1f4',
  scatterChartWarning: '#ff9f43',
}
</script>

<template>
  <VRow v-if="loaded">
    <!-- 👉 Congratulation John -->
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <CrmInscriptions
        pagename="total d inscriptions"
        :promotion="promotion"
        :ins-count="crmIns"
      />
    </VCol>

    <!-- 👉 Ecommerce Transition -->
    <VCol
      v-if="loaded"
      cols="
        12"
      md="7"
      lg="8"
    >
      <CrmInscriptionsTotal
        class="h-100"
        :statistics="statistics"
      />
    </VCol>

    <!-- 👉 Statistics Line Chart  -->
    <VCol
      v-if="loaded"
      cols="12"
    >
      <VCard
        title="Inscriptions and réinscriptions par période"
      >
        <VCardText>
          <CrmInsByPeriodHor
            :colors="chartJsCustomColors"
            :weeks="weeks"
            :ins="ins"
            :reins="reins"
          />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
