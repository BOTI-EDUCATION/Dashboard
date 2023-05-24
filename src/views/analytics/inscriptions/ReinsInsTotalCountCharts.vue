<script setup>
const props = defineProps({
  promotion: {
    type: null,
    required: true,
  },  
  inscriptionsreinscriptionsCount: {
    type: null,
    required: true,
  },
  reinscriptionsPourcentage: {
    type: null,
    required: true,
  },
  lastPromotion: {
    type: null,
    required: true,
  },
})
</script>

<template>
  <VCard>
    <VCardText>
      <div>
        <div class="d-flex align-center justify-space-between mt-4">
          <h6 class="text-h4">
            Total(ins réins)
          </h6>
        </div>
        <span class="text-body-2 bg-dark text-bolder">{{ props.promotion }}</span>
      </div>
      <div class="d-flex align-center justify-space-between mt-4">
        <h6
          class="text-h2 text-center font-weight-semibold"
          style="font-weight: 900 !important;"
        >
          {{ props.inscriptionsreinscriptionsCount }}
        </h6>
        <div class="d-flex flex-column">
          <span
            v-if="props.reinscriptionsPourcentage > 0"
            class="text-sm text-success"
          >
            +{{ props.reinscriptionsPourcentage }} %
          </span>
          <span
            v-else
            class="text-sm text-error"
          >
            {{ props.reinscriptionsPourcentage }} %
          </span>
          <span class="text-body-2 bg-dark text-bolder">{{ props.lastPromotion }}</span>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
