import axios from "axios";

export const useStore = defineStore("CvBuilder", {
  state: () => ({
    cv_data: [],
    update_cv_data: [],
    default_cv: [],
    blocks: [],
  }),
  getters: {
    UpdateCvData: (state) => state.update_cv_data,
    cvData: (state) => state.cv_data,
    defaultData: (state) => state.default_cv,
  },
  actions: {
    resetData(){
      this.cv_data = JSON.parse(JSON.stringify(this.default_cv))
    },
    setUpdateCvData(data){
      this.update_cv_data = JSON.parse(JSON.stringify(data))
    },
    getCvData() {
      axios
        .get(`/data/default.json`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.cv_data = JSON.parse(JSON.stringify(res.data));
          this.default_cv = JSON.parse(JSON.stringify(res.data));
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
      this.cv_data.data = this.cv_data?.data.filter((x,index) => index!=block);
    },
    addNewBlock(type, cv) {
      const block = this.blocks.find(x=>x.type==type)
      // if(this.cv_data?.data){
      //   this.cv_data.data = [...this.cv_data.data, JSON.parse(JSON.stringify(block))]

      // }
      if(cv?.data){
        cv.data = [...cv.data, JSON.parse(JSON.stringify(block))]

      }
      
    },
    changeThemes(ac: string){
      if(this.cv_data?.theme){
        this.cv_data.theme = ac
      }
  }

  },
  persist: {
    storage: persistedState.sessionStorage,
  },
});
