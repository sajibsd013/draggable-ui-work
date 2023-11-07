<template>
    <div>
      <h3>Transition Example</h3>
      <draggable
        v-model="myList"
      >
        <transition-group name="flip-transition">
          <div
            class="list-item"
            v-for="item in myList"
            :key="item.order"
          >
            {{ item.name }}
          </div>
        </transition-group>
      </draggable>
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
        myList: [
          { name: "Third Item", order: 3 },
          { name: "First Item", order: 1 },
          { name: "Second Item", order: 2 },
        ],
      };
    },
  };
  </script>
  
  <style>
  .flip-transition-move {
    transition: all 0.7s;
  }
  .list-item{
    padding: 10px;
    border: 1px solid #ccc;
  }
  </style>