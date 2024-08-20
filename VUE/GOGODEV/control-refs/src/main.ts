import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)
app.use(router)
app.use(VueLazyLoad, {})
app.mount('#app')
