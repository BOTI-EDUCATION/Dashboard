
<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import misc404 from '@images/pages/404.png'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      error-title="Page Not Found :("
      error-description="We couldn't find the page you are looking for."
    />
    <VBtn
      to="/"
      class="mb-12"
    >
      Back to Home
    </VBtn>

    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="misc404"
        alt="Coming Soon"
        :max-width="200"
        class="mx-auto"
      />
    </div>

    <VImg
      :src="authThemeMask"
      class="misc-footer-img d-none d-md-block"
    />
  </div>
</template>

  <style lang="scss">
  @use "@core/scss/template/pages/misc.scss";
  </style>

  <route lang="yaml">
  meta:
  layout: blank
  action: read
  subject: Auth
  </route> 


<!--
  <script setup>
  import InsChartJsBarChart from '@/views/analytics/inscriptions/InsChartJsBarChart.vue'
  import InsChartJsPolarAreaChart from '@/views/analytics/inscriptions/InsChartJsPolarAreaChart.vue'
  import InsReinsChartJsHorizontalBarChart from '@/views/analytics/inscriptions/InsReinsChartJsHorizontalBarChart.vue'
  import InscriptionsCountCharts from '@/views/analytics/inscriptions/InscriptionsCountCharts.vue'
  import ProspectsCountCharts from '@/views/analytics/inscriptions/ProspectsCountCharts.vue'
  import ReinscriptionsCountCharts from '@/views/analytics/inscriptions/ReinscriptionsCountCharts.vue'


  const dateCycle = ref('2023/04/10')

  const changeDateCycle = async ()=>{
  console.log(dateCycle.value)
  }

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

  const simpleStatisticsDemoCards = [
  {
  icon: 'tabler-currency-dollar',
  color: 'error',
  title: 'Total Profit',
  subTitle: 'Last week',
  stat: '1.28k',
  change: '-12.2%',
  },
  {
  icon: 'tabler-chart-bar',
  color: 'info',
  title: 'Total Sales',
  subTitle: 'Last week',
  stat: '$4,673',
  change: '+25.2%',
  },
  ]
  </script>

  <template>
  <VRow>
  <VCol
  cols="12"
  md="4"
  sm="6"
  lg="3"
  >
  <InscriptionsCountCharts />
  </VCol>

  <VCol
  cols="12"
  md="4"
  sm="6"
  lg="3"
  >
  <ReinscriptionsCountCharts />
  </VCol>

  <VCol
  cols="12"
  md="4"
  sm="6"
  lg="3"
  >
  <ReinscriptionsCountCharts />
  </VCol>
    
  <VCol
  cols="12"
  md="4"
  sm="6"
  lg="3"
  >
  <ProspectsCountCharts />
  </VCol>
  <VCol
  cols="12"
  md="12"
  >
  <VCard title="Average inscriptions">
  <VCardText>
  <InsChartJsPolarAreaChart :colors="chartJsCustomColors" />
  </VCardText>
  </VCard>
  </VCol>
  <VCol
  cols="12"
  md="6"
  >
  <VCard>
  <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
  <VCardTitle>Inscription par Cycle</VCardTitle>
          
  <template #append>
  <div class="date-picker-wrapper">
  <AppDateTimePicker
  v-model="dateCycle"
  style="width: 150px;"
  :model-value="dateCycle"
  prepend-inner-icon="tabler-calendar"
  density="compact"
  :config="{ position: 'auto right' }"
  @change="changeDateCycle"
  />
  </div>
  </template>
  </VCardItem>

  <VCardText>
  <InsChartJsBarChart :colors="chartJsCustomColors" />
  </VCardText>
  </VCard>
  </VCol>
    

  <VCol
  cols="12"
  md="6"
  >
  <VCard>
  <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
  <VCardTitle>Inscriptions / Reinscriptions par niveau</VCardTitle>

  <template #append>
  <div class="date-picker-wrapper">
  <AppDateTimePicker
  model-value="2022-06-09"
  prepend-inner-icon="tabler-calendar"
  density="compact"
  :config="{ position: 'auto right' }"
  />
  </div>
  </template>
  </VCardItem>

  <VCardText>
  <InsReinsChartJsHorizontalBarChart :colors="chartJsCustomColors" />
  </VCardText>
  </VCard>
  </VCol>
  </VRow>
  </template> 
-->
