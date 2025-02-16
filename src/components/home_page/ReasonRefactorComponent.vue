<template>
  <section class="section bg-gray--200 reason-refactor">
    <div class="container">
      <div class="row why-choose d-none d-md-block">
        <div class="col-12 col-md-3">
          <div class="why-choose__title">
            Why <br />
            choose HMVC
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-7">
          <h2 class="reason-refactor__heading">
            Refactor for clarity<br />
            <span class="text-black-50">lessen debt</span>
          </h2>
        </div>
      </div>

      <div class="reason-refactor__content d-flex flex-column flex-md-row">
        <div class="reason-refactor__blocks col-12 col-md-4 pe-md-4">
          <div class="reason-refactor__block">
            <h3 class="reason-refactor__block-title">Missing abstractions</h3>
            <p class="reason-refactor__block-desc">
              Web frameworks excel at routing and rendering but often fall short in structuring business logic. Without clear abstractions, code becomes tangled, complex, and difficult to maintain.
            </p>
          </div>
          <div class="reason-refactor__block">
            <h3 class="reason-refactor__block-title">Our Solution</h3>
            <p class="reason-refactor__block-desc">
              HMVC introduces the "operation" abstraction, breaking logic into well-defined steps. This improves flow control, enhances maintainability, and makes complex processes more manageable.
            </p>
          </div>
          <div class="reason-refactor__block">
            <h3 class="reason-refactor__block-title">Rock-Solid Conventions</h3>
            <p class="reason-refactor__block-desc">
              With the Railway pattern, HMVC streamlines error handling, minimizes excessive conditionals, and boosts code reusability through inheritance and composition—resulting in cleaner, more efficient development.
            </p>
          </div>
          <div class="reason-refactor__block d-none d-md-block">
            <button class="btn btn-outline-primary btn--rounded px-4 py-2">
              <font-awesome-icon :icon="faPlay" />
              <span class="ps-3">Take a video tour</span>
            </button>
          </div>
        </div>

        <div class="reason-refactor__video col-12 col-md-9">
          <div class="reason-refactor__image image-box">
            <iframe class="responsive-iframe" src="https://player.vimeo.com/video/1057188769?h=706ac188b9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&?autoplay=1&muted=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"></iframe>
          </div>
          <div class="reason-refactor__block d-md-none mt-4">
            <button class="btn btn-outline-primary btn--rounded px-4 py-2 w-100">
              <font-awesome-icon :icon="faPlay" />
              <span class="ps-3">Take a video tour</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

onMounted(() => {
  const { fadeInUpOnLoad, fadeInUp, staggerChildren } = useScrollAnimation()
  const baseDelay = 1.3

  // Animate "Why choose HMVC" title with fadeInUp
  fadeInUp('.why-choose__title', {
    y: 50,
    duration: 1,
    delay: baseDelay,
    ease: 'power3.out',
    start: 'top 85%'
  })

  // Animate heading immediately on load
  fadeInUpOnLoad('.reason-refactor__heading', {
    y: 50,
    duration: 1,
    delay: baseDelay + 0.3,
    ease: 'power3.out',
    start: 'top 85%'
  })

  // Animate blocks with stagger effect
  staggerChildren('.reason-refactor__blocks', '.reason-refactor__block:not(.d-md-none)',{
    duration: 0.6,
    stagger: 0.2,
    y: 5
  })

  // Animate video section
  fadeInUp('.reason-refactor__video')
})
</script>

<style lang="scss" scoped>
.reason-refactor {
  .why-choose {
    &__title {
      font-size: clamp(10px, 2vw, 12px);
      display: flex;
      align-items: flex-end;
      box-sizing: border-box;
      width: 120px;
      height: 120px;
      margin-top: -130px;
      margin-bottom: 70px;
      padding: 12px;
      background: #161616;
      text-transform: uppercase;
      color: #fff;
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
      cursor: pointer;
      will-change: transform, opacity;

      &:hover {
        transform: translateY(-5px);
      }

      @media (max-width: 768px) {
        margin: -80px auto 40px;
      }
    }
  }

  &__heading {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: clamp(36px, 5vw, 54px);
    line-height: 1.2;
    text-transform: uppercase;
    color: var(--c-gray-900);
    margin-bottom: 46px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
      text-align: center;
    }
  }

  &__content {
    gap: 2rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }

  &__blocks {
    @media (max-width: 768px) {
      order: 2;
    }
  }

  &__block {
    line-height: 25px;
    margin-bottom: 50px;
    will-change: transform, opacity;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }

    &-title {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: clamp(16px, 2vw, 18px);
      margin-top: 0;
      margin-bottom: 10px;
      color: var(--c-gray-900);
    }

    &-desc {
      margin-bottom: 10px;
      line-height: 1.6;
      font-weight: 300;
      color: var(--c-gray-700);
      font-size: clamp(14px, 1.5vw, 16px);
    }
  }

  &__video {
    will-change: transform, opacity;
    @media (max-width: 768px) {
      order: 1;
    }
  }

  &__image {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    background-color: #21202c;

    .responsive-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}
</style>
