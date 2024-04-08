<template>
  <div class="header-hero">
    <div class="header-hero__background">
      <HeaderHeroSvg />
    </div>
    <div class="header-hero__content container">
      <div class="row">
        <div class="col-10">
          <h1 class="hero-title">High level MVC</h1>
          <h1 class="hero-subtitle">Simplify business logic and rapid application development</h1>
          <div class="hero-control row align-items-center">
            <div class="col-3 hero-control__btn">
              <a href="" class="btn btn--rounded btn-dark">Install for free</a>
            </div>
            <div class="col-3 hero-control__desc">
              <p>Full-fledged Professional or Free Community</p>
            </div>
          </div>
        </div>
        <div class="col-2 text-end">
          <img class="hero-icon" src="@/assets/images/logo-dark.png" alt="logo" height="95" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderHeroSvg from './icons/IconLayer.vue'
</script>

<style lang="scss" scoped>
.header-hero {
  min-height: 570px;
  padding-top: 144px;
  padding-bottom: 96px;

  &__background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

    svg {
      position: absolute;
      height: 1142px;
      width: 1184px;
      left: calc(50% - 242px);
      top: -395px;
      margin-left: 0;
    }
  }

  &__content {
    position: relative;
    z-index: 2;

    .hero-title {
      font-family: 'Besley', Roboto, Geneva, Verdana, sans-serif;
      font-size: 3.6rem;
      color: var(--c-black);
      letter-spacing: -0.75px;
    }

    .hero-subtitle {
      font-weight: 100;
      font-size: 1.813rem;
      margin-top: 1.25rem;
    }

    .hero-icon {
      margin-right: 35px;
    }

    .hero-control {
      padding-top: 2rem;

      &__btn {
        margin-right: -3.75rem;

        .btn {
          font-size: 20px;
          padding: 0.75rem 2rem;
        }
      }

      &__desc {
        font-size: 1rem;
        font-weight: 100;
        color: rgba(25, 25, 28, 0.7);
        padding-top: 20px;
      }
    }
  }
}
</style>
