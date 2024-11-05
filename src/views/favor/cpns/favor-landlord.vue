<template>
  <div class="favor-landlord">
    <div class="photo">
      <img src="https://pic.tujia.com/upload/festatic/mp/empty-no-content_TOC-5565.png" alt="">
    </div>
    <div class="title">
      暂无标题
    </div>
    <div class="text">
      点击<van-icon name="like" color="red"/>即可收藏对应的房东
    </div>
    <div class="stroll">
      <span>随便去逛逛</span>
    </div>
  </div>
</template>

<script setup>
    
</script>

<style lang="less" scoped>

.favor-landlord {
  height: 38em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .photo {

    img{
      width: 260px;
      height: 260px;
    }
  }

  .title {
    color: #666;
    font-size: 16px;
    padding-top: 10px;
  }

  .text {
    color: #888;
    font-size: 12px;
    padding-top: 6px;
  }

  .stroll {
    width: 120px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    color: #ff9854;
    border: 1px solid #ff9854;
    border-radius: 5px;
  }

}

</style>