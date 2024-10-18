<template>
  <div class="buy">
    <div class="resreve">
      <div class="chat">
        <img src="@/assets/img/detail/icon_chat.webp" alt="">
        <div class="text">聊天</div>
      </div>
      <i>|</i>
      <div class="price">
        <div class="newPrice">￥{{ priceData.finalPrice }}</div>
        <span class="comPrice">￥/晚</span>
        <div class="oldPrice comPrice">￥{{ priceData.productPrice }}</div>
      </div>
      <div class="buy">预定当前房源</div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  priceData: {
    type: Object,
    default: () => ({})
  }
})
    
</script>

<style lang="less" scoped>

.resreve {
    height: 50px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 12px;

    background-color: #efefef;

    .chat {
      width: 30px;
      font-size: 12px;

      img {
        width: 20px;
      }
    }

    i {
      padding: 0 6px;
    }

    .price {
      flex: 1;
      display: flex;
      padding-left: 5px;
      padding-top: 8px;

      .newPrice {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-color);
      }

      .comPrice {
        font-size: 12px;
        color: #666;
        padding-left: 2px;
        padding-top: 2px;
      }

      .oldPrice {
        text-decoration: line-through;
      }
    }


    .buy {
      width: 150px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      // text-align: center;
      color: #FFF;
      background-color: var(--primary-color);
    }
  }
</style>