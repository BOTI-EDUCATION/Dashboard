<script setup>
import axiosIns from "@/plugins/axios";

const searchQuery = ref("");
const selectedStatus = ref();
const rowPerPage = ref(10);
const currentPage = ref(1);
const totalPage = ref(1);
const totalprmotionsEffectifs = ref(0);
const prmotionsEffectifs = ref([]);
const promotions = ref([{ current_promotion: {}, ouvert_promotion: {} }]);
let linkSchool = ref("");
const selectedRows = ref([]);
let loaded = ref(false);

onMounted(async () => {
  await axiosIns
    .get("/promotionsAffectifs")
    .then((res) => {
      promotions.value = res.data.promotions;
      totalprmotionsEffectifs.value = res.data.cycle_niveaux_length;
      prmotionsEffectifs.value = res.data.cycle_niveaux;
      linkSchool.value = res.data.link;
      loaded.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
});
// 👉 Computing pagination data
const paginationData = computed(() => {
  if (loaded) {
    const firstIndex = totalprmotionsEffectifs.value
      ? (currentPage.value - 1) * rowPerPage.value + 1
      : 0;
    const lastIndex =
      totalprmotionsEffectifs.value +
      (currentPage.value - 1) * rowPerPage.value;

    // return `Showing ${firstIndex} to ${lastIndex} of ${totalprmotionsEffectifs.value} entries`;
  }
});
watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});
let exportExcel = () => {
  axiosIns
    .post("/exportExcelDataCommerce", {
      responseType: "blob",
    })
    .then((response) => {
      const url = URL.createObjectURL(
        new Blob([response.data.output], {
          type: "application/vnd.ms-excel",
        })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "composantes.xls");
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <div
    v-if="
      loaded &&
      promotions.current_promotion.id != promotions.ouvert_promotion.id
    "
  >
    <VCard v-if="prmotionsEffectifs" id="invoice-list">
      <VCardText class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Rows per page -->
        <div v-if="false" class="d-flex align-center" style="width: 135px">
          <span class="text-no-wrap me-3">Show:</span>
          <VSelect
            v-model="rowPerPage"
            density="compact"
            :items="[10, 20, 30, 50]"
          />
        </div>

        <div class="me-3" style="width: 100%">
          <!-- 👉 Create invoice -->
          <button
            class="v-btn v-btn--elevated v-theme--dark bg-success v-btn--density-default v-btn--size-default v-btn--variant-elevated"
            style="display: block; margin-left: auto"
            @click="exportExcel()"
          >
            Export excel
          </button>
        </div>

        <VSpacer />
      </VCardText>

      <VDivider />

      <!-- SECTION Table -->
      <VTable
        v-if="loaded && prmotionsEffectifs"
        class="text-no-wrap invoice-list-table"
      >
        <!-- 👉 Table head -->
        <thead class="text-uppercase">
          <tr>
            <th scope="col" class="text-center">Cycle</th>
            <th scope="col" class="text-center">Niveau</th>
            <th scope="col" class="text-center">
              {{ promotions.current_promotion.label }} Effectif
            </th>
            <th scope="col" class="text-center">
              {{ promotions.current_promotion.label }} Classes
            </th>
            <th scope="col" class="text-center">
              {{ promotions.current_promotion.label }} Moy/Classe
            </th>
            <th class="text-center" scope="col">
              {{ promotions.ouvert_promotion.label }} Classes
            </th>
            <th class="text-center" scope="col">
              {{ promotions.ouvert_promotion.label }} Obj
            </th>
            <th class="text-center" scope="col">
              {{ promotions.ouvert_promotion.label }} Nouvelles
            </th>
            <th class="text-center" scope="col">
              {{ promotions.ouvert_promotion.label }} Réinscriptions
            </th>
            <th class="text-center" scope="col">
              {{ promotions.ouvert_promotion.label }} Total
            </th>
            <th class="text-center" scope="col">
              {{ promotions.ouvert_promotion.label }} Ins Confirmées
            </th>
            <th class="text-center" scope="col">
              {{ promotions.ouvert_promotion.label }} Reste à inscrire
            </th>
          </tr>
        </thead>
        <!-- <div v-if="loaded && prmotionsEffectifs"> -->
        <!-- 👉 Table Body -->
        <tbody>
          <template v-for="(cycles, index) in prmotionsEffectifs" :key="index">
            <tr
              v-for="(prmotionsEffectif, index) in cycles"
              :key="index"
              style="height: 3.75rem"
            >
              <td
                v-if="index == 0"
                style="
                  border-right: none !important;
                  border-bottom: none !important;
                  border-left: none !important;
                "
              >
                <span>
                  {{ prmotionsEffectif.cycle }}
                </span>
              </td>
              <td v-else style="border: none !important"></td>
              <td>
                <span>
                  {{ prmotionsEffectif.niveau }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.classe_effectif }}
                </span>
              </td>

              <td>
                <span>
                  {{ prmotionsEffectif.current_promo_classes }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.current_promo_moyennes_classes }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.ouverte_promo_classes }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.ouverte_promo_obj }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.ouverte_promo_nouvelles }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.ouverte_promo_reinscriptions }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.ouverte_promo_total }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.ouverte_promo_ins_confirmees }}
                </span>
              </td>
              <td>
                <span>
                  {{ prmotionsEffectif.ouverte_promo_reste_a_inscrire }}
                </span>
              </td>
            </tr>
          </template>
        </tbody>

        <!-- 👉 table footer  -->
        <!-- </div> -->

        <tfoot v-show="prmotionsEffectifs.length == 0">
          <tr>
            <td colspan="8" class="text-center text-body-1">
              No data available
            </td>
          </tr>
        </tfoot>
      </VTable>
      <VCol v-else cols="12" lg="12" style="position: relative; height: 80vh">
        <div class="loading">
          <div class="effect-1 effects"></div>
          <div class="effect-2 effects"></div>
          <div class="effect-3 effects"></div>
        </div>
      </VCol>

      <!-- !SECTION -->

      <VDivider />

      <!-- SECTION Pagination -->
      <VCardText class="d-flex align-center flex-wrap gap-4 py-3">
        <!-- 👉 Pagination meta -->
        <span class="text-sm text-disabled">
          {{ paginationData }}
        </span>

        <VSpacer />

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
  </div>
  <VCard class="text-center p-4 no-promo" v-else>
    <span class="font-bold">Aucun promotion ouverte</span> <br />

    <a :href="linkSchool" class="nav-link">Promotions</a>
  </VCard>
</template>

<style lang="css" scoped>
#invoice-list .invoice-list-actions {
  inline-size: 8rem;
}

#invoice-list .invoice-list-filter {
  inline-size: 12rem;
}

td {
  border: 0.5px solid #efefef !important;
}

.no-promo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  block-size: 80vh;
}

a {
  padding: 10px;
  border-radius: 5px;
  background: #9286ea;
  color: white;
}
</style>
