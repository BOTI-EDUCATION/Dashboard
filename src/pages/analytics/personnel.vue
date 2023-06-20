<!-- eslint-disable sonarjs/cognitive-complexity -->

<script setup>
import axiosIns from "@/plugins/axios";
import CommunicationHead from "@/views/analytics/communication/CommunicationHead.vue";
import PersonnelDonutChart from "@/views/analytics/personnel/PersonnelDonutChart.vue";

let insCount = 0;
let teachersCount = 0;
let classesCount = 0;
let teamCount = 0;
let teamAvgAge = 0;
let inscriptionsCicleValues = [];
let inscriptionsCicleLabels = [];
let inscriptionsGenderValues = [];
let inscriptionsGenderLabels = [];
let inscriptionsSiteLabels = [];
let inscriptionsSiteValues = [];
let ensUnitesLabels = [];
let ensUnitesValues = [];
let ensGenderLabels = [];
let ensGenderValues = [];
let ensCycleLabels = [];
let ensCycleValues = [];
let teamFunctionLabels = [];
let teamFunctionValues = [];
let hideInsbySite = ref(false);
let promotion = ref("");
let cols = ref(4);
const loaded = ref(false);

onMounted(async () => {
  await axiosIns
    .get("structurePersonnel/")
    .then((res) => {
      insCount = res.data.inscriptions;
      classesCount = res.data.classes;
      teachersCount = res.data.enseignants;
      teamCount = res.data.team;
      promotion.value = res.data.promotion;
      teamAvgAge = Math.floor(res.data.team_by_age[0].age);
      inscriptionsGenderLabels.push("GARCONS", "FILLES");
      inscriptionsGenderValues.push(
        Number(res.data.ins_by_gender[1].count_eleves),
        Number(res.data.ins_by_gender[0].count_eleves)
      );
      for (let i = 0; i < res.data.ins_by_site.length; i++) {
        if (res.data.ins_by_site[i].site) {
          inscriptionsSiteLabels.push(res.data.ins_by_site[i].site);
        } else {
          inscriptionsSiteLabels.push("No Site");
        }
        inscriptionsSiteValues.push(
          Number(res.data.ins_by_site[i].count_eleves)
        );
      }
      if (inscriptionsSiteLabels.length == 1) {
        hideInsbySite.value = true;
        cols.value = 6;
      }
      ensGenderLabels.push("Homme", "Feminin");
      ensGenderValues.push(
        Number(res.data.ens_by_gender[1].count_ens),
        Number(res.data.ens_by_gender[0].count_ens)
      );
      for (let i = 0; i < res.data.ens_by_unites.length; i++) {
        if (res.data.ens_by_unites[i].label) {
          ensUnitesLabels.push(res.data.ens_by_unites[i].label);
        } else {
          ensUnitesLabels.push("No genre");
        }
        ensUnitesValues.push(Number(res.data.ens_by_unites[i].count_ens));
      }
      for (let i = 0; i < res.data.ens_by_cycles.length; i++) {
        if (res.data.ens_by_cycles[i].cycle) {
          ensCycleLabels.push(res.data.ens_by_cycles[i].cycle);
        } else {
          ensCycleLabels.push("No cycle");
        }
        ensCycleValues.push(Number(res.data.ens_by_cycles[i].ens_count));
      }
      for (let i = 0; i < res.data.team_by_function.length; i++) {
        if (res.data.team_by_function[i].function) {
          teamFunctionLabels.push(res.data.team_by_function[i].function);
        } else {
          teamFunctionLabels.push("no function");
        }
        teamFunctionValues.push(Number(res.data.team_by_function[i].ens_count));
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  await axiosIns
    .get("getInscriptionsByCycles_/")
    .then((res) => {
      inscriptionsCicleValues.push(
        res.data.cycles[0].inscriptions + res.data.cycles[0].reinscriptions,
        res.data.cycles[1].inscriptions + res.data.cycles[1].reinscriptions,
        res.data.cycles[2].inscriptions + res.data.cycles[2].reinscriptions,
        res.data.cycles[3].inscriptions + res.data.cycles[3].reinscriptions
      );
      inscriptionsCicleLabels.push(
        "Préscolaire",
        "Primaire",
        "Collége",
        "Lycée"
      );
    })
    .catch((err) => {
      console.log(err);
    });
  loaded.value = true;
});

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
    icon: "tabler-archive",
    color: "#4caf50",
    title: "Total Sales",
    subTitle: "Last week",
    stat: "$4,673",
    change: "+25.2%",
  },
  {
    icon: "tabler-chart-pie-2",
    color: "error",
    title: "Total Sales",
    subTitle: "Last week",
    stat: "$4,673",
    change: "+25.2%",
  },
  {
    icon: "tabler:align-box-bottom-right",
    color: "#03a9f4",
    title: "Total Profit",
    subTitle: "Last week",
    stat: "1.28k",
    change: "-12.2%",
  },
];

let mainColors = {
  series1: "#CAE7E3",
  series2: "#B2B2B2",
  series3: "#EEB8C5",
  series4: "#DCDBD9",
  series5: "#FEC7BC",
  series6: "#FBECDB",
  series7: "#F3CBBD",
  series8: "#90CDC3",
  series9: "#AF8C72",
  series10: "#938F43",
  series11: "#C6AC85",
  series12: "#E2E5CB",
  series13: "#D9C2BD",
  series14: "#A2C4C6",
  series15: "#82B2B8",
  series16: "#874741",
  series17: "#CA9C95",
  series18: "#40393E",
  series19: "#E5E4E5",
  series20: "#897C87",
  series21: "#46302B",
  series22: "#76504E",
  series23: "#D3CCCA",
  series24: "#A37E7E",
  series25: "#86736C",
};
let sexColors = {
  series1: "#CAE7E3",
  series2: "#eeb8c5",
};
</script>

<template>
  <VRow>
    <!-- 👉 Congratulation John -->
    <VCol v-if="loaded" cols="12" lg="3" md="3" sm="6">
      <CommunicationHead
        cardname="Inscriptions"
        :promotion="promotion"
        :data="insCount"
        :color="simpleStatisticsDemoCards[0].color"
        :icon="simpleStatisticsDemoCards[0].icon"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="3" sm="6" lg="3">
      <CommunicationHead
        cardname="Classes"
        :promotion="promotion"
        :data="classesCount"
        :color="simpleStatisticsDemoCards[1].color"
        :icon="simpleStatisticsDemoCards[1].icon"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="3" sm="6" lg="3">
      <CommunicationHead
        cardname="Enseignants"
        :data="teachersCount"
        :color="simpleStatisticsDemoCards[2].color"
        :icon="simpleStatisticsDemoCards[2].icon"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="3" sm="6" lg="3">
      <CommunicationHead
        cardname="Equipe administrative"
        :data="teamCount"
        :color="simpleStatisticsDemoCards[3].color"
        :icon="simpleStatisticsDemoCards[3].icon"
      />
    </VCol>
    <!-- 👉 Latest Statistics -->
    <VCol v-if="loaded" cols="12" :md="cols">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Inscriptions par Cycle</VCardTitle>
        </VCardItem>
        <VCardText>
          <PersonnelDonutChart
            :colors="mainColors"
            :series-values="inscriptionsCicleValues"
            :series-labels="inscriptionsCicleLabels"
          />
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded" cols="12" :md="cols">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle> Inscriptions par genre ( FILLES / GARCONS ) </VCardTitle>
        </VCardItem>
        <VCardText>
          <PersonnelDonutChart
            :colors="sexColors"
            :series-values="inscriptionsGenderValues"
            :series-labels="inscriptionsGenderLabels"
          />
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded && !hideInsbySite" cols="12" md="4">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Inscriptions par Site</VCardTitle>
        </VCardItem>
        <VCardText>
          <PersonnelDonutChart
            :colors="mainColors"
            :series-values="inscriptionsSiteValues"
            :series-labels="inscriptionsSiteLabels"
          />
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded" cols="12" md="12">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle> Enseignants par unités </VCardTitle>
        </VCardItem>
        <VCardText>
          <PersonnelDonutChart
            :colors="mainColors"
            :series-values="ensUnitesValues"
            :series-labels="ensUnitesLabels"
          />
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded" cols="12" md="6">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle> Enseignants par cycles </VCardTitle>
        </VCardItem>
        <VCardText>
          <PersonnelDonutChart
            :colors="mainColors"
            :series-values="ensCycleValues"
            :series-labels="ensCycleLabels"
          />
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded" cols="12" md="6">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle> Enseignants par genre (H/F) </VCardTitle>
        </VCardItem>
        <VCardText>
          <PersonnelDonutChart
            :colors="sexColors"
            :series-values="ensGenderValues"
            :series-labels="ensGenderLabels"
          />
        </VCardText>
      </VCard>
    </VCol>
    <VCol v-if="loaded" cols="12" lg="4" md="4" sm="6">
      <CommunicationHead
        cardname="MEMBRES"
        :data="teamCount"
        :color="simpleStatisticsDemoCards[0].color"
        :icon="simpleStatisticsDemoCards[0].icon"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="4" sm="6" lg="4">
      <CommunicationHead
        cardname="AGE MOYEN"
        :data="teamAvgAge + ' ANS'"
        :color="simpleStatisticsDemoCards[1].color"
        :icon="simpleStatisticsDemoCards[1].icon"
      />
    </VCol>

    <VCol v-if="loaded" cols="12" md="4">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle> EQUIPE PAR FONCTION </VCardTitle>
        </VCardItem>
        <VCardText>
          <PersonnelDonutChart
            :colors="mainColors"
            :series-values="teamFunctionValues"
            :series-labels="teamFunctionLabels"
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

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";

.flat-picker-custom-style {
  block-size: 40px;
}

.flatpickr-input {
  block-size: 40px;
}
</style>
