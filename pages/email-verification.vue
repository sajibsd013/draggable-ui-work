<script setup>
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const route = useRoute();
if (route.query.token) {
  const { emailVerification } = useAuthStore();
  emailVerification(route.query.token);
}
</script>
<template>
  <div class="container">
    <div class="my-3 col-lg-7 col-md-8 mx-auto" v-if="route.query.email">
      <div class="alert alert-success text-center" role="alert">
        Hello <b>{{ route.query.email }}</b
        >, Check Email & active your account
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style></style>
