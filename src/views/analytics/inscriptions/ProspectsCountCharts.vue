<script setup>
const props = defineProps({
  prospects: {
    type: null,
    required: true,
  },  
  promotion: {
    type: null,
    required: true,
  },  
  pourcentage: {
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
          <h6
            class="text-h4"
          >
            Non réinscrits 
          </h6>
        </div>
        <span class="text-body-4 bg-dark text-bolder">{{ props.promotion }}</span>
      </div>
      <div class="d-flex align-center justify-space-between mt-4">
        <h6
          class="text-h2 text-center font-weight-semibold"
          style="font-weight: 900 !important;"
        >
          {{ props.prospects }}
        </h6>
        <span

          class="text-sm text-primary"
        >
          {{ props.pourcentage }}%
        </span>
      </div>
    </VCardText>
  </VCard>
</template>
