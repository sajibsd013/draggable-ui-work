<template>
  <div class="p-4">
    <!-- {{ block_data }} -->
    <div>
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
      <div class="row">
        <div class="col-md-6">
          <template
            v-for="(option, index) in block_data.left_options"
            :key="index"
          >
            <div class="row my-2">
              <div class="col-md-4">
                <textarea
                  type="text"
                  class="form-control form-control-sm text-center border-0 bg-white fw-semibold"
                  id="title"
                  v-model="block_data.left_options[index].label"
                  rows="1"
                >
                </textarea>
              </div>
              <div class="col-md-8">
                <textarea
                  type="text"
                  class="form-control form-control-sm text-center border-0 bg-white small"
                  id="title"
                  v-model="block_data.left_options[index].information"
                  rows="1"
                >
                </textarea>
              </div>
            </div>
          </template>
          
          
          <button class="btn w-100 add_btn my-3"><font-awesome-icon icon="fa-solid fa-plus" class="bg-success text-white p-1 rounded-circle" style="width: 10px; height: 10px;" /></button>
        </div>
        <div class="col-md-6">
          <template
            v-for="(option, index) in block_data.right_options"
            :key="index"
          >
            <div class="row my-2">
              <div class="col-md-4">
                <textarea
                  type="text"
                  class="form-control form-control-sm text-center border-0 bg-white fw-semibold"
                  id="title"
                  v-model="block_data.right_options[index].label"
                  rows="1"
                >
                </textarea>
              </div>
              <div class="col-md-8">
                <textarea
                  type="text"
                  class="form-control form-control-sm text-center border-0 bg-white small"
                  id="title"
                  v-model="block_data.right_options[index].information"
                  rows="1"
                >
                </textarea>
              </div>
            </div>
          </template>
          
          
          <button class="btn w-100 add_btn my-3"><font-awesome-icon icon="fa-solid fa-plus" class="bg-success text-white p-1 rounded-circle" style="width: 10px; height: 10px;" /></button>
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
