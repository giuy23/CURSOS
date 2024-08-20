import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import example from './plugins/example'

const app = createApp(App)
app.use(example, {
  message: "Hello World"
})

app.mount('#app')
