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
      <div class="">
        <template v-for="(option, index) in block_data.options" :key="index">
          <div
            class="row my-3 block block__inner p-1 rounded justify-content-end"
          >
            <div class="col-12">
              <font-awesome-icon
                icon="fa-solid fa-xmark"
                class="text-white pointer inner_action__btn inner_trash__btn bg-danger rounded-circle"
              />
            </div>
            <div
              class="col-md-3 d-flex justify-content-start aling-items-center"
            >
              <font-awesome-icon
                icon="fa-solid fa-bars "
                class="text-secondary pointer inner_action__btn inner_move__btn me-1"
              />
              <textarea
                type="text"
                class="form-control form-control-sm border-0 bg-white small"
                id="title"
                v-model="block_data.options[index].date"
                rows="1"
              >
              </textarea>
            </div>
            <div class="col-md-2">
              <textarea
                type="text"
                class="form-control form-control-sm border-0 bg-white small"
                id="title"
                v-model="block_data.options[index].location"
                rows="1"
              >
              </textarea>
            </div>
            <div class="col-md-7">
              <textarea
                type="text"
                class="form-control form-control-sm border-0 bg-white small"
                id="title"
                v-model="block_data.options[index].position"
                rows="1"
              >
              </textarea>
            </div>
            <div class="col-md-7">
              <textarea
                type="text"
                class="form-control form-control-sm border-0 bg-white small"
                id="title"
                v-model="block_data.options[index].description"
                rows="1"
              >
              </textarea>
            </div>
          </div>
        </template>
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
</template>

<script>
export default {
  data() {
    return {
      block_data: {
        title: "New Listing",
        options: [
          {
            date: "Date",
            location: "Location",
            position: "Position",
            description: "Description",
          },
          {
            date: "Date",
            location: "Location",
            position: "Position",
            description: "Description",
          },
        ],
      },
    };
  },
};
</script>
