<script setup>
import { hexToRgb } from "@layouts/utils";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const vuetifyTheme = useTheme();

const props = defineProps({
  eleve_name: {
    type: null,
    required: true,
  },
  positifs: {
    type: null,
    required: true,
  },
  negatives: {
    type: null,
    required: true,
  },
  months: {
    type: null,
    required: true,
  },
  loaded: {
    type: null,
    required: true,
  },
});
const series = {
  bar: [
    {
      name: "Actions positives",
      data: props.positifs,
      // data: [1, 2, 5, 3, 2],
    },
    {
      name: "Actions négatives",
      data: props.negatives,
      // data: [-1, -2, -3, -4, -5, -6, -8],
    },
  ],
  // line: [
  //   {
  //     name: "Last Month",
  //     data: [20, 10, 30, 16, 24, 5, 40, 23, 28, 5, 30],
  //   },
  //   {
  //     name: "This Month",
  //     data: [50, 40, 60, 46, 54, 35, 70, 53, 58, 35, 60],
  //   },
  // ],
};

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors;
  const variableTheme = vuetifyTheme.current.value.variables;
  const labelColor = `rgba(${hexToRgb(currentTheme["on-surface"])},${
    variableTheme["disabled-opacity"]
  })`;
  const legendColor = `rgba(${hexToRgb(currentTheme["on-background"])},${
    variableTheme["high-emphasis-opacity"]
  })`;
  const borderColor = `rgba(${hexToRgb(
    String(variableTheme["border-color"])
  )},${variableTheme["border-opacity"]})`;

  return {
    bar: {
      chart: {
        parentHeightOffset: 0,
        stacked: true,
        type: "bar",
        toolbar: { show: false },
      },
      tooltip: { enabled: false },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius: 8,
          startingShape: "rounded",
          endingShape: "rounded",
        },
      },
      colors: ["#7367F0", currentTheme.warning],
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        width: 6,
        lineCap: "round",
        colors: [currentTheme.surface],
      },
      legend: {
        show: true,
        horizontalAlign: "left",
        position: "top",
        fontFamily: "Public Sans",
        markers: {
          height: 12,
          width: 12,
          radius: 12,
          offsetX: -3,
          offsetY: 2,
        },
        labels: { colors: legendColor },
        itemMargin: { horizontal: 5 },
      },
      grid: {
        show: false,
        padding: {
          bottom: -8,
          top: 20,
        },
      },
      xaxis: {
        categories: props.months,
        labels: {
          style: {
            fontSize: "14px",
            colors: labelColor,
            fontFamily: "Public Sans",
          },
        },
        axisTicks: { show: false },
        axisBorder: { show: false },
      },
      yaxis: {
        labels: {
          offsetX: -16,
          style: {
            fontSize: "14px",
            colors: labelColor,
            fontFamily: "Public Sans",
          },
        },
        // min: -40,
        // max: 40,
        tickAmount: 5,
      },
      responsive: [
        {
          breakpoint: 1700,
          options: { plotOptions: { bar: { columnWidth: "43%" } } },
        },
        {
          breakpoint: 1441,
          options: { plotOptions: { bar: { columnWidth: "52%" } } },
        },
        {
          breakpoint: 1280,
          options: { plotOptions: { bar: { columnWidth: "38%" } } },
        },
        {
          breakpoint: 1025,
          options: {
            plotOptions: { bar: { columnWidth: "70%" } },
            chart: { height: 390 },
          },
        },
        {
          breakpoint: 991,
          options: { plotOptions: { bar: { columnWidth: "38%" } } },
        },
        {
          breakpoint: 850,
          options: { plotOptions: { bar: { columnWidth: "48%" } } },
        },
        {
          breakpoint: 449,
          options: {
            plotOptions: { bar: { columnWidth: "70%" } },
            chart: { height: 360 },
            xaxis: { labels: { offsetY: -5 } },
          },
        },
        {
          breakpoint: 394,
          options: { plotOptions: { bar: { columnWidth: "88%" } } },
        },
      ],
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } },
      },
    },
    line: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: "line",
      },
      stroke: {
        curve: "smooth",
        dashArray: [5, 0],
        width: [1, 2],
      },
      legend: { show: false },
      colors: [borderColor, currentTheme.primary],
      grid: {
        show: false,
        borderColor,
        padding: {
          top: -30,
          bottom: -15,
          left: 25,
        },
      },
      markers: { size: 0 },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false },
      },
      yaxis: { show: false },
      tooltip: { enabled: false },
    },
  };
});
</script>

<template>
  <VCard style="height: 100%">
    <VCardText class="pe-2">
      <h6 class="text-h6 mb-6">
        Suivi des points de discipline - {{ props.eleve_name }}
      </h6>

      <VueApexCharts
        v-if="props.loaded"
        :options="chartOptions.bar"
        :series="series.bar"
        height="365"
      />
    </VCardText>
  </VCard>
</template>
