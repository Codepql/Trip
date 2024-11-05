<template>
  <div class="favor" >
    <!-- 导航栏 -->
    <div class="top">
      <div class="top-inner">
        <van-nav-bar 
        left-arrow 
        left-text="旅途"
        @click-left="onClickLeft"
        >
        <!-- 标题 -->
        <template #title>
          <span
            class="title list" 
            :class="{active: isShow}"
            @click="favorBtn"
            >
            我的收藏
          </span>
          <span 
            class="title history" 
            :class="{active: !isShow}"
            @click="favorBtn"
            >
            历史收藏
          </span>
        </template>
        <!-- 右边 -->
        <template #right>
          <van-icon name="chat-o" size="20"/>
        </template>
        </van-nav-bar>
      </div>
    </div>
    <!-- 内容 我的收藏-->
    <div class="content" v-if="isShow">
        <van-tabs v-model:active="tabActive">
          <van-tab>
            <template #title>房屋</template>
            <template v-for="(value, key, index) in favorList">
              <favor-list :favor-data="value"/>
            </template>
          </van-tab>
          <van-tab>
            <template #title>房东</template>
            <favor-landlord/>
          </van-tab>
        </van-tabs>
    </div>
    <!-- 历史收藏 -->
    <div class="fa-history" v-if="!isShow">
      <favor-history/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { storeToRefs } from 'pinia';

import FavorList from './cpns/favor-list.vue'
import FavorLandlord from './cpns/favor-landlord.vue';
import FavorHistory from './cpns/favor-history.vue'
import useFavorStore from '@/stores/module/favor'


const onClickLeft = () => {
  router.push('/home')
}

// 是否显示列表
const isShow = ref(1)
const favorBtn = () => {
  isShow.value =!isShow.value
}

const tabActive = ref()

// 发送网络请求 从store获取数据
const favorStore = useFavorStore()
favorStore.fetchFavorListData()
const { favorList } = storeToRefs(favorStore)




</script>

<style lang="less" scoped>

.favor {
  padding-bottom: 60px;

  .top {
    height: 46px;

    .top-inner {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 46px;
      z-index: 9;
    }

    .title {
      display: inline-block;
      height: 30px;
      line-height: 30px;

      font-size: 15px;
      font-weight: 200;
      padding: 0 6px;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);

    }

    .list {
      border-radius: 5px 0 0 5px;
    }

    .history { 
      border-radius: 0 5px 5px 0;
    }

    .active {
      background-color: var(--primary-color);
      color: #fff;
    }
  }

  .content {
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
  }
}



</style>