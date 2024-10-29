<template>
  <div class="favor-content">
    <template v-for="(value, key, index) in favorData">
      <favor-item :favor-show-data="value"/>
    </template>
  </div>
</template>

<script setup>
import FavorItem from '@/components/favor-item/favor-item.vue';

defineProps({
  favorData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.favor-content {
  height: 100vh;
  overflow-y: auto;
}
</style>