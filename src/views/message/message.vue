<template>
  <div class="message">
    <div class="top">
      <van-nav-bar 
        title="消息中心" 
        left-arrow 
        @click-left="onClickLeft"
      >
        <template #right>
          <div class="right">
            <van-icon name="service-o" size="18"/>
            <span class="text">客服</span>
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="header">
        <van-icon class="icon" name="volume" size="20" color="#fff"/>
        <span class="text">系统通知</span>
      </div>
      <div class="info">
        <img src="https://fe.tujiacdn.com/pwa/static/img/tujia-icon-no-result.f5d567bb.png" alt="">
        <span class="text">暂无聊天信息</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';


const onClickLeft = () => {
  router.back()
}
    
</script>

<style lang="less" scoped>

.message {

  .right {
    display: flex;
    flex-direction: column;

    .text {
      color: #999;
      font-size: 10px;
      margin-top: -2px;
    }
  }

  .content {
    height: 68px;
    padding: 10px 0;

    .header {
      height: 100%;
      padding: 0 20px;
      display: flex;
      align-items: center;

      .icon {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 50%;
        background-color: rgb(111, 180, 132);
      }

      .text {
        font-size: 16px;
        padding: 0 12px;
      }
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 360px;
    height: 360px;
  }
  
  .text {
    color: #999;
    padding: 16px 0;
  }
}

</style>