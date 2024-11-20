<template>
  <div class="search-bar">
    <van-search
      v-model="value"
      show-action
      @cancel="onCancel"
      placeholder="请搜索景点、地标、房源"
    >
      <!-- 左侧 -->
      <template #left>
        <div class="address">{{ $route.query.currentCity }}</div>
        <div class="time">
          <div class="in">
            <span class="text">住</span>
            {{ startDateStr }}
          </div>
          <div class="out">
            <span class="text">住</span>
            {{ endDateStr }}
          </div>
        </div>
      </template>

    </van-search>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import { storeToRefs } from 'pinia';
import router from '@/router';
import useMainStore from '@/stores/module/main';
import { formatMonthDay } from "@/utils/format_date";

const value = ref('')

// 返回上一级
const onCancel = () => {
  router.back()
}


const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
    
</script>

<style lang="less" scoped>

.search-bar {

  .time {
    font-size: 10px;
    padding: 5px;

    .in {
      padding: 3px 0;
    }

    .text {
      color: #999;
    }
  }
}
</style>