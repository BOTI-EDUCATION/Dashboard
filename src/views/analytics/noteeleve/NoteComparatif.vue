<script setup>
import axiosIns from "@/plugins/axios";
import { hexToRgb } from "@layouts/utils";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const vuetifyTheme = useTheme();
const refVueApexChart = ref();

const props = defineProps({
  unites: Array,
  eleve: Number,
  semestre: String,
  loaded: Boolean,
});

let loaded = ref(false);

const unite = ref(null);

let series = ref([]);
let chartOptions = ref({});

watch(
  async () => unite.value,
  async (first, second) => {
    if (first && second && first != second) {
      let link =
        "/comparatifEvaluationsEleve?unite=" +
        unite.value +
        "&eleve=" +
        props.eleve +
        "&semestre=" +
        props.semestre;
      await axiosIns
        .get(link)
        .then((res) => {
          loaded.value = false;
          series = [
            {
              name: "Note",
              type: "column",
              data: res.data.eleve_notes,
            },
            {
              name: "Meilleure note",
              type: "line",
              data: res.data.meilleur_notes,
            },
            {
              name: "Note Moyenne",
              type: "line",
              data: res.data.moyenne_notes,
            },
            {
              name: "Derniere note",
              type: "line",
              data: res.data.derniere_notes,
            },
          ];

          let labels_series = Array.from(
            { length: res.data.labels.length },
            (v, k) => k + 1
          );
          let borders = [0];
          for (let index = 0; index < res.data.labels.length - 1; index++) {
            borders.push(4);
          }
          // meilleur_notes = res.data.meilleur_notes;
          // derniere_notes = res.data.derniere_notes;
          // moyenne_notes = res.data.moyenne_notes;
          // eleve_notes = res.data.eleve_notes;
          // labels = res.data.labels;

          chartOptions = {
            chart: {
              height: 350,
              type: "line",
            },
            stroke: {
              width: borders,
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: labels_series,
            },
            labels: ["01 Jan 2001", "02 Jan 2001", "03 Jan 2001", "04 Jan 2001"],
            xaxis: {
              type: "datetime",
            },
            yaxis: [
              {
                min: 0,
                max: 20,
              },
              {
                min: 0,
                max: 20,
                show: false,
              },
              {
                min: 0,
                max: 20,
                show: false,
              },
              {
                min: 0,
                max: 20,
                show: false,
              },
            ],
          };
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
  <VCard title="Évolution des notes">
    <template #append>
      <div class="mt-n4 me-n2" style="min-width: 120px">
        <VSelect
          v-model="unite"
          :items="unites"
          :item-title="(unite) => unite.label"
          :item-value="(unite) => unite.id"
          label="Unites"
        />
      </div>
    </template>
    <VCardText>
      <div>
        <VueApexCharts
          v-if="loaded && props.loaded && unite"
          ref="refVueApexChart"
          :series="series"
          :options="chartOptions"
          height="240"
          class="mt-3"
        />
      </div>
    </VCardText>
  </VCard>
</template>
;
