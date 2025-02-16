<template>
  <section class="page-footer bg-gray--200">
    <div class="container">
      <div class="footer-top text-end mb-4">
        <LanguageSwitcherComponent />
      </div>

      <div class="footer-bottom row">
        <div class="col-12 col-md-6">
          <p class="mb-0">{{ $t('footer.copyright', { year: getCopyrightYear() }) }}</p>
        </div>
        <div class="col-12 col-md-6 text-md-end">
          <p class="mb-0" v-html="$t('footer.developedBy', { company: getCompanyInfo().NAME })"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page-footer {
  padding-top: 1.25rem;
  padding-bottom: 1.5rem;
  color: var(--c-gray-900);
  font-size: 0.8125rem;
  letter-spacing: 0.3px;
  font-weight: 300;

  .footer-top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding-bottom: 1rem;
  }

  a {
    color: inherit;
    transition: color 0.3s ease;
    text-decoration: none;

    &:hover {
      color: var(--c-primary);
    }
  }

  @media (max-width: 768px) {
    .footer-top {
      text-align: center;
      margin-bottom: 2rem;
    }

    .footer-bottom {
      text-align: center;

      [class*="col-"] {
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>

<script setup>
import { useSettings } from '@/config/settings'
import LanguageSwitcherComponent from '@/components/common/LanguageSwitcherComponent.vue'

const { getCopyrightYear, getCompanyInfo } = useSettings()
</script>
