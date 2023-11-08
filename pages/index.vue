<template>
  <div class="container">
    <!-- {{ cv_data }} -->
    <!-- <StateDemo/> -->
    <div class="my-5 border-1 border rounded p-5 bg-white">
      <draggable v-model="cv_data" item-key="id">
        <template #item="{ element }">
          <div class="block block__outer rounded">
            <div class="action d-flex justify-content-between p-1">
              <font-awesome-icon
                icon="fa-solid fa-bars"
                class="text-secondary pointer outer_action__btn move__btn"
              />
              <font-awesome-icon
                icon="fa-solid fa-xmark"
                class="text-white pointer outer_action__btn trash__btn border bg-danger rounded-circle"
                @click="removeBlcok(element)"
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
                @click="addNewBlock('info')"
              />
              <h6 class="small text-center my-2">INFO</h6>
            </div>

            <div class="col-3">
              <img
                src="@/assets/img/new-section-3-col.png"
                alt="new-section-3"
                class="w-100 pointer new_section_image"
                @click="addNewBlock('three-column')"

              />
              <h6 class="small text-center my-2"> THREE COLUMNS</h6>
            </div>

            <div class="col-3">
              <img
                src="@/assets/img/new-section-listing.png"
                alt="new-section-listing"
                class="w-100 pointer new_section_image"
                @click="addNewBlock('listing')"

              />
              <h6 class="small text-center my-2">LISTING</h6>
            </div>
            <div class="col-3">
              <img
                src="@/assets/img/new-section-block.png"
                alt="new-section-block"
                class="w-100 pointer new_section_image"
                @click="addNewBlock('single-block')"

              />
              <h6 class="small text-center my-2">BLOCK</h6>
            </div>
          </div>
        </div>
      </div>
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
      blocks: [
        {
          name: "INFO",
          type: "info",
          img: "@/assets/img/new-section-info.png",
        },
        {
          name: "LISTING",
          type: "listing",
          img: "@/assets/img/new-section-3-col.png",
        },
        {
          name: "THREE COLUMNS",
          type: "three-column",
          img: "@/assets/img/new-section-listing.png",
        },
        {
          name: "BLOCK",
          type: "single-block",
          img: "@/assets/img/new-section-block.png",
        },
      ],
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
    removeBlcok(block) {
      this.cv_data = this.cv_data.filter((x) => x != block);
    },
    async getCvData() {
      // const API_URL = window.location.origin + "";

      await this.$api
        .get(`/data/cv.json`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.cv_data = res.data;
          //   context.commit('getDefaultdata', res.data.results)
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    addNewBlock(type) {
      var new_block = null;
      if (type == "info") {
        new_block = {
          name: "John Doe",
          type: type,
          table1: [
            {
              label: "label",
              information: "information",
            },
          ],
          table2: [
            {
              label: "label",
              information: "information",
            },
          ],
        };
      } else if (type == "single-block") {
        new_block = {
          title: "New Single Block",
          type: type,

          items: [
            {
              name: "Description",
            },
          ],
        };
      } else if (type == "listing") {
        new_block = {
          title: "New Listing",
          type: type,
          options: [
            {
              date: "Date",
              location: "Location",
              position: "Position",
              description: "Description",
            },
          ],
        };
      } else if (type == "three-column") {
        new_block = {
          title: "New Three Column Section",
          type: type,
          items: [
            {
              name: "New items 1",
            },
            {
              name: "New items 2",
            },
          ],
        };
      }
      console.log(new_block);
      this.toggleOpen()
      this.cv_data.push(new_block);
    },
  },
  mounted() {
    // this.$store.dispatch("cv/getCvData");
    this.getCvData();
  },
};
</script>

<style scoped></style>
