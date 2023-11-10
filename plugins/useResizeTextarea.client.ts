import ResizeTextarea from 'resize-textarea-vue3'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('resize-textarea', ResizeTextarea)
})