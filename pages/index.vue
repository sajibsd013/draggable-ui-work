<script setup>
import { useStore } from "@/store";

const store = useStore();
if (store.saveData.length) {
  store.savedToCvData();
} else {
  store.getCvData();
}
</script>
<template>
  <div class="container">
    <div class="my-3 border-1 border border-secondary  rounded-4 border-opacity-75 p-5 bg-white col-md-10 mx-auto" >
      <draggable v-model="store.cvData" item-key="id">
        <template #item="{ element, index }">
          <div class="block block__outer rounded">
            <div class="action d-flex justify-content-between p-1">
              <font-awesome-icon
                icon="fa-solid fa-bars"
                class="text-secondary pointer outer_action__btn move__btn"
              />
              <font-awesome-icon
                icon="fa-solid fa-xmark"
                class="text-white pointer outer_action__btn trash__btn border bg-danger rounded-circle"
                @click="store.removeBlcok(element)"
              />
            </div>
            <template v-if="element.type == 'info'">
              <InfoBlock :block_data="element" />
            </template>
            <template v-if="element.type == 'single-block'">
              <SingleBlock :block_data="element" />
            </template>
            <template v-if="element.type == 'listing'">
              <ListingBlock :block_data="element" />
            </template>
            <template v-if="element.type == 'three-column'">
              <ThreeColumnBlock :block_data="element" />
            </template>
            <hr class="" v-if="store.cvData.length-1!=index">
          </div>
        </template>
      </draggable>

      <div class="col-12 p-1 my-3">
        <button
          class="btn w-100 add_btn text-success"
          @click="toggleOpen"
          v-if="!isOpen"
        >
          <font-awesome-icon
            icon="fa-solid fa-plus"
            class="bg-success text-white p-1 rounded-circle"
            style="width: 10px; height: 10px"
          />
          NEW SECTION
        </button>
        <div class="block block__outer rounded new_section" v-if="isOpen">
          <div class="action d-flex justify-content-between p-1">
            <font-awesome-icon
              icon="fa-solid fa-xmark"
              class="text-white pointer outer_action__btn trash__btn border bg-danger rounded-circle"
              @click="toggleOpen"
            />
          </div>

          <div class="row p-4">
            <div class="col-3">
              <img
                src="@/assets/img/new-section-info.png"
                alt="new-section-info"
                class="w-100 pointer new_section_image"
                @click="
                  () => {
                    store.addNewBlock('info');
                    toggleOpen();
                  }
                "
              />
              <h6 class="small text-center my-2">INFO</h6>
            </div>

            <div class="col-3">
              <img
                src="@/assets/img/new-section-3-col.png"
                alt="new-section-3"
                class="w-100 pointer new_section_image"
                @click="
                  () => {
                    store.addNewBlock('three-column');
                    toggleOpen();
                  }
                "
              />
              <h6 class="small text-center my-2">THREE COLUMNS</h6>
            </div>

            <div class="col-3">
              <img
                src="@/assets/img/new-section-listing.png"
                alt="new-section-listing"
                class="w-100 pointer new_section_image"
                @click="
                  () => {
                    store.addNewBlock('listing');
                    toggleOpen();
                  }
                "
              />
              <h6 class="small text-center my-2">LISTING</h6>
            </div>
            <div class="col-3">
              <img
                src="@/assets/img/new-section-block.png"
                alt="new-section-block"
                class="w-100 pointer new_section_image"
                @click="
                  () => {
                    store.addNewBlock('single-block');
                    toggleOpen();
                  }
                "
              />
              <h6 class="small text-center my-2">BLOCK</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-0 pt-0 mb-4 text-center">
      <button class="btn btn-danger" @click="store.resetData()">
        RESET
        <font-awesome-icon icon="fa-solid fa-rotate-right" />
      </button>
      <button class="btn btn-dark mx-2" @click="store.setSaveData()">
        SAVE
        <font-awesome-icon icon="fa-solid fa-save" />
      </button>
      <button class="btn btn-dark">
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

<style scoped></style>
