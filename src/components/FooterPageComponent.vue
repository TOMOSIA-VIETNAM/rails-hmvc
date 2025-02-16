<template>
  <section class="page-footer bg-gray--200">
    <div class="container">
      <div class="footer-main row">
        <div class="col-12 col-md-5">
          <div class="footer-brand">
            <img src="@/assets/images/logo-tms-blue.png" alt="Tomosia" class="footer-logo" />
            <p class="brand-description mt-4">
              {{ $t('footer.brand.description') }}
            </p>
          </div>
          <div class="footer-social mt-4">
            <a :href="getSocialLink('FACEBOOK')" target="_blank" class="social-link" aria-label="Facebook">
              <font-awesome-icon :icon="faFacebook" />
            </a>
            <a :href="getSocialLink('TIKTOK')" target="_blank" class="social-link" aria-label="TikTok">
              <font-awesome-icon :icon="faTiktok" />
            </a>
            <a :href="getSocialLink('LINKEDIN')" target="_blank" class="social-link" aria-label="LinkedIn">
              <font-awesome-icon :icon="faLinkedin" />
            </a>
          </div>
        </div>

        <div class="col-12 col-md-3 footer-links">
          <h4 class="footer-title">{{ $t('footer.quickLinks.title') }}</h4>
          <ul class="list-unstyled">
            <li><a href="#">{{ $t('footer.quickLinks.about') }}</a></li>
            <li><a href="#">{{ $t('footer.quickLinks.company') }}</a></li>
            <li><a href="#">{{ $t('footer.quickLinks.projects') }}</a></li>
            <li><a href="#">{{ $t('footer.quickLinks.process') }}</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-4 footer-contact">
          <h4 class="footer-title">{{ $t('footer.contact.title') }}</h4>
          <ul class="list-unstyled">
            <li>
              <font-awesome-icon :icon="faLocationDot" class="me-2" />
              {{ $t('footer.contact.mainOffice') }}
            </li>
            <li>
              <font-awesome-icon :icon="faLocationDot" class="me-2" />
              {{ $t('footer.contact.branchOffice') }}
            </li>
            <li>
              <font-awesome-icon :icon="faEnvelope" class="me-2" />
              <a :href="'mailto:' + getCompanyInfo().EMAIL">{{ getCompanyInfo().EMAIL }}</a>
            </li>
            <li>
              <font-awesome-icon :icon="faPhone" class="me-2" />
              {{ $t('footer.contact.phone') }}
            </li>
          </ul>
          <div class="mt-3">
            <LanguageSwitcherComponent />
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <p class="copyright mb-0">{{ $t('footer.copyright', { year: getCopyrightYear() }) }}</p>
          </div>
          <div class="col-12 col-md-6 text-md-end">
            <p class="developed-by mb-0" v-html="$t('footer.developedBy', { company: getCompanyInfo().NAME })"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSettings } from '@/config/settings'
import LanguageSwitcherComponent from '@/components/common/LanguageSwitcherComponent.vue'
import { faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const { getCopyrightYear, getCompanyInfo, getSocialLink } = useSettings()
</script>

<style lang="scss" scoped>
.page-footer {
  padding: 4rem 0 1.5rem;
  color: var(--c-gray-900);
  font-size: 0.875rem;
  letter-spacing: 0.3px;
  font-weight: 300;
  background-color: #f8f9fa;

  .footer-main {
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .footer-brand {
    .footer-logo {
      height: 60px;
      width: auto;
      object-fit: contain;
    }

    .brand-description {
      color: var(--c-gray-700);
      line-height: 1.6;
      font-size: 0.9375rem;
      max-width: 400px;
    }
  }

  .footer-title {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: var(--c-gray-900);
  }

  .footer-social {
    display: flex;
    align-items: center;
    gap: 1rem;

    .social-link {
      color: var(--c-gray-700);
      font-size: 1.125rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.03);

      &:hover {
        color: var(--c-primary);
        background: rgba(31, 187, 161, 0.1);
        transform: translateY(-2px);
      }
    }
  }

  .footer-links, .footer-contact {
    ul li {
      margin-bottom: 0.75rem;

      a {
        color: var(--c-gray-700);
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: var(--c-primary);
        }
      }
    }
  }

  .footer-contact {
    li {
      color: var(--c-gray-700);
      display: flex;
      align-items: center;

      .svg-inline--fa {
        color: var(--c-primary);
        width: 16px;
      }
    }
  }

  .footer-bottom {
    padding-top: 1.5rem;
    font-size: 0.8125rem;

    .copyright, .developed-by {
      color: var(--c-gray-700);
    }

    a {
      color: var(--c-primary);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 3rem;

    .footer-main {
      text-align: center;
      padding-bottom: 2rem;

      .footer-brand {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;

        .brand-description {
          max-width: 100%;
        }
      }

      .footer-social {
        justify-content: center;
        margin-bottom: 2rem;
      }

      .footer-links, .footer-contact {
        margin-bottom: 2rem;
      }
    }

    .footer-bottom {
      text-align: center;

      [class*="col-"] {
        margin-bottom: 0.5rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
