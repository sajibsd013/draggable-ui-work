<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
import { useCVStore } from "~/store/cv";

const router = useRouter();

const { getUserData } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
if (!authenticated.value) {
    router.push("/login");
  }
// getUserData()
const cv_store = useCVStore();
cv_store.getCV();


</script>
<template>
  <div class="container">
    <h4 class="my-3">My CV</h4>
    <div v-for="(cv,index) in cv_store.CVList" :key="index">
      {{ cv.cv }}

    </div>

  </div>
</template>
