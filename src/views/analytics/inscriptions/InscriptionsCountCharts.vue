<script setup>
const props = defineProps({
  inscriptionsCount: {
    type: null,
    required: true,
  },  
  promotion: {
    type: null,
    required: true,
  },  
})

const inscriptionsPourcentage = ref(0)
</script>

<template>
  <VCard>
    <VCardText>
      <div>
        <div class="d-flex align-center justify-space-between mt-4">
          <h6 class="text-h4">
            Inscriptions 
          </h6>
        </div>
        <span class="text-body-3 bg-dark text-bolder">{{ props.promotion }}</span>
      </div>
      <div class="d-flex align-center justify-space-between mt-4">
        <h6
          class="text-h2 text-center font-weight-semibold"
          style="font-weight: 900 !important;"
        >
          {{ props.inscriptionsCount }}
        </h6>
        <span

          class="text-sm text-success d-none"
        >
          +{{ inscriptionsPourcentage }}%
        </span>
      </div>
    </VCardText>
  </VCard>
</template>
