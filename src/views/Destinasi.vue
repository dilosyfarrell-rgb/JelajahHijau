<template>
  <div style="padding-top: 50px;">

    <!-- Header halaman -->
    <div style="background-color: #1a3a2a; padding: 50px 40px;">
      <p style="color: #52b788; font-size: 13px; letter-spacing: 2px;">SEMUA DESTINASI</p>
      <h1 style="color: #b7e4c7; font-size: 32px; margin: 8px 0;">Wisata Alam Jabodetabek</h1>
      <p style="color: #aaaaaa; font-size: 14px;">Temukan destinasi alam terbaik di Jakarta, Bogor, Depok, Tangerang, dan Bekasi.</p>
    </div>

    <!-- Filter kategori -->
    <div class="filter-bar">
      <button :class="{ active: filterAktif === 'Semua' }" @click="filterAktif = 'Semua'">🌿 Semua</button>
      <button
        v-for="k in kategori"
        :key="k.nama"
        :class="{ active: filterAktif === k.nama }"
        @click="filterAktif = k.nama">
        {{ k.nama }}
      </button>
    </div>

    <!-- Daftar destinasi -->
    <div style="padding: 30px 40px;">
      <div class="card-container">
        <div class="card" v-for="d in destinasiFilter" :key="d.id" @click="$router.push('/detail/' + d.id)">
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

    <!-- Footer -->
    <div class="footer">
      &copy; 2024 <span>JelajahHijau</span> - Wisata Alam Jabodetabek
    </div>

  </div>
</template>

<script>
import destinasi from '../data/destinasi.js'

export default {
  name: 'Destinasi',

  data() {
    return {
      // Semua data destinasi
      semuaDestinasi: destinasi,

      // Filter yang aktif sekarang
      filterAktif: 'Semua',

      // Data kategori untuk tombol filter
      kategori: [
        { nama: 'Air Terjun' },
        { nama: 'Danau & Situ' },
        { nama: 'Hutan & Taman' },
        { nama: 'Gunung & Bukit' },
        { nama: 'Pantai' }
      ]
    }
  },

  computed: {
    // Filter destinasi berdasarkan kategori yang dipilih
    destinasiFilter() {
      if (this.filterAktif === 'Semua') {
        return this.semuaDestinasi
      } else {
        return this.semuaDestinasi.filter(d => d.tipe === this.filterAktif)
      }
    }
  }
}
</script>

<style scoped>
/* Filter bar */
.filter-bar {
  padding: 15px 40px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 50px;
  z-index: 100;
}

.filter-bar button {
  background-color: white;
  border: 1px solid #2e7d52;
  color: #2e7d52;
  padding: 8px 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

.filter-bar button:hover,
.filter-bar button.active {
  background-color: #2e7d52;
  color: white;
}
</style>
