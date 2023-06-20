<script setup>
import axiosIns from "@/plugins/axios";
import CrmInscriptions from "@/views/analytics/crm/CrmInscriptions.vue";
import CrmInscriptionsTotal from "@/views/analytics/crm/CrmInscriptionsTotal.vue";
import CrmSalesAreaCharts from "@/views/analytics/crm/CrmSalesAreaCharts.vue";
import CrmSalesRespoAreaCharts from "@/views/analytics/crm/CrmSalesRespoAreaCharts.vue";
import ApexChartDataScience from "@/views/charts/apex-chart/ApexChartDataScience.vue";

let crmAppeles = 0;
let crmEntretienseins = 0;
let crmVisites = 0;
let prospects = 0;
let crmTestAdmission = 0;
let promotion = "";
let loaded = ref(false);
let statistics = [];
let admissionData = [];
let series = [];

onMounted(async () => {
  await axiosIns
    .get("/getCrmData")
    .then((res) => {
      promotion = res.data.promotion;
      crmTestAdmission =
        res.data.test_admission_by_result.positif +
        res.data.test_admission_by_result.negative +
        res.data.test_admission_by_result.enattente;
      crmAppeles = res.data.count_appeles;
      crmVisites = res.data.count_visites;
      prospects = res.data.count_prospects;
      crmEntretienseins = res.data.count_entretiens;

      statistics.push(
        {
          title: "Appels",
          stats: crmAppeles,
          icon: "tabler-chart-pie-2",
          color: "primary",
        },
        {
          title: "Entretiens",
          stats: crmEntretienseins,
          icon: "tabler-users",
          color: "info",
        },
        {
          title: "Visites",
          stats: crmVisites,
          icon: "tabler-shopping-cart",
          color: "error",
        },
        {
          title: "Test d'admission",
          stats: crmTestAdmission,
          icon: "tabler-currency-dollar",
          color: "success",
        }
      );
      for (let i = 0; i < res.data.test_admissions_perday.length; i++) {
        admissionData.push(res.data.test_admissions_perday[i]);
      }

      series.push({
        name: "Test d'admission",
        data: admissionData,
      });
    })
    .catch((err) => {});
  loaded.value = true;
});

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
</script>

<template>
  <VRow>
    <!-- 👉 Congratulation John -->
    <VCol cols="12" md="5" lg="4">
      <CrmInscriptions
        v-if="loaded"
        pagename="Total des prospects"
        :promotion="promotion"
        :ins-count="prospects"
      />
    </VCol>

    <!-- 👉 Ecommerce Transition -->
    <VCol v-if="loaded" cols="12" md="7" lg="8">
      <CrmInscriptionsTotal class="h-100" :statistics="statistics" />
    </VCol>

    <VCol v-if="loaded" cols="12" md="6">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Tests d'admission</VCardTitle>
        </VCardItem>
        <VCardText>
          <CrmSalesAreaCharts :colors="chartJsCustomColors" />
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded" cols="12" md="6">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Tests d'admission par responsables</VCardTitle>
        </VCardItem>
        <VCardText>
          <CrmSalesRespoAreaCharts :colors="chartJsCustomColors" />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Data Science -->
    <VCol v-if="loaded" cols="12">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Plannification des tests d'admission</VCardTitle>
        </VCardItem>

        <VCardText>
          <ApexChartDataScience :series="series" />
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
</style>
