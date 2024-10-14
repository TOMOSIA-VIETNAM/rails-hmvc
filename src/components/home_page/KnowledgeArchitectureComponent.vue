<template>
  <section class="section knowledge-arch bg-gray--100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="knowledge-arch__heading">
            Knowledge architecture<span class="text-primary"></span>
          </h2>
        </div>
      </div>
    </div>

    <div class="container">
      <EnhancedSliderComponent />
    </div>
  </section>
</template>

<script setup lang="ts">
import EnhancedSliderComponent from '@/components/home_page/EnhancedSliderComponent.vue';
</script>

<style lang="scss" scope>
.knowledge-arch {
  &__heading {
    font-family: var(--font-heading);
    color: var(--c-gray-900);
    font-weight: 500;
    font-size: 2.3rem;
    padding: 1rem 0 3rem;
    letter-spacing: 1.3px;
  }
}
</style>
