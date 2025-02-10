<template>
  <section class="section bg-black banner-knowledge">
    <div class="container">
      <div class="banner-knowledge__background">
        <HeaderHeroSvg />
      </div>

      <div>
        <h2 class="banner-knowledge__heading">Just master Rails</h2>
        <p class="banner-knowledge__desc">
          No need for other frameworks. Versatile for any project.
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
</script>

<style lang="scss" scoped>
.banner-knowledge {
  position: relative;
  overflow: hidden;
  padding-bottom: 5.2rem;

  &__background {
    svg {
      position: absolute;
      top: -675px;
      right: -872px;
      width: 100%;
      transform: rotate(640deg);
      -moz-transform: rotate(6440deg);
      -ms-transform: rotate(640deg);
    }
  }

  &__heading {
    font-family: var(--font-sub-heading);
    font-weight: 100;
    font-size: 2.6875rem;
    color: #fff;
    margin-bottom: 1.875rem;
  }

  &__desc {
    font-family: var(--font-sub-heading);
    font-weight: 100;
    font-size: 1.4rem;
    color: #fff;
  }

  &__buttons {
    margin-top: 2.875rem;

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
  }
}
</style>
