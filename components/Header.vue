<template>
  <nav class="navbar navbar-dark navbar-expand-sm">
    <div class="container">
      <NuxtLink class="navbar-brand fw-bold" to="/">CV builder</NuxtLink>

      <!-- <div class="" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <template v-if="!authenticated">
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="{ name: 'login' }"
                >Login
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="{ name: 'create' }"
                >Create account</NuxtLink
              >
            </li>
          </template>
        </ul>
    
      </div> -->
      <div v-if="!authenticated" >
        <NuxtLink class="btn btn-sm btn-outline-light mx-1" :to="{ name: 'create' }">Create CV</NuxtLink>
        <NuxtLink class="btn btn-sm btn-outline-light mx-1" :to="{ name: 'login' }">Login </NuxtLink>
        <NuxtLink class="btn btn-sm btn-outline-light" :to="{ name: 'register' }"
          >Create account</NuxtLink
        >
      </div>

      <div class="dropdown-center" v-if="authenticated">
        <NuxtLink class="btn btn-sm btn-outline-light mx-1" :to="{ name: 'create' }">Create CV </NuxtLink>

        <button
          class="btn btn-light dropdown-toggle small"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <small> Welcome {{ user?.email }}!</small>
        </button>
        <ul class="dropdown-menu dropdown-menu-end small">
          <li><NuxtLink class="dropdown-item small pointer" :to="{ name: 'profile' }">Profile</NuxtLink></li>
          <li><a class="dropdown-item small pointer">Setting</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item small pointer" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const router = useRouter();

const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>
