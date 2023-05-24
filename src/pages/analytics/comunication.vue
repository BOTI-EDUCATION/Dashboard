
<script setup>
import axiosIns from "@/plugins/axios"
import CommunicationBestPub from "@/views/analytics/communication/CommunicationBestPub.vue"
import CommunicationBestRadial from "@/views/analytics/communication/CommunicationBestRadial.vue"
import CommunicationHead from "@/views/analytics/communication/CommunicationHead.vue"
import usFlag from '@images/icons/countries/us.png'

import { endOfMonth, startOfMonth, subMonths } from 'date-fns'

let albumsCount = 0
let messagesCount = 0 
let devoirsCount = 0
let notesCount = 0 
let ressCount = 0
let commentCount = 0
let reponsesCount = 0
let reclamationCount = 0
let simpleStatisticsCards = []
const loaded = ref(false)
const datepicker = ref(0)


let salesByCountries = []
const date = ref()
const startDate = new Date()
const endDate = new Date(new Date().setDate(startDate.getDate() + 7))

const changeValue = ()=>{
  console.log(date.value)
}

const getDate = (event,checkIn,checkOut) => {
  console.log(date)
  console.log(checkIn)
  console.log(checkOut)
}


const presetRanges = ref([
  { label: 'Today', range: [new Date(), new Date()] },
  { label: 'This month', range: [startOfMonth(new Date()), endOfMonth(new Date())] },
  {
    label: 'Last month',
    range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
  },
  {
    label: 'Periode',
    range: [startDate, endDate],
  },
  
])

console.log(datepicker.value)

onMounted(async() => {

  await axiosIns.get('communication/').then(res=>{
    notesCount = res.data.posts
    devoirsCount = res.data.devoirs
    ressCount = res.data.ressources
    albumsCount= res.data.albums
    commentCount= res.data.comments
    reponsesCount= res.data.reponses
    messagesCount= res.data.messages
    reclamationCount= res.data.reclamation
    for (let i = 0; i < res.data.posts_orders.length; i++) {
      salesByCountries.push({
        avatarImg: usFlag,
        icon: 'tabler-album',
        stats: res.data.posts_orders[i].Label,
        color: '#3f51b5',
        subtitle: '',
        profitLoss: res.data.posts_orders[i].post_count,
      })
    }
    simpleStatisticsCards.push({
      icon: 'tabler-backpack',
      color: 'error',
      title: reponsesCount,
      subTitle: 'Réponses au questionnaire',
      stat: '1.28k',
      change: '-12.2%',
    },
    {
      icon: 'tabler-message',
      color: 'info',
      title: commentCount,
      subTitle: 'Commentaires',
      stat: '$4,673',
      change: '+25.2%',
    })
    loaded.value = true
  }).catch(err=>{
    console.log(err)
  })
})




let simpleStatisticsDemoCards = [
  {
    icon: 'tabler-chart-bar',
    color: '#3f51b5',
    title: 'Total Sales',
    subTitle: 'Last week',
    stat: '$4,673',
    change: '+25.2%',
  },
  {
    icon: 'tabler-archive',
    color: '#4caf50',
    title: 'Total Sales',
    subTitle: 'Last week',
    stat: '$4,673',
    change: '+25.2%',
  },
  {
    icon: 'tabler-chart-pie-2',
    color: 'error',
    title: 'Total Sales',
    subTitle: 'Last week',
    stat: '$4,673',
    change: '+25.2%',
  },
  {
    icon: 'tabler:align-box-bottom-right',
    color: '#03a9f4',
    title: 'Total Profit',
    subTitle: 'Last week',
    stat: '1.28k',
    change: '-12.2%',
  },
  {
    icon: 'tabler-messages',
    color: '#03a9f4',
    title: 'Total Profit',
    subTitle: 'Last week',
    stat: '1.28k',
    change: '-12.2%',
  },
  {
    icon: 'tabler-question-circle',
    color: '#03a9f4',
    title: 'Total Profit',
    subTitle: 'Last week',
    stat: '1.28k',
    change: '-12.2%',
  },
  
]
const dateCycle = ref(new Date().toISOString().slice(0, 10))
const dateCycleTo = ref(new Date().toISOString().slice(0, 10))

let changeDateCycle = async ()=>{
  await axiosIns.get('communication?date='+dateCycle.value).then(res=>{
    loaded.value = false
    notesCount = res.data.posts
    devoirsCount = res.data.devoirs
    ressCount = res.data.ressources
    albumsCount= res.data.albums
    commentCount= res.data.comments
    reponsesCount= res.data.reponses
    messagesCount= res.data.messages
    reclamationCount= res.data.reclamation
    loaded.value = true
  }).catch(err=>{
    console.log(err)
  })
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
      class="d-flex justify-end"
    >
      <VCol
        v-if="loaded"
        cols="12"
        md="4"
        sm="6"
        lg="3"
      >
        <div
          class="date-picker-wrapper d-flex"
        >
          <AppDateTimePicker
            v-model="dateCycle"
            range
            prepend-inner-icon="tabler-calendar"
            density="compact"
            :config="{ position: 'auto right' }"
            @change="changeDateCycle"
          />
        </div>
        <VueDatePicker
          v-if="false"
          v-model="date"
          range 
          :preset-ranges="presetRanges"
          @change="changeValue"
          @period-selected="getDate"
        >
          <template #yearly="{ label, range, presetDateRange }">
            <span @click="presetDateRange(range)">{{ label }}</span>
          </template>
        </VueDatePicker>
      </VCol>
    </VCol> 
    <!-- 👉 Congratulation John -->
    <VCol
      v-if="loaded"
      cols="12"
      lg="3"
      md="3"
      sm="6"
    >   
      <CommunicationHead
        cardname="Note d'information"
        :data="notesCount"
        :color="simpleStatisticsDemoCards[0].color"
        :icon="simpleStatisticsDemoCards[0].icon"
      />
    </VCol>
    
    <VCol
      v-if="loaded"
      cols="12"
      md="3"
      sm="6"
      lg="3"
    >
      <CommunicationHead
        cardname="Albums photo"
        :data="devoirsCount"
        :color="simpleStatisticsDemoCards[1].color"
        :icon="simpleStatisticsDemoCards[1].icon"
      />
    </VCol>
    
    <VCol
      v-if="loaded"
      cols="12"
      md="3"
      sm="6"
      lg="3"
    >
      <CommunicationHead
        cardname="Devoirs"
        :data="albumsCount"
        :color="simpleStatisticsDemoCards[2].color"
        :icon="simpleStatisticsDemoCards[2].icon"
      />
    </VCol>
    
    <VCol
      v-if="loaded"
      cols="12"
      md="3"
      sm="6"
      lg="3"
    >
      <CommunicationHead
        cardname="Ressources"
        :data="ressCount"
        :color="simpleStatisticsDemoCards[3].color"
        :icon="simpleStatisticsDemoCards[3].icon"
      />
    </VCol>
    <!-- 👉 Congratulation John -->
    <VCol
      v-if="loaded"
      cols="12"
      lg="3"
      md="3"
      sm="6"
    >   
      <CommunicationHead
        cardname="messages"
        :data="messagesCount"
        :color="simpleStatisticsDemoCards[4].color"
        :icon="simpleStatisticsDemoCards[4].icon"
      />
    </VCol>
    <VCol
      v-if="loaded"
      cols="12"
      lg="3"
      md="3"
      sm="6"
    >   
      <CommunicationHead
        cardname="demandes & réclamations"
        :data="reclamationCount"
        :color="simpleStatisticsDemoCards[5].color"
        :icon="simpleStatisticsDemoCards[5].icon"
      />
    </VCol>
    <VCol
      v-if="loaded"
      cols="12"
      lg="3"
      md="3"
      sm="6"
    >   
      <CommunicationHead
        :cardname="simpleStatisticsCards[0].subTitle"
        :data="simpleStatisticsCards[0].title"
        :color="simpleStatisticsCards[0].color"
        :icon="simpleStatisticsCards[0].icon"
      />
    </VCol>
    <VCol
      v-if="loaded"
      cols="12"
      lg="3"
      md="3"
      sm="6"
    >   
      <CommunicationHead
        :cardname="simpleStatisticsCards[1].subTitle"
        :data="simpleStatisticsCards[1].title"
        :color="simpleStatisticsCards[1].color"
        :icon="simpleStatisticsCards[1].icon"
      />
    </VCol>
   
    <VCol
      v-if="false"
      cols="12"
      
      lg="3"
      md="3"
      sm="6"
    >
      <CommunicationBestRadial
        page-title="messages"
        page-desc="87% des messages répondus"
        :page-count="messagesCount"
        style="height: 100%;"
      />
    </VCol>
    <VCol
      v-if="false"
      cols="12"
      lg="3"
      md="3"
      sm="6"
    >
      <CommunicationBestRadial
        page-title="demandes & réclamations"
        page-desc="87% des demandes traités"
        :page-count="reclamationCount"
        style="height: 100%;"
      />
    </VCol>
    <VCol
      v-if="false"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <VCard
        style="height: 100%;text-align: center;"
      >
        <VCardText>
          <VAvatar
            :color="simpleStatisticsCards[0].color"
            variant="tonal"
            
            size="42"
          >
            <VIcon :icon="simpleStatisticsCards[0].icon" />
          </VAvatar>

          <h6 class="text-h5 mt-3">
            {{ simpleStatisticsCards[0].title }}
          </h6>
          <p class="text-md text-disabled mt-1 mb-0">
            {{ simpleStatisticsCards[0].subTitle }}
          </p>
        </VCardText>
      </VCard>
    </VCol>
    <VCol
      v-if="false"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <VCard
        style="height: 100%;text-align: center;"
      >
        <VCardText>
          <VAvatar
            :color="simpleStatisticsCards[1].color"
            variant="tonal"
            
            size="42"
          >
            <VIcon :icon="simpleStatisticsCards[1].icon" />
          </VAvatar>

          <h6 class="text-h5 mt-3">
            {{ simpleStatisticsCards[1].title }}
          </h6>
          <p class="text-md text-disabled mt-1 mb-0">
            {{ simpleStatisticsCards[1].subTitle }}
          </p>
        </VCardText>
      </VCard>
    </VCol>
    

  
    <!-- 👉 Sales by Countries -->
    <VCol
      v-if="loaded"
      cols="12"
      sm="6"
      lg="5"
    >
      <CommunicationBestPub :sales-by-countries="salesByCountries" />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";

.flat-picker-custom-style {
  block-size: 40px;
}

.flatpickr-input {
  block-size: 40px;
}
</style>
