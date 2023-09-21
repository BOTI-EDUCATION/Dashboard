<script setup>
import BarChart from "@/@core/libs/chartjs/components/BarChart";
import imgEmpty from "@/pages/components/imgEmpty.vue";
import axiosIns from "@/plugins/axios";
// import { getHorizontalBarChartConfig } from '@core/libs/chartjs/chartjsConfig'

import { getLatestBarChartConfig } from "@core/libs/chartjs/chartjsConfig";
import { useTheme } from "vuetify";

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
});

const loaded = ref(false);
let ins = [];
let reins = [];
let days = [];
let maxValueIns = 0;
let maxValueReins = 0;
let maxValue = 0;

onMounted(async () => {
  await axiosIns
    .get("getInsReinByDay/")
    .then((res) => {
      for (let i = 0; i < res.data.days.length; i++) {
        days.push(res.data.days[i]);
        ins.push(Number(res.data.ins[i]));
        reins.push(Number(res.data.rein[i]));
      }
      maxValueIns = Math.max.apply(Math, ins);
      maxValueReins = Math.max.apply(Math, reins);
      maxValue = Math.max.apply(Math, [maxValueIns, maxValueReins]);
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
});

const vuetifyTheme = useTheme();

const chartOptions = computed(() =>
  getLatestBarChartConfig(vuetifyTheme.current.value, maxValue ? maxValue : 50)
);

// const chartOptions = computed(() => getHorizontalBarChartConfig(vuetifyTheme.current.value))

let dateObj = new Date();
let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
let day = dateObj.getUTCDate();

let newdate = String(day) + "/" + String(month);

const data = {
  labels: days,

  datasets: [
    {
      maxBarThickness: 15,
      label: "Inscriptions",
      backgroundColor: props.colors.warningShade,
      borderColor: "transparent",
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: ins,
    },
    {
      maxBarThickness: 15,
      label: "Réinscriptions",
      backgroundColor: props.colors.horizontalBarInfo,
      borderColor: "transparent",
      borderRadius: {
        topRight: 15,
        topLeft: 15,
      },
      data: reins,
    },
  ],
};
</script>

<template>
  <BarChart
    v-if="loaded && data.labels.length > 0"
    :height="400"
    :chart-data="data"
    :chart-options="chartOptions"
  />
  <div v-else style="height: 382px">
    <imgEmpty></imgEmpty>
  </div>
</template>
