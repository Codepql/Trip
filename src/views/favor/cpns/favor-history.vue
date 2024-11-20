<template>
  <div class="favor-history">
    <template v-for="(item, index) in historyList" :key="index">
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

const favorStore = useFavorStore()
const { favorHistory } = storeToRefs(favorStore)

const historyList = computed(() => favorHistory.value.data?.items)

    
</script>

<style lang="less" scoped>

.footer {
  text-align: center;
  margin: 30px 0 100px 0;
}

</style>