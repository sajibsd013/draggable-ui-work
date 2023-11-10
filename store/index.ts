import axios from "axios";

export const useStore = defineStore("CvBuilder", {
  state: () => ({
    cv_data: [],
    default_cv: [],
    blocks: [],
  }),
  getters: {
    cvData: (state) => state.cv_data,
    defaultData: (state) => state.default_cv,
  },
  actions: {
    resetData(){
      this.cv_data = this.default_cv.map(obj => JSON.parse(JSON.stringify(obj)));

    },
    getCvData() {
      axios
        .get(`/data/default.json`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.cv_data = res.data.map(obj => JSON.parse(JSON.stringify(obj)));
          this.default_cv = res.data.map(obj => JSON.parse(JSON.stringify(obj)));

        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getDefaultData() {
      axios
        .get(`/data/blocks.json`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.blocks = res.data.map(obj => JSON.parse(JSON.stringify(obj)));
       
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    removeBlcok(block: string) {
      this.cv_data = this.cv_data.filter((x) => x != block);
    },
    addNewBlock(type: string) {
      const block = this.blocks.find(x=>x.type==type)
      
        this.cv_data = [...this.cv_data, JSON.parse(JSON.stringify(block))]
    },
  },
  persist: {
    storage: persistedState.sessionStorage,
  },
});
