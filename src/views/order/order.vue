<template>
  <div class="order">
    <div class="top">
      <!-- 顶部导航 -->
      <div class="nav">
        <van-nav-bar 
        title="订单列表"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
        >
        <!-- 右边 -->
          <template #right>
            <img src="https://pic.tujia.com/upload/festatic/publicImages/mob-TjHeader-header-right.png" alt="">
          </template>
        </van-nav-bar>
      </div>
    </div>
    <div class="content">
      <order-content/>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import OrderContent from './cpns/order-content.vue';
import useOrderStore from '@/stores/module/order';

const onClickLeft = () => {
  router.push('/home')
}

// 发送网络请求
const orderStore = useOrderStore()
orderStore.fetchOrderListData()
orderStore.fetchOrderPendData()
orderStore.fetchOrderRecent()
    
</script>

<style lang="less" scoped>

.order {
  margin-bottom: 50px;
  margin-top: 46px;

  .top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 46px;
    z-index: 9;
  }

  .nav {
    img {
      width: 20px;
      height: 15px;
    }
  }
}
</style>