<script setup>
import { useStore } from "@/store";

const store = useStore();

</script>

<template>
  <div class="floting__menu border rounded-pill  py-5">
    <h6 class="fw-semibold text-center text-light smalls">Themes</h6>
    <hr class="text-light">
    <ul class="list-group rounded-0">
     <template v-for="(themes, index) in themes_list" :key="index">
        <li class="list-group-item small pointer text-center text-light border-dark " style="text-transform: capitalize;" :class="themes==store.getThemes?'active_theme__li':'none'" @click="store.changeThemes(`${themes}`)">{{ themes }}</li>
     </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        themes_list: ['default','modern','lavender','deco'],
    };
  },
};
</script>

<style></style>
