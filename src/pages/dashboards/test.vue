<script setup>
import Test from '@/views/dashboards/test/Test.vue'
</script>

<template>
  <VRow>
    <!-- 👉 Congratulation John -->
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <Test />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
