import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { i18n } from '@/i18n'

/** Import Font Awesome icons
  Import all icons:
    import { fab } from '@fortawesome/free-brands-svg-icons'
    import { far } from '@fortawesome/free-regular-svg-icons'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { library } from '@fortawesome/fontawesome-svg-core'
    library.add(fab, far, fas)
**/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/** Import Bootstrap */
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

/** Import Highlight.js
 * Docs: https://github.com/highlightjs/vue-plugin
 */
import 'highlight.js/styles/github-dark-dimmed.css'
import hljs from 'highlight.js/lib/core'
import ruby from 'highlight.js/lib/languages/ruby'
import hljsVuePlugin from '@highlightjs/vue-plugin'
hljs.registerLanguage('ruby', ruby)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(hljsVuePlugin)
app.use(i18n)

app.mount('#app')
