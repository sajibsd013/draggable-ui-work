<template>
  <div class="root " >
    <Header />
    <FlotingMenu />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
import { useStore } from "@/store";
// use authenticateUser action from  auth store
const store = useStore();
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
