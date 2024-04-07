import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
// library.add(fab, far, fas)

// import 'bootstrap/scss/bootstrap.scss'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(bootstrap)

app.mount('#app')
