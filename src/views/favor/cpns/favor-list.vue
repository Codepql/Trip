<template>
  <div class="favor-content">
    <template v-for="(item, index) in favaListData" :key="index">
      <favor-item :favor-show-data="item"/>
    </template>
  </div>
  <div class="footer">
    <p>没有更多数据了~</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useFavorStore from '@/stores/module/favor';
import FavorItem from '@/components/favor-item/favor-item.vue';


// 获取数据
const favorStore = useFavorStore()
const { favorList } = storeToRefs(favorStore)

const favaListData = computed(() => favorList.value.data?.items)

</script>

<style lang="less" scoped>

.footer {
  text-align: center;
  margin: 30px 0 100px 0;
}
</style>