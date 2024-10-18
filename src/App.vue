<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hideTabBar"/>
    <!-- <tab-bar/> -->
    <loading/>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import loading from '@/components/loading/loading.vue';


const route = useRoute()
    
</script>

<style lang="less" scoped>



</style>