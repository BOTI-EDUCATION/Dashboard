<script setup>
import axiosIns from '@/plugins/axios'
import NoteAction from '@/views/analytics/noteclasse/NoteAction.vue'
import NoteClasse from '@/views/analytics/noteclasse/NoteClasse.vue'
import ApexNoteChartDataScience from '@/views/charts/apex-chart/ApexNoteChartDataScience.vue'
import AnalyticsNoteSupportTracker from '@/views/dashboards/analytics/AnalyticsNoteSupportTracker.vue'

let controles_planifier = ref(0) 
let controles_programmes = ref(0) 
let controles_notes = ref(0) 
let controles_passes = ref(0)


let inscriptions_per_classe = ref(0)

let promotion = ''
let matiere = ref(null)
let unite = ref(null)
let site = null
let loaded = ref(false)
let statistics = ref([
  {
    title: 'Controles programmés',
    stats: controles_programmes.value,
    icon: 'tabler-chart-pie-2',
    color: 'primary',
  },
  {
    title: 'Controles planifiés',
    stats: controles_planifier.value,
    icon: 'tabler-users',
    color: 'info',
  },
  {
    title: 'Controles passés',
    stats: controles_passes.value,
    icon: 'tabler-shopping-cart',
    color: 'error',
  },
  {
    title: "Controles notés à 100%",
    stats: controles_notes.value,
    icon: 'tabler-currency-dollar',
    color: 'success',
  },

])


let evsData = []
let series= []

let cycles = ref([])
let cycle = ref(null)

let niveaux = ref([])
let niveau = ref(null)

let classes = ref([])
let classe = ref(null)

let semestres = ref([])
let semestre = ref(null)




let unites = ref([])
let matieres =ref( [])


onMounted(async() => {
  await axiosIns.get('/notesCLasse').then(res=>{
    
    cycles.value = res.data.cycles
    niveaux.value = res.data.niveaux
    classes.value = res.data.classes
    semestres.value = res.data.semestres

    cycle.value = cycles.value[0]
    niveau.value = niveaux.value[0]
    classe.value = classes.value[0]
    semestre.value = semestres.value[0]
    
    inscriptions_per_classe.value = res.data.inscriptions_per_classe 
  
    controles_programmes.value = res.data.controles_programmes
    controles_planifier.value = res.data.controles_planifier
    controles_passes.value = res.data.controles_passes
    controles_notes.value = res.data.controles_notes
    statistics.value[0].stats =  controles_programmes.value
    statistics.value[1].stats =  controles_planifier.value
    statistics.value[2].stats =  controles_passes.value
    statistics.value[3].stats =  controles_notes.value

  }).catch(err =>{
    console.log(err)
  })
  loaded.value = true
})




const searchEvaluations = async  ()=>{
  let link = '/notesCLasse?classe=' + classe.value + '&niveau='+niveau.value +  '&semestre='+semestre.value
  await axiosIns.get(link).then(res=>{
    loaded.value = false

    inscriptions_per_classe.value = res.data.inscriptions_per_classe
    controles_programmes.value = res.data.controles_programmes
    controles_planifier.value = res.data.controles_planifier
    controles_passes.value = res.data.controles_passes
    controles_notes.value = res.data.controles_notes
    statistics.value[0].stats =  controles_programmes.value
    statistics.value[1].stats =  controles_planifier.value
    statistics.value[2].stats =  controles_passes.value
    statistics.value[3].stats =  controles_notes.value

    loaded.value = true
  }).catch(err=>{
    console.log(err)
  })
}

const searchUnites = ()=>{
  
}

watch(async() => (cycle.value),async (first, second) => {
  if(first && second && (first != second)){
    let link = '/filterNiveauByCycle?cycle=' + cycle.value 
    await axiosIns.get(link).then(res=>{
      loaded.value = false
      niveaux = []
      for (let i = 0; i < res.data.niveaux.length; i++) {
        niveaux.push(res.data.niveaux[i].text)
      }
      niveau.value = niveaux[0]
      loaded.value = true
    }).catch(err=>{
      console.log(err)
    })
  }
})

watch(async() => (niveau.value),async (first, second) => {
  if(first && second && (first != second)){
    let link = '/filterClasseByNiveau?niveau=' + niveau.value 
    await axiosIns.get(link).then(res=>{
      loaded.value = false
      classes = []
      for (let i = 0; i < res.data.classes.length; i++) {
        classes.push(res.data.classes[i].text)
      }
      classe.value = classes[0] ? classes[0] : "aucune classe" 
      inscriptions_per_classe.value = res.data.inscriptions_per_classe
      loaded.value = true
    }).catch(err=>{
      console.log(err)
    })
  }

})
</script>

<template>
  <VRow
    class="justify-space-between"
  >
    <!-- 👉 Congratulation John -->

    <VCol
      v-if="loaded"
      cols="12"
      md="3"
    >
      <VSelect
        v-model="cycle"
        :items="cycles"
        label="Cycles"
      />
    </VCol>
    <VCol
      v-if="loaded"
      cols="12"
      md="2"
    >
      <VSelect
        v-model="niveau"
        :items="niveaux"
        label="Niveaux"
      />
    </VCol>
    <VCol
      v-if="loaded"
      cols="12"
      md="3"
    >
      <VSelect
        v-model="classe"
        :items="classes"
        label="Classes"
      />
    </VCol>
    <VCol
      v-if="loaded"
      cols="12"
      md="2"
    >
      <VSelect
        v-model="semestre"
        :items="semestres"
        label="Semestres"
      />
    </VCol>
    <VCol
      v-if="loaded"
      cols="12"
      md="2"
    >
      <VBtn style="width: 100%;" @click="searchEvaluations">
        Rechercher
      </VBtn>
    </VCol>
  </VRow>
  <VRow
    class="justify-center"
  >  
  <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <NoteClasse
        v-if="loaded"
        :pagename="classe"
        :promotion="promotion"
        :ins-count="inscriptions_per_classe + ' élèves'"
      />
    </VCol>   
  
    
    <!-- 👉 Ecommerce Transition -->
    <VCol
      
      cols="12"
      md="7"
      lg="8"
    >
      <NoteAction
        v-if="loaded"
        class="h-100"
        :statistics="statistics"
      />
    </VCol>
    <VCol
      v-if="false"
      cols="12"
      md="12"
      class="d-flex justify-center align-center"
    >
      <VCol
        cols="12"
        md="3"
      >
        <VSelect
          id="unites"
          v-model="unite"
          :items="unites"
          dense
          filled
          class="col-3"
          label="Toutes Unités"
        />
      </VCol>
      <VCol
        cols="12"
        md="3"
      >
        <VSelect
          v-model="matiere"
          class="col-3"
          :items="matieres"
          label="Matières littéraires"
        />
      </VCol>
      <VCol
        cols="12"
        md="2"
      >
        <VBtn
          class="col-3"
          @click="searchUnites"
        >
          Rechercher
        </VBtn>
      </VCol>
    </VCol>
    <!-- 👉 Data Science -->
    <VCol
      v-if="false"
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText>
          <ApexNoteChartDataScience
            :labels="matieres"
            :series="series"
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Support Tracker -->
    <VCol
      v-if="false"
      cols="12"
      md="6"
    >
      <AnalyticsNoteSupportTracker />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
