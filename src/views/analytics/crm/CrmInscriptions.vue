<script setup>
const props = defineProps({
  pagename: {
    type: null,
    required: true,
  },
  promotion : {
    type :null,
    required:true,
  },
  insCount : {
    type :null,
    required:true,
  },
})

const leadsLink = ref('')

onMounted(() => {
  leadsLink.value = document
    .querySelector("meta[name=base_api]")
    .getAttribute("content") + '../' + 'admin/crm/leads'
})
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol cols="8">
        <VCardText>
          <h6 class="text-lg text-no-wrap font-weight-semibold">
            {{ props.pagename }}
          </h6>
          <p class="mb-2">
            {{ props.promotion }}
          </p>
          <h5 class="text-h5 font-weight-semibold text-primary mb-2">
            {{ props.insCount }}
          </h5>
          <VBtn :href="leadsLink">
            liste d'inscrits
          </VBtn>
        </VCardText>
      </VCol>

      <VCol cols="4">
        <VCardText class="pb-0 px-0 position-relative h-100">
          <VImg
            src="http://localhost/rr/congo-illustration.png"
            height="140"
            class="w-100 position-absolute"
            style="bottom: 0;"
          />
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
