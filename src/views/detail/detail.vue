<template>
  <div class="detail" ref="detailRef">
    <div class="tab-control" ref="tabControlRef">
      <van-tabs v-model:active="active" 
                :show-header="showTabcontrol"
                background="#f7f9fb" 
                @click-tab="onClickTab"
      >
        <van-tab v-for="item in names" :title="item"></van-tab>
      </van-tabs>
    </div>
    <div class="nav-bar">
      <van-nav-bar
        title="房屋详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos  name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :orderRules="mainPart.dynamicModule.rulesModule"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :priceIntro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.webp" alt="">
      <div class="text">念转旅途，永无止境！</div>
    </div>
    <div class="resreve">
      <div class="chat">
        <img src="@/assets/img/detail/icon_chat.webp" alt="">
        <div class="text">聊天</div>
      </div>
      <i>|</i>
      <div class="price">
        <div class="newPrice">￥{{ pricePart.priceModule.product.finalPrice }}</div>
        <span class="comPrice">￥/晚</span>
        <div class="oldPrice comPrice">￥{{ pricePart.priceModule.product.productPrice }}</div>
      </div>
      <div class="buy">预定当前房源</div>
    </div>
  </div>
</template>

<script setup>
import {  ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/serviecs';
import useScroll from '@/hooks/useScroll';

import DetailSwipe from './cpns/detail_01_swipe.vue';
import DetailInfos from './cpns/detail_02_infos.vue';
import DetailFacility from './cpns/detail_03_facility.vue'
import DetailLandlord from './cpns/detail_04_landlord.vue';
import DetailComment from './cpns/detail_05_comment.vue';
import DetailNotice from './cpns/detail_06_notice.vue';
import DetailMap from './cpns/detail_07_map.vue';
import DetailIntro from './cpns/detail_08_intro.vue';

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

// 发送网络请求数据
const detailInfos = ref({})

getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

const mainPart = computed(() => detailInfos.value.mainPart )
const pricePart = computed(() => detailInfos.value.pricePart )

// 监听返回按钮点击
const onClickLeft = () => {
  router.back()
}


// tab-contril 相关的逻辑
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabcontrol = computed(() => {
  return scrollTop.value >= 300
})

// const sectionEls = []
// const getSectionRef = (value) => {
//   sectionEls.push(value.$el)
// }
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})

const getSectionRef = (value) => {
  if(!value) return
  const name = value.$el.getAttribute('name')
  sectionEls.value[name] = value.$el
}

const onClickTab = (index) => {
  // 数组
  // console.log(index.name)
  // let instance = sectionEls[index.name].offsetTop
  // 对象
  const key = Object.keys(sectionEls.value)[index.name]
  const el = sectionEls.value[key]
  let instance = el.offsetTop
  if(index.name !== 0) {
    instance = instance - 44
  }

  detailRef.value.scrollTo({
    top:  instance,
    behavior: 'smooth' // 使滚动过程更平滑
  })
}

// 页面滚动，滚动时匹配对应的tabControl 的 index
// const tabControlRef = ref()
// watch(scrollTop, (newValue) => {
//   // 1 获取所有区域的 offsetTop
//   const els = Object.values(sectionEls.value)
//   const values = els.map(el => el.offsetTop)

//   // 2 根据newValue 去匹配相应的索引值
//   let index = values.length - 1
//   for(let i = 0; i < values.length; i++) {
//     if(values[i] > newValue + 44) {
//       index = i - 1
//       break
//     }
//   }
  
//   console.log(tabControlRef)

// })
    
</script>

<style lang="less" scoped>

.detail {

  height: 100vh;
  overflow-y: auto;

  .tab-control {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 160px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }

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
}



</style>