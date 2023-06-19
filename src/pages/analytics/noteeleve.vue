<script setup>
import axiosIns from "@/plugins/axios";
import EleveAnalytics from "@/views/analytics/noteeleve/EleveAnalytics.vue";
import NoteMinMax from "@/views/analytics/noteeleve/NoteMinMax.vue";
import NoteComparatif from "@/views/analytics/noteeleve/NoteComparatif.vue";

import { hexToRgb } from "@layouts/utils";
import { ref } from "vue";

import { useTheme } from "vuetify";

let promotion = "";

let site = null;

let loaded = ref(false);

let cycles = ref([]);
let cycle = ref(null);

let niveaux = ref([]);
let niveau = ref(null);

let classes = ref([]);
let classe = ref(null);
let classe_ = ref(null);

let semestres = ref([]);
let semestre = ref(null);

let unites = ref([]);
let unite = ref(null);

let matieres = ref([]);
let matiere = ref(null);

let eleves = ref([]);
let eleve = ref(null);

let unitesDisciplines = ref([]);
let moyennesDisciplines = ref([]);
let maxValues = ref([]);

onMounted(async () => {
  await axiosIns
    .get("/notesEleve")
    .then((res) => {
      cycles = res.data.cycles;
      semestres = res.data.semestres;
      unitesDisciplines = res.data.unitesDisciplines;
      unites = res.data.unites;
      // for (let index = 0; index < unitesDisciplines.length; index++) {
      //   const element = unitesDisciplines[index];
      //   minMaxDisciplinesTabs.push({
      //     label: element,
      //     icon: "tabler-notes",
      //   });
      // }
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
});
const vuetifyTheme = useTheme();
const currentTheme = vuetifyTheme.current.value.colors;

async function searchEvaluations() {
  if (classe.value && niveau.value && eleve.value && semestre.value) {
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
          // unite.value = unites.value[0].value;
          loaded.value = true;
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
          // inscriptions_per_classe.value = res.data.inscriptions_per_classe;
          // unite.value = unites.value[0].value;
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
          // inscriptions_per_classe.value = res.data.inscriptions_per_classe;
          // unite.value = unites.value[0].value;
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
          <VSelect
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
          <VBtn style="width: 100%" @click="searchEvaluations"> Rechercher </VBtn>
        </VCol>
      </VRow>
    </VCard>

    <VRow>
      <!-- 👉 Data Science -->
      <VCol v-if="loaded && moyennesDisciplines?.length > 0" cols="12">
        <EleveAnalytics :data="moyennesDisciplines" :labels="unitesDisciplines" />
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
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/libs/apex-chart.scss";
</style>
