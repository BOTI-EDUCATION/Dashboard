<script setup>
import { useInvoiceStore } from "@/views/apps/invoice/useInvoiceStore";

const invoiceListStore = useInvoiceStore();
const searchQuery = ref("");
const selectedStatus = ref();
const rowPerPage = ref(7);
const currentPage = ref(1);
const totalPage = ref(1);
const totalInvoices = ref(0);
const invoices = ref([]);
const selectedRows = ref([]);

const props = defineProps({
  thead: {
    type: null,
    required: true,
  },
  tbody: {
    type: null,
    required: true,
  },
});

let tbodys = [];

onMounted(() => {}),
  // 👉 Fetch Invoices
  watchEffect(() => {
    invoiceListStore
      .fetchInvoices({
        q: searchQuery.value,
        status: selectedStatus.value,
        perPage: rowPerPage.value,
        currentPage: currentPage.value,
      })
      .then((response) => {
        invoices.value = response.data.invoices;
        totalPage.value = response.data.totalPage;
        totalInvoices.value = response.data.totalInvoices;
      })
      .catch((error) => {
        console.log(error);
      });
  });

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = invoices.value.length
    ? (currentPage.value - 1) * rowPerPage.value + 1
    : 0;
  const lastIndex =
    invoices.value.length + (currentPage.value - 1) * rowPerPage.value;

  return `Showing ${firstIndex} to ${lastIndex} of ${totalInvoices.value} entries`;
});

const resolveInvoiceStatusVariantAndIcon = (status) => {
  if (status === "Partial Payment")
    return {
      variant: "success",
      icon: "tabler-circle-half-2",
    };
  if (status === "Paid")
    return {
      variant: "warning",
      icon: "tabler-chart-pie",
    };
  if (status === "Downloaded")
    return {
      variant: "info",
      icon: "tabler-arrow-down-circle",
    };
  if (status === "Draft")
    return {
      variant: "primary",
      icon: "tabler-device-floppy",
    };
  if (status === "Sent")
    return {
      variant: "secondary",
      icon: "tabler-circle-check",
    };
  if (status === "Past Due")
    return {
      variant: "error",
      icon: "tabler-info-circle",
    };

  return {
    variant: "secondary",
    icon: "tabler-x",
  };
};
</script>

<template>
  <VCard v-if="invoices" id="invoice-list">
    <VCardText class="d-flex align-center flex-wrap gap-2 py-4">
      <!-- 👉 Rows per page -->
      <div style="width: 5rem">
        <VSelect
          v-model="rowPerPage"
          variant="outlined"
          :items="[7, 10, 20, 30, 50]"
        />
      </div>

      <!-- 👉 Create invoice -->
      <VBtn
        prepend-icon="tabler-plus"
        :to="{ name: 'apps-invoice-add' }"
        class="d-none"
      >
        Create invoice
      </VBtn>

      <VSpacer />

      <div class="d-flex align-center flex-wrap gap-2">
        <!-- 👉 Search  -->
        <div class="invoice-list-search d-none">
          <VTextField
            v-model="searchQuery"
            placeholder="Search éléve"
            density="compact"
          />
        </div>
        <div class="invoice-list-status" style="font-size: 20px">
          Notes des éléves
        </div>
      </div>
    </VCardText>

    <VDivider />

    <!-- SECTION Table -->
    <VTable class="text-no-wrap invoice-list-table">
      <!-- 👉 Table head -->
      <thead>
        <tr>
          <th scope="col" class="font-weight-semibold">Eléve</th>
          <th
            v-for="value in props.thead"
            :key="value"
            scope="col"
            class="font-weight-semibold"
          >
            {{ value }}
          </th>
          <th v-show="false">actions</th>
        </tr>
      </thead>
      <tbody v-if="props.tbody">
        <tr v-for="(t, index) in props.tbody" :key="index">
          <!-- 👉 Id -->
          <td>{{ t[0].eleve }}</td>
          <td v-for="(td, index) in t" :key="index">
            <span>{{ td.note }}</span>
            <span class="ml-1" v-if="index > 0 && td.icon"
              ><VIcon icon="tabler-trending-up" style="color: rgb(70, 207, 70)"
            /></span>
            <span class="ml-1" v-else-if="index > 0 && !td.icon"
              ><VIcon icon="tabler-trending-down" style="color: red"
            /></span>
          </td>
          <td v-show="false">
            <vbutton>
              <RouterLink
                :to="{
                  name: 'apps-invoice-preview-id',
                  params: { id: 1 },
                }"
              >
                Analyser
              </RouterLink>
            </vbutton>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <!-- <tfoot v-show="!invoices.length"> -->
      <tfoot v-show="false">
        <tr>
          <td colspan="8" class="text-center text-body-1">No data available</td>
        </tr>
      </tfoot>
    </VTable>
    <!-- !SECTION -->

    <VDivider class="d-none" />

    <!-- SECTION Pagination -->
    <VCardText
      class="align-center flex-wrap justify-space-between gap-4 py-3 d-none"
    >
      <!-- 👉 Pagination meta -->
      <span class="text-sm text-disabled">{{ paginationData }}</span>

      <!-- 👉 Pagination -->
      <VPagination
        v-model="currentPage"
        size="small"
        :total-visible="5"
        :length="totalPage"
        @next="selectedRows = []"
        @prev="selectedRows = []"
      />
    </VCardText>
    <!-- !SECTION -->
  </VCard>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-status {
    inline-size: 11rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}
</style>
