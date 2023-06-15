<script setup>
import { hexToRgb } from "@layouts/utils";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const vuetifyTheme = useTheme();
const currentTab = ref(0);
const refVueApexChart = ref();

const props = defineProps({
  matieres: {
    type: null,
    required: true,
  },
  loaded: {
    type: null,
    required: true,
  },
});

let matieresLitt = [];

const chartConfigs = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors;
  const variableTheme = vuetifyTheme.current.value.variables;
  const labelPrimaryColor = `rgba(${hexToRgb(currentTheme.primary)},${
    variableTheme["dragged-opacity"]
  })`;
  const legendColor = `rgba(${hexToRgb(currentTheme["on-background"])},${
    variableTheme["high-emphasis-opacity"]
  })`;
  const borderColor = `rgba(${hexToRgb(
    String(variableTheme["border-color"])
  )},${variableTheme["border-opacity"]})`;
  const labelColor = `rgba(${hexToRgb(currentTheme["on-surface"])},${
    variableTheme["disabled-opacity"]
  })`;
  matieresLitt = [];
  let seriys_ = [];
  if (props.matieres) {
    for (let i = 0; i < props.matieres.length; i++) {
      seriys_ = props.matieres[i].series;
      matieresLitt.push({
        title: props.matieres[i].label,
        icon: props.matieres[i].icon,
        chartOptions: {
          chart: {
            parentHeightOffset: 0,
            type: "bar",
            toolbar: { show: false },
          },
          plotOptions: {
            bar: {
              columnWidth: "32%",
              startingShape: "rounded",
              borderRadius: 4,
              distributed: true,
              dataLabels: { position: "top" },
            },
          },
          grid: {
            show: false,
            padding: {
              top: 0,
              bottom: 0,
              left: -10,
              right: -10,
            },
          },
          colors: props.matieres[i].colors,
          dataLabels: {
            enabled: true,
            formatter(val) {
              return `${val}`;
            },
            offsetY: -25,
            style: {
              fontSize: "15px",
              colors: [legendColor],
              fontWeight: "600",
              fontFamily: "Public Sans",
            },
          },
          legend: { show: false },
          tooltip: { enabled: false },
          xaxis: {
            categories: props.matieres[i].categories,
            axisBorder: {
              show: true,
              color: borderColor,
            },
            axisTicks: { show: false },
            labels: {
              style: {
                colors: labelColor,
                fontSize: "14px",
                fontFamily: "Public Sans",
              },
            },
          },
          yaxis: {
            labels: {
              offsetX: -15,
              formatter(val) {
                return `${parseInt(val / 1)}`;
              },
              style: {
                fontSize: "14px",
                colors: labelColor,
                fontFamily: "Public Sans",
              },
              min: 0,
              max: 60000,
              tickAmount: 6,
            },
          },
          responsive: [
            {
              breakpoint: 1441,
              options: { plotOptions: { bar: { columnWidth: "41%" } } },
            },
            {
              breakpoint: 590,
              options: {
                plotOptions: { bar: { columnWidth: "61%" } },
                yaxis: { labels: { show: false } },
                grid: {
                  padding: {
                    right: 0,
                    left: -20,
                  },
                },
                dataLabels: {
                  style: {
                    fontSize: "12px",
                    fontWeight: "400",
                  },
                },
              },
            },
          ],
        },
        series: [
          {
            data: seriys_,
          },
        ],
      });
    }
    return matieresLitt;
  }
  return [];
});
</script>

<template>
  <VCard
    title="Moyennes des notes"
    subtitle="Filtrées par catégories"
    v-if="props.loaded"
  >
    <template #append>
      <div class="mt-n4 me-n2 d-none">
        <VBtn icon size="x-small" variant="plain" color="default">
          <VIcon size="22" icon="tabler-dots-vertical" />

          <VMenu activator="parent">
            <VList>
              <VListItem
                v-for="(item, index) in ['View More', 'Delete']"
                :key="index"
                :value="index"
              >
                <VListItemTitle>{{ item }}</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </VBtn>
      </div>
    </template>

    <VCardText>
      <VSlideGroup v-model="currentTab" show-arrows mandatory>
        <VSlideGroupItem
          v-for="(report, index) in chartConfigs"
          :key="report.title"
          v-slot="{ isSelected, toggle }"
          :value="index"
        >
          <div
            style="width: 155px; height: 120px; text-align: center"
            :style="
              isSelected
                ? 'border-color:rgb(var(--v-theme-primary)) !important'
                : ''
            "
            :class="isSelected ? 'border' : 'border border-dashed'"
            class="d-flex flex-column justify-center align-center cursor-pointer rounded px-5 py-2 me-6"
            @click="toggle"
          >
            <VAvatar
              rounded
              size="38"
              :color="isSelected ? 'primary' : 'secondary'"
              variant="tonal"
              class="mb-2"
            >
              <VIcon :icon="report.icon" />
            </VAvatar>
            <p class="mb-0">
              {{ report.title }}
            </p>
          </div>
        </VSlideGroupItem>

        <!-- 👉 slider more -->
        <VSlideGroupItem>
          <div
            style="width: 110px; height: 94px"
            class="d-none flex-column justify-center align-center rounded me-6 border border-dashed"
          >
            <VAvatar
              rounded
              size="38"
              color="default"
              variant="tonal"
              class="text-disabled"
            >
              <VIcon icon="tabler-plus" />
            </VAvatar>
          </div>
        </VSlideGroupItem>
      </VSlideGroup>
      <div v-if="props.loaded && matieresLitt && props.matieres">
        <VueApexCharts
          ref="refVueApexChart"
          :key="currentTab"
          :series="chartConfigs[Number(currentTab)].series"
          :options="chartConfigs[Number(currentTab)].chartOptions"
          height="240"
          class="mt-3"
        />
      </div>
    </VCardText>
  </VCard>
</template>
