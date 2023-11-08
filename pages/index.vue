<template>
  <div class="container">
    <div class="my-5 border-1 border rounded p-5 bg-white">
      <div class="block block__outer rounded">
        <div class="action d-flex justify-content-between p-1">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            class="text-secondary pointer outer_action__btn move__btn"
          />
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            class="text-white pointer outer_action__btn trash__btn border bg-danger rounded-circle"
          />
        </div>
        <InfoBlock />
      </div>
      <div class="block block__outer rounded">
        <div class="action d-flex justify-content-between p-1">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            class="text-secondary pointer outer_action__btn move__btn"
          />
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            class="text-white pointer outer_action__btn trash__btn border bg-danger rounded-circle"
          />
        </div>
        <ListingBlock />
      </div>
      <div class="block block__outer rounded">
        <div class="action d-flex justify-content-between p-1">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            class="text-secondary pointer outer_action__btn move__btn"
          />
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            class="text-white pointer outer_action__btn trash__btn border bg-danger rounded-circle"
          />
        </div>
        <ThreeColumnBlock />
      </div>
      <div class="block block__outer rounded">
        <div class="action d-flex justify-content-between p-1">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            class="text-secondary pointer outer_action__btn move__btn"
          />
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            class="text-white pointer outer_action__btn trash__btn border bg-danger rounded-circle"
          />
        </div>
        <SingleBlock />
      </div>

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
              />
              <h6 class="small text-center my-2">INFO</h6>
            </div>
            <div class="col-3">
              <img
                src="@/assets/img/new-section-3-col.png"
                alt="new-section-3"
                class="w-100 pointer new_section_image"
              />
              <h6 class="small text-center my-2">LISTING</h6>
            </div>

            <div class="col-3">
              <img
                src="@/assets/img/new-section-listing.png"
                alt="new-section-listing"
                class="w-100 pointer new_section_image"
              />
              <h6 class="small text-center my-2">THREE COLUMNS</h6>
            </div>
            <div class="col-3">
              <img
                src="@/assets/img/new-section-block.png"
                alt="new-section-block"
                class="w-100 pointer new_section_image"
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
export default {
  name: "IndexPage",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
