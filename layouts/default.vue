<template>
  <div class="root " >
    <Header />
    <!-- <FlotingMenu /> -->
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
import { useStore } from "@/store";
import { useCVStore } from "~/store/cv";

const cv = useCVStore();
const store = useStore();
if (!store?.cvData?.data?.length) {
  store.getCvData();
}
if (!store?.defaultData?.data?.length) {
  store.getDefaultData();
}

// use authenticateUser action from  auth store
const { refreshToken } = useAuthStore();
refreshToken();
setTimeout(() => {}, 10);
</script>
<style scoped>
.root {
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
  /* padding: 0 100px; */
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
