interface UserPayloadInterface {
  cv: string;
  user: string;
}
export const useCVStore = defineStore("CV", {
  state: () => ({
    cv_list: [],
  }),
  getters: {
    CVList: (state) => state.cv_list,
  },
  actions: {
    async saveCV({ cv, user }: UserPayloadInterface) {
      const token = useCookie("token");
      const { data, pending }: any = await useMyFetch("/api/cv/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          cv: JSON.stringify(cv),
          user,
        },
      });


    },
    async getCV() {
      const token = useCookie("token");
      const { data, pending }: any = await useMyFetch("/api/cv/", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      });
      if (data?.value) {
        this.cv_list = data?.value;
      }
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
