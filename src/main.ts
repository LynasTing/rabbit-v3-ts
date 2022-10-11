import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'normalize.css'
import '@/assets/styles/index.css'
import router from './router'
const app = createApp(App)
app.use(store, router)
createApp(App).mount('#app')
app.use(router)
app.mount('#app')