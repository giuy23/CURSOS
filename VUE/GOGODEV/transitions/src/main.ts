import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiFileCodeFill } from 'oh-vue-icons/icons'

addIcons(BiFileCodeFill);

const app = createApp(App)
app.component("v-icon", OhVueIcon)
app.mount('#app')
