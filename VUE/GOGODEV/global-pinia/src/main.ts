import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import router from './router'
import VueSession from 'vue-session'

const pinia = createPinia();
const app = createApp(App);

app.use(router)
app.use(pinia)
app.use(VueCookies, {expires: '1d'})
app.use(VueSession)
app.mount('#app')