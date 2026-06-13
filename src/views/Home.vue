<template>
  <div style="padding-top: 50px;">

    <!-- Hero Section -->
    <div class="hero">
      <h1>🌿 Temukan Wisata Alam di Jabodetabek</h1>
      <p>Ratusan destinasi alam tersembunyi siap kamu jelajahi — dari air terjun, danau, hutan, sampai pantai.</p>
      <button class="btn" @click="$router.push('/destinasi')">Jelajahi Sekarang</button>
      <button class="btn" style="background-color: transparent; border: 1px solid white; margin-left: 10px;" @click="$router.push('/tentang')">Tentang Kami</button>
    </div>

    <!-- Statistik -->
    <div style="background-color: #2e7d52; display: flex; justify-content: center; gap: 60px; padding: 20px; flex-wrap: wrap;">
      <div style="text-align: center; color: white;">
        <h2 style="font-size: 32px; color: #e9c46a;">40+</h2>
        <p style="font-size: 13px;">Destinasi</p>
      </div>
      <div style="text-align: center; color: white;">
        <h2 style="font-size: 32px; color: #e9c46a;">5</h2>
        <p style="font-size: 13px;">Kota</p>
      </div>
      <div style="text-align: center; color: white;">
        <h2 style="font-size: 32px; color: #e9c46a;">100%</h2>
        <p style="font-size: 13px;">Gratis Info</p>
      </div>
    </div>

    <!-- Destinasi Populer -->
    <div class="section">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2>Destinasi Populer</h2>
        <span style="color: #2e7d52; cursor: pointer; text-decoration: underline;" @click="$router.push('/destinasi')">Lihat Semua →</span>
      </div>
      <div class="card-container">
        <div class="card" v-for="d in destinasiPopuler" :key="d.id" @click="$router.push('/detail/' + d.id)">
          <div class="card-header">
            <img :src="d.foto" :alt="d.nama" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="card-body">
            <h3>{{ d.nama }}</h3>
            <p class="lokasi">📍 {{ d.lokasi }}</p>
            <p>{{ d.singkat }}</p>
            <p class="rating">⭐ {{ d.rating }} / 5.0</p>
            <button class="btn">Lihat Detail</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Kategori -->
    <div class="section" style="background-color: #f9f9f9;">
      <h2>Jelajahi Berdasarkan Kategori</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 15px;">
        <div
          v-for="k in kategori"
          :key="k.nama"
          style="background-color: #f0faf5; border: 1px solid #52b788; border-radius: 6px; padding: 20px; width: 150px; text-align: center; cursor: pointer;"
          @click="$router.push('/destinasi')">
          <div style="font-size: 32px; margin-bottom: 8px;">{{ k.ikon }}</div>
          <strong>{{ k.nama }}</strong>
          <p style="font-size: 13px; color: #555;">{{ k.jumlah }} tempat</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      &copy; 2024 <span>JelajahHijau</span> - Wisata Alam Jabodetabek
    </div>

  </div>
</template>

<script>
// Import data destinasi
import destinasi from '../data/destinasi.js'

export default {
  name: 'Home',

  data() {
    return {
      // Ambil 3 destinasi pertama untuk ditampilkan di home
      destinasiPopuler: destinasi.slice(0, 3),

      // Data kategori
      kategori: [
        { nama: 'Air Terjun', ikon: '💧', jumlah: 8 },
        { nama: 'Danau & Situ', ikon: '🏞️', jumlah: 11 },
        { nama: 'Hutan & Taman', ikon: '🌲', jumlah: 9 },
        { nama: 'Gunung & Bukit', ikon: '⛰️', jumlah: 7 },
        { nama: 'Pantai', ikon: '🏖️', jumlah: 6 }
      ]
    }
  }
}
</script>

<style scoped>
/* Style khusus halaman Home */
.hero {
  background-color: #1a3a2a;
  color: white;
  padding: 80px 40px;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 15px;
  color: #b7e4c7;
}

.hero p {
  font-size: 18px;
  margin-bottom: 25px;
  color: #cccccc;
}
</style>
