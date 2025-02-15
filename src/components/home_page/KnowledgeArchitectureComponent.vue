<template>
  <section class="section knowledge-arch bg-gray--100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="knowledge-arch__title-wrapper">
            <h2 class="knowledge-arch__heading">
              Knowledge architecture
              <span class="knowledge-arch__heading-highlight"></span>
            </h2>
            <p class="knowledge-arch__subheading">Evolution, not Revolution</p>
          </div>
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

<style lang="scss" scoped>
.knowledge-arch {
  &__title-wrapper {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }

  &__heading {
    font-family: var(--font-heading);
    color: var(--c-dark-dim-green);
    font-weight: 900;
    font-size: clamp(30px, 4.5vw, 54px);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    line-height: 1.2;

    &-highlight {
      position: absolute;
      bottom: 0.2em;
      left: -0.5em;
      right: -0.5em;
      height: 0.3em;
      background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
      opacity: 0.2;
      z-index: 0;
    }
  }

  &__subheading {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: var(--c-primary);
    margin: 0;
    text-transform: uppercase;
  }
}
</style>
