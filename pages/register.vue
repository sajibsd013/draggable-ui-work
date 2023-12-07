<template>
  <section class="container">
    <div
      class="my-4 border-1 border border-secondary rounded-4 border-opacity-75 p-3 p-md-5 bg-white col-lg-5 col-md-6 mx-auto"
    >
      <h4 class="mb-3 text-primary">Hello!</h4>
      <form class="form" @submit.prevent="Register">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
          type="email"
            class="form-control"
            id="email"
            placeholder=""
            v-model="user.email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Enter Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            placeholder=""
            v-model="user.password"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Re-enter password</label>
          <input
            class="form-control"
            id="password2"
            type="password"
            placeholder=""
            v-model="user.password2"
            required
          />
        </div>
        <div class="d-grid gap-2 text-center">
          <button class="btn btn-primary btn-sm" :disabled="user.password != user.password2"  type="submit">Create Account</button>
          <h6>or</h6>
          <NuxtLink :to="{name: 'login'}"  >Log in</NuxtLink>

        </div>
      </form>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { CreateAccount } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  email: "",
  password: "",
  password2: "",
});
const router = useRouter();

const Register = async () => {
  await CreateAccount(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated

 
};
</script>
