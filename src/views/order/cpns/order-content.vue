<template>
  <div class="content">
    <div class="tab">
      <van-tabs v-model:active="active" sticky offset-top="46">
        <!-- 有数据 -->
        <van-tab title="全部订单">
          <template v-for="(item, index) in ordersList">
            <order-info :order-data="item"/>
          </template>
          <div class="footer">
            <p>没有更多数据了~</p>
          </div>
        </van-tab>
        <van-tab title="待支付">
          <template v-for="(item, index) in ordersPendList">
            <order-info :order-data="item"/>
          </template>
          <div class="footer">
            <p>没有更多数据了~</p>
          </div>
        </van-tab>
        <!-- 没有数据 -->
        <van-tab title="待确定">
          <order-none text="待确定"/>
        </van-tab>
        <van-tab title="待入住">
          <order-none text="待入住"/>
        </van-tab>
        <!-- 有数据 -->
        <van-tab title="最近订单">
          <template v-for="(item, index) in ordersRecentList">
            <order-info :order-data="item"/>
          </template>
          <div class="footer">
            <p>没有更多数据了~</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>


</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import OrderNone from './order-none.vue';
import OrderInfo from './order-info.vue';
import useOrderStore from '@/stores/module/order';


const active = ref()

// 获取数据
const orderStore = useOrderStore()
const { orderAllData, orderPend, orderRecent } = storeToRefs(orderStore)

const ordersList = computed(() => orderAllData.value.data?.orders )
const ordersPendList = computed(() => orderPend.value.data?.orders )
const ordersRecentList = computed(() => orderRecent.value.data?.orders )

</script>

<style lang="less" scoped>

.tab {
  background-color: #fafafa;

}

.footer {
  text-align: center;
  margin: 30px 0 100px 0;
}

</style>