export const REPOSITORY = {
  GITHUB_URL: 'https://github.com/TOMOSIA-VIETNAM/hmvc-rails',
  DOCUMENTATION_URL: 'https://tomosia-vietnam.github.io/hmvc-rails',
  VERSION: 'v1.0.0'
}

export const COMPANY = {
  NAME: 'TOMOSIA VIETNAM',
  WEBSITE: 'https://tomosia.com',
  GITHUB: 'https://github.com/TOMOSIA-VIETNAM',
  EMAIL: 'contact@tomosia.com'
}

export const SOCIAL_LINKS = {
  GITHUB: COMPANY.GITHUB,
  FACEBOOK: 'https://www.facebook.com/tomosiavn',
  TIKTOK: 'https://www.tiktok.com/@tomosiavn',
  LINKEDIN: 'https://www.linkedin.com/company/tomosiavietnam/'
}

export const APP_CONFIG = {
  NAME: "HMVC Rails",
  DESCRIPTION: "High Level MVC for Ruby on Rails",
  KEYWORDS: "hmvc, rails, ruby, mvc, architecture",
  AUTHOR: COMPANY.NAME,
  COPYRIGHT_YEAR: "2017"
}

export const ANIMATION = {
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.5,
    SLOW: 0.8
  },
  EASE: {
    DEFAULT: 'power2.out',
    BOUNCE: 'back.out(1.7)',
    SMOOTH: 'sine.inOut'
  },
  DELAY: {
    STAGGER: 0.1,
    INITIAL: 0.2
  }
}

// Composable useSettings
export const useSettings = () => {
  const getGithubUrl = () => REPOSITORY.GITHUB_URL
  const getDocUrl = () => REPOSITORY.DOCUMENTATION_URL
  const getVersion = () => REPOSITORY.VERSION
  const getCompanyInfo = () => COMPANY
  const getCurrentYear = () => new Date().getFullYear()
  const getCopyrightYear = () => `${APP_CONFIG.COPYRIGHT_YEAR} - ${getCurrentYear()}`
  const getSocialLink = (platform) => SOCIAL_LINKS[platform] || '#'

  return {
    getGithubUrl,
    getDocUrl,
    getVersion,
    getCompanyInfo,
    getCurrentYear,
    getCopyrightYear,
    getSocialLink
  }
}

export default {
  REPOSITORY,
  COMPANY,
  SOCIAL_LINKS,
  APP_CONFIG
}
