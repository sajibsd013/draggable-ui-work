<script setup>
import { useStore } from "@/store";
const store = useStore();
</script>

<template>
  <div class="floting__menu border rounded-pill py-5  px-2" style="z-index: 99999999;">
    <div class="d-flex justify-content-center text-white text-center">
      <font-awesome-icon icon="fa-solid fa-bars " class="me-1" />
      <h6 class="d-none small floting_menu__text" >Themes</h6>
    </div>
    <hr class="text-light" />
    <ul class="list-group rounded-0">
      <template v-for="(themes, index) in themes_list" :key="index">
        <li
          class="list-group-item small pointer text-center text-light border-0"
          style="text-transform: capitalize"
          :class="themes == CvData.theme ? 'active_theme__li' : 'none'"
          @click="store.changeThemes(`${themes}`,CvData)"
        >
          <span class="d-none floting_menu__text">{{ themes }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes_list: ["default", "modern", "lavender", "deco"],
    };
  },
  props: {
    CvData: Object,
  },
};
</script>

<style></style>
