<template>
  <section class="section knowledge-arch bg-gray--100">
    <div class="container mb-4 pt-4">
      <div class="row">
        <div class="col-12">
          <div class="knowledge-arch__title-wrapper">
            <h2 class="knowledge-arch__heading">
              {{ $t('architecture.heading') }}
              <span class="knowledge-arch__heading-highlight"></span>
            </h2>
            <p class="knowledge-arch__subheading">
              {{ $t('architecture.subheading') }}
              <br/>
              <span class="knowledge-arch__subheading-small">{{ $t('architecture.description') }}</span>
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
  const { revealTitle, splitTextReveal, fadeInUp } = useScrollAnimation()

  // Animate heading with highlight effect
  revealTitle('.knowledge-arch__heading', '.knowledge-arch__heading-highlight')

  // Animate subheading with split text effect
  splitTextReveal('.knowledge-arch__subheading')

  // Animate slider
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
    will-change: transform, opacity; // Optimize performance

    &-highlight {
      position: absolute;
      bottom: 0.2em;
      left: -0.5em;
      right: -0.5em;
      height: 0.3em;
      background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
      transform-origin: left;
      will-change: transform, opacity; // Optimize performance
    }
  }

  &__subheading {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: var(--c-primary);
    margin: 0;
    will-change: transform, opacity; // Optimize performance

    &-small {
      display: inline-block; // Help with animation
    }
  }

  .enhanced-slider {
    will-change: transform, opacity; // Optimize performance
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
