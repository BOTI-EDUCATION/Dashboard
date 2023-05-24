<script setup>
const props = defineProps({
  reinscriptionsCount: {
    type: null,
    required: true,
  },  
  promotion: {
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
            Réinscriptions 
          </h6>
        </div>
        <span class="text-body-2 bg-dark text-bolder">{{ props.promotion }}</span>
      </div>
      <div class="d-flex align-center justify-space-between mt-4">
        <h6
          class="text-h2 text-center font-weight-semibold"
          style="font-weight: 900 !important;"
        >
          {{ props.reinscriptionsCount }}
        </h6>
      </div>
    </VCardText>
  </VCard>
</template>
