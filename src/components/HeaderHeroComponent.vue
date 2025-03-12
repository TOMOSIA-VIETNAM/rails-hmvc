<template>
  <section class="header-hero">
    <div class="header-hero__background">
      <HeaderHeroSvg />
    </div>
    <div class="header-hero__content container pb-5">
      <div class="row">
        <div class="col-12 col-md-10">
          <h1 class="hero-title">{{ $t('hero.header.title') }}</h1>
          <h1 class="hero-subtitle">{{ $t('hero.header.subtitle') }}</h1>

          <!-- Pain Points -->
          <div class="hero-features">
            <div class="feature-item">
              <div class="feature-icon">
                <font-awesome-icon :icon="faHandSparkles" />
              </div>
              <span>{{ $t('hero.painPoints.p1') }}</span>
              <div class="feature-info" data-bs-toggle="tooltip" :title="$t('hero.painPoints.p1_desc')">
                <font-awesome-icon :icon="faCircleQuestion" />
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <font-awesome-icon :icon="faSignsPost" />
              </div>
              <span>{{ $t('hero.painPoints.p2') }}</span>
              <div class="feature-info" data-bs-toggle="tooltip" :title="$t('hero.painPoints.p2_desc')">
                <font-awesome-icon :icon="faCircleQuestion" />
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <font-awesome-icon :icon="faCode" />
              </div>
              <span>{{ $t('hero.painPoints.p3') }}</span>
              <div class="feature-info" data-bs-toggle="tooltip" :title="$t('hero.painPoints.p3_desc')">
                <font-awesome-icon :icon="faCircleQuestion" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2 text-end d-none d-md-block">
          <a :href="getGithubUrl()" target="_blank" class="d-block">
            <div class="logo-container">
              <img class="hero-icon" src="@/assets/images/logo.png" alt="logo" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderHeroSvg from './icons/MultiLayerIcon.vue'
import { useSettings } from '@/config/settings'
import { faHandSparkles, faSignsPost, faCode, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useBootstrap } from '@/plugins/bootstrap'

const { getGithubUrl } = useSettings()

onMounted(() => {
  const { animateHeroFeatures, animateHeroText, animateHeroBackground } = useScrollAnimation()
  const bootstrap = useBootstrap()

  // Animate background
  animateHeroBackground('.header-hero__background svg')

  // Animate hero title and subtitle
  animateHeroText('.hero-title', '.hero-subtitle')

  // Animate hero features
  animateHeroFeatures('.hero-features', '.feature-item')

  // Initialize tooltips
  bootstrap.initTooltips()
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
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      letter-spacing: -1.5px;
      font-size: clamp(3rem, 5.5vw, 4.2rem);
      color: #0f172a;
      line-height: 1.1;
      position: relative;
      margin-bottom: 1.5rem;
      display: inline-block;
    }

    .hero-subtitle {
      font-family: 'Inter', sans-serif;
      font-weight: 200;
      font-size: clamp(1.2rem, 2.5vw, 1.8rem);
      color: #475569;
      letter-spacing: -0.2px;
      line-height: 1.5;
      max-width: 650px;
      opacity: 0.9;
      margin-bottom: 2.5rem;
      position: relative;
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

.hero-features {
  margin: 3rem 0 2.5rem;
  display: grid;
  gap: 1rem;
  max-width: 600px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  background: rgba(59, 130, 246, 0.05);
  border-left: 3px solid #3B82F6;
  border-radius: 0 8px 8px 0;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateX(5px);
  }

  .feature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: #3B82F6;
    border-radius: 6px;
    color: white;
    flex-shrink: 0;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    color: var(--c-text-primary);
    line-height: 1.5;
    flex: 1;
  }

  .feature-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    color: #3B82F6;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }

    svg {
      width: 100%;
      height: 100%;
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

  .hero-features {
    margin: 2rem 0;
  }

  .feature-item {
    padding: 0.625rem 1rem;

    .feature-icon {
      width: 28px;
      height: 28px;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    span {
      font-size: 0.875rem;
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

// Custom tooltip styles for HeaderHeroComponent
:deep(.tooltip) {
  --bs-tooltip-max-width: 400px;
  --bs-tooltip-bg: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  .tooltip-inner {
    font-family: var(--font-sub-heading);
    max-width: 400px !important;
    width: fit-content;
    min-width: 300px;
    padding: 1rem 1.25rem;
    color: rgba(255, 255, 255, 0.95);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.12),
      0 2px 4px -1px rgba(0, 0, 0, 0.07),
      0 12px 16px -4px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      145deg,
      rgba(15, 23, 42, 0.85) 0%,
      rgba(30, 41, 59, 0.85) 100%
    );
  }

  @media (max-width: 768px) {
    .tooltip-inner {
      max-width: 300px !important;
      min-width: 250px;
      padding: 0.875rem 1rem;
      font-size: 0.8125rem;
    }
  }

  @media (max-width: 480px) {
    .tooltip-inner {
      max-width: 250px !important;
      min-width: 200px;
      padding: 0.75rem 0.875rem;
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }

  .tooltip-arrow::before {
    border-width: 7px;
    opacity: 0.85;
  }

  // Enhanced show/hide animations
  &.fade {
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;

    &:not(.show) {
      transform: scale(0.95);
      opacity: 0;
    }

    &.show {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
