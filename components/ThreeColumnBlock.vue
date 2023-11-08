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
      <div class="row ">
        <template v-for="(item, index) in block_data.items" :key="index">
          <div
            class="col-4 block block__inner p-1 rounded justify-content-end  "
          >
            <div class="">
              <font-awesome-icon
                icon="fa-solid fa-xmark"
                class="text-white pointer inner_action__btn inner_trash__btn bg-danger rounded-circle"
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
                    v-model="block_data.items[index]"
                    rows="1"
                  >
                  </textarea>
                </li>
              </ul>
            </div>
          </div>
        </template>
        <div class="col-4  p-1 ">
          <button class="btn w-100 add_btn">
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
export default {
  data() {
    return {
      block_data: {
        title: "New Three Column Section",
        items: ["New Item", "New Item", "New Item", "New Item"],
      },
    };
  },
};
</script>
