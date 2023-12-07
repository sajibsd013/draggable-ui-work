import { defineStore } from "pinia";

const TOKEN_MAXAGE = process.env.accessTokenMaxAge;
const REFRESH_TOKEN_MAXAGE = process.env.refreshTokenMaxAge;

console.log(TOKEN_MAXAGE, REFRESH_TOKEN_MAXAGE);

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    user: {},
    loading: false,
  }),
  actions: {
    async emailVerification(token) {
      // useFetch from nuxt 3

      const { data, pending }: any = await useMyFetch(
        `api/auth/email-verify?token=${token}`,
        {
          method: "get",
          headers: { "Content-Type": "application/json" },
        }
      );
      const router = useRouter();
      this.loading = pending;

      if (data?.value) {
        router.push(`/login?status=activated`);
      }
    },
    async CreateAccount({ email, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useMyFetch(
        "api/auth/registration/",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        }
      );
      const router = useRouter();
      this.loading = pending;
      if (data?.value) {
        const email = data?.value.email;
        router.push(`/email-verification?email=${email}`);
      }
    },
    async authenticateUser({ email, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useMyFetch(
        // "http://127.0.0.1:8000/auth/login",
        "api/auth/login/",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        }
      );
      this.loading = pending;
      if (data?.value) {
        const token = useCookie("token", { maxAge: TOKEN_MAXAGE }); // useCookie new hook in nuxt 3
        token.value = data?.value?.access; // set token to cookie
        const refresh_token = useCookie("refresh_token", {
          maxAge: REFRESH_TOKEN_MAXAGE,
        }); // useCookie new hook in nuxt 3
        refresh_token.value = data?.value?.refresh; // set token to cookie
        // useMyFetch setHeader ('Authorization', 'Bearer ' + token.value)
        this.authenticated = true;
        setTimeout(() => {
          this.getUserData();
        }, 10);
      }
    },
    async getUserData() {
      const token = useCookie("token");
      // useFetch from nuxt 3
      const { data, pending }: any = await useMyFetch("api/auth/user/", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      });
      this.loading = pending;

      if (data?.value) {
        this.user = data?.value?.user;
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      const refresh_token = useCookie("refresh_token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      refresh_token.value = null; // clear the token cookie
      this.user = {}; // clear the token cookie
    },

    async refreshTokenF() {
      console.log("refreshTokenF called!");

      const token = useCookie("token"); // useCookie new hook in nuxt 3
      const refresh_token = useCookie("refresh_token"); // useCookie new hook in nuxt 3

      if (refresh_token.value) {
        const { data, pending }: any = await useMyFetch(
          "api/auth/token/refresh/",
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: {
              refresh: refresh_token,
            },
          }
        );

        if (data?.value) {
          const token = useCookie("token", { maxAge: TOKEN_MAXAGE }); // useCookie new hook in nuxt 3
          token.value = data?.value?.access; // set token to cookie
          // useMyFetch setHeader ('Authorization', 'Bearer ' + token.value)
          this.authenticated = true;
          setTimeout(() => {
            this.getUserData();
          }, 10);
        } else {
          this.logUserOut();
        }
      }
    },
    refreshToken() {
      this.refreshTokenF();
      const refresh_interval = setInterval(
        this.refreshTokenF,
        TOKEN_MAXAGE * 1000
      );
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
