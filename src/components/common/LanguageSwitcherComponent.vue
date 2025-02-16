<template>
  <div class="language-switcher d-inline-flex">
    <template v-for="(locale, index) in availableLocales" :key="locale">
      <button
        type="button"
        class="lang-btn"
        :class="{ 'active': currentLocale === locale }"
        @click="setLocale(locale)"
      >
        {{ locale.toUpperCase() }}
      </button>
    </template>
  </div>
</template>

<script setup>
import { useLanguage } from '@/i18n'

const { setLocale, currentLocale, availableLocales } = useLanguage()
</script>

<style lang="scss" scoped>
.language-switcher {
  background: rgba(0, 0, 0, 0.04);
  padding: 4px;
  border-radius: 6px;

  &.light {
    background: rgba(255, 255, 255, 0.1);

    .lang-btn {
      color: rgba(255, 255, 255, 0.6);

      &:hover:not(.active) {
        background: rgba(255, 255, 255, 0.05);
        color: #fff;
      }

      &.active {
        background: rgba(255, 255, 255, 0.9);
        color: var(--c-primary);
      }
    }
  }
}

.lang-btn {
  background: transparent;
  border: none;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--c-gray-600);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(.active) {
    background: rgba(0, 0, 0, 0.03);
    color: var(--c-gray-900);
  }

  &.active {
    background: #fff;
    color: var(--c-primary);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  & + .lang-btn {
    margin-left: 2px;
  }
}
</style>
