<script setup>
import { useStore } from "@/store";
import { ref } from "vue";
import { exportToPDF } from "#imports";

const pdfSection = ref(null);

const store = useStore();
if (!store?.cvData?.data?.length) {
  store.getCvData();
}
if (!store?.defaultData?.data?.length) {
  store.getDefaultData();
}

const printProtected = (HTMLElement) => {
  exportToPDF(
    "pdf_protected_export.pdf",
    HTMLElement,
    {},
    {
      html2canvas: {
        scale: 0.6,
        useCORS: true,
      },
    }
  );
};
</script>
<template>
  <div class="container">
    <div class="mx-auto" style="max-width: 745px">
      <div
        class="bg-white preview pb-5"
        ref="pdfSection"
        :class="
          store?.cvData?.theme
            ? `theme-${store?.cvData?.theme}`
            : `theme-default`
        "
      >
        <template v-for="(element, index) in store.cvData.data" :key="index">
          <div class="pb-">
            <template v-if="element.type == 'info'">
              <InfoBlock :block_data="element" :isPreview="true" />
            </template>
            <template v-if="element.type == 'single-block'">
              <SingleBlock :block_data="element" :isPreview="true" />
            </template>
            <template v-if="element.type == 'listing'">
              <ListingBlock :block_data="element" :isPreview="true" />
            </template>
            <template v-if="element.type == 'three-column'">
              <ThreeColumnBlock :block_data="element" :isPreview="true" />
            </template>
            <div
              class="border border-top mx-3 mb-3"
              v-if="store.cvData.data.length - 1 != index"
            />
          </div>
        </template>
      </div>
    </div>

    <div class="pt-0 my-4 text-center">
      <button class="btn btn-dark" @click="printProtected(pdfSection)">
        DOWNLOAD AS PDF
        <font-awesome-icon icon="fa-solid fa-download" />
      </button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  name: "IndexPage",
  data() {
    return {
      isOpen: false,
      cv_data: "",
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {},
};
</script>
<style></style>
