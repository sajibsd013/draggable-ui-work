<template>
  <div class="root">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.root{
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
  /* padding: 0 100px; */
 
}
footer{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
