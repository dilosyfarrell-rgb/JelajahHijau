<template>
  <div style="padding-top: 50px;">

    <!-- Layout dua kolom -->
    <div class="tentang-wrapper">

      <!-- Kiri - Foto -->
      <div class="tentang-kiri">
        <img
          src="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=600&q=80"
          alt="Wisata Alam Jabodetabek"
          style="width: 100%; height: 100%; min-height: 300px; object-fit: cover;">
      </div>

      <!-- Kanan - Konten -->
      <div class="tentang-kanan">
        <p style="font-size: 13px; color: #52b788; letter-spacing: 2px;">TENTANG KAMI</p>
        <h2>Platform Wisata Alam Jabodetabek</h2>
        <p>JelajahHijau hadir sebagai panduan digital untuk menemukan keindahan alam tersembunyi di kawasan Jabodetabek — dari hutan tropis Bogor hingga pantai di ujung Banten.</p>
        <p>Kami percaya bahwa alam terbaik tidak selalu jauh. Dengan informasi yang akurat, kami membantu kamu merencanakan petualangan alam yang menyenangkan, aman, dan bertanggung jawab.</p>
        <p>Didirikan pada 2024, JelajahHijau telah membantu ribuan wisatawan lokal menemukan spot-spot alam yang sebelumnya hanya diketahui warga sekitar.</p>

        <!-- Nilai-nilai -->
        <div class="nilai-container">
          <div class="nilai-item" v-for="n in nilai" :key="n.judul">
            <h4>{{ n.judul }}</h4>
            <p>{{ n.isi }}</p>
          </div>
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
export default {
  name: 'Tentang',

  data() {
    return {
      // Data nilai-nilai perusahaan
      nilai: [
        { judul: '🌱 Ramah Lingkungan', isi: 'Kami mempromosikan wisata yang bertanggung jawab terhadap alam' },
        { judul: '📍 Informasi Akurat', isi: 'Data diperbarui rutin dari kunjungan langsung ke lokasi' },
        { judul: '🤝 Komunitas Lokal', isi: 'Mendukung UMKM dan pengelola wisata lokal setempat' },
        { judul: '🗺 Mudah Diakses', isi: 'Petunjuk arah dan transportasi yang jelas dan detail' }
      ]
    }
  }
}
</script>

<style scoped>
.tentang-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 40px;
  background-color: white;
}

.tentang-kiri {
  flex: 1;
  min-width: 280px;
  border-radius: 6px;
  overflow: hidden;
}

.tentang-kanan {
  flex: 2;
  min-width: 280px;
}

.tentang-kanan h2 {
  font-size: 26px;
  color: #2e7d52;
  margin-bottom: 15px;
  margin-top: 8px;
}

.tentang-kanan p {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 12px;
}

.nilai-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
}

.nilai-item {
  background-color: #f0faf5;
  border-left: 4px solid #52b788;
  padding: 15px;
  width: 45%;
  min-width: 200px;
}

.nilai-item h4 {
  font-size: 14px;
  color: #2e7d52;
  margin-bottom: 5px;
}

.nilai-item p {
  font-size: 13px;
  color: #666;
  margin: 0;
}
</style>
