<script setup>
import axiosIns from "@/plugins/axios";
import NoteAction from "@/views/analytics/noteclasse/NoteAction.vue";
import NoteClasse from "@/views/analytics/noteclasse/NoteClasse.vue";
import NoteMinMax from "@/views/analytics/noteclasse/NoteMinMax.vue";
import NoteTable from "@/views/analytics/noteclasse/NoteTable.vue";
import ApexNoteChartDataScience from "@/views/charts/apex-chart/ApexNoteChartDataScience.vue";
import AnalyticsNoteSupportTracker from "@/views/dashboards/analytics/AnalyticsNoteSupportTracker.vue";

import { hexToRgb } from "@layouts/utils";
import { useTheme } from "vuetify";

let controles_planifier = ref(0);
let controles_programmes = ref(0);
let controles_notes = ref(0);
let controles_passes = ref(0);

let inscriptions_per_classe = ref(0);
let inscriptions_per_classe_ = ref(0);

let promotion = "";

let site = null;
let loaded = ref(false);
let statistics = ref([
  {
    title: "Controles programmés",
    stats: controles_programmes.value,
    icon: "tabler-chart-pie-2",
    color: "primary",
  },
  {
    title: "Controles planifiés",
    stats: controles_planifier.value,
    icon: "tabler-users",
    color: "info",
  },
  {
    title: "Controles passés",
    stats: controles_passes.value,
    icon: "tabler-shopping-cart",
    color: "error",
  },
  {
    title: "Controles notés à 100%",
    stats: controles_notes.value,
    icon: "tabler-currency-dollar",
    color: "success",
  },
]);

let evsData = [];
let series = ref([
  {
    name: "Programmé",
    data: [],
  },
  {
    name: "Planifiés",
    data: [],
  },
  {
    name: "passés",
    data: [],
  },
  {
    name: "a notées",
    data: [],
  },
]);

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

let matieres_ = [];

let prog = [];
let plan = [];
let pass = [];
let notee = [];

let rens_contr_prog = 0;
let rens_contr_pass = 0;
let rens_contr_note = 0;
let rens_contr_not_note = 0;
let rens_move = ref([0]);

let thead = ref(["éléve", "cc 1", "cc 2", "Evolution"]);

let supportTicket = [
  {
    avatarColor: "primary",
    avatarIcon: "tabler-ticket",
    title: "Contrôles notés à 100%",
    subtitle: 10,
  },
  {
    avatarColor: "info",
    avatarIcon: "tabler-circle-check",
    // title: 'Contrôles notés partiellement',
    title: "Contrôles notés partiellement",
    subtitle: 10,
  },
  {
    avatarColor: "warning",
    avatarIcon: "tabler-clock",
    // title: 'Contrôles pas encore notés',
    title: "Contrôles pas encore notés",
    subtitle: 10,
  },
];

let maxValues = ref([]);

onMounted(async () => {
  await axiosIns
    .get("/notesCLasse")
    .then((res) => {
      matieres_ = [];
      prog = [];
      plan = [];
      pass = [];
      notee = [];
      maxValues.value = [];
      cycles.value = res.data.cycles;
      niveaux.value = res.data.niveaux;
      classes.value = res.data.classes;
      semestres.value = res.data.semestres;

      cycle.value = cycles.value[0];
      niveau.value = niveaux.value[0];
      classe.value = classes.value[0];
      classe_.value = classe.value;
      semestre.value = semestres.value[0];

      inscriptions_per_classe.value = res.data.inscriptions_per_classe;
      inscriptions_per_classe_.value = inscriptions_per_classe.value;

      controles_programmes.value = res.data.controles_programmes;
      controles_planifier.value = res.data.controles_planifier;
      controles_passes.value = res.data.controles_passes;
      controles_notes.value = res.data.controles_notes;
      statistics.value[0].stats = controles_programmes.value;
      statistics.value[1].stats = controles_planifier.value;
      statistics.value[2].stats = controles_passes.value;
      statistics.value[3].stats = controles_notes.value;

      for (let i = 0; i < res.data.unites_evaluations.length; i++) {
        matieres_.push(res.data.unites_evaluations[i].unite_label);
        prog.push(res.data.unites_evaluations[i].controles_programmes);
        plan.push(res.data.unites_evaluations[i].controles_planifier);
        pass.push(res.data.unites_evaluations[i].controles_passes);
        notee.push(res.data.unites_evaluations[i].controles_notes);
      }
      rens_contr_prog = prog.reduce((a, b) => a + b, 0);
      rens_contr_pass = pass.reduce((a, b) => a + b, 0);
      rens_contr_not_note = res.data.controles_not_notes;
      rens_contr_note = notee.reduce((a, b) => a + b, 0);

      rens_move.value[0] = Number(res.data.move_chart_ev);

      supportTicket[0].subtitle = 0;
      supportTicket[1].subtitle = 0;
      supportTicket[2].subtitle = 0;
      supportTicket[0].subtitle = rens_contr_note;
      supportTicket[1].subtitle = rens_contr_pass;
      supportTicket[2].subtitle = rens_contr_not_note;

      series.value[0].data = prog;
      series.value[1].data = plan;

      series.value[2].data = pass;
      series.value[3].data = notee;

      for (const unite_litt in res.data.unites) {
        for (let i = 0; i < res.data.unites[unite_litt].length; i++) {
          unites.value.push(res.data.unites[unite_litt][i]);
        }
      }

      matieres.value = res.data.matieres;
      matiere.value = matieres.value[0];
      if (unites.value) {
        unite.value = unites.value[0].value;
      } else {
        unite.value = null;
      }

      const currentTheme = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const labelPrimaryColor = `rgba(${hexToRgb(currentTheme.primary)},${
        variableTheme["dragged-opacity"]
      })`;
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
});
const vuetifyTheme = useTheme();
const currentTheme = vuetifyTheme.current.value.colors;

const searchEvaluations = async () => {
  matieres_ = [];
  let link =
    "/notesCLasse?classe=" +
    classe.value +
    "&niveau=" +
    niveau.value +
    "&semestre=" +
    semestre.value +
    "&unite_litt=" +
    unite.value +
    "&matiere_litt=" +
    matiere.value;
  await axiosIns
    .get(link)
    .then((res) => {
      loaded.value = false;
      prog = [];
      plan = [];
      pass = [];
      notee = [];
      maxValues.value = [];
      inscriptions_per_classe.value = res.data.inscriptions_per_classe;
      inscriptions_per_classe_.value = inscriptions_per_classe.value;
      controles_programmes.value = res.data.controles_programmes;
      controles_planifier.value = res.data.controles_planifier;
      controles_passes.value = res.data.controles_passes;
      controles_notes.value = res.data.controles_notes;
      statistics.value[0].stats = controles_programmes.value;
      statistics.value[1].stats = controles_planifier.value;
      statistics.value[2].stats = controles_passes.value;
      statistics.value[3].stats = controles_notes.value;
      rens_contr_prog = 0;
      rens_contr_prog = 0;
      rens_contr_note = 0;
      rens_contr_not_note = 0;
      for (let i = 0; i < res.data.unites_evaluations.length; i++) {
        matieres_.push(res.data.unites_evaluations[i].unite_label);
        prog.push(res.data.unites_evaluations[i].controles_programmes);
        plan.push(res.data.unites_evaluations[i].controles_planifier);
        pass.push(res.data.unites_evaluations[i].controles_passes);
        notee.push(res.data.unites_evaluations[i].controles_notes);
      }

      rens_contr_not_note = res.data.controles_not_notes;
      if (prog.length > 0) {
        rens_contr_prog = prog.reduce((a, b) => a + b);
      }
      if (pass.length > 0) {
        rens_contr_pass = pass.reduce((a, b) => a + b);
      }
      if (notee.length > 0) {
        rens_contr_note = notee.reduce((a, b) => a + b);
      }

      rens_move.value[0] = Number(res.data.move_chart_ev);

      supportTicket[0].subtitle = 0;
      supportTicket[1].subtitle = 0;
      supportTicket[2].subtitle = 0;
      supportTicket[0].subtitle = rens_contr_note;
      supportTicket[1].subtitle = 0;
      supportTicket[2].subtitle = rens_contr_not_note;

      series.value[0].data = prog;
      series.value[1].data = plan;

      series.value[2].data = pass;
      series.value[3].data = notee;
      classe_.value = classe.value;

      const currentTheme = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      const labelPrimaryColor = `rgba(${hexToRgb(currentTheme.primary)},${
        variableTheme["dragged-opacity"]
      })`;
      for (const max_note in res.data.max_notes) {
        let categories_ = [];
        let series_ = [];
        let colors_ = [];
        for (let i = 0; i < res.data.max_notes[max_note].length; i++) {
          categories_.push(res.data.max_notes[max_note][i].Label);
          series_.push(Number(res.data.max_notes[max_note][i][0]));
          colors_.push(labelPrimaryColor);
        }
        let max = Math.max(...series_);
        let index = series_.indexOf(max);
        colors_[index] = currentTheme.primary;

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
};

async function searchUnites() {
  let link =
    "/notesCLasse?classe=" +
    classe.value +
    "&niveau=" +
    niveau.value +
    "&semestre=" +
    semestre.value +
    "&unite_litt=" +
    unite.value +
    "&matiere_litt=" +
    matiere.value;

  await axiosIns
    .get(link)
    .then((res) => {
      loaded.value = false;
      matieres_ = [];
      prog = [];
      plan = [];
      pass = [];
      notee = [];
      rens_contr_prog = 0;
      rens_contr_prog = 0;
      rens_contr_note = 0;
      rens_contr_not_note = 0;
      for (let i = 0; i < res.data.unites_evaluations.length; i++) {
        matieres_.push(res.data.unites_evaluations[i].unite_label);
        prog.push(res.data.unites_evaluations[i].controles_programmes);
        plan.push(res.data.unites_evaluations[i].controles_planifier);
        pass.push(res.data.unites_evaluations[i].controles_passes);
        notee.push(res.data.unites_evaluations[i].controles_notes);
      }
      if (prog.length > 0) {
        rens_contr_prog = prog.reduce((a, b) => a + b);
      }
      if (pass.length > 0) {
        rens_contr_pass = pass.reduce((a, b) => a + b);
      }
      if (notee.length > 0) {
        rens_contr_note = notee.reduce((a, b) => a + b);
      }
      rens_contr_not_note = res.data.controles_not_notes;

      rens_move.value[0] = Number(res.data.move_chart_ev);

      supportTicket[0].subtitle = 0;
      supportTicket[1].subtitle = 0;
      supportTicket[2].subtitle = 0;
      supportTicket[0].subtitle = rens_contr_note;
      supportTicket[1].subtitle = rens_contr_pass;
      supportTicket[2].subtitle = rens_contr_not_note;

      series.value[0].data = prog;
      series.value[1].data = plan;
      series.value[2].data = pass;
      series.value[3].data = notee;

      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
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
          inscriptions_per_classe.value = res.data.inscriptions_per_classe;
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
  async () => matiere.value,
  async (first, second) => {
    if (first && second && first != second) {
      let link = "/getUnitesbyMatieres?matiere_litt=" + matiere.value;
      await axiosIns
        .get(link)
        .then((res) => {
          loaded.value = false;
          unites.value = [];
          for (const unite_litt in res.data.unites) {
            for (let i = 0; i < res.data.unites[unite_litt].length; i++) {
              unites.value.push(res.data.unites[unite_litt][i]);
            }
          }
          if (unites.value && unites.value[0]) {
            unite.value = unites.value[0].value;
          } else {
            unite.value = null;
          }
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
      <VRow class="justify-space-between">
        <!-- 👉 Congratulation John -->
        <VCol v-if="loaded" cols="12" md="3">
          <VSelect v-model="cycle" :items="cycles" label="Cycles" />
        </VCol>
        <VCol v-if="loaded" cols="12" md="2">
          <VSelect v-model="niveau" :items="niveaux" label="Niveaux" />
        </VCol>
        <VCol v-if="loaded" cols="12" md="3">
          <VSelect v-model="classe" :items="classes" label="Classes" />
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
    <VRow class="justify-center">
      <VCol v-if="loaded" cols="12" md="5" lg="4">
        <NoteClasse
          :pagename="classe_"
          :promotion="promotion"
          :ins-count="inscriptions_per_classe_ + ' élèves'"
        />
      </VCol>

      <!-- 👉 Ecommerce Transition -->
      <VCol cols="12" md="7" lg="8">
        <NoteAction v-if="loaded" class="h-100" :statistics="statistics" />
      </VCol>
    </VRow>
    <VCard style="height: 100px; padding: 10px" class="mb-3 mt-4 sticky-nav-2">
      <VRow>
        <VCol
          v-if="loaded"
          cols="12"
          md="12"
          class="d-flex justify-center align-center"
        >
          <VCol cols="12" md="3">
            <VSelect
              id="matieres"
              v-model="matiere"
              :items="matieres"
              dense
              filled
              class="col-3"
              label="Toutes les disciplines"
            />
          </VCol>
          <VCol cols="12" md="3">
            <VSelect
              id="unites"
              :items="unites"
              v-model="unite"
              dense
              filled
              class="col-3"
              label="Toutes Unités"
            />
          </VCol>
          <VCol cols="12" md="2">
            <VBtn class="col-3" @click="searchUnites"> Rechercher </VBtn>
          </VCol>
        </VCol>
      </VRow>
    </VCard>
    <VRow>
      <!-- 👉 Data Science -->
      <VCol v-if="loaded && series" cols="12" md="6">
        <VCard>
          <VCardText>
            <ApexNoteChartDataScience
              v-if="loaded && series"
              :series="series"
              :labels="matieres_"
            />
          </VCardText>
        </VCard>
      </VCol>

      <VCol v-if="loaded && rens_move" cols="12" md="6">
        <div style="height: 100%">
          <AnalyticsNoteSupportTracker
            :rens="rens_move"
            :loaded="loaded"
            v-if="loaded && rens_move"
            :supportticket="supportTicket"
            :controles_pass="rens_contr_pass"
          />
        </div>
      </VCol>
      <!-- 👉 Earning Reports -->
      <VCol v-if="loaded && maxValues" cols="12" md="12" id="ev_note">
        <div>
          <NoteMinMax
            v-if="loaded && maxValues"
            :matieres="maxValues"
            :loaded="loaded"
          />
        </div>
      </VCol>
      <VCol cols="12" lg="12" v-show="false">
        <NoteTable :thead="thead" />
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/libs/apex-chart.scss";

.card-list {
  --v-card-list-gap: 18px;
}

.sticky-nav {
  position: sticky;
  z-index: 110;
  border-radius: 5px;
  inset-block-start: 19px;
  overflow-y: auto;
}

.sticky-nav-22 {
  position: sticky;
  z-index: 100;
  border-radius: 5px;
  inset-block-start: 130px;
}
</style>
