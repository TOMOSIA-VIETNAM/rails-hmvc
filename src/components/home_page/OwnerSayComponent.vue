<template>
  <section class="section bg-gray--100 owner-say">
    <div class="container">
      <h3 class="owner-say__title">Meet the wizards behind the magic ✨</h3>

      <div class="row owner-say__feedback">
        <div class="col-12 col-md-9">
          <div class="row align-items-center ms-3 ms-md-0">
            <div class="col-auto ps-0">
              <img
                class="owner-say__feedback-photo"
                src="@/assets/images/users/founder.png"
                alt="owner"
                loading="lazy"
              />
            </div>
            <div class="col z-1">
              <h4 class="owner-say__feedback-owner">Mr. Anh Nguyen</h4>
              <span class="owner-say__feedback-position"
                >CTO, HMVC Founder</span
              >
            </div>
          </div>

          <blockquote class="ms-2 owner-say__feedback-quote">
            <p class="pt-1">
            I created HMVC with a vision to solve the inherent complexity issues in large-scale applications.
            By introducing a hierarchical structure
            to the traditional MVC pattern, we've established a framework-agnostic approach that brings clarity
            and maintainability to complex codebases. It's incredibly rewarding to see how this architecture has
            helped numerous teams reduce technical debt and build more sustainable applications.
            </p>
          </blockquote>
        </div>
      </div>

      <div class="row owner-say__feedback">
        <div class="col-12 col-md-9">
          <div class="row align-items-center ms-3 ms-md-0">
            <div class="col-auto ps-0">
              <img
                class="owner-say__feedback-photo"
                src="@/assets/images/users/maintainer.png"
                alt="owner"
                loading="lazy"
              />
            </div>
            <div class="col z-1">
              <h4 class="owner-say__feedback-owner">Mr. Minh Tang</h4>
              <span class="owner-say__feedback-position"
                >Leader Architect, HMVC Maintainer</span
              >
            </div>
          </div>

          <blockquote class="ms-2 owner-say__feedback-quote">
            <p class="pt-1">
            Taking the foundational principles, we've evolved it into a powerful, modern architecture that addresses today's
            development challenges. Our focus has been on enhancing developer experience through clear abstractions
            and maintainable patterns. The architecture's flexibility allows teams to gradually adopt it in existing
            projects, making it an ideal solution for both new developments and legacy system modernization.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

onMounted(() => {
  const { fadeInUp, animateTestimonial, rotateBackground } = useScrollAnimation()

  // Animate title
  fadeInUp('.owner-say__title', {
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  })

  // Animate testimonials with coordinated effects
  animateTestimonial('.owner-say__feedback', {
    photoScale: 0,
    photoDuration: 0,
    infoDuration: 0.6,
    infoStagger: 0.1,
    quoteDuration: 0.8,
    quoteStagger: 0.3,
    hoverScale: 1,
    photoHoverScale: 1.1
  })

  // Add rotating animation to background
  rotateBackground('.owner-say::before', {
    rotation: 5,
    duration: 10
  })
})
</script>

<style lang="scss" scoped>
.owner-say {
  position: relative;
  overflow: hidden;
  padding: 3rem 0;

  &::before {
    position: absolute;
    content: '';
    right: -780px;
    top: -200px;
    width: 1160px;
    height: 1220px;
    background: transparent url('@/assets/images/spiral-layer.svg') no-repeat;
    transform: rotate(-30deg);
    transform-origin: center;
    will-change: transform;
    z-index: 0;
  }

  &__title {
    font-family: var(--font-heading);
    color: var(--c-gray-900);
    font-weight: 500;
    font-size: clamp(1.8rem, 3vw, 2.3rem);
    padding: 2.5rem 0 1rem;
    letter-spacing: 1.3px;
    position: relative;
    z-index: 1;
    will-change: transform, opacity;
  }

  &__feedback {
    padding: 1.75rem 0;
    position: relative;
    z-index: 1;
    transform-origin: center;
    will-change: transform;
    transition: transform 0.3s ease;

    &-photo {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 0.2rem;
      transform-origin: center;
      will-change: transform;
      transition: transform 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    &-owner {
      font-family: var(--font-heading);
      color: var(--c-gray-900);
      font-weight: 500;
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      margin-bottom: 0.2rem;
      will-change: transform, opacity;
    }

    &-position {
      word-spacing: 2px;
      font-size: 1rem;
      font-weight: 300;
      color: rgba(25, 25, 28, 0.6);
      will-change: transform, opacity;
    }

    &-quote {
      position: relative;
      z-index: 2;
      color: var(--c-gray-900);
      font-weight: 300;
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      border-left: 10px solid #e5e5e5;
      margin-top: 1.3rem;
      margin-left: -15px;
      padding-left: 1.2rem;
      will-change: transform, opacity;

      i {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--c-primary);
        will-change: transform, opacity;
      }

      p {
        will-change: transform, opacity;
      }
    }
  }
}
</style>
