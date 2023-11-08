<template>
    <div>
      <h3>Transition Example</h3>
      <draggable
        v-model="myList" item-key="id"
      >
      <template #item="{element}">
          <div>
            <p>
              {{element.name}} 
            </p>
            <p>{{element.order}}</p>
          </div>
      </template>
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
          { name: "Third Item", address:"Sylhet", order: 3 },
          { name: "First Item", address:"Sylhet1", order: 1 },
          { name: "Second Item", address:"Sylhet2", order: 2 },
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