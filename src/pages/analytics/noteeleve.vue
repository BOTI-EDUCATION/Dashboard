<script setup>
import axiosIns from "@/plugins/axios";
import EleveAnalytics from "@/views/analytics/noteeleve/EleveAnalytics.vue";

import EleveDiscipline from "@/views/analytics/noteeleve/EleveDiscipline.vue";
import NoteComparatif from "@/views/analytics/noteeleve/NoteComparatif.vue";
import NoteMinMax from "@/views/analytics/noteeleve/NoteMinMax.vue";
import ApexNoteEleveChartDataScience from "@/views/charts/apex-chart/ApexNoteEleveChartDataScience.vue";
import { hexToRgb } from "@layouts/utils";
import { endOfMonth, startOfMonth, subMonths } from "date-fns";
import { ref } from "vue";
import { useTheme } from "vuetify";

let promotion = "";

let site = null;

let loaded = ref(false);

let cycles = ref([]);
let cycle = ref(null);

let days = [];

let niveaux = ref([]);
let niveau = ref(null);

let classes = ref([]);
let classe = ref(null);
let classe_ = ref(null);

let semestres = ref([]);
let semestre = ref(null);

let months = ref([]);
let month = ref(null);

let unites = ref([]);
let unite = ref(null);

let months_ = ref([]);
 
let positifs_ = []; 
let negatives_ = [];
 

let matieres = ref([]);
let matiere = ref(null);
let series = [];
series.push(
  {
    name: "Justifiées",
    data: [],
  },
  {
    name: "non Justifiées",
    data: [],
  }
);

let eleves = ref([]);
let eleve = ref(null);
let eleve_name = "";

let unitesDisciplines = ref([]);
let moyennesDisciplines = ref([]);
let maxValues = ref([]);

const date = ref(new Date());
const startDate = new Date();
const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
const dateCycle = ref(new Date().toISOString().slice(0, 10));
const presetRanges = ref([
  { label: "Today", range: [new Date(), new Date()] },
  {
    label: "This month",
    range: [startOfMonth(new Date()), endOfMonth(new Date())],
  },
  {
    label: "Last month",
    range: [
      startOfMonth(subMonths(new Date(), 1)),
      endOfMonth(subMonths(new Date(), 1)),
    ],
  },
  {
    label: "Periode",
    range: [startDate, endDate],
  },
]);

onMounted(async () => {
  await axiosIns
    .get("/notesEleve")
    .then((res) => {
      cycles = res.data.cycles;
      semestres = res.data.semestres;
      unitesDisciplines = res.data.unitesDisciplines;
      unites = res.data.unites;
      months.value = res.data.months;
      // console.log(res.data);
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
});
const vuetifyTheme = useTheme();
const currentTheme = vuetifyTheme.current.value.colors;

async function searchAbsences() {
  let link =
    "/notesEleve?classe=" +
    classe.value +
    "&niveau=" +
    niveau.value +
    "&semestre=" +
    semestre.value +
    "&eleve=" +
    eleve.value +
    "&month=" +
    month.value;
  loaded.value = false;
  await axiosIns
    .get(link)
    .then((res) => {
      series[0].data = [];
      series[1].data = [];
      days = [];
      for (let i = 0; i < res.data.absences.length; i++) {
        series[0].data.push(Number(res.data.absences[i].justifie));
        series[1].data.push(Number(res.data.absences[i].non_justifie));
        days.push(res.data.absences[i].day);
      }
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function searchEvaluations() {
  if (classe.value && eleve.value && semestre.value) {
    let link =
      "/notesEleve?classe=" +
      classe.value +
      "&niveau=" +
      niveau.value +
      "&semestre=" +
      semestre.value +
      "&eleve=" +
      eleve.value;
    loaded.value = false;

    await axiosIns
      .get(link)
      .then((res) => {
        eleve_name = res.data.eleve_name;
        moyennesDisciplines = res.data.moyennesDisciplines;

        const currentTheme = vuetifyTheme.current.value.colors;
        const variableTheme = vuetifyTheme.current.value.variables;
        const labelPrimaryColor = `rgba(${hexToRgb(currentTheme.primary)},${
          variableTheme["dragged-opacity"]
        })`;
        maxValues.value = [];
        for (const max_note in res.data.max_notes) {
          let categories_ = [];
          let series_ = [];
          let colors_ = [];
          for (let i = 0; i < res.data.max_notes[max_note].length; i++) {
            categories_.push(res.data.max_notes[max_note][i].Label);
            series_.push(Number(res.data.max_notes[max_note][i][0]));
            colors_.push(labelPrimaryColor);
          }
          const max = Math.max(...series_);
          if (max) {
            if (series_.indexOf(max)) {
              const index = series_.indexOf(max);
              colors_[index] = currentTheme.primary;
            }
          }
          let obj = {
            label: max_note,
            series: series_,
            categories: categories_,
            colors: colors_,
            icon: "tabler-notes",
          };
          maxValues.value.push(obj);
        }
        series[0].data = [];
        series[1].data = [];
        days = [];
        for (let i = 0; i < res.data.absences.length; i++) {
          series[0].data.push(Number(res.data.absences[i].justifie));
          series[1].data.push(Number(res.data.absences[i].non_justifie));
          days.push(res.data.absences[i].day);
        }
        months_.value = [];
        positifs_ = [];
        negatives_ = [];
        console.log(typeof res.data.disciplines);
        for (const property in res.data.disciplines) {
          positifs_.push(res.data.disciplines[property].pos);
          negatives_.push(res.data.disciplines[property].neg);
          months_.value.push(res.data.disciplines[property].month);
        }
        console.log(positifs_);
        console.log(negatives_);
        loaded.value = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

watch(
  async () => cycle.value,
  async (first, second) => {
    if (first && second && first != second) {
      let link = "/filterNiveauByCycle?cycle=" + cycle.value;
      await axiosIns
        .get(link)
        .then((res) => {
          loaded.value = false;
          niveaux = [];
          for (let i = 0; i < res.data.niveaux.length; i++) {
            niveaux.push(res.data.niveaux[i].text);
          }
          niveau.value = niveaux[0];
          loaded.value = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
);

watch(
  async () => date.value,
  async (first, second) => {
    if (first && second && first != second) {
      await axiosIns
        .get("noteeleve?date=" + date.value)
        .then((res) => {
          // loaded.value = false;
          // loaded.value = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
);
watch(
  async () => niveau.value,
  async (first, second) => {
    if (first && second && first != second) {
      let link = "/filterClasseByNiveau?niveau=" + niveau.value;
      await axiosIns
        .get(link)
        .then((res) => {
          loaded.value = false;
          classes = [];
          for (let i = 0; i < res.data.classes.length; i++) {
            classes.push(res.data.classes[i].text);
          }
          classe.value = classes[0] ? classes[0] : "aucune classe";
          loaded.value = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
);
watch(
  async () => classe.value,
  async (first, second) => {
    if (first && second && first != second) {
      let link = "/filterEleveByClasse?classe=" + classe.value;
      await axiosIns
        .get(link)
        .then((res) => {
          loaded.value = false;
          eleves = [];
          for (let i = 0; i < res.data.eleves.length; i++) {
            eleves.push(res.data.eleves[i]);
          }
          eleve.value = eleves[0] ? eleves[0].value : null;
          loaded.value = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
);
</script>

<template>
  <div>
    <VCard style="height: 100px; padding: 10px" class="mb-3 sticky-nav">
      <VRow class="align-items-center">
        <!-- 👉 Congratulation John -->
        <VCol v-if="loaded" cols="12" md="2">
          <VSelect v-model="cycle" :items="cycles" label="Cycles" />
        </VCol>
        <VCol v-if="loaded" cols="12" md="2">
          <VSelect v-model="niveau" :items="niveaux" label="Niveaux" />
        </VCol>
        <VCol v-if="loaded" cols="12" md="2">
          <VSelect v-model="classe" :items="classes" label="Classes" />
        </VCol>
        <VCol v-if="loaded" cols="12" md="2">
          <v-autocomplete
            v-model="eleve"
            :items="eleves"
            :item-title="(eleve) => eleve.text"
            :item-value="(eleve) => eleve.value"
            label="Eleves"
          />
        </VCol>
        <VCol v-if="loaded" cols="12" md="2">
          <VSelect v-model="semestre" :items="semestres" label="Semestres" />
        </VCol>
        <VCol v-if="loaded" cols="12" md="2">
          <VBtn style="width: 100%" @click="searchEvaluations">
            Rechercher
          </VBtn>
        </VCol>
      </VRow>
    </VCard>

    <VRow>
      <VCol v-if="loaded && moyennesDisciplines?.length > 0" cols="12">
        <VCard>
          <!-- 👉 Data Science -->
          <EleveAnalytics
            :data="moyennesDisciplines"
            :labels="unitesDisciplines"
          />
        </VCard>
      </VCol>
      <VCol v-if="loaded" cols="12">
        <NoteMinMax
          v-if="loaded && maxValues?.length > 0"
          :matieres="maxValues"
          :loaded="loaded"
        />
      </VCol>
    </VRow>

    <VRow>
      <VCol v-if="loaded && eleve && unites?.length > 0 && semestre" cols="12">
        <NoteComparatif
          :eleve="eleve"
          :semestre="semestre"
          :loaded="loaded"
          :unites="unites"
        />
      </VCol>
      <VCol
        v-if="!loaded"
        cols="12"
        lg="12"
        style="position: relative; height: 80vh"
      >
        <div class="loading">
          <div class="effect-1 effects"></div>
          <div class="effect-2 effects"></div>
          <div class="effect-3 effects"></div>
        </div>
      </VCol>
    </VRow>

    <VCard v-if="loaded" style="padding: 10px" class="mb-3 sticky-nav mt-3">
      <VRow class="align-items-center" style="justify-content: center">
        <VCol cols="12" md="2">
          <VSelect v-model="month" :items="months" label="Mois" />
        </VCol>
        <VCol cols="12" md="2">
          <VBtn style="width: 100%" @click="searchAbsences"> Rechercher </VBtn>
        </VCol>
      </VRow>
    </VCard>

    <VRow>
      <!-- 👉 Data Science -->
      <VCol
        v-if="loaded && eleves && days.length > 0"
        cols="12"
        md="6"
        style="position: relative"
      >
        <VCard style="height: fit-content">
          <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
            <VCardTitle>Suivi des absences - {{ eleve_name }} </VCardTitle>
          </VCardItem>
          <VCardText>
            <ApexNoteEleveChartDataScience
              v-if="loaded && series"
              :series="series"
              :labels="days"
            />
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="6"
        v-if="
          loaded &&
          eleves &&
          months_ &&
          positifs_.length > 0 &&
          negatives_.length > 0
        "
      >
        <EleveDiscipline
          :negatives="negatives_"
          :positifs="positifs_"
          :eleve_name="eleve_name"
          :months="months_"
          :loaded="loaded"
          cols="12"
        />
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/libs/apex-chart.scss";
</style>
