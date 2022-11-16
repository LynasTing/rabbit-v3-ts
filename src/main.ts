import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import 'normalize.css'
import '@/assets/styles/index.css'
import ComJs from './components'
import router from './router'
const app = createApp(App)
.use(store)
.use(router)
.use(ComJs)
app.use(store)
createApp(App).mount('#app')
app.mount('#app')