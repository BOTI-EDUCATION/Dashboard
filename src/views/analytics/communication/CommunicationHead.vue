<script setup>
const props = defineProps({
  cardname: {
    type: null,
    required: true,
  },
  data: {
    type: null,
    required: true,
  },
  icon: {
    type: null,
    required: true,
  },
  color: {
    type: null,
    required: true,
  },
  promotion: {
    type: null,
    required: false,
  },
});

const api = window.document
  .querySelector("meta[name=base_api]")
  .getAttribute("content");
</script>

<template>
  <VCard>
    <VCardText>
      <div>
        <div class="d-flex justify-space-between">
          <span class="text-h4 bg-dark text-bolder" style="font-size: 20px"
            >{{ props.data }}
          </span>
          <VAvatar :color="props.color" variant="tonal" size="42">
            <VIcon :icon="props.icon" />
          </VAvatar>
        </div>
        <div class="d-flex align-center justify-space-between mt-4">
          <h6 class="text-h6">
            {{ props.cardname }}
          </h6>
          <h6 style="font-size: 15px">
            {{ props.promotion }}
          </h6>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
