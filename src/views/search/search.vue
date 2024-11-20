<template>
  <div class="search">
    <!-- <h2>开始时间：{{ $route.query.startDate }}</h2>
    <h2>结束时间：{{ $route.query.endDate }}</h2>
    <h2>我的位置：{{ $route.query.currentCity }}</h2> -->
    <div class="search-bar">
      <search-bar/>
    </div>
    <div class="content">
      <search-content/>
    </div>
  </div>
</template>

<script setup>
import SearchBar from './cpns/search-bar.vue'
import SearchContent from './cpns/search-content.vue';
    
</script>

<style lang="less" scoped>

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
}

.content {
  margin-top: 55px;
}
</style>