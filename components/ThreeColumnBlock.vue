<template>
  <div class="py-2 px-4">
    <!-- {{ block_data }} -->
    <div class="">
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control form-control-lg border-0 bg-white"
          style="font-size: 27px"
          id="title"
          v-model="block_data.title"
          rows="1"
        >
        </textarea>
      </div>
      <div class="row">
        <draggable v-model="block_data.items" item-key="id" class="row">
          <template #item="{ element }">
            <div
              class="block block__inner p-1 rounded-lg justify-content-end col-4"
            >
              <div class="">
                <font-awesome-icon
                  icon="fa-solid fa-xmark"
                  class="text-white pointer inner_action__btn inner_trash__btn bg-danger rounded-circle"
                  @click="removeOption(element)"
                />
              </div>
              <div class="d-flex justify-content-start aling-items-center">
                <font-awesome-icon
                  icon="fa-solid fa-bars "
                  class="text-secondary pointer inner_action__btn inner_move__btn me-1"
                />
                <ul class="w-100 mb-0 pb-0">
                  <li class="mb-0 pb-0">
                    <textarea
                      type="text"
                      class="form-control form-control-sm border-0 bg-white small"
                      id="title"
                      v-model="element.name"
                      rows="1"
                    >
                    </textarea>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </draggable>
        <div class="col-12 p-1">
          <button class="btn w-100 add_btn" @click="addOption">
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
      // block_data: {
      //   title: "New Three Column Section",
      //   items: [
      //     {
      //       name: "New items 1",
      //     },
      //     {
      //       name: "New items 2",
      //     },
      //   ],
      // },
    };
  },
  props: {
    block_data: Object,
  },

  methods: {
    addOption() {
      const new_option = {
        name: "New items",
      };
      this.block_data.items.push(new_option);
    },

    removeOption(data) {
      this.block_data.items = this.block_data.items.filter((x) => x != data);
    },
  },
};
</script>
