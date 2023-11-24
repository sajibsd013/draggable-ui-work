<template>
  <div class="container">
    <h6 class="my-5">Welcome {{user?.username}}!</h6>

    <Temp/>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const router = useRouter();

const { getUserData } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

// getUserData()


</script>