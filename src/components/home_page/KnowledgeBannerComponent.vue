<template>
  <section class="section bg-black banner-knowledge">
    <div class="container">
      <div class="banner-knowledge__background">
        <HeaderHeroSvg />
      </div>

      <div>
        <h2 class="banner-knowledge__heading">Rails Superhero Mode: Activated! 🦸‍♂️</h2>
        <p class="banner-knowledge__desc">
          Why juggle multiple frameworks when you can be a Rails ninja? 🥷
          <br />
          <span class="text-highlight">One framework to rule them all, one HMVC to find them</span>
        </p>
      </div>

      <div class="banner-knowledge__buttons">
        <a href="" class="btn btn-light btn--rounded">Install for free</a>
        <a href="" class="btn btn-outline-light btn--rounded">Let's see demo</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderHeroSvg from '../icons/MultiLayerIcon.vue'
import { onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import gsap from 'gsap'

onMounted(() => {
  const banner = document.querySelector('.banner-knowledge')
  const background = document.querySelector('.banner-knowledge__background svg')

  // Create main timeline for initial animations
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.banner-knowledge',
      start: 'top 80%',
    }
  })

  // Initial animations
  tl.from(background, {
    opacity: 0,
    scale: 0.98,
    duration: 1.2,
    ease: 'power2.out'
  })
  .from('.banner-knowledge__heading', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.5')
  .from('.banner-knowledge__desc', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.5')
  .from('.banner-knowledge__buttons a', {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.5')

  // Continuous smooth parallax animation
  const parallaxAnimation = gsap.to(background, {
    y: '20',
    x: '15',
    duration: 4,
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
