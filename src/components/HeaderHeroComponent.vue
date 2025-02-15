<template>
  <section class="header-hero">
    <div class="header-hero__background">
      <HeaderHeroSvg />
    </div>
    <div class="header-hero__content container">
      <div class="row">
        <div class="col-10">
          <h1 class="hero-title">High Level MVC</h1>
          <h1 class="hero-subtitle">Simplify business logic and rapid application development</h1>
          <div class="hero-control row align-items-center">
            <div class="d-flex flex-align-center hero-control__btn">
              <a href="" class="btn btn--rounded btn-dark me-4">Install for free</a>
              <p class="hero-control__desc mb-0">Full-fledged Professional <br> or Free Community</p>
            </div>
          </div>
        </div>
        <div class="col-2 text-end">
          <img class="hero-icon" src="@/assets/images/logo-dark.png" alt="logo" height="95" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderHeroSvg from './icons/MultiLayerIcon.vue'
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
      font-family: var(--font-heading);
      font-weight: 700;
      letter-spacing: -0.75px;
      font-size: clamp(3rem, 5vw, 3.6rem);
      color: var(--c-gray-900);
      text-transform: capitalize;
    }

    .hero-subtitle {
      font-weight: 100;
      font-size: clamp(1.2rem, 3vw, 1.813rem);
      margin-top: 1.25rem;
    }

    .hero-icon {
      margin-right: 35px;
      @media (max-width: 1399px) {
        display: none;
      }
    }

    .hero-control {
      padding-top: 3rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      &__btn {
        flex-shrink: 0;

        .btn {
          font-size: clamp(17px, 3vw, 20px);
          padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 2rem);
          font-weight: 100;
          white-space: nowrap;
        }
      }

      &__desc {
        font-size: clamp(14px, 2.5vw, 16px);
        font-weight: 300;
        color: rgba(25, 25, 28, 0.5);
        display: flex;
        align-items: center;
      }
    }
  }
}

@media (max-width: 576px) {
  .header-hero {
    &__content {
      .hero-control {
        flex-direction: column;
        align-items: flex-start;

        &__btn {
          width: 100%;

          .btn {
            max-width: 100%;
          }
        }

        &__desc {
          text-align: center;
          width: 100%;
        }
      }
    }
  }
}
</style>
