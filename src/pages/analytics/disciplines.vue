<!-- eslint-disable sonarjs/cognitive-complexity -->

<script setup>
import imgEmpty from "@/pages/components/imgEmpty.vue";
import axiosIns from "@/plugins/axios";
import DisciplinesBarsChart from "@/views/analytics/disciplines/DisciplinesBarsChart.vue";
import DisciplinesChartJsHorizontalBarChart from "@/views/analytics/disciplines/DisciplinesChartJsHorizontalBarChart.vue";
import ApexNoteChartDataScience from "@/views/charts/apex-chart/ApexNoteChartDataScience.vue";

import { endOfMonth, startOfMonth, subMonths } from "date-fns";
let cycles = ref([]);
let cycle = ref(null);

let sites = ref([]);
let site = ref(null);

let niveaux = ref([]);
let niveau = ref(null);

let actions = ref([]);
let action = ref(null);
let interventions = ref([]);
let intervention = ref(null);

let disciplines_actions = ref([]);
let disciplines_actions_labels = ref([]);

let prof_disciplines_actions = ref([]);
let prof_disciplines_actions_labels = ref([]);

let disciplines_by_actions_labels = [];
let disciplines_by_actions_values = [];
let max = [];

let disciplines_by_interventions_labels = [];
let disciplines_by_interventions_values = [];
let maxInterventions = [];

let loaders = {
  loaded: ref(false),
  loadedActions: ref(false),
  loadedInterventions: ref(false),
};

let loaded = ref(false);
let loadedActions = ref(false);
let loadedInterventions = ref(false);
const chartJsCustomColors = {
  white: "#fff",
  yellow: "#ffe802",
  primary: "#836af9",
  areaChartBlue: "#2c9aff",
  barChartYellow: "#ffcf5c",
  polarChartGrey: "#4f5d70",
  polarChartInfo: "#299aff",
  lineChartYellow: "#d4e157",
  polarChartGreen: "#28dac6",
  lineChartPrimary: "#9e69fd",
  lineChartWarning: "#ff9800",
  horizontalBarInfo: "#26c6da",
  polarChartWarning: "#ff8131",
  scatterChartGreen: "#28c76f",
  warningShade: "#ffbd1f",
  areaChartBlueLight: "#84d0ff",
  areaChartGreyLight: "#edf1f4",
  scatterChartWarning: "#ff9f43",
};
let series = ref([
  {
    name: "disciplines",
    data: [],
  },
]);
function changeDisciplinesData() {
  let link = "/disiplines?changeDisciplinesData&action=" + action.value;
  loadedActions.value = false;
  axiosIns
    .get(link)
    .then((res) => {
      disciplines_by_actions_labels = [];
      disciplines_by_actions_values = [];
      disciplines_by_actions_labels = res.data.labels;
      disciplines_by_actions_values = res.data.values;
      max = Math.max(...disciplines_by_actions_values);
      loadedActions.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
}
function changeDisciplinesDataByIntervention() {
  let link =
    "/disiplines?changeDisciplinesDataByIntervention&intervention=" +
    intervention.value;
  loadedInterventions.value = false;
  axiosIns
    .get(link)
    .then((res) => {
      disciplines_by_interventions_labels = [];
      disciplines_by_interventions_values = [];
      disciplines_by_interventions_labels = res.data.labels;
      disciplines_by_interventions_values = res.data.values;
      maxInterventions = Math.max(...disciplines_by_interventions_values);
      loadedInterventions.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
}
const date = ref(null);
const startDate = new Date();
const endDate = new Date(new Date().setDate(startDate.getDate() + 7));

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

let disciplines = ref([]);

onMounted(async () => {
  await axiosIns
    .get("/disiplines")
    .then((res) => {
      sites.value = res.data.sites;
      cycles.value = res.data.cycles;
      niveaux.value = res.data.niveaux;
      actions.value = res.data.actions;
      interventions.value = res.data.interventions;
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
});
watch(
  async () => cycle.value,
  async (first, second) => {
    if (first && second && first != second) {
      let link = "/filterNiveauByCycle_?cycle=" + cycle.value;
      await axiosIns
        .get(link)
        .then((res) => {
          loaded.value = false;
          niveaux.value = [];
          niveaux.value = res.data.niveaux;
          niveau.value = null;
          loaded.value = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
);

const searchDisciplines = async () => {
  disciplines.value = [];
  disciplines_actions.value = [];
  disciplines_actions_labels.value = [];
  prof_disciplines_actions.value = [];
  prof_disciplines_actions_labels.value = [];

  let link =
    "/disiplines?button_click&niveau=" +
    niveau.value +
    "&cycle=" +
    cycle.value +
    "&date=" +
    date.value +
    "&site=" +
    site.value;
  axiosIns
    .get(link)
    .then((res) => {
      loaded.value = false;
      disciplines.value = res.data.classes_labels;
      series.value[0].data = res.data.disciplines;
      disciplines_actions.value = res.data.disciplines_by_actions.values;
      disciplines_actions_labels.value = res.data.disciplines_by_actions.labels;
      prof_disciplines_actions.value = res.data.disciplines_by_prof.values;
      prof_disciplines_actions_labels.value =
        res.data.disciplines_by_prof.labels;
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12" md="8">
        <!-- <VCard style="height: 100px; padding: 10px" class="mb-3 sticky-nav"> -->
        <VRow>
          <!-- 👉 Congratulation John -->
          <VCol v-if="loaded && sites && sites.length > 1" cols="12" md="4">
            <VSelect v-model="site" :items="sites" label="Sites" />
          </VCol>
          <VCol v-if="loaded" cols="12" md="4">
            <VSelect v-model="cycle" :items="cycles" label="Cycles" />
          </VCol>
          <VCol v-if="loaded" cols="12" md="4">
            <VSelect v-model="niveau" :items="niveaux" label="Niveaux" />
          </VCol>
        </VRow>
        <!-- </VCard> -->
      </VCol>
      <VCol v-if="loaded" cols="12" md="2">
        <VueDatePicker v-model="date" range :preset-ranges="presetRanges">
          <template #yearly="{ label, range, presetDateRange }">
            <span @click="presetDateRange(range)">{{ label }}</span>
          </template>
        </VueDatePicker>
      </VCol>
      <VCol v-if="loaded" cols="12" md="2">
        <VBtn style="width: 100%" @click="searchDisciplines"> Rechercher </VBtn>
      </VCol>
    </VRow>

    <VRow>
      <!-- 👉 Data Science -->
      <VCol v-if="loaded" cols="12" md="12" style="position: relative">
        <VCard>
          <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
            <VCardTitle>Répartition par classes </VCardTitle>
          </VCardItem>
          <VCardText>
            <ApexNoteChartDataScience
              v-if="disciplines.length > 0"
              :series="series"
              :labels="disciplines"
            />
            <div v-else style="height: 382px">
              <imgEmpty></imgEmpty>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol v-if="loaded" cols="12" md="6">
        <VCard>
          <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
            <VCardTitle>Répartition par enseignant </VCardTitle>
          </VCardItem>
          <VCardText>
            <DisciplinesChartJsHorizontalBarChart
              v-if="prof_disciplines_actions.length > 0"
              :colors="chartJsCustomColors"
              :disciplines="prof_disciplines_actions"
              :labels="prof_disciplines_actions_labels"
            />
            <div v-else style="height: 382px">
              <imgEmpty></imgEmpty>
            </div>
          </VCardText>
        </VCard>
      </VCol>
      <VCol v-if="loaded" cols="12" md="6">
        <VCard>
          <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
            <VCardTitle>Répartition par Action de discipline </VCardTitle>
          </VCardItem>
          <VCardText>
            <DisciplinesChartJsHorizontalBarChart
              v-if="disciplines_actions.length > 0"
              :colors="chartJsCustomColors"
              :disciplines="disciplines_actions"
              :labels="disciplines_actions_labels"
            />
            <div v-else style="height: 382px">
              <imgEmpty></imgEmpty>
            </div>
          </VCardText>
        </VCard>
      </VCol>
      <!-- 👉 Statistics Line Chart  -->
      <VCol v-if="loaded" cols="6">
        <VCard title="Disciplines par actions de disciplines">
          <VCol v-if="loaded" cols="6" md="6" style="margin-left: auto">
            <!-- @change="changeData" -->
            <VSelect
              v-model="action"
              :items="actions"
              label="Actions"
              @update:modelValue="changeDisciplinesData"
            />
          </VCol>
          <VCardText>
            <DisciplinesBarsChart
              v-if="loadedActions && disciplines_by_actions_labels.length > 0"
              :colors="chartJsCustomColors"
              :labels="disciplines_by_actions_labels"
              :values="disciplines_by_actions_values"
              :max="max"
            />
            <div v-else style="height: 382px">
              <imgEmpty></imgEmpty>
            </div>
          </VCardText>
        </VCard>
      </VCol>
      <!-- 👉 Statistics Line Chart  -->
      <VCol v-if="loaded" cols="6">
        <VCard title="Disciplines par interventions">
          <VCol v-if="loaded" cols="6" md="6" style="margin-left: auto">
            <!-- @change="changeData" -->
            <VSelect
              v-model="intervention"
              :items="interventions"
              label="Interventions"
              @update:modelValue="changeDisciplinesDataByIntervention"
            />
          </VCol>
          <VCardText>
            <DisciplinesBarsChart
              v-if="
                loadedInterventions &&
                disciplines_by_interventions_labels.length > 0
              "
              :colors="chartJsCustomColors"
              :labels="disciplines_by_interventions_labels"
              :values="disciplines_by_interventions_values"
              :max="maxInterventions"
            />
            <div v-else style="height: 382px">
              <imgEmpty></imgEmpty>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
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
