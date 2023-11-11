import { defineStore } from "pinia";
// import { useMyFetch } from "#composables";

// const appConfig = useAppConfig()


interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  
  state: () => ({
    authenticated: false,
    user: {},
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {

      // useFetch from nuxt 3
      const { data, pending }: any = await useMyFetch(
        // "http://127.0.0.1:8000/auth/login",
        "/auth/login",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username,
            password,
          },
        }
      );
      this.loading = pending;
      if (data?.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = data?.value?.access; // set token to cookie
        this.authenticated = true;
        setTimeout(() => {
          this.getUserData();
        }, 100);
      }
    },
    async getUserData() {
      const token = useCookie("token");
      // useFetch from nuxt 3
      const { data, pending }: any = await useMyFetch(
        "/auth/user",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.value}`,
          },
        }
      );
      this.loading = pending;

      if (data?.value) {
        this.user = data?.value?.user; 
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      this.user = {}; // clear the token cookie
    },
  },
  persist: true,
});
