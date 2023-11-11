<template>
  <section class="container">
    <div
      class="my-4 border-1 border border-secondary rounded-4 border-opacity-75 p-3 p-md-5 bg-white col-lg-5 col-md-6 mx-auto"
    >
      <h4 class="mb-3 text-primary">Welcome back!</h4>
      <form class="form" @submit.prevent="login">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            class="form-control"
            id="username"
            placeholder="Enter your username"
            v-model="user.username"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            placeholder="Enter your password"
            v-model="user.password"
          />
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary btn-sm" type="submit">Log in</button>
        </div>
      </form>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: "admin",
  password: "admin",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated

  if (authenticated.value) {
    router.push("/");
  }

 
};
</script>
