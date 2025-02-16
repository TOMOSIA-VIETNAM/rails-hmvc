<script setup>
import { RouterView } from 'vue-router'
import NavigationComponent from './components/NavigationComponent.vue'
import BackToTopComponent from '@/components/common/BackToTopComponent.vue'
</script>

<template>
  <div class="page-header">
    <NavigationComponent />
  </div>

  <div class="page-content">
    <RouterView />
    <BackToTopComponent />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
