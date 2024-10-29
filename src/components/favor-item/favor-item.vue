<template>
  <div class="favor-item">
    <div class="cover">
      <img :src="favorShowData.defaultPicture" alt="">
      <div class="above">
        <div class="header">
          <img :src="favorShowData.landlordHeadStyle.head" alt="">
        </div>
        <van-icon name="like" size="25" color="red"/>
        <div class="totalCount">
          <van-icon name="comment-o" size="26" color="white"/>
          <span>{{ favorShowData.commentBrief.totalCount }}</span>
        </div>
      </div>
      <div class="score">
          <span>{{ favorShowData.commentBrief.overall }}</span>
        </div>
    </div>
    <div class="info">
      <div class="address">地址</div>
      <div class="unitName">{{ favorShowData.unitName }}</div>
      <div class="houseTags">减价</div>
      <div class="price">价格</div>
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
      position: absolute;
      color: #000;
      left: 8px;
      bottom: 6px;
      border-radius: 8px;
      background-color: #fff;
    }
  }
}
</style>