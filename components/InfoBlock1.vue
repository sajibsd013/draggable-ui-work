<template>
  <div class="p-4">
    <!-- {{ block_data }} -->
    <div class="">
      <div class="my-3">
        <p
          class="form-control text-center border-0 bg-white py-1 section_head"
          style="font-size: 30px"
          id="name"
          rows="1"
        >
          {{ block_data.name }}
        </p>
      </div>
      <!-- {{ block_data }} -->
      <div class="row g-5">
        <div class="col-md-6">
          <template v-for="(element, index) in block_data.left" :key="index">
            <div
              class="rounded justify-content-center"
            >
              <div class="d-flex justify-content-start align-items-start ">
                <div class="row g-0 w-100">
                  <div class="col-md-5">
                    <p>
                      {{ element.label }}
                    </p>
                  </div>
                  <div class="col-md-7">
                    <p class="text-primary">
                      {{ element.information }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="col-md-6">
          <template v-for="(element, index) in block_data.right" :key="index">
            <div
              class="rounded justify-content-center"
            >
              <div class="d-flex justify-content-start align-items-start">
                <div class="row g-0 w-100">
                  <div class="col-md-5">
                    <p>
                      {{ element.label }}
                    </p>
                  </div>
                  <div class="col-md-7">
                    <p class="text-primary">
                      {{ element.information }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
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
