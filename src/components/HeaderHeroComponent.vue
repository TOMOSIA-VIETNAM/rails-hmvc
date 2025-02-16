<template>
  <section class="header-hero">
    <div class="header-hero__background">
      <HeaderHeroSvg />
    </div>
    <div class="header-hero__content container">
      <div class="row">
        <div class="col-10">
          <h1 class="hero-title">{{ $t('hero.header.title') }}</h1>
          <h1 class="hero-subtitle">{{ $t('hero.header.subtitle') }}</h1>
          <div class="hero-control row">
            <div class="hero-control__wrapper">
              <a :href="getGithubUrl()" target="_blank" class="btn btn--rounded btn-dark hero-control__install-btn">
                {{ $t('hero.header.installButton') }}
              </a>
              <p class="hero-control__desc" v-html="$t('hero.header.description')"></p>
            </div>
          </div>
        </div>
        <div class="col-2 text-end">
          <div class="logo-container">
            <img class="hero-icon" src="@/assets/images/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderHeroSvg from './icons/MultiLayerIcon.vue'
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useSettings } from '@/config/settings'

const { getGithubUrl } = useSettings()

onMounted(() => {
  const { animateHeaderHero } = useScrollAnimation()

  // Initialize header animations
  animateHeaderHero('.header-hero')
})
</script>

<style lang="scss" scoped>
.header-hero {
  min-height: 570px;
  padding-top: 144px;
  padding-bottom: 96px;
  position: relative;
  overflow: hidden;

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
      @media (max-width: 1399px) {
        display: none;
      }
    }

    .hero-control {
      padding-top: 3rem;

      &__wrapper {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: nowrap;
      }

      &__install-btn {
        flex-shrink: 0;
        font-size: clamp(1rem, 1.2vw, 1.1rem);
        padding: clamp(.5rem,1.5vw,.75rem) clamp(1rem,3vw,2rem);
        font-weight: 300;
        letter-spacing: 0.5px;
        white-space: nowrap;
        border: none;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        }

        .svg-inline--fa {
          font-size: 0.9em;
        }
      }

      &__desc {
        font-size: clamp(0.75rem, 1.2vw, 0.875rem);
        font-weight: 300;
        color: rgba(25, 25, 28, 0.6);
        margin: 0;
        line-height: 1.5;
        flex: 1;
        min-width: 0;
      }
    }
  }

  .logo-container {
    aspect-ratio: 1;
    width: 100px;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 70px;

    .hero-icon {
      width: 80%;
      height: 80%;
      object-fit: contain;
      display: block;
    }
  }
}

@media (max-width: 768px) {
  .header-hero {
    &__content {
      .hero-control {
        &__wrapper {
          gap: 1rem;
        }

        &__install-btn {
          padding: 0.625rem 1rem;
          font-size: 0.875rem;
        }

        &__desc {
          font-size: 0.75rem;
          br {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .header-hero {
    &__content {
      .hero-control {
        &__install-btn {
          padding: 0.5rem 0.875rem;
        }
      }
    }
  }
}
</style>
