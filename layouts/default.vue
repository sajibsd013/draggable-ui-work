<template>
  <div class="root">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { refreshToken } = useAuthStore(); // use authenticateUser action from  auth store
refreshToken();
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
