<template>
  <section class="container">
    <div
      class="my-4 border-1 border border-secondary rounded-4 border-opacity-75 p-3 p-md-5 bg-white col-lg-5 col-md-6 mx-auto"
    >
      <div class="alert alert-success text-center" role="alert" v-if="route.query.status=='activated'">
        Account <b>{{ route.query.status }}</b
        >, You can login now
      </div>
      <h4 class="mb-3 text-primary">Welcome back!</h4>
      <form class="form" @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Enter email</label>
          <input
          type="email"
            class="form-control"
            id="email"
            placeholder=""
            v-model="user.email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            placeholder=""
            v-model="user.password"
          />
        </div>
        <div class="d-grid gap-2 text-center">
          <button class="btn btn-primary btn-sm" type="submit">Log in</button>
            <h6>or</h6>
          <NuxtLink :to="{name: 'register'}"  >Create Account</NuxtLink>

        </div>
      </form>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const route = useRoute();

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  email: "",
  password: "",
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
