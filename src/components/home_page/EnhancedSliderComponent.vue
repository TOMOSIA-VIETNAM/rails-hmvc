<template>
  <section class="enhanced-slider" ref="sliderRef">
    <div class="enhanced-slider__container">
      <div class="enhanced-slider__image-section">
        <transition-group name="fade" mode="out-in">
          <img
            v-for="slide in slides"
            :key="slide.id"
            :src="slide.imageSrc"
            :alt="slide.title"
            :class="{ 'active': slide.id === currentSlide.id }"
          />
        </transition-group>
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
            <h3 class="enhanced-slider__title">{{ slide.title }}</h3>
            <p class="enhanced-slider__description" v-if="index === currentIndex">{{ slide.description }}</p>
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
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

const slides = [
  {
    id: 1,
    title: 'MVC vs HMVC',
    description: 'We provide unified support for all major version control systems, including Git, SVN, Mercurial, and many others.',
    imageSrc: '/src/assets/images/mvc-vs-hmvc.png'
  },
  {
    id: 2,
    title: 'Overview Layer',
    description: 'Context-sensitive code completion helps you write SQL code faster. DataGrip is aware of the table structure, foreign keys, and even database objects created in the code you\'re editing.',
    imageSrc: '/src/assets/images/overview-layer.png'
  },
  {
    id: 3,
    title: 'Flow Control',
    description: 'Execute queries in different modes and keep track of all your activity with the local history, preventing you from losing your work.',
    imageSrc: '/src/assets/images/flow-control.gif'
  },
  {
    id: 4,
    title: 'Structure Project',
    description: 'The query history feature preserves all queries in a log file, and the tool supports parameterized SQL queries with customizable patterns and SQL dialect options.',
    imageSrc: '/src/assets/images/structure-project.png'
  }
];

const currentIndex = ref(0);
const progress = ref(0);
const autoplayInterval = ref(null);
const sliderRef = ref(null);
const isInViewport = ref(false);
const isPaused = ref(false);
const hoveredIndex = ref(null);

const currentSlide = computed(() => slides[currentIndex.value]);

const setCurrentSlide = (index) => {
  currentIndex.value = index;
  resetProgress();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
  resetProgress();
};

const resetProgress = () => {
  progress.value = 0;
};

const startAutoplay = () => {
  if (autoplayInterval.value) clearInterval(autoplayInterval.value);
  autoplayInterval.value = setInterval(() => {
    if (hoveredIndex.value !== currentIndex.value) {
      progress.value += 1;
      if (progress.value >= 100) {
        nextSlide();
      }
    }
  }, 100); // Update every 100ms for smooth progress
};

const checkInViewport = () => {
  if (!sliderRef.value) return;
  const rect = sliderRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  isInViewport.value = rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;
};

onMounted(() => {
  window.addEventListener('scroll', checkInViewport);
  checkInViewport();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkInViewport);
  if (autoplayInterval.value) clearInterval(autoplayInterval.value);
});

watch(isInViewport, (newValue) => {
  if (newValue) {
    startAutoplay();
  } else {
    if (autoplayInterval.value) clearInterval(autoplayInterval.value);
  }
});
</script>

<style lang="scss" scoped>
.enhanced-slider {
  &__container {
    display: flex;
    height: 500px; // Adjust as needed
  }

  &__image-section {
    flex: 0 0 60%;
    overflow: hidden;
    position: relative;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: all 0.75s ease-in-out;
      padding: 20px;
      border-radius: 1.5rem;
      transform: scale(0.95);

      &.active {
        opacity: 1;
        transform: scale(1);
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

// Responsive styles
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
