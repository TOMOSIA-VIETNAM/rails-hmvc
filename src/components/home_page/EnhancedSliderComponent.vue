<template>
  <section class="enhanced-slider" ref="sliderRef">
    <div class="enhanced-slider__container">
      <div class="enhanced-slider__image-section">
        <div class="image-container">
          <img
            v-for="slide in slides"
            :key="slide.id"
            :src="slide.imageSrc"
            :alt="$t(`enhancedSlider.slides.${slide.key}.title`)"
            :class="{
              'active': slide.id === currentSlide.id,
              'prev': isPrevSlide(slide.id),
              'next': isNextSlide(slide.id)
            }"
            @load="handleImageLoad(slide.id)"
          />
        </div>
      </div>
      <div class="enhanced-slider__content-section">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="enhanced-slider__content-item"
          :class="{ 'active': index === currentIndex }"
          @click="setCurrentSlide(index)"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <div class="enhanced-slider__content-wrapper">
            <h3 class="enhanced-slider__title">{{ $t(`enhancedSlider.slides.${slide.key}.title`) }}</h3>
            <p class="enhanced-slider__description" v-if="index === currentIndex">
              {{ $t(`enhancedSlider.slides.${slide.key}.description`) }}
            </p>
          </div>
          <div
            class="enhanced-slider__progress-bar"
            :style="{ width: index === currentIndex ? `${progress}%` : '0%' }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const slides = [
  {
    id: 1,
    key: 'mvcVsHmvc',
    imageSrc: new URL('@/assets/images/mvc-vs-hmvc.png', import.meta.url).href
  },
  {
    id: 2,
    key: 'overviewLayer',
    imageSrc: new URL('@/assets/images/overview-and-structure.png', import.meta.url).href
  },
  {
    id: 3,
    key: 'flowControl',
    imageSrc: new URL('@/assets/images/flow-control.gif', import.meta.url).href
  },
]

const currentIndex = ref(0)
const progress = ref(0)
const autoplayInterval = ref(null)
const sliderRef = ref(null)
const isInViewport = ref(false)
const hoveredIndex = ref(null)
let sliderAnimation = null
const imageLoaded = ref(false)
const loadedImages = ref(new Set())
const previousIndex = ref(0)

const currentSlide = computed(() => slides[currentIndex.value])

const handleImageLoad = (id) => {
  loadedImages.value.add(id)
}

const isPrevSlide = (id) => {
  const prevIdx = (currentIndex.value - 1 + slides.length) % slides.length
  return slides[prevIdx].id === id
}

const isNextSlide = (id) => {
  const nextIdx = (currentIndex.value + 1) % slides.length
  return slides[nextIdx].id === id
}

const setCurrentSlide = (index) => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }

  previousIndex.value = currentIndex.value

  const targetSlide = slides[index]
  if (loadedImages.value.has(targetSlide.id)) {
    currentIndex.value = index
    resetProgress()

    setTimeout(() => {
      if (isInViewport.value) {
        startAutoplay()
      }
    }, 1000)
  }
}

const nextSlide = () => {
  previousIndex.value = currentIndex.value
  currentIndex.value = (currentIndex.value + 1) % slides.length
  resetProgress()
}

const resetProgress = () => {
  progress.value = 0
}

const startAutoplay = () => {
  if (autoplayInterval.value) clearInterval(autoplayInterval.value)
  autoplayInterval.value = setInterval(() => {
    if (hoveredIndex.value !== currentIndex.value) {
      progress.value += 1
      if (progress.value >= 100) {
        nextSlide()
      }
    }
  }, 100)
}

const checkInViewport = () => {
  if (!sliderRef.value) return
  const rect = sliderRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  isInViewport.value = rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2
}

onMounted(() => {
  const { animateSlider } = useScrollAnimation()

  sliderAnimation = animateSlider('.enhanced-slider', {
    imageScale: 0.95,
    imageDuration: 0.75,
    contentDelay: 0.2,
    contentStagger: 0.1
  })

  window.addEventListener('scroll', checkInViewport)
  checkInViewport()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkInViewport)
  if (autoplayInterval.value) clearInterval(autoplayInterval.value)
})

watch(isInViewport, (newValue) => {
  if (newValue) {
    startAutoplay()
  } else {
    if (autoplayInterval.value) clearInterval(autoplayInterval.value)
  }
})
</script>

<style lang="scss" scoped>
.enhanced-slider {
  &__container {
    display: flex;
    height: 500px;
  }

  &__image-section {
    flex: 0 0 60%;
    overflow: hidden;
    position: relative;
    background-color: #f8f9fa;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;

    .image-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
      will-change: opacity, transform;
      padding: 20px;
      border-radius: 1.5rem;

      &.active {
        opacity: 1;
        transform: scale(1);
        z-index: 2;
      }

      &.prev {
        opacity: 0;
        transform: scale(0.95);
        z-index: 1;
      }

      &.next {
        opacity: 0;
        transform: scale(0.95);
        z-index: 1;
      }
    }
  }

  &__content-section {
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    padding-left: 3rem;
  }

  &__content-item {
    flex: 0 1 auto;
    position: relative;
    padding: 15px;
    border-radius: 1.5rem;
    cursor: pointer;
    overflow: hidden;
    transition: background-color 0.3s ease;
    margin-bottom: 10px;

    &.active {
      padding: 24px;
      background-color: rgba(11, 37, 32, 0.9);

      .enhanced-slider__title,
      .enhanced-slider__description {
        color: #fff;
      }
    }
  }

  &__content-wrapper {
    position: relative;
    z-index: 2;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  &__description {
    font-family: var(--font-sub-heading);
    font-weight: 300;
    font-size: 0.9rem;
    transition: opacity 0.3s ease;
    overflow-y: auto;
    max-height: 150px;
  }

  &__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: rgba(31, 187, 161, 0.5);
    transition: width 0.1s linear;
  }
}

@media (max-width: 768px) {
  .enhanced-slider {
    &__container {
      flex-direction: column;
      height: auto;
    }

    &__image-section,
    &__content-section {
      flex: none;
      width: 100%;
    }

    &__image-section {
      height: 300px;
      margin: 15px;
      padding: 15px;
    }

    &__content-section {
      position: relative;
      background-color: #f5f5f5;
      padding: 1rem;
    }

    &__content-item {
      background-color: transparent;
      padding: 10px;

      &.active {
        background-color: rgba(11, 37, 32, 0.7);
      }
    }

    &__title {
      font-size: 1rem;
    }

    &__description {
      font-size: 0.8rem;
    }
  }
}
</style>
