// File utama Vue JS
// Di sini kita menginisialisasi aplikasi Vue

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// Buat aplikasi Vue dan pasang router
const app = createApp(App)
app.use(router)
app.mount('#app')
