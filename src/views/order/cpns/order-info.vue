<template>
  <div class="order-info">
    <div class="order-inner">
      <div class="time bottom-line">
        <div class="left">
          {{ startDate }} - {{ endDate }} 
        </div>
        <div 
          class="right" 
          :style="{ color: orderData.orderStatusDescColor }">
          {{ orderData.orderStatusDesc }}
        </div>
      </div>
      <div class="status">
        <div class="top">
          <img :src="orderData.unitPicture" alt="">
          <div class="intro">
            <div class="address">{{ orderData.address }}</div>
            <div class="price">¥{{ orderData.prepayAmount }}</div>
          </div>
        </div>
        <div class="up">
          <van-button  size="mini">删除订单</van-button>
          <van-button type="primary" size="mini">再次预定</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatMonthDay } from '@/utils/format_date';

const porps = defineProps({
  orderData: {
    type: Object,
    default: () => ({})
  }
})


const startDate = formatMonthDay(porps.orderData.checkInDate, "MM.DD")
const endDate = formatMonthDay(porps.orderData.checkOutDate, "MM.DD")



</script>

<style lang="less" scoped>

.order-info {
  margin: 10px 12px;
  border-radius: 6px;
  background-color: #fff;

  .order-inner {
    padding: 8px;

    .time {
      height: 30px;
      display: flex;
      justify-content: space-between;

      .left {
        font-size: 16px;
        font-weight: 600;
      }

      .right {
        color: #666;
      }
    }

    .top {
      display: flex;
      margin: 8px 0;

      img {
        width: 90px;
        height: 60px;

        border-radius: 10px;
      }

      .intro {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;

        color: #333;

        .address {
          width: 240px;
          overflow: hidden; /* 隐藏超出的文本 */
          white-space: nowrap; /* 保持文本在一行内显示 */
          text-overflow: ellipsis; /* 超出部分显示省略号 */
        }
      }

    }

    .up {
      display: flex;
      justify-content: flex-end
    }
  }

}

.bottom-line {
  border-bottom: 1px solid #ddd;
}

</style>