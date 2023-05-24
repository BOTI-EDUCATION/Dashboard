<script setup>
const props = defineProps({
  statistics: {
    type: null,
    required: true,
  },
})
</script>

<template>
  <VCard title="Suivi des contrôles et évaluations du semestre">
    <template
      #append
    >
      <span class="text-body-2 d-none">Mise à jour : Hier 19:00 </span>
    </template>

    <VCardText class="pt-6">
      <VRow>
        <VCol
          v-for="item in props.statistics"
          :key="item.title"
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <VAvatar
              :color="item.color"
              variant="tonal"
              size="42"
              class="me-3"
            >
              <VIcon
                size="24"
                :icon="item.icon"
              />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-h6 font-weight-medium">{{ item.stats }}</span>
              <span class="text-caption">
                {{ item.title }}
              </span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
