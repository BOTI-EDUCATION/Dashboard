<script setup>
import imgEmpty from "@/pages/components/imgEmpty.vue";
import axiosIns from "@/plugins/axios";
import CommunicationHead from "@/views/analytics/communication/CommunicationHead.vue";
import ClassesDemandesBarChart from "@/views/analytics/helpdesk/ClassesDemandesBarChart.vue";
import HelpdeskDonutChart from "@/views/analytics/helpdesk/HelpdeskDonutChart.vue";
import { endOfMonth, startOfMonth, subMonths } from "date-fns";

let demandes = 0;
let closed = 0;
let not_treated = 0;
let not_launched = 0;

let demandes_by_cycles_labels = [];
let demandes_by_cycles_values = [];

let demandes_by_niveaux_labels = [];
let demandes_by_niveaux_values = [];

let demandes_by_nature_labels = [];
let demandes_by_nature_values = [];

const demandes_by_classes_labels = ref([]);
const demandes_by_classes_traited = ref([]);
const demandes_by_classes_in_progress = ref([]);

const loaded = ref(false);

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

onMounted(async () => {
  await axiosIns
    .get("helpdesk/")
    .then((res) => {
      demandes = res.data.demandes;
      not_treated = res.data.not_traited;
      not_launched = res.data.not_launched;
      closed = res.data.closed;

      demandes_by_cycles_labels = [];
      demandes_by_cycles_values = [];

      demandes_by_nature_labels = [];
      demandes_by_nature_values = [];

      demandes_by_niveaux_labels = [];
      demandes_by_niveaux_values = [];

      demandes_by_cycles_labels = res.data.demandes_by_cycles.labels;
      demandes_by_cycles_values = res.data.demandes_by_cycles.values;

      demandes_by_nature_labels = res.data.demandes_by_natures.labels;
      demandes_by_nature_values = res.data.demandes_by_natures.values;

      demandes_by_niveaux_labels = res.data.demandes_by_niveaux.labels;
      demandes_by_niveaux_values = res.data.demandes_by_niveaux.values;

      demandes_by_classes_labels.value = res.data.demandes_by_classes.labels;
      demandes_by_classes_traited.value = res.data.demandes_by_classes.traited;
      demandes_by_classes_in_progress.value =
        res.data.demandes_by_classes.in_progress;

      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
});

watch(
  async () => date.value,
  async (first, second) => {
    if (first && second && first != second) {
      loaded.value = false;
      await axiosIns
        .get("helpdesk?date=" + date.value)
        .then((res) => {
          demandes = res.data.demandes;
          not_treated = res.data.not_traited;
          not_launched = res.data.not_launched;
          closed = res.data.closed;

          demandes_by_cycles_labels = [];
          demandes_by_cycles_values = [];

          demandes_by_nature_labels = [];
          demandes_by_nature_values = [];

          demandes_by_niveaux_labels = [];
          demandes_by_niveaux_values = [];

          demandes_by_classes_labels.value = [];
          demandes_by_classes_traited.value = [];
          demandes_by_classes_in_progress.value = [];

          demandes_by_cycles_labels = res.data.demandes_by_cycles.labels;
          demandes_by_cycles_values = res.data.demandes_by_cycles.values;

          demandes_by_nature_labels = res.data.demandes_by_natures.labels;
          demandes_by_nature_values = res.data.demandes_by_natures.values;

          demandes_by_niveaux_labels = res.data.demandes_by_niveaux.labels;
          demandes_by_niveaux_values = res.data.demandes_by_niveaux.values;

          demandes_by_classes_labels.value =
            res.data.demandes_by_classes.labels;
          demandes_by_classes_traited.value =
            res.data.demandes_by_classes.traited;
          demandes_by_classes_in_progress.value =
            res.data.demandes_by_classes.in_progress;

          loaded.value = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
);

let simpleStatisticsDemoCards = [
  {
    icon: "tabler-users",
    color: "#3f51b5",
    title: "Total Sales",
    subTitle: "Last week",
    stat: "$4,673",
    change: "+25.2%",
  },
  {
    icon: "tabler-chart-pie-2",
    color: "#4caf50",
    title: "Total Sales",
    subTitle: "Last week",
    stat: "$4,673",
    change: "+25.2%",
  },
  {
    icon: "tabler:align-box-bottom-right",
    color: "error",
    title: "Total Sales",
    subTitle: "Last week",
    stat: "$4,673",
    change: "+25.2%",
  },
  {
    icon: "tabler-archive",
    color: "#03a9f4",
    title: "Total Profit",
    subTitle: "Last week",
    stat: "1.28k",
    change: "-12.2%",
  },
];
const dateCycle = ref(new Date().toISOString().slice(0, 10));
const dateCycleTo = ref(new Date().toISOString().slice(0, 10));

let changeDateCycle = async () => {
  // await axiosIns
  //   .get("helpdesk?date=" + dateCycle.value)
  //   .then((res) => {
  //     loaded.value = false;
  //     loaded.value = true;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
</script>

<template>
  <VRow>
    <VCol cols="12" md="12" class="d-flex justify-end">
      <VCol cols="12" md="4" sm="6" lg="3" v-if="loaded">
        <div class="date-picker-wrapper d-flex" v-if="false">
          <AppDateTimePicker
            v-model="dateCycle"
            range
            multiple
            picker-date
            prepend-inner-icon="tabler-calendar"
            density="compact"
            :config="{ position: 'auto right' }"
            @change="changeDateCycle"
          />
        </div>
        <VueDatePicker v-model="date" range :preset-ranges="presetRanges">
          <template #yearly="{ label, range, presetDateRange }">
            <span @click="presetDateRange(range)">{{ label }}</span>
          </template>
        </VueDatePicker>
      </VCol>
    </VCol>
    <!-- 👉 Congratulation John -->
    <VCol v-if="loaded" cols="12" lg="3" md="3" sm="6">
      <CommunicationHead
        cardname="Toutes les demandes"
        :data="demandes"
        :color="simpleStatisticsDemoCards[0].color"
        :icon="simpleStatisticsDemoCards[0].icon"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="3" sm="6" lg="3">
      <CommunicationHead
        cardname="Pas encore lancée"
        :data="not_launched"
        :color="simpleStatisticsDemoCards[1].color"
        :icon="simpleStatisticsDemoCards[1].icon"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="3" sm="6" lg="3">
      <CommunicationHead
        cardname="En cours de traitement"
        :data="not_treated"
        :color="simpleStatisticsDemoCards[2].color"
        :icon="simpleStatisticsDemoCards[2].icon"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="3" sm="6" lg="3">
      <CommunicationHead
        cardname="Cloturée"
        :data="closed"
        :color="simpleStatisticsDemoCards[3].color"
        :icon="simpleStatisticsDemoCards[3].icon"
      />
    </VCol>
    <!-- 👉 Latest Statistics -->
    <VCol v-if="loaded" cols="12" md="4">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Demandes par Cycle</VCardTitle>
        </VCardItem>
        <VCardText>
          <HelpdeskDonutChart
            v-if="demandes_by_cycles_labels.length > 0"
            :colors="chartJsCustomColors"
            :values="demandes_by_cycles_values"
            :labels="demandes_by_cycles_labels"
          />
          <div v-else style="height: 382px">
            <imgEmpty></imgEmpty>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded" cols="12" md="4">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Demandes par niveau</VCardTitle>
        </VCardItem>
        <VCardText>
          <HelpdeskDonutChart
            v-if="demandes_by_niveaux_labels.length > 0"
            :colors="chartJsCustomColors"
            :values="demandes_by_niveaux_values"
            :labels="demandes_by_niveaux_labels"
          />
          <div v-else style="height: 382px">
            <imgEmpty></imgEmpty>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded" cols="12" md="4">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Demandes par nature</VCardTitle>
        </VCardItem>
        <VCardText>
          <HelpdeskDonutChart
            v-if="demandes_by_nature_labels.length > 0"
            :colors="chartJsCustomColors"
            :values="demandes_by_nature_values"
            :labels="demandes_by_nature_labels"
          />
          <div v-else style="height: 382px">
            <imgEmpty></imgEmpty>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <!-- 👉 Balance Horizontal Bar Chart -->
    <VCol
      v-if="
        loaded &&
        demandes_by_classes_labels.length > 0 &&
        demandes_by_classes_traited.length > 0 &&
        demandes_by_classes_in_progress.length > 0
      "
      cols="12"
      md="12"
    >
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Demandes par classes</VCardTitle>
        </VCardItem>
        <VCardText>
          <ClassesDemandesBarChart
            v-if="
              loaded &&
              demandes_by_classes_labels.length > 0 &&
              demandes_by_classes_traited.length > 0 &&
              demandes_by_classes_in_progress.length > 0
            "
            :traited="demandes_by_classes_traited"
            :in_progress="demandes_by_classes_in_progress"
            :labels="demandes_by_classes_labels"
            :colors="chartJsCustomColors"
            :loaded="loaded"
          />
          <div v-else style="height: 382px">
            <imgEmpty></imgEmpty>
          </div>
        </VCardText>
      </VCard>
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
