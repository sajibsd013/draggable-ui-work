<script setup>
import { useStore } from "@/store";
const store = useStore();
</script>

<template>
  <div
    class="floting__menu border rounded-pill py-5 px-2"
    style="z-index: 99999999"
  >
    <div class="d-flex justify-content-center text-white text-center">
      <font-awesome-icon icon="fa-solid fa-paint-brush " class="me-1" />
      <h6 class="d-none small floting_menu__text">Themes</h6>
    </div>
    <hr class="text-light" />
    <ul class="list-group rounded-0">
      <template v-for="(theme, index) in themes" :key="index">
        <li
          class="list-group-item small pointer text-center text-light border-0 d-flex align-items-center"
          style="text-transform: capitalize"
          :class="theme.name == CvData.theme ? 'active_theme__li' : 'none'"
          @click="store.changeThemes(`${theme.name}`, CvData)"
        >
          <font-awesome-icon :icon="`fa-solid fa-${theme.icon} `" class="me-1" />
          <span class="d-none floting_menu__text">{{ theme.name }}</span>
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
      themes: [
        {
          name: "default",
          icon: "cogs",
        },
        {
          name: "modern",
          icon: "rocket",
        },
        {
          name: "lavender",
          icon: "feather-alt",
        },
        {
          name: "deco",
          icon: "gem",
        },
      ],
    };
  },
  props: {
    CvData: Object,
  },
};
</script>

<style></style>
