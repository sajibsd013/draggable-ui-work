<template>
  <div class="py-2 px-4">
    <div class="">
      <div class="mb-0">
        <p
          v-if="isPreview"
          class="border-0 bg-white section_head"
          style="font-size: 25px"
        >
          {{ block_data.title }}
        </p>
        <textarea
          v-if="!isPreview"
          type="text"
          class="form-control border-0 bg-white section_head"
          style="font-size: 25px"
          id="title"
          v-model="block_data.title"
          rows="1"
        >
        </textarea>
      </div>
      <div class="row" v-if="!isPreview">
        <draggable
          handle=".handle"
          v-model="block_data.items"
          item-key="id"
          class="row"
        >
          <template #item="{ element }">
            <div
              class="block block__inner p-1 rounded justify-content-end col-md-4 col-6"
            >
              <div class="">
                <font-awesome-icon
                  icon="fa-solid fa-xmark"
                  class="text-white pointer inner_action__btn inner_trash__btn rounded-circle"
                  @click="removeOption(element)"
                />
              </div>
              <div
                class="d-flex justify-content-start aling-items-center three-column"
              >
                <font-awesome-icon
                  icon="fa-solid fa-bars "
                  class="text-secondary pointer inner_action__btn inner_move__btn handle me-1"
                />
                <ul class="w-100 mb-0 pb-0">
                  <li class="mb-0 pb-0">
                    <textarea
                      type="text"
                      class="form-control form-control-sm textarea border-0 bg-white small px-0 mx-0"
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
      <div class="row g-0" v-if="isPreview">
        <template v-for="(element, index) in block_data.items" :key="index">
          <div
            class="rounded justify-content-end col-md-4 col-6 three-column"
          >

              <ul class="w-100 mb-0 pb-0">
                <li class="mb-0 pb-0">
                  <p
                    class="textarea des_sec border-0 bg-white small px-0 mx-0 py-1 my-0"
                  >
                  {{ element.name }}
                  </p>
                </li>
              </ul>
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
  computed: {
    blockData() {
      const new_option = {
        name: "add_btn",
      };
      const temp = JSON.parse(JSON.stringify(this.block_data));
      if (temp && temp.items) {
        temp["items"].push(new_option);
      }

      return temp;
    },
  },
  data() {
    return {};
  },
  props: {
    block_data: Object,
    isPreview: Boolean,
  },

  methods: {
    addOption() {
      const new_option = {
        name: "New items",
      };
      this.block_data.items.push(new_option);
    },
    addBtn() {
      const new_option = {
        name: "add_btn",
      };
      this.block_data.items.push(new_option);
    },

    removeOption(data) {
      this.block_data.items = this.block_data.items.filter((x) => x != data);
    },
  },

  mounted() {},
};
</script>
