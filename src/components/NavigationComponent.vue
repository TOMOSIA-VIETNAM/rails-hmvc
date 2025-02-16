<template>
  <nav class="navbar navbar-expand-lg py-0 bg-dark">
    <div class="container">
      <a class="navbar-brand py-0" href="#">
        <img src="@/assets/images/logo-tms.png" alt="logo" height="72" />
        <span class="badge-corp">{{ $t('hero.title') }}</span>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/TOMOSIA-VIETNAM/hmvc-rails" target="_blank">
            <font-awesome-icon :icon="faGithub" size="lg" fade />
            <span>&nbsp; {{ $t('navigation.version') }}</span>
          </a>
        </li>

        <!-- <li class="nav-item">
          <a class="nav-link">{{ $t('navigation.documentation') }}</a>
        </li> -->

        <li class="nav-item d-flex align-items-center">
          <LanguageSwitcherComponent class="light" />
        </li>

        <!-- <li class="nav-item">
          <a class="nav-link">
            <a link="#" class="btn btn--rounded btn-primary">{{ $t('navigation.contact') }}</a>
          </a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import LanguageSwitcherComponent from '@/components/common/LanguageSwitcherComponent.vue'

onMounted(() => {
  const { fadeInUp, staggerChildren } = useScrollAnimation()

  // Animate logo and badge
  fadeInUp('.navbar-brand', {
    y: -20,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.2
  })

  // Animate nav items with stagger effect
  staggerChildren('.navbar-nav', '.nav-item', {
    duration: 0.5,
    stagger: 0.1,
    y: -20,
    delay: 0.4,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.navbar-nav {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  will-change: transform, opacity;
}

.nav-item {
  will-change: transform, opacity;
}

.badge-corp {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 100;
  margin-left: 10px;
  border-radius: 4px;
  padding: 0.35em 0.65em;
}

.nav-link {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  padding: 1rem 0.75rem !important;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
}
</style>
