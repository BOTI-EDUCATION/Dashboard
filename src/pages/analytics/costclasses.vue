<template>
  <div>
    <VCard style="height: 100px; padding: 10px" class="mb-3 sticky-nav">
      <VRow class="align-items-center">
        <VCol v-if="loaded" cols="12" md="2">
          <VSelect
            v-model="site"
            :items="sites"
            item-title="label"
            item-value="id"
            label="Sites"
          />
        </VCol>

        <VCol v-if="loaded" cols="12" md="2">
          <VSelect
            @change="getNiveaux()"
            v-model="cycle"
            :items="cycles"
            item-title="label"
            item-value="id"
            label="Cycles"
          />
        </VCol>

        <VCol v-if="loaded" cols="12" md="2">
          <VSelect
            v-model="niveau"
            :items="niveaux"
            item-title="label"
            item-value="id"
            label="Niveaux"
          />
        </VCol>

        <VCol v-if="loaded" cols="12" md="2">
          <VBtn style="width: 100%" @click="searchCost"> Rechercher </VBtn>
        </VCol>
      </VRow>
    </VCard>

    <VCard v-if="loaded" style="padding: 10px" class="mb-3 sticky-nav mt-3">
      <VRow v-if="isCostLoading" class="align-items-center">
        <VCol cols="12" lg="12" style="position: relative; height: 50vh">
          <div class="loading">
            <div class="effect-1 effects"></div>
            <div class="effect-2 effects"></div>
            <div class="effect-3 effects"></div>
          </div>
        </VCol>
      </VRow>

      <VTable v-if="!isCostLoading" class="text-no-wrap invoice-list-table">
        <thead class="text-uppercase">
          <tr>
            <th
              v-for="(title, index) in costs.header"
              :key="index"
              scope="col"
              class="text-center"
            >
              {{ title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(classe, index) in costs.body" :key="index">
            <td
              style="text-align: center"
              v-for="(value, key) in classe"
              :key="key"
            >
              <span v-html="value"> </span>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="costs.body.length == 0">
          <tr>
            <td colspan="8" class="text-center text-body-1">
              Aucune donnée disponible, essayez de rechercher avec un niveau
            </td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>

    <VCard
      v-if="false && loaded && !isCostLoading"
      style="padding: 50px"
      class="mb-3 sticky-nav mt-3 p-4"
    >
      <VRow class="align-items-center p-2">
        <div class="d-flex" style="width: 100%; justify-content: space-evenly">
          <span class="font-bold"> CA mensuel = {{ caMensuel }} </span>
          <span class="font-bold">
            Total Charges salariales = {{ totalChargeSalaire }}
          </span>
        </div>
      </VRow>
    </VCard>
  </div>
</template>

<script setup>
import axiosIns from "@/plugins/axios";

import { ref } from "vue";
import { useTheme } from "vuetify";

let promotion = "";

let loaded = ref(false);

let sites = ref([]);
let site = ref(null);

let cycles = ref([]);
let cycle = ref(null);

let niveaux = ref([]);
let niveau = ref(null);

let classes = ref([]);
let classe = ref(null);

let costs = ref({ header: [], body: [] });
let caMensuel = ref(0);
let totalChargeSalaire = ref(0);

let isCostLoading = ref(false);

onMounted(async () => {
  await axiosIns
    .get("/costClasses")
    .then((res) => {
      cycles.value = res.data.cycles;
      sites.value = res.data.sites;
      costs.value = res.data.costs;
      caMensuel.value = res.data.caMensuel;
      totalChargeSalaire.value = res.data.totalChargeSalaire;
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
});
const vuetifyTheme = useTheme();
const currentTheme = vuetifyTheme.current.value.colors;

watch(cycle, async (newCycle, oldCycle) => {
  let link = "/filterNiveau?cycle=" + newCycle;
  await axiosIns
    .get(link)
    .then((res) => {
      niveaux.value = res.data.niveaux;
      niveau.value = niveaux[0];
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
});

function searchCost() {
  isCostLoading.value = true;
  axiosIns
    .get("/costClasses", {
      params: {
        cycle: cycle.value,
        site: site.value,
        niveau: niveau.value,
      },
    })
    .then((res) => {
      costs.value = res.data.costs;
      caMensuel.value = res.data.caMensuel;
      totalChargeSalaire.value = res.data.totalChargeSalaire;
    })
    .finally(() => {
      isCostLoading.value = false;
    });
}
</script>

<style lang="scss" scoped>
@use "@core/scss/template/libs/apex-chart.scss";
</style>
