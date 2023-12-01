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
      const router = useRouter();

      if(data?.value){
        router.push("/profile");
      }


    },
    async updateCV({ cv, user, id }) {
      const token = useCookie("token");
      const { data, pending }: any = await useMyFetch(`/api/cv/${id}/`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          cv: JSON.stringify(cv),
          user,
        },
      });
      const router = useRouter();

      if(data?.value){
        router.push("/profile");
      }


    },
    async deleteCV(id) {
      const token = useCookie("token");
      const { data, pending }: any = await useMyFetch(`/api/cv/${id}/`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: {
        },
      });
      this.getCV()


      if(data?.value){
      }


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
        console.log('====================================');
        console.log(data?.value);
        console.log('====================================');
        this.cv_list = data?.value;
      }
    },
  },
  persist: true,
});
