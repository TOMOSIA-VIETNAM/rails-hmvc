<template>
  <button
    class="back-to-top"
    :class="{ 'show': isVisible }"
    @click="scrollToTop"
    aria-label="Back to top"
  >
    <font-awesome-icon :icon="faArrowUp" />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const isVisible = ref(false)
const scrollThreshold = 300 // Show button after scrolling 300px

const checkScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #0b2520;
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  z-index: 1000;

  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:hover {
    background: var(--c-primary);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
  }
}
</style>
