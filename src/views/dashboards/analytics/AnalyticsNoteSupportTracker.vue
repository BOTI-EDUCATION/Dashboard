<script setup>
import { hexToRgb } from "@layouts/utils";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const vuetifyTheme = useTheme();

const props = defineProps({
  supportticket: {
    type: null,
    required: true,
  },
  controles_pass: {
    type: null,
    required: true,
  },
  rens: {
    type: null,
    required: true,
  },
  loaded: {
    type: null,
    required: true,
  },
});

let series = [];
if (props.rens) {
  series = props.rens;
}
const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors;
  const variableTheme = vuetifyTheme.current.value.variables;

  return {
    labels: ["Taux renseignement des notes"],
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -140,
        endAngle: 130,
        hollow: { size: "65%" },
        track: {
          background: currentTheme.surface,
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            offsetY: -20,
            color: `rgba(${hexToRgb(currentTheme["on-background"])},${
              variableTheme["disabled-opacity"]
            })`,
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Public Sans",
          },
          value: {
            offsetY: 10,
            color: `rgba(${hexToRgb(currentTheme["on-background"])},${
              variableTheme["high-emphasis-opacity"]
            })`,
            fontSize: "38px",
            fontWeight: "600",
            fontFamily: "Public Sans",
          },
        },
      },
    },
    colors: [currentTheme.primary],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.5,
        gradientToColors: [currentTheme.primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [30, 70, 100],
      },
    },
    stroke: { dashArray: 10 },
    grid: {
      padding: {
        top: -20,
        bottom: 5,
      },
    },
    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
    responsive: [
      {
        breakpoint: 960,
        options: { chart: { height: 280 } },
      },
    ],
  };
});
</script>

<template>
  <VCard
    style="height: 100%"
    title="Renseignement des notes"
    subtitle="Matières littéraires - toutes unités"
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

    <VCardText style="height: 100%">
      <VRow>
        <VCol cols="12" md="5" sm="6" class="mt-auto">
          <div class="mb-4">
            <h4 class="text-4xl font-weight-semibold mb-2">
              {{ props.controles_pass }}
            </h4>
            <p class="text-sm">Contrôles passés</p>
          </div>

          <VList class="card-list">
            <VListItem
              v-for="ticket in props.supportticket"
              :key="ticket.title"
              v-show="ticket.title != 'Contrôles notés partiellement'"
            >
              <VListItemTitle class="" style="white-space: break-spaces">
                {{ ticket.title }}
              </VListItemTitle>
              <VListItemSubtitle class="opacity-100 text-disabled">
                {{ ticket.subtitle }}
              </VListItemSubtitle>
              <template #prepend>
                <VAvatar
                  rounded
                  size="34"
                  :color="ticket.avatarColor"
                  variant="tonal"
                >
                  <VIcon :icon="ticket.avatarIcon" />
                </VAvatar>
              </template>
            </VListItem>
          </VList>
        </VCol>
        <VCol cols="12" md="7" sm="6">
          <VueApexCharts
            v-if="props.loaded && series"
            :series="series"
            :options="chartOptions"
            height="360"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 18px;
}
</style>
