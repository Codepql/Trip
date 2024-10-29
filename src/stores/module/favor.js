import { getFavorList } from "@/serviecs/modules/favor";
import { defineStore } from "pinia";

const useFavorStore = defineStore("favor", {
  state: () => ({
    favorList: [],
    favorHistory: []

  }),
  actions: {
    async fetchFavorListData() {
      const res = await getFavorList()
      this.favorList = res.data.data
    }
  }
})

export default useFavorStore