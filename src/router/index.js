// File router - mengatur navigasi antar halaman
import { createRouter, createWebHashHistory } from 'vue-router'

// Import semua halaman
import Home from '../views/Home.vue'
import Destinasi from '../views/Destinasi.vue'
import Tentang from '../views/Tentang.vue'
import Detail from '../views/Detail.vue'
import Kontak from '../views/Kontak.vue'

// Daftar route / halaman
const routes = [
  { path: '/', component: Home },
  { path: '/destinasi', component: Destinasi },
  { path: '/tentang', component: Tentang },
  { path: '/detail/:id', component: Detail },
  { path: '/kontak', component: Kontak }
]

// Buat router
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router