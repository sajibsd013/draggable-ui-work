<script setup>
import { useStore } from "@/store";
import { ref } from "vue";
import { exportToPDF } from "#imports";
import { useCVStore } from "~/store/cv";
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const route = useRoute();

const { authenticated, user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const pdfSection = ref(null);

const cv = useCVStore();
const store = useStore();
</script>
<template>
  <div class="container">
    <FlotingMenu :CvData="CvData"/>
    <div
      class="my-3 border-1 border border-secondary rounded-4 border-opacity-75 px-3 py-1 bg-white col-lg-10 col-md-11 mx-auto"
    >
      <div class="d-flex g-3 align-items-center">
        <div class="">
          <label
            for="cv"
            style="min-width: 75px"
            class="col-form-label fw-semibold"
            >CV Name:</label
          >
        </div>
        <div class="w-100">
          <input
            type="text"
            id="cv"
            v-model="CvData.cv_name"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div
      class="my-3 border-1 border border-secondary rounded-4 border-opacity-75 p-1 p-md-5 bg-white col-lg-10 col-md-11 mx-auto"
      :class="CvData?.theme ? `theme-${CvData?.theme}` : `theme-default`"
      ref="pdfSection"
    >
      <draggable handle=".handle" v-model="CvData.data" item-key="id">
        <template #item="{ element, index }">
          <div class="block block__outer rounded p-1">
            <div class="">
              <font-awesome-icon
                icon="fa-solid fa-xmark"
                class="text-white pointer outer_action__btn trash__btn border rounded-circle"
                @click="store.removeBlcok(index,CvData)"
              />
              <font-awesome-icon
                icon="fa-solid fa-bars"
                class="text-secondary pointer outer_action__btn move__btn handle"
              />
            </div>
            <template v-if="element.type == 'info'">
              <InfoBlock :block_data="element" :isPreview="false" />
            </template>
            <template v-if="element.type == 'single-block'">
              <SingleBlock :block_data="element" :isPreview="false" />
            </template>
            <template v-if="element.type == 'listing'">
              <ListingBlock :block_data="element" :isPreview="false" />
            </template>
            <template v-if="element.type == 'three-column'">
              <ThreeColumnBlock :block_data="element" :isPreview="false" />
            </template>
            <hr class="" v-if="CvData.data.length - 1 != index" />
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
                    store.addNewBlock('info',CvData);
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
                    store.addNewBlock('three-column',CvData);
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
                    store.addNewBlock('listing',CvData);
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
                    store.addNewBlock('single-block',CvData);
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
      <button class="btn btn-danger mx-2" @click="store.resetData()">
        RESET
        <font-awesome-icon icon="fa-solid fa-rotate-right" />
      </button>
      <button
        class="btn btn-dark mx-2"
        v-if="authenticated && !route.query.id"
        @click="cv.saveCV({ cv: CvData, user: user?.id })"
      >
        SAVE
        <font-awesome-icon icon="fa-solid fa-save" />
      </button>
      <button
        class="btn btn-dark mx-2"
        v-if="authenticated && route.query.id"
        @click="cv.updateCV({ cv: CvData, user: user?.id, id:route.query.id })"
      >
        Update
        <font-awesome-icon icon="fa-solid fa-save" />
      </button>
      <button
        class="btn btn-dark d-none"
        @click="exportToPDF('mycv.pdf', pdfSection)"
      >
        DOWNLOAD AS PDF
        <font-awesome-icon icon="fa-solid fa-download" />
      </button>
      <NuxtLink :to="{ name: 'preview' }" class="btn btn-dark mx-2"
        >Preview
        <font-awesome-icon icon="fa-solid fa-eye" />
      </NuxtLink>
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
  computed: {
    CvData() {
      const store = useStore();
      const route = useRoute();
      const cv_store = useCVStore();
      if (route.query.id) {
        const tmp = cv_store.CVList.find(({ id }) => id == route.query.id);
        if (tmp?.cv) {
          store.setUpdateCvData(JSON.parse(tmp.cv));
          return store.UpdateCvData;
        }
      }
      return store.cvData;

    },
  },
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
