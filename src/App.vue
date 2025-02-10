<script setup>
import { RouterView } from 'vue-router'
import NavigationComponent from './components/NavigationComponent.vue'
</script>

<template>
  <div class="page-header">
    <NavigationComponent />
  </div>

  <div class="page-content">
    <RouterView />
  </div>
</template>
