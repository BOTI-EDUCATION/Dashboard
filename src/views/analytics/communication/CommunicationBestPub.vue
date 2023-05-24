<script setup>
const props = defineProps({
  salesByCountries:{
    type:null,
    required:true,
  },
})
</script>

<template>
  <VCard
    title="Meilleures publications"
    subtitle="En termes d'intéraction des parents"
  >
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="country in props.salesByCountries"
          :key="country.stats"
        >
          <template #prepend>
            <VAvatar
              :color="country.color"
              variant="tonal"
              size="42"
            >
              <VIcon :icon="country.icon" />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ country.stats }}
          </VListItemTitle>
          <VListItemSubtitle class="opacity-100 text-disabled">
            {{ country.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div :class="`d-flex align-center font-weight-semibold ${country.profitLoss > 0 ? 'text-success' : 'text-error'}`">
              <span>{{ Math.abs(country.profitLoss) }} vues</span>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
