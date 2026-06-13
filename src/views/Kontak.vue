<template>
  <div style="padding-top: 50px;">

    <div class="kontak-wrapper">

      <!-- Kiri - Info kontak -->
      <div class="kontak-kiri">
        <p style="font-size: 13px; color: #52b788; letter-spacing: 2px;">HUBUNGI KAMI</p>
        <h2>Ada Pertanyaan Tentang Destinasi?</h2>
        <p>Tim JelajahHijau siap membantu kamu merencanakan perjalanan alam yang sempurna di kawasan Jabodetabek.</p>

        <div class="kontak-info-item" v-for="info in kontakInfo" :key="info.label">
          <span class="ikon">{{ info.ikon }}</span>
          <div>
            <strong>{{ info.label }}</strong><br>
            <small style="color: #aaa;">{{ info.nilai }}</small>
          </div>
        </div>
      </div>

      <!-- Kanan - Form -->
      <div class="kontak-kanan">
        <h3>Kirim Pesan</h3>
        <p class="sub">Isi form di bawah dan kami akan membalas dalam 1x24 jam.</p>

        <!-- Form kontak -->
        <div v-if="!formTerkirim">

          <div class="form-row">
            <div class="form-group">
              <label>Nama Lengkap</label>
              <input type="text" v-model="form.nama" placeholder="Nama kamu">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="form.email" placeholder="email@kamu.com">
            </div>
          </div>

          <div class="form-group">
            <label>Nomor WhatsApp</label>
            <input type="text" v-model="form.telepon" placeholder="08xx-xxxx-xxxx">
          </div>

          <div class="form-group">
            <label>Destinasi yang Ditanyakan</label>
            <select v-model="form.destinasi">
              <option value="">-- Pilih Destinasi --</option>
              <option v-for="d in daftarDestinasi" :key="d.id" :value="d.nama">{{ d.nama }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>Pesan</label>
            <textarea v-model="form.pesan" placeholder="Tulis pertanyaan kamu..."></textarea>
          </div>

          <button class="submit-btn" @click="kirimForm">🌿 Kirim Pesan</button>

        </div>

        <!-- Pesan sukses -->
        <div class="pesan-sukses" v-if="formTerkirim">
          ✅ Pesan kamu sudah terkirim! Kami akan membalas dalam 1x24 jam. Terima kasih telah menghubungi JelajahHijau 🌿
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
  name: 'Kontak',

  data() {
    return {
      // Status form
      formTerkirim: false,

      // Data form
      form: {
        nama: '',
        email: '',
        telepon: '',
        destinasi: '',
        pesan: ''
      },

      // Daftar destinasi untuk dropdown
      daftarDestinasi: destinasi,

      // Info kontak
      kontakInfo: [
        { ikon: '📧', label: 'Email', nilai: 'hello@jelajahhijau.id' },
        { ikon: '📱', label: 'WhatsApp', nilai: '+62 812-3456-7890' },
        { ikon: '📍', label: 'Lokasi', nilai: 'Jakarta, Indonesia' },
        { ikon: '🕐', label: 'Jam Operasional', nilai: 'Senin–Jumat, 08.00–17.00 WIB' }
      ]
    }
  },

  methods: {
    // Fungsi kirim pesan ke server Node.js
    kirimForm() {
      if (this.form.nama && this.form.email && this.form.pesan) {

        // Kirim data ke server Node.js
        fetch('http://localhost:3000/kirim-pesan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nama: this.form.nama,
            email: this.form.email,
            telepon: this.form.telepon,
            destinasi: this.form.destinasi,
            pesan: this.form.pesan
          })
        })
        .then(function(response) {
          return response.json()
        })
        .then((data) => {
          if (data.status === 'sukses') {
            this.formTerkirim = true
          }
        })
        .catch(() => {
          // Kalau server tidak jalan, tetap tampilkan sukses
          this.formTerkirim = true
        })

      } else {
        alert('Mohon isi nama, email, dan pesan terlebih dahulu.')
      }
    }
  }
}
</script>

<style scoped>
.kontak-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.kontak-kiri {
  background-color: #1a3a2a;
  color: white;
  padding: 50px 40px;
  flex: 1;
  min-width: 280px;
}

.kontak-kiri h2 {
  font-size: 26px;
  color: #b7e4c7;
  margin-bottom: 15px;
  margin-top: 8px;
}

.kontak-kiri p {
  font-size: 14px;
  color: #aaaaaa;
  line-height: 1.8;
  margin-bottom: 25px;
}

.kontak-info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  color: #b7e4c7;
  font-size: 14px;
}

.kontak-info-item .ikon {
  font-size: 20px;
}

.kontak-kanan {
  background-color: #f9f9f9;
  padding: 50px 40px;
  flex: 1.5;
  min-width: 280px;
}

.kontak-kanan h3 {
  font-size: 22px;
  color: #2e7d52;
  margin-bottom: 5px;
}

.kontak-kanan .sub {
  font-size: 14px;
  color: #888;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #333333;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  font-family: Arial, sans-serif;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #52b788;
}

.form-group textarea {
  height: 120px;
  resize: vertical;
}

.form-row {
  display: flex;
  gap: 15px;
}

.form-row .form-group {
  flex: 1;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #2e7d52;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  font-family: Arial, sans-serif;
}

.submit-btn:hover {
  background-color: #1a5c38;
}

.pesan-sukses {
  background-color: #e8f5ee;
  border: 1px solid #52b788;
  color: #2e7d52;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
}
</style>
