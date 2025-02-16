import { createI18n } from 'vue-i18n'
import en from './locales/en'
import ja from './locales/ja'
import vi from './locales/vi'

export const LOCALES = {
  ENGLISH: 'en',
  JAPANESE: 'ja',
  // VIETNAMESE: 'vi'
}

export const DEFAULT_LOCALE = LOCALES.ENGLISH

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    [LOCALES.ENGLISH]: en,
    [LOCALES.JAPANESE]: ja,
    [LOCALES.VIETNAMESE]: vi
  }
})

// Composable for language switching
export const useLanguage = () => {
  const setLocale = (locale) => {
    i18n.global.locale.value = locale
    document.querySelector('html').setAttribute('lang', locale)
    localStorage.setItem('user-locale', locale)
  }

  const initializeLocale = () => {
    const savedLocale = localStorage.getItem('user-locale')
    if (savedLocale) {
      setLocale(savedLocale)
    }
  }

  return {
    setLocale,
    initializeLocale,
    currentLocale: i18n.global.locale,
    availableLocales: Object.values(LOCALES)
  }
}
