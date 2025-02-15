<template>
  <section class="section knowledge-arch bg-gray--100">
    <div class="container mb-4">
      <div class="row">
        <div class="col-12">
          <div class="knowledge-arch__title-wrapper">
            <h2 class="knowledge-arch__heading">
              Architectural Mastery
              <span class="knowledge-arch__heading-highlight"></span>
            </h2>
            <p class="knowledge-arch__subheading">
              MVC: The Next Generation
              <br/>
              <span class="knowledge-arch__subheading-small">Evolution, not Revolution - Because we don't break things, we make them better!</span>
            </p>
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
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

onMounted(() => {
  const { fadeInUp, fadeIn } = useScrollAnimation()

  // Animate main sections
  fadeInUp('.knowledge-arch__heading')
  fadeIn('.knowledge-arch__subheading', 0.2)
  fadeInUp('.enhanced-slider')
})
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
    font-weight: 300;
    letter-spacing: 2px;
    color: var(--c-primary);
    margin: 0;
  }

  &__heading,
  &__subheading,
  .enhanced-slider {
    // Remove all opacity: 0 from here
  }
}

.architecture-section {
  &__title,
  &__description {
    opacity: 0; // Start invisible for animation
  }

  &__graph {
    opacity: 0; // Start invisible for animation
    .graph-line {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
    }
    .data-point {
      transform-origin: center;
    }
  }
}
</style>
