<template>
  <div class="p-4">
    <!-- {{ block_data }} -->
    <div class="">
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control form-control-lg text-center border-0 bg-white"
          style="font-size: 30px"
          id="title"
          v-model="block_data.title"
          rows="1"
        >
        </textarea>
      </div>
      <div class="row g-5">
        <div class="col-md-6">
          <draggable v-model="block_data.left_options" item-key="id">
            <template #item="{ element }">
              <div
                class="row my-1 block block__inner p-1 rounded justify-content-center"
              >
              <!-- {{ element }} -->
                <div class="col-12">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    class="text-white pointer inner_action__btn inner_trash__btn bg-danger rounded-circle"
                  />
                </div>
                <div
                  class="col-md-5 d-flex justify-content-start aling-items-center"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-bars "
                    class="text-secondary pointer inner_action__btn inner_move__btn"
                  />
                  <textarea
                    type="text"
                    class="form-control form-control-sm border-0 bg-white fw-semibold"
                    id="title"
                    v-model="element.label"
                    rows="1"
                  >
                  </textarea>
                </div>
                <div class="col-md-7">
                  <textarea
                    type="text"
                    class="form-control form-control-sm border-0 bg-white small"
                    id="title"
                    v-model="element.information"
                    rows="1"
                  >
                  </textarea>
                </div>
              </div>
            </template>
          </draggable>
          <button class="btn w-100 add_btn my-3">
            <font-awesome-icon
              icon="fa-solid fa-plus"
              class="bg-success text-white p-1 rounded-circle"
              style="width: 10px; height: 10px"
            />
          </button>
        </div>
        <div class="col-md-6">
          <draggable v-model="block_data.right_options" item-key="id">
            <template #item="{ element }">
              <div
                class="row my-1 block block__inner p-1 rounded justify-content-center"
              >
              <!-- {{ element }} -->
                <div class="col-12">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    class="text-white pointer inner_action__btn inner_trash__btn bg-danger rounded-circle"
                  />
                </div>
                <div
                  class="col-md-5 d-flex justify-content-start aling-items-center"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-bars "
                    class="text-secondary pointer inner_action__btn inner_move__btn"
                  />
                  <textarea
                    type="text"
                    class="form-control form-control-sm border-0 bg-white fw-semibold"
                    id="title"
                    v-model="element.label"
                    rows="1"
                  >
                  </textarea>
                </div>
                <div class="col-md-7">
                  <textarea
                    type="text"
                    class="form-control form-control-sm border-0 bg-white small"
                    id="title"
                    v-model="element.information"
                    rows="1"
                  >
                  </textarea>
                </div>
              </div>
            </template>
          </draggable>
          <button class="btn w-100 add_btn my-3">
            <font-awesome-icon
              icon="fa-solid fa-plus"
              class="bg-success text-white p-1 rounded-circle"
              style="width: 10px; height: 10px"
            />
          </button>
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
  data() {
    return {
      block_data: {
        title: "John Doe",
        left_options: [
          {
            label: "Address:",
            information: "123 State St. Oslo, Norway",
          },
          {
            label: "Phone:",
            information: "555-123-4567",
          },
          {
            label: "Email:",
            information: "john@polygonal.eu",
          },
        ],
        right_options: [
          {
            label: "Website:",
            information: "https://polygonal.eu",
          },
          {
            label: "Linkedin",
            information: "https://www.linkedin.com/",
          },
          {
            label: "label",
            information: "information",
          },
        ],
      },
    };
  },
};
</script>
