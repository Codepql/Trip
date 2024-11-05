<template>
  <div class="favor-item">
    <div class="cover">
      <img :src="favorShowData.defaultPicture" alt="">
      <div class="above">
        <div class="header">
          <img :src="favorShowData.landlordHeadStyle?.head" alt="">
        </div>
        <van-icon name="like" size="25" color="red"/>
        <div class="totalCount">
          <van-icon name="comment-o" size="26" color="white"/>
          <span>{{ favorShowData.commentBrief?.totalCount }}</span>
        </div>
      </div>
      <div class="score">
          <span class="all">{{ favorShowData.commentBrief?.overall }}分</span>
          <span class="title">{{ favorShowData.commentBrief?.scoreTitle }}</span>
        </div>
    </div>
    <div class="info">
      <div class="address">
        <span class="name">{{ favorShowData.address }}</span>
        <template v-for="(item, index) in favorShowData.unitSummeries">
            <span v-if="index != 2" class="intro">
              {{ item.text }}  
            </span>
        </template>
      </div>
      <div class="unitName">{{ favorShowData.unitName }}</div>
      <div class="houseTags">
        <template v-for="(item, index) in favorShowData.houseTags">
          <span :style="{color: item.color, backgroundColor: item.background.color}">
            <span class="tags">{{ item.text }} </span>
          </span>
        </template>
      </div>
      <div class="price">
        <div class="newPrice">¥{{ favorShowData.finalPrice }}</div>
        <div class="oldPrice">¥{{ favorShowData.productPrice }}</div>
        <div class="text">
          <van-icon name="service-o" />
          {{ favorShowData.priceTipBadge?.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    favorShowData:{
      type: Object,
      defaul: () => ({})
    }
  })
</script>

<style lang="less" scoped>
.favor-item {

  margin: 10px 12px;

  .cover {
    display: flex;
    overflow-x: auto;
    position: relative;
    border-radius: 5px;

    img {
      width: 100%;
    }

    .above {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 10px;
      right: 8px;

      .header {
        width: 36px;
        height: 36px;
        padding: 12px 0;
        
        img {
          border-radius: 50%;
        }
      }

      .totalCount {
        color: #fff;
        padding: 16px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .score {
      height: 18px;
      line-height: 18px;
      font-size: 12px;
      font-weight: 600;
      position: absolute;
      left: 8px;
      bottom: 6px;
      border-radius: 8px;
      background-color: #fff;

      .all {
        color: #333;
        padding: 0 5px;
      }

      .title {
        color: #999;
        padding: 0 5px;
      }
    }
  }

  .info {

    .address {
      font-size: 12px;
      padding: 8px 0;

      .name {
        padding: 2px 3px;
        border-radius: 3px;
        color: #fff;
        background-color: #333;
      }

      .intro {
        color: #999;
        padding-left: 8px;
      }

    }

    .unitName {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

    }

    .houseTags {
      font-size: 12px;
      padding: 8px 0;
      padding-right: 6px;

      .tags {
        padding-right: 12px;
      }
    }

    .price {
      display: flex;
      align-items: flex-end;

      .newPrice {
        font-size: 18px;
        color: var(--primary-color);
      }

      .oldPrice {
        font-size: 12px;
        color: #999;
        padding: 2px 12px;
        text-decoration: line-through;
      }

      .text {
        font-size: 12px;
        color: #fff;
        background-color: rgb(245, 78, 78);
        border-radius: 12px;
        padding: 0 5px;
      }
    }
  }
}
</style>