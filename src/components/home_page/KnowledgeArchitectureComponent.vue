<template>
  <section class="section knowledge-arch">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="knowledge-arch__heading">
            Knowledge <span class="text-primary">architecture</span>
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
    font-weight: 900;
    font-size: 43px;
    line-height: 48px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 5.75rem;
  }
}
</style>
