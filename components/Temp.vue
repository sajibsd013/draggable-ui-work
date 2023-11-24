<template>
    <div>
      <div ref="pdfSection">
        Thanks for testing out nuxt-pdf!
        <h3  style="color: red;" > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, illum.</h3>
      </div>
      <button @click="exportToPDF('my-pdf-file.pdf', pdfSection)">
        print card
      </button>
    </div>
  </template>
  
  <script setup >
  import { ref } from 'vue'
  import { exportToPDF } from '#imports'
  
  const pdfSection = ref(null)
  </script>
  