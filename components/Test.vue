<template>
    <div>
      <textarea
        v-model="text"
        @keydown.enter="increaseRows"
        :rows="rows"
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: "",
        rows: 1,
      };
    },
    methods: {
      increaseRows() {
        // Increase the number of rows when Enter key is pressed
        this.rows++;
      },
    },
  };
  </script>
  