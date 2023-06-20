<script setup>
import axiosIns from "@/plugins/axios";
import CrmInsByPeriodHor from "@/views/analytics/crm/CrmInsByPeriodHor.vue";
import InsByLevelChartJsHorizontalBarChart from "@/views/analytics/inscriptions/InsByLevelChartJsHorizontalBarChart.vue";
import InsChartJsBarChart from "@/views/analytics/inscriptions/InsChartJsBarChart.vue";
import InsChartJsPolarAreaChart from "@/views/analytics/inscriptions/InsChartJsPolarAreaChart.vue";
import InsReinsChartJsHorizontalBarChart from "@/views/analytics/inscriptions/InsReinsChartJsHorizontalBarChart.vue";
import InsReinsChartJsVerticalBarChart from "@/views/analytics/inscriptions/InsReinsChartJsVerticalBarChart.vue";
import InsReinsComparaison from "@/views/analytics/inscriptions/InsReinsComparaison.vue";
import InscriptionsCountCharts from "@/views/analytics/inscriptions/InscriptionsCountCharts.vue";
import ProspectsCountCharts from "@/views/analytics/inscriptions/ProspectsCountCharts.vue";
import ReinsInsTotalCountCharts from "@/views/analytics/inscriptions/ReinsInsTotalCountCharts.vue";
import ReinscriptionsCountCharts from "@/views/analytics/inscriptions/ReinscriptionsCountCharts.vue";

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

const inscriptionsreinscriptionsCount = ref(0);
const promotion = ref("");
const reinscriptionsPourcentage = ref(0);
const last_promotion = ref("");
const inscriptionsCount = ref(0);
const loaded = ref(false);
const reinscriptionsCount = ref(0);
const reinscriptionsTPourcentage = ref(0);
const pourcentage = ref("");
const prospects = ref(0);
let data_anl = [];
let seriesValues = [];
let level_reins_count = [];
let level_ins_count = [];
let level_ins_labels = [];
let levels_ins_labels = [];
let levels_ins_count = [];
let level_ins_labels_com = [""];
let ins_count_com = ref([]);
let reins_count_com = ref([]);
let sites = [];
let site = ref();
let dataSates = {
  labels: ["Inscriptions", "Ré-inscriptions"],
  datasets: [
    {
      borderWidth: 0,
      label: "Population (millions)",

      data: data_anl,
      backgroundColor: [
        chartJsCustomColors.primary,
        chartJsCustomColors.yellow,
        chartJsCustomColors.polarChartWarning,
        chartJsCustomColors.polarChartInfo,
        chartJsCustomColors.polarChartGrey,
        chartJsCustomColors.polarChartGreen,
      ],
    },
  ],
};

let weeks = [];
let ins = [];
let reins = [];

watch(
  async () => site.value,
  async (first, second) => {
    if (first && second && first != second) {
      let link = "/inscriptions_?site=" + site.value;
      await axiosIns
        .get(link)
        .then((res) => {
          loaded.value = false;
          sites = [];
          data_anl = [];
          ins_count_com.value = [];
          reins_count_com.value = [];
          seriesValues = [];
          level_ins_labels = [];
          level_ins_count = [];
          level_reins_count = [];
          levels_ins_labels = [];
          levels_ins_count = [];
          weeks = [];
          ins = [];
          reins = [];
          inscriptionsCount.value = res.data.insc;
          for (let i = 0; i < res.data.sites.length; i++) {
            sites.push(res.data.sites[i].text);
          }

          for (let i = 0; i < res.data.days.length; i++) {
            weeks.push(res.data.days[i]);
            ins.push(res.data.ins[i]);
            reins.push(res.data.rein[i]);
          }
          inscriptionsreinscriptionsCount.value = res.data.total;
          promotion.value = res.data.promotion;
          reinscriptionsPourcentage.value = res.data.pourcentage;
          last_promotion.value = res.data.last_promotion;
          reinscriptionsCount.value = res.data.count_reinscriptions;
          prospects.value = res.data.leads;
          pourcentage.value = res.data.pourcentage_prospet;

          data_anl.push(res.data.insCount, res.data.reinsCount);

          dataSates = {
            labels: ["Inscriptions", "Ré-inscriptions"],
            datasets: [
              {
                borderWidth: 0,
                label: "Population (millions)",

                data: data_anl,
                backgroundColor: [
                  chartJsCustomColors.primary,
                  chartJsCustomColors.yellow,
                  chartJsCustomColors.polarChartWarning,
                  chartJsCustomColors.polarChartInfo,
                  chartJsCustomColors.polarChartGrey,
                  chartJsCustomColors.polarChartGreen,
                ],
              },
            ],
          };
          ins_count_com.value.push(res.data.insLastYearCount);
          reins_count_com.value.push(res.data.reinsCount);
          seriesValues.push(
            res.data.cycles[0].inscriptions + res.data.cycles[0].reinscriptions
          );
          seriesValues.push(
            res.data.cycles[1].inscriptions + res.data.cycles[1].reinscriptions
          );
          seriesValues.push(
            res.data.cycles[2].inscriptions + res.data.cycles[2].reinscriptions
          );
          seriesValues.push(
            res.data.cycles[3].inscriptions + res.data.cycles[3].reinscriptions
          );
          for (let i = 0; i < res.data.ins_level.length; i++) {
            level_ins_labels.push(res.data.ins_level[i].niveau_label);
            level_ins_count.push(res.data.ins_level[i].count_ins);
          }
          for (let i = 0; i < res.data.reins_level.length; i++) {
            level_reins_count.push(res.data.reins_level[i].count_ins);
          }
          for (let i = 0; i < res.data.ins_level.length; i++) {
            levels_ins_labels.push(res.data.ins_level[i].niveau_label);
            levels_ins_count.push(
              Number(
                res.data.ins_level[i] ? res.data.ins_level[i].count_ins : 0
              ) +
                Number(
                  res.data.reins_level[i]
                    ? res.data.reins_level[i].count_ins
                    : 0
                )
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
      loaded.value = true;
    }
  }
);

onMounted(async () => {
  await axiosIns
    .get("inscriptions_/")
    .then((res) => {
      inscriptionsCount.value = res.data.insc;
      sites.value = [];
      for (let i = 0; i < res.data.sites.length; i++) {
        sites.push(res.data.sites[i].text);
      }

      for (let i = 0; i < res.data.days.length; i++) {
        weeks.push(res.data.days[i]);
        ins.push(res.data.ins[i]);
        reins.push(res.data.rein[i]);
      }
      inscriptionsreinscriptionsCount.value = res.data.total;
      promotion.value = res.data.promotion;
      reinscriptionsPourcentage.value = res.data.pourcentage;
      last_promotion.value = res.data.last_promotion;
      reinscriptionsCount.value = res.data.count_reinscriptions;
      prospects.value = res.data.leads;
      pourcentage.value = res.data.pourcentage_prospet;
      data_anl.push(res.data.insCount, res.data.reinsCount);
      ins_count_com.value.push(res.data.insLastYearCount);
      reins_count_com.value.push(res.data.reinsCount);
      seriesValues.push(
        res.data.cycles[0].inscriptions + res.data.cycles[0].reinscriptions
      );
      seriesValues.push(
        res.data.cycles[1].inscriptions + res.data.cycles[1].reinscriptions
      );
      seriesValues.push(
        res.data.cycles[2].inscriptions + res.data.cycles[2].reinscriptions
      );
      seriesValues.push(
        res.data.cycles[3].inscriptions + res.data.cycles[3].reinscriptions
      );
      for (let i = 0; i < res.data.ins_level.length; i++) {
        level_ins_labels.push(res.data.ins_level[i].niveau_label);
        level_ins_count.push(res.data.ins_level[i].count_ins);
      }
      for (let i = 0; i < res.data.reins_level.length; i++) {
        level_reins_count.push(res.data.reins_level[i].count_ins);
      }
      for (let i = 0; i < res.data.ins_level.length; i++) {
        levels_ins_labels.push(res.data.ins_level[i].niveau_label);
        levels_ins_count.push(
          Number(res.data.ins_level[i] ? res.data.ins_level[i].count_ins : 0) +
            Number(
              res.data.reins_level[i] ? res.data.reins_level[i].count_ins : 0
            )
        );
      }
      site.value = sites[0];
    })
    .catch((err) => {
      console.log(err);
    });
  loaded.value = true;
});

const setData = (res) => {
  inscriptionsCount.value = res.data.insc;
  sites.value = [];
  for (let i = 0; i < res.data.sites.length; i++) {
    sites.push(res.data.sites[i].text);
  }

  for (let i = 0; i < res.data.days.length; i++) {
    weeks.push(res.data.days[i]);
    ins.push(res.data.ins[i]);
    reins.push(res.data.rein[i]);
  }
  inscriptionsreinscriptionsCount.value = res.data.total;
  promotion.value = res.data.promotion;
  reinscriptionsPourcentage.value = res.data.pourcentage;
  last_promotion.value = res.data.last_promotion;
  reinscriptionsCount.value = res.data.count_reinscriptions;
  prospects.value = res.data.leads;
  pourcentage.value = res.data.pourcentage_prospet;
  data_anl.push(res.data.insCount, res.data.reinsCount);
  ins_count_com.push(res.data.insLastYearCount);
  reins_count_com.push(res.data.reinsCount);
  seriesValues.push(
    res.data.cycles[0].inscriptions + res.data.cycles[0].reinscriptions
  );
  seriesValues.push(
    res.data.cycles[1].inscriptions + res.data.cycles[1].reinscriptions
  );
  seriesValues.push(
    res.data.cycles[2].inscriptions + res.data.cycles[2].reinscriptions
  );
  seriesValues.push(
    res.data.cycles[3].inscriptions + res.data.cycles[3].reinscriptions
  );
  for (let i = 0; i < res.data.ins_level.length; i++) {
    level_ins_labels.push(res.data.ins_level[i].niveau_label);
    level_ins_count.push(res.data.ins_level[i].count_ins);
  }
  for (let i = 0; i < res.data.reins_level.length; i++) {
    level_reins_count.push(res.data.reins_level[i].count_ins);
  }
  for (let i = 0; i < res.data.ins_level.length; i++) {
    levels_ins_labels.push(res.data.ins_level[i].niveau_label);
    levels_ins_count.push(
      Number(res.data.ins_level[i] ? res.data.ins_level[i].count_ins : 0) +
        Number(res.data.reins_level[i] ? res.data.reins_level[i].count_ins : 0)
    );
  }
};
</script>

<template>
  <VRow>
    <VCol v-if="sites.length > 1" cols="12" md="12" class="d-flex justify-end">
      <VCol v-if="loaded" cols="12" md="4" sm="6" lg="3">
        <VSelect v-model="site" :items="sites" label="Sites" />
      </VCol>
    </VCol>
    <VCol v-if="loaded" cols="12" md="4" sm="6" lg="3">
      <ReinsInsTotalCountCharts
        :inscriptionsreinscriptions-count="inscriptionsreinscriptionsCount"
        :promotion="promotion"
        :last-promotion="last_promotion"
        :reinscriptions-pourcentage="reinscriptionsPourcentage"
      />
    </VCol>
    <VCol v-if="loaded" cols="12" md="4" sm="6" lg="3">
      <InscriptionsCountCharts
        :promotion="promotion"
        :inscriptions-count="inscriptionsCount"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="4" sm="6" lg="3">
      <ReinscriptionsCountCharts
        :promotion="promotion"
        :reinscriptions-count="reinscriptionsCount"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="4" sm="6" lg="3">
      <ProspectsCountCharts
        :promotion="promotion"
        :prospects="prospects"
        :pourcentage="pourcentage"
      />
    </VCol>
    <!-- 👉 Average Skills Polar Area Chart -->
    <VCol v-if="loaded" cols="12" md="12">
      <VCard title="Comparaison des inscriptions et réinscriptions">
        <VCardText>
          <InsChartJsPolarAreaChart
            :dataanl="dataSates"
            :colors="chartJsCustomColors"
          />
        </VCardText>
      </VCard>
    </VCol>
    <!-- 👉 Latest Statistics -->
    <VCol v-if="loaded" cols="12" md="6">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Inscriptions par Cycle</VCardTitle>
        </VCardItem>
        <VCardText>
          <InsChartJsBarChart
            :colors="chartJsCustomColors"
            :series-values="seriesValues"
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Balance Horizontal Bar Chart -->
    <VCol v-if="loaded" cols="12" md="6">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Inscriptions et réinscriptions par Niveau</VCardTitle>
        </VCardItem>
        <VCardText>
          <InsReinsChartJsHorizontalBarChart
            :colors="chartJsCustomColors"
            :level-ins-count="level_ins_count"
            :level-reins-count="level_reins_count"
            :level-ins-labels="level_ins_labels"
          />
        </VCardText>
      </VCard>
    </VCol>
    <!-- 👉 Balance Horizontal Bar Chart -->
    <VCol v-if="loaded" cols="12" md="12">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Total des inscriptions par Niveau </VCardTitle>
        </VCardItem>
        <VCardText>
          <InsByLevelChartJsHorizontalBarChart
            :colors="chartJsCustomColors"
            :level-ins-count="levels_ins_count"
            :level-ins-labels="levels_ins_labels"
          />
        </VCardText>
      </VCard>
    </VCol>
    <!-- 👉 Balance Horizontal Bar Chart -->
    <VCol v-if="loaded" cols="12" md="12">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle
            >Inscriptions (22/23) et réinscriptions (23/24)</VCardTitle
          >
        </VCardItem>
        <VCardText>
          <InsReinsComparaison
            :colors="chartJsCustomColors"
            :ins-count="ins_count_com"
            :reins-count="reins_count_com"
            :level-ins-labels="level_ins_labels_com"
          />
        </VCardText>
      </VCard>
    </VCol>
    <!-- 👉 Latest Statistics -->
    <VCol v-if="loaded" cols="12" md="12">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle
            >Inscriptions & réinscriptions pour les 30 derniers
            jours</VCardTitle
          >
        </VCardItem>
        <VCardText>
          <InsReinsChartJsVerticalBarChart :colors="chartJsCustomColors" />
        </VCardText>
      </VCard>
    </VCol>
    <!-- 👉 Statistics Line Chart  -->
    <VCol v-if="loaded" cols="12">
      <VCard title="Inscriptions and réinscriptions par semaine">
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
