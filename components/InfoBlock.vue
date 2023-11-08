<template>
  <div class="p-4">
    <!-- {{ block_data }} -->
    <div class="">
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control form-control-lg text-center border-0 bg-white"
          style="font-size: 30px"
          id="name"
          v-model="block_data.name"
          rows="1"
        >
        </textarea>
      </div>
      <div class="row g-5">
        <div class="col-md-6">
          <draggable v-model="block_data.table1" item-key="id">
            <template #item="{ element }">
              <div
                class="row my-1 block block__inner p-1 rounded justify-content-center"
              >
                <!-- {{ element }} -->
                <div class="col-12">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    class="text-white pointer inner_action__btn inner_trash__btn bg-danger rounded-circle"
                    @click="removeLeftOption(element)"
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
                    id="label"
                    v-model="element.label"
                    rows="1"
                  >
                  </textarea>
                </div>
                <div class="col-md-7">
                  <textarea
                    type="text"
                    class="form-control form-control-sm border-0 bg-white small"
                    id="information"
                    v-model="element.information"
                    rows="1"
                  >
                  </textarea>
                </div>
              </div>
            </template>
          </draggable>
          <button class="btn w-100 add_btn my-3" @click="addLeftOption">
            <font-awesome-icon
              icon="fa-solid fa-plus"
              class="bg-success text-white p-1 rounded-circle"
              style="width: 10px; height: 10px"
            />
          </button>
        </div>
        <div class="col-md-6">
          <draggable v-model="block_data.table2" item-key="id">
            <template #item="{ element }">
              <div
                class="row my-1 block block__inner p-1 rounded justify-content-center"
              >
                <!-- {{ element }} -->
                <div class="col-12">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    class="text-white pointer inner_action__btn inner_trash__btn bg-danger rounded-circle"
                    @click="removeRightOption(element)"

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
                    id="label"
                    v-model="element.label"
                    rows="1"
                  >
                  </textarea>
                </div>
                <div class="col-md-7">
                  <textarea
                    type="text"
                    class="form-control form-control-sm border-0 bg-white small"
                    id="information"
                    v-model="element.information"
                    rows="1"
                  >
                  </textarea>
                </div>
              </div>
            </template>
          </draggable>
          <button class="btn w-100 add_btn my-3" @click="addRightOption">
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
      //   name: "John Doe",
      //   table1: [
      //     {
      //       label: "Address:",
      //       information: "123 State St. Oslo, Norway",
      //     },
      //     {
      //       label: "Phone:",
      //       information: "555-123-4567",
      //     },
      //     {
      //       label: "Email:",
      //       information: "john@polygonal.eu",
      //     },
      //   ],
      //   table2: [
      //     {
      //       label: "Website:",
      //       information: "https://polygonal.eu",
      //     },
      //     {
      //       label: "Linkedin",
      //       information: "https://www.linkedin.com/",
      //     },
      //     {
      //       label: "label",
      //       information: "information",
      //     },
      //   ],
      // },
    };
  },
  props: {
    block_data: Object,
  },
  methods: {
    addLeftOption() {
      console.log("LeftOption added");
      const new_option = {
        label: "label",
        information: "information",
      };
      this.block_data.table1.push(new_option)
    },
    addRightOption() {
      console.log("RightOption added");
      const new_option = {
        label: "label",
        information: "information",
      };
      this.block_data.table2.push(new_option)
    },
    removeLeftOption(data){
      this.block_data.table1 = this.block_data.table1.filter(x=> x!=data)
    },
    removeRightOption(data){
      this.block_data.table2 = this.block_data.table2.filter(x=> x!=data)
    }
  },
};
</script>
