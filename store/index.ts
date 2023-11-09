import axios from "axios";

export const useStore = defineStore("CvBuilder", {
  state: () => ({
    cv_data: [],
    default_blocks: [],
    save_data: []
  }),
  getters: {
    cvData: (state) => state.cv_data,
    saveData: (state) => state.save_data,
    defaultData: (state) => state.default_blocks,
  },
  actions: {
    setSaveData(){
      this.save_data = this.cv_data.map(obj => JSON.parse(JSON.stringify(obj)));

    },
    resetData(){
      this.save_data = [];
      this.cv_data = this.default_blocks.map(obj => JSON.parse(JSON.stringify(obj)));

    },
    savedToCvData(){
      this.cv_data = this.save_data.map(obj => JSON.parse(JSON.stringify(obj)));
    },
    getCvData() {
      axios
        .get(`/data/cv.json`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.cv_data = res.data.map(obj => JSON.parse(JSON.stringify(obj)));
          this.default_blocks = res.data.map(obj => JSON.parse(JSON.stringify(obj)));
       
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    removeBlcok(block: string) {
      this.cv_data = this.cv_data.filter((x) => x != block);
    },
    addNewBlock(type: string) {
      const block = this.default_blocks.find(x=>x.type==type)
      
        this.cv_data = [...this.cv_data, JSON.parse(JSON.stringify(block))]
    },
  },
  persist: true,

});
