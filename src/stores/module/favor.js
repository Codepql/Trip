import { defineStore } from "pinia";
import { getFavorList, getFavorHistory } from "@/serviecs/modules/favor";

const useFavorStore = defineStore("favor", {
  state: () => ({
    favorList: {},
    favorHistory: {}

  }),
  actions: {
    async fetchFavorListData() {
      const res = await getFavorList()
      this.favorList = res.data
    },
    
    async fetchFavorHistoryData() {
      const res = await getFavorHistory()
      this.favorHistory = res.data
    }
  }
  
})

export default useFavorStore