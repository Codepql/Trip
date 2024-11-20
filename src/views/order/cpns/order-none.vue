<template>
  <div class="order-none">
    <img src="https://pic.tujia.com/upload/festatic/mp/empty-no-order_TOC-5565.png" alt="">
    <div class="text">
      暂无{{ text }}订单
    </div>
  </div>
</template>

<script setup>

defineProps({
  text: {
    type:String,
    default: ""
  }
})
    
</script>

<style lang="less" scoped>

.order-none {
  height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 260px;
    height: 260px;
  }
  
  .text {
    color: #666;
    font-size: 16px;
    padding: 10px 0;
  }
}
</style>