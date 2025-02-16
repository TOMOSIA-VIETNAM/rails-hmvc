<template>
  <section class="section bg-black banner-knowledge">
    <div class="container">
      <div class="banner-knowledge__background">
        <HeaderHeroSvg />
      </div>

      <div>
        <h2 class="banner-knowledge__heading">{{ $t('knowledgeBanner.heading') }}</h2>
        <p class="banner-knowledge__desc">
          {{ $t('knowledgeBanner.description') }}
          <br />
          <span class="text-highlight">{{ $t('knowledgeBanner.highlight') }}</span>
        </p>
      </div>

      <div class="banner-knowledge__buttons">
        <a href="" class="btn btn-light btn--rounded">{{ $t('knowledgeBanner.installButton') }}</a>
        <a href="" class="btn btn-outline-light btn--rounded">{{ $t('knowledgeBanner.demoButton') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderHeroSvg from '../icons/MultiLayerIcon.vue'
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

onMounted(() => {
  const { fadeInUp, staggerChildren, parallaxBackground } = useScrollAnimation()

  // Animate background SVG with scale effect
  fadeInUp('.banner-knowledge__background svg', {
    scale: 0.98,
    duration: 1.2,
    ease: 'power2.out'
  })

  // Animate heading and description
  fadeInUp('.banner-knowledge__heading', {
    delay: 0.3
  })

  fadeInUp('.banner-knowledge__desc', {
    delay: 0.6
  })

  // Animate buttons with stagger effect after titles
  staggerChildren('.banner-knowledge__buttons', 'a', {
    duration: 0.6,
    stagger: 0.2,
    y: 30,
    delay: 0.6, // Delay after description animation completes
    ease: 'back.out(1.7)'
  })

  // Add continuous floating parallax effect to background
  parallaxBackground('.banner-knowledge__background svg', {
    x: 4,
    y: 5,
    duration: 23,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  })
})
</script>

<style lang="scss" scoped>
.banner-knowledge {
  position: relative;
  overflow: hidden;
  padding-bottom: 5.2rem;
  perspective: 1000px;

  &__background {
    svg {
      position: absolute;
      top: -675px;
      right: -872px;
      width: 100%;
      transform: rotate(640deg);
      will-change: transform;
      transform-style: preserve-3d;
    }
  }

  &__heading {
    font-family: var(--font-sub-heading);
    font-weight: 100;
    font-size: clamp(2rem, 4vw, 2.6875rem);
    color: #fff;
    margin-bottom: 1.875rem;
    will-change: transform, opacity;
  }

  &__desc {
    font-family: var(--font-sub-heading);
    font-weight: 100;
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    color: #fff;
    will-change: transform, opacity;
  }

  &__buttons {
    margin-top: 2.875rem;
    will-change: transform, opacity;

    a {
      padding: 0.875rem 1.875rem;
    }

    a:not(:last-child) {
      margin-right: 1.875rem;
    }

    .btn-outline-light {
      border-color: #494949;

      &:hover {
        color: #fff;
        border-color: #414141;
        background-color: #414141;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      a:not(:last-child) {
        margin-right: 0;
      }
    }
  }
}
</style>
