<template>
  <div class="py-2 px-4">
    <!-- {{ block_data }} -->
    <div class="">
      <div class="mb-3">
        <p
          v-if="isPreview"
          class="border-0 bg-white section_head"
          style="font-size: 25px"
        >
          {{ block_data.title }}
        </p>
        <textarea
          v-if="!isPreview"
          class="form-control border-0 bg-white section_head"
          style="font-size: 25px"
          id="title"
          v-model="block_data.title"
          rows="1"
        >
        </textarea>
      </div>
      <div class="row" v-if="!isPreview">
        <draggable handle=".handle" v-model="block_data.items" item-key="id">
          <template #item="{ element }">
            <div
              class="col-12 block block__inner p-1 rounded justify-content-end"
            >
              <div class="">
                <font-awesome-icon
                  icon="fa-solid fa-xmark"
                  class="text-white pointer inner_action__btn inner_trash__btn rounded-circle"
                  @click="removeOption(element)"
                />
              </div>
              <div class="d-flex justify-content-start aling-items-center">
                <font-awesome-icon
                  icon="fa-solid fa-bars "
                  class="text-secondary pointer inner_action__btn inner_move__btn handle me-1"
                />
                <ResizeTextarea
                  type="text"
                  class="form-control form-control-sm border-0 bg-white des_sec textarea"
                  id="title"
                  v-model="element.name"
                  :rows="1"
                >
                </ResizeTextarea>
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
      <div class="row" v-if="isPreview">
        <template v-for="(element, index) in block_data.items" :key="index">
          <div
            class="col-12"
          >
              <p
                type="text"
                class=" textarea border-0 bg-white des_sec"
                id="title"
              >{{ element.name }}
                </p>
            </div>
        </template>
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
      //   title: "New Single Block",
      //   items: [
      //     {
      //       name: "Description 1",
      //     },
      //     {
      //       name: "Description",
      //     },
      //   ],
      // },
    };
  },
  props: {
    block_data: Object,
    isPreview: Boolean,
  },
  methods: {
    addOption() {
      const new_option = {
        name: "Description",
      };
      this.block_data.items.push(new_option);
    },

    removeOption(data) {
      this.block_data.items = this.block_data.items.filter((x) => x != data);
    },
  },
};
</script>
