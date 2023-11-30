<template>
  <div class="p-4">
    <!-- {{ block_data }} -->
    <div class="">
      <div class="my-3">
        <p
          v-if="isPreview"
          class="form-control text-center border-0 bg-white py-1 section_head"
          style="font-size: 30px"
        >
          {{ block_data.name }}
        </p>
        <textarea
          v-if="!isPreview"
          class="form-control text-center border-0 bg-white py-1 section_head"
          style="font-size: 30px"
          id="name"
          v-model="block_data.name"
          rows="1"
        >
        </textarea>
      </div>
      <!-- {{ block_data }} -->
      <div class="row g-5">
        <div class="col-md-6" v-if="isPreview">
          <template v-for="(element, index) in block_data.left" :key="index">
            <div class="rounded justify-content-center">
              <div class="d-flex justify-content-start align-items-start">
                <div class="row g-0 w-100">
                  <div class="col-md-3">
                    <p class="textarea border-0 bg-white fw-semibold"  >
                      {{ element.label }}
                    </p>
                  </div>
                  <div class="col-md-9">
                    <p class="textarea border-0 bg-white">{{
                      element.information
                    }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="col-md-6" v-if="isPreview">
          <template v-for="(element, index) in block_data.right" :key="index">
            <div class="rounded justify-content-center">
              <div class="d-flex justify-content-start align-items-start">
                <div class="row g-0 w-100">
                  <div class="col-md-3">
                    <p class="textarea border-0 bg-white fw-semibold">
                      {{ element.label }}
                    </p>
                  </div>
                  <div class="col-md-9">
                    <p class="textarea border-0 bg-white">{{
                      element.information
                    }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="col-md-6" v-if="!isPreview">
          <draggable handle=".handle" v-model="block_data.left" item-key="id">
            <template #item="{ element }">
              <div
                class="my-1 block block__inner p-1 rounded justify-content-center"
              >
                <div class="">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    class="text-white pointer inner_action__btn inner_trash__btn rounded-circle"
                    @click="removeLeftOption(element)"
                  />
                </div>
                <div class="d-flex justify-content-start align-items-start">
                  <div class="me-1 mt-1" style="width: 20px">
                    <font-awesome-icon
                      icon="fa-solid fa-bars "
                      class="text-secondary pointer inner_action__btn inner_move__btn handle"
                    />
                  </div>
                  <div class="row g-0 w-100">
                    <div class="col-md-3">
                      <textarea
                        type="text"
                        class="form-control textarea form-control-sm border-0 bg-white fw-semibold"
                        id="label"
                        v-model="element.label"
                        rows="1"
                      >
                      </textarea>
                    </div>
                    <div class="col-md-9">
                      <ResizeTextarea
                        type="text"
                        class="form-control form-control-sm border-0 bg-white small textarea"
                        id="information"
                        v-model="element.information"
                        :rows="1"
                      >
                      </ResizeTextarea>
                    </div>
                  </div>
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
        <div class="col-md-6" v-if="!isPreview">
          <draggable handle=".handle" v-model="block_data.right" item-key="id">
            <template #item="{ element }">
              <div
                class="row my-1 block block__inner p-1 rounded justify-content-center"
              >
                <div class="">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    class="text-white pointer inner_action__btn inner_trash__btn rounded-circle"
                    @click="removeRightOption(element)"
                  />
                </div>
                <div class="d-flex justify-content-start align-items-start">
                  <div class="me-1 mt-1" style="width: 20px">
                    <font-awesome-icon
                      icon="fa-solid fa-bars "
                      class="text-secondary pointer inner_action__btn inner_move__btn handle"
                    />
                  </div>
                  <div class="row g-0 w-100">
                    <div
                      class="col-md-3 d-flex justify-content-start aling-items-center"
                    >
                      <textarea
                        type="text"
                        class="form-control form-control-sm border-0 bg-white fw-semibold textarea"
                        id="label"
                        v-model="element.label"
                        rows="1"
                      >
                      </textarea>
                    </div>
                    <div class="col-md-9">
                      <ResizeTextarea
                        type="text"
                        class="form-control form-control-sm border-0 bg-white small textarea"
                        id="information"
                        v-model="element.information"
                        :rows="1"
                      >
                      </ResizeTextarea>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </draggable>
          <button
            class="btn w-100 add_btn my-3 border-success"
            @click="addRightOption"
          >
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
    return {};
  },
  props: {
    block_data: Object,
    isPreview: Boolean,
  },
  methods: {
    addLeftOption() {
      console.log("LeftOption added");
      const new_option = {
        label: "label",
        information: "information",
      };
      this.block_data.left.push(new_option);
    },
    addRightOption() {
      console.log("RightOption added");
      const new_option = {
        label: "label",
        information: "information",
      };
      this.block_data.right.push(new_option);
    },
    removeLeftOption(data) {
      this.block_data.left = this.block_data.left.filter((x) => x != data);
    },
    removeRightOption(data) {
      this.block_data.right = this.block_data.right.filter((x) => x != data);
    },
  },
};
</script>

<!-- information,Description,Description -->
