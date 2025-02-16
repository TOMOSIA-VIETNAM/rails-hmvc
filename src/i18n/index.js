import { createI18n } from 'vue-i18n'
import en from './locales/en'
import ja from './locales/ja'
import vi from './locales/vi'

export const LOCALES = {
  ENGLISH: 'en',
  JAPANESE: 'ja',
  // VIETNAMESE: 'vi'
}

const STORAGE_KEY = 'user-locale'
const savedLocale = localStorage.getItem(STORAGE_KEY)
export const DEFAULT_LOCALE = savedLocale || LOCALES.ENGLISH

// Initialize HTML lang attribute
document.documentElement.lang = DEFAULT_LOCALE

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: DEFAULT_LOCALE,
  fallbackLocale: LOCALES.ENGLISH,
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
    localStorage.setItem(STORAGE_KEY, locale)
  }

  const initializeLocale = () => {
    const savedLocale = localStorage.getItem(STORAGE_KEY)
    if (savedLocale && Object.values(LOCALES).includes(savedLocale)) {
      setLocale(savedLocale)
    } else {
      // If no saved locale or invalid, set default
      setLocale(LOCALES.ENGLISH)
    }
  }

  return {
    setLocale,
    initializeLocale,
    currentLocale: i18n.global.locale,
    availableLocales: Object.values(LOCALES)
  }
}
