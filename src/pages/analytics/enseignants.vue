<template>
  <div>
    <VCard
      style="z-index: 1; overflow: inherit; height: 100px; padding: 10px"
      class="mb-3 sticky-nav"
    >
      <VRow class="align-items-center" style="justify-content: end">
        <VCol v-if="loaded" cols="12" md="2">
          <VSelect
            v-model="site"
            :items="sites"
            item-title="label"
            item-value="id"
            label="Sites"
          />
        </VCol>
        <VCol cols="12" md="4" sm="6" lg="3" v-if="loaded">
          <VueDatePicker v-model="date" range :preset-ranges="presetRanges">
            <template #yearly="{ label, range, presetDateRange }">
              <span @click="presetDateRange(range)">{{ label }}</span>
            </template>
          </VueDatePicker>
        </VCol>
        <VCol v-if="loaded" cols="12" md="2">
          <VBtn style="width: 100%" @click="searchEnseignantsActivities">
            Rechercher
          </VBtn>
        </VCol>
      </VRow>
    </VCard>

    <VCard v-if="loaded" style="padding: 10px" class="mb-3 sticky-nav mt-3">
      <VRow v-if="isLoading" class="align-items-center">
        <VCol cols="12" lg="12" style="position: relative; height: 50vh">
          <div class="loading">
            <div class="effect-1 effects"></div>
            <div class="effect-2 effects"></div>
            <div class="effect-3 effects"></div>
          </div>
        </VCol>
      </VRow>

      <VTable
        v-if="!isLoading"
        class="text-no-wrap invoice-list-table"
        style="max-height: 590px; overflow-y: auto"
      >
        <thead class="text-uppercase">
          <tr>
            <th
              v-for="(title, index) in activities.header"
              :key="index"
              scope="col"
              class="text-center"
            >
              {{ title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(enseignant, index) in activities.body" :key="index">
            <td
              style="text-align: center"
              v-for="(value, key) in enseignant"
              :key="key"
            >
              <span class="data-span" v-html="value"> </span>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="activities.body.length == 0">
          <tr>
            <td colspan="8" class="text-center text-body-1">
              Aucune donnée disponible, essayez de rechercher avec une période
            </td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>
  </div>
</template>

<script setup>
import axiosIns from "@/plugins/axios";

import { endOfMonth, startOfMonth, subMonths } from "date-fns";
import { ref } from "vue";
import { useTheme } from "vuetify";

let loaded = ref(false);

let sites = ref([]);
let site = ref(null);

let activities = ref({ header: [], body: [] });

const date = ref(null);
const startDate = new Date();
const endDate = new Date(new Date().setDate(startDate.getDate() + 7));

let isLoading = ref(false);

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
  await searchEnseignantsActivities();
});
const vuetifyTheme = useTheme();
const currentTheme = vuetifyTheme.current.value.colors;

// watch(cycle, async (newCycle, oldCycle) => {
//   let link = "/filterNiveau?cycle=" + newCycle;
//   await axiosIns
//     .get(link)
//     .then((res) => {
//       niveaux.value = res.data.niveaux;
//       niveau.value = niveaux[0];
//       loaded.value = true;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

let searchEnseignantsActivities = async () => {
  isLoading.value = true;
  await axiosIns
    .get("/enseignantsActivities", {
      params: {
        site: site.value,
        date: date.value,
      },
    })
    .then((res) => {
      activities.value = res.data.activities;
      sites.value = res.data.sites;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loaded.value = true;
      isLoading.value = false;
    });
};
</script>

<style lang="scss" scoped>
@use "@core/scss/template/libs/apex-chart.scss";

*::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 30%);
}

*::-webkit-scrollbar {
  background-color: #f5f5f5;
  inline-size: 6px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #e9e9e9;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 30%);
}
</style>
