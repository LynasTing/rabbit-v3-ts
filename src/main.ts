import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import 'normalize.css'
import '@/assets/styles/index.css'
import router from '@/router'
const app = createApp(App)
app.use(store, router)
createApp(App).mount('#app')
