import { defineStore } from "pinia";
import { getOrderData, getOrderDataPend, getOrderDataRecent } from "@/serviecs/modules/order";


const useOrderStore = defineStore('order', {
  state: () => ({
    orderAllData: {},
    orderPend: {},
    orderRecent: {}
  }),
  actions: {
    async fetchOrderListData() {
      const res = await getOrderData()
      this.orderAllData = res.data
    },

    async fetchOrderPendData() {
      const res = await getOrderDataPend()
      this.orderPend = res.data
    },

    async fetchOrderRecent() {
      const res = await getOrderDataRecent()
      this.orderRecent = res.data
    }
  }
})

export default useOrderStore