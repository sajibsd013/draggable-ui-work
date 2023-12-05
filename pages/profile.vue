<script setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
import { useCVStore } from "~/store/cv";
const router = useRouter();
const { getUserData } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
if (!authenticated.value) {
  router.push("/login");
}
const cv_store = useCVStore();
cv_store.getCV();
</script>
<template>
  <div class="container">
    <!-- {{ getCVList }}
    <hr>
    {{ CVList }} -->
    <div
      class="my-3 border-1 border border-secondary rounded-4 border-opacity-75 p-3 col-lg-8 bg-white col-md-11 mx-auto"
    >
      <div class="my-3 d-flex justify-content-between">
        <h4 class="">CV List</h4>
  <div>
    <NuxtLink
          to="/create"
          class="btn btn-sm btn btn-sm btn-outline-dark"
          >Create New <font-awesome-icon icon="ms-1 fa-solid fa-add"
        /></NuxtLink>
  </div>
      </div>
      <ul class="list-group mb-3" v-for="(cv, index) in getCVList" :key="index">
        <li class="list-group-item d-flex bg-light justify-content-between">
          <span>
            {{ JSON.parse(cv.cv).cv_name }}
          </span>
          <span>
            <NuxtLink :to="`/preview?id=${cv.id}`" class="text-dark btn btn-sm"
              ><font-awesome-icon icon="fa-solid fa-eye"
            /></NuxtLink>
            <NuxtLink
              :to="`/create?id=${cv.id}`"
              class="mx-1 text-success btn btn-sm"
              ><font-awesome-icon icon="fa-solid fa-edit"
            /></NuxtLink>
            <button class="text-success btn btn-sm" @click="onDelete(cv.id)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getCVList() {
      const cv_store = useCVStore();
      return cv_store.CVList;
    },
  },
  data() {
    return {
      CVList: null,
    };
  },
  methods: {
    onDelete(id) {
      const cv_store = useCVStore();
      cv_store.deleteCV(id);
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
