<template>
  <div style="padding-top: 50px;">

    <!-- Jika destinasi ditemukan -->
    <div v-if="destinasi">

      <!-- Hero detail -->
      <div class="detail-hero">
        <img :src="destinasi.foto" :alt="destinasi.nama" class="detail-foto">
        <div class="detail-overlay"></div>
        <div class="detail-hero-content">
          <span class="badge">{{ destinasi.tipe }}</span>
          <h1>{{ destinasi.nama }}</h1>
          <p>📍 {{ destinasi.lokasi }} &nbsp;|&nbsp; ⭐ {{ destinasi.rating }} / 5.0 &nbsp;|&nbsp; ⏱ {{ destinasi.durasi }}</p>
        </div>
      </div>

      <!-- Tombol kembali -->
      <button class="back-btn" @click="$router.push('/destinasi')">← Kembali ke Destinasi</button>

      <!-- Isi detail -->
      <div class="detail-isi">

        <!-- Konten utama -->
        <div class="detail-konten">
          <h2>Tentang Tempat Ini</h2>
          <p>{{ destinasi.deskripsi }}</p>

          <h2>Aktivitas yang Bisa Dilakukan</h2>
          <ul class="aktivitas-list">
            <li v-for="a in destinasi.aktivitas" :key="a">{{ a }}</li>
          </ul>

          <h2>Tips Berkunjung</h2>
          <p>{{ destinasi.tips }}</p>

          <h2>Cara Menuju ke Sana</h2>
          <p>{{ destinasi.rute }}</p>
        </div>

        <!-- Sidebar -->
        <div class="detail-sidebar">

          <div class="info-box">
            <h3>Informasi Praktis</h3>
            <div class="info-row">
              <span class="label">Jam Buka</span>
              <span class="value">{{ destinasi.jamBuka }}</span>
            </div>
            <div class="info-row">
              <span class="label">Tiket Masuk</span>
              <span class="value">{{ destinasi.tiket }}</span>
            </div>
            <div class="info-row">
              <span class="label">Lokasi</span>
              <span class="value">{{ destinasi.lokasi }}</span>
            </div>
            <div class="info-row">
              <span class="label">Kategori</span>
              <span class="value">{{ destinasi.tipe }}</span>
            </div>
            <div class="info-row">
              <span class="label">Rating</span>
              <span class="value">⭐ {{ destinasi.rating }}</span>
            </div>
          </div>

          <div class="info-box">
            <h3>Fasilitas</h3>
            <ul class="aktivitas-list">
              <li v-for="f in destinasi.fasilitas" :key="f">{{ f }}</li>
            </ul>
          </div>

          <button class="btn" style="width: 100%; text-align: center; padding: 12px;" @click="$router.push('/kontak')">
            💬 Tanya Lebih Lanjut
          </button>

        </div>
      </div>

    </div>

    <!-- Jika destinasi tidak ditemukan -->
    <div v-else style="text-align: center; padding: 80px 40px;">
      <p style="color: #888; margin-bottom: 20px;">Destinasi tidak ditemukan.</p>
      <button class="btn" @click="$router.push('/destinasi')">🗺 Lihat Destinasi</button>
    </div>

    <!-- Footer -->
    <div class="footer">
      &copy; 2024 <span>JelajahHijau</span> - Wisata Alam Jabodetabek
    </div>

  </div>
</template>

<script>
import semuaDestinasi from '../data/destinasi.js'

export default {
  name: 'Detail',

  data() {
    return {
      destinasi: null
    }
  },

  // Dijalankan saat halaman dibuka
  mounted() {
    // Ambil id dari URL
    const id = parseInt(this.$route.params.id)

    // Cari destinasi berdasarkan id
    this.destinasi = semuaDestinasi.find(d => d.id === id)
  }
}
</script>

<style scoped>
.detail-hero {
  height: 50vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.detail-foto {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
}

.detail-hero-content {
  position: relative;
  z-index: 2;
  padding: 30px 40px;
  color: white;
}

.badge {
  background-color: #52b788;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
}

.detail-hero-content h1 {
  font-size: 36px;
  color: #b7e4c7;
  margin: 10px 0 8px;
}

.detail-hero-content p {
  color: #aaaaaa;
  font-size: 14px;
}

.back-btn {
  background: none;
  border: none;
  color: #2e7d52;
  font-size: 14px;
  cursor: pointer;
  padding: 15px 40px;
  display: block;
  font-family: Arial, sans-serif;
}

.detail-isi {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 20px 40px 40px;
}

.detail-konten {
  flex: 2;
  min-width: 280px;
}

.detail-konten h2 {
  font-size: 20px;
  color: #2e7d52;
  margin: 20px 0 10px;
  border-bottom: 2px solid #52b788;
  padding-bottom: 5px;
}

.detail-konten h2:first-child {
  margin-top: 0;
}

.detail-konten p {
  font-size: 14px;
  color: #555;
  line-height: 1.8;
}

.aktivitas-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin-top: 5px;
}

.aktivitas-list li {
  background-color: #e8f5ee;
  border: 1px solid #52b788;
  color: #2e7d52;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 13px;
}

.detail-sidebar {
  flex: 1;
  min-width: 260px;
}

.info-box {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.08);
}

.info-box h3 {
  font-size: 16px;
  color: #2e7d52;
  margin-bottom: 12px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}

.info-row:last-child {
  border-bottom: none;
}

.info-row .label {
  color: #888888;
}

.info-row .value {
  color: #333333;
  font-weight: bold;
}
</style>
