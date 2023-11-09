<template>
  <div>
    <div ref="pdfSection">
      Thanks for testing out nuxt-pdf!
    </div>
    <button @click="exportToPDF('my-pdf-file.pdf', pdfSection)">
      print card
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { exportToPDF } from '#imports'

const pdfSection = ref<HTMLElement | null>(null)
</script>
