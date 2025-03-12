import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'

// Custom tooltip configuration
const tooltipConfig = {
  trigger: 'hover',
  animation: true,
  delay: { show: 100, hide: 100 },
  placement: 'auto',
  html: true
}

export const useBootstrap = () => {
  const initTooltips = () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach(el => {
      new bootstrap.Tooltip(el, tooltipConfig)
    })
  }

  return {
    bootstrap,
    initTooltips
  }
}

export default {
  install: (app) => {
    app.config.globalProperties.$bootstrap = bootstrap
  }
}
