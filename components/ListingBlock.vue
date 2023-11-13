<template>
  <div class="py-2 px-4">
    <!-- {{ block_data }} -->
    <div class="">
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control border-0 bg-white section_head"
          style="font-size: 25px"
          id="title"
          v-model="block_data.title"
          rows="1"
        >
        </textarea>
      </div>
      <div class="">
        <draggable handle=".handle" v-model="block_data.options" item-key="id">
          <template #item="{ element }">
            <div
              class="row my-3 block block__inner p-1 rounded justify-content-end"
            >
              <div class="">
                <font-awesome-icon
                  icon="fa-solid fa-xmark"
                  class="text-white pointer inner_action__btn inner_trash__btn rounded-circle"
                  @click="removeOption(element)"
                />
              </div>
              <div class="d-flex justify-content-start align-items-start">
                <div class="me-1 mt-1" style="width: 20px">
                  <font-awesome-icon
                    icon="fa-solid fa-bars "
                    class="text-secondary pointer inner_action__btn inner_move__btn handle"
                  />
                </div>
                <div class="row justify-content-end g-0 w-100">
                  <div
                    class="col-md-2 d-flex justify-content-start aling-items-center"
                  >
                    <textarea
                      type="text"
                      class="form-control form-control-sm border-0 bg-white small"
                      id="title"
                      v-model="element.date"
                      rows="1"
                    >
                    </textarea>
                  </div>
                  <div class="col-md-3">
                    <textarea
                      type="text"
                      class="form-control form-control-sm border-0 bg-white"
                      id="title"
                      v-model="element.location"
                      rows="1"
                    >
                    </textarea>
                  </div>
                  <div class="col-md-7">
                    <textarea
                      type="text"
                      class="form-control form-control-sm border-0 bg-white"
                      id="title"
                      v-model="element.position"
                      rows="1"
                    >
                    </textarea>
                  </div>
                  <div class="col-md-7">
                    <ResizeTextarea
                      type="text"
                      class="form-control form-control-sm border-0 bg-white des_sec"
                      id="title"
                      v-model="element.description"
                      :rows="1"
                    >
                    </ResizeTextarea>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </draggable>
        <button class="btn w-100 add_btn my-3" @click="addOption">
          <font-awesome-icon
            icon="fa-solid fa-plus"
            class="bg-success text-white p-1 rounded-circle"
            style="width: 10px; height: 10px"
          />
        </button>
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
    return {};
  },
  props: {
    block_data: Object,
  },

  methods: {
    addOption() {
      const new_option = {
        date: "Date",
        location: "Location",
        position: "Position",
        description: "Description",
      };
      this.block_data.options.push(new_option);
    },

    removeOption(data) {
      this.block_data.options = this.block_data.options.filter(
        (x) => x != data
      );
    },
  },
};
</script>
