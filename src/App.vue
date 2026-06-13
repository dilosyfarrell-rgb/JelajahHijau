<template>
  <!-- Navbar -->
  <div class="navbar">
    <span class="logo">🌿 JelajahHijau</span>
    <router-link to="/" style="margin-left: auto">Home</router-link>
    <router-link to="/destinasi">Destinasi</router-link>
    <router-link to="/tentang">Tentang</router-link>
    <router-link to="/kontak">Kontak</router-link>
  </div>

  <!-- Konten halaman berubah di sini -->
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Reset dasar */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333333;
}

/* ===== NAVBAR ===== */
.navbar {
  background-color: #2e7d52;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
}

.navbar .logo {
  font-size: 20px;
  font-weight: bold;
  padding: 14px 20px;
  color: #b7e4c7;
}

.navbar a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-size: 15px;
}

.navbar a:hover {
  background-color: #1a5c38;
}

.navbar a.router-link-active {
  background-color: #e9c46a;
  color: #333;
}

/* ===== TOMBOL ===== */
.btn {
  display: inline-block;
  background-color: #2e7d52;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 8px;
  font-family: Arial, sans-serif;
}

.btn:hover {
  background-color: #1a5c38;
}

/* ===== CARD ===== */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 6px;
  width: 300px;
  overflow: hidden;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
}

.card:hover {
  box-shadow: 4px 4px 16px rgba(0,0,0,0.2);
}

.card-header {
  height: 160px;
  overflow: hidden;
}

.card-body {
  padding: 15px;
}

.card-body h3 {
  font-size: 18px;
  color: #2e7d52;
  margin-bottom: 8px;
}

.card-body p {
  font-size: 14px;
  color: #666666;
  margin-bottom: 10px;
}

.card-body .lokasi {
  font-size: 13px;
  color: #888888;
}

.card-body .rating {
  font-size: 14px;
  color: #e9c46a;
  font-weight: bold;
}

/* ===== SECTION ===== */
.section {
  padding: 40px;
  background-color: white;
  margin-bottom: 10px;
}

.section h2 {
  font-size: 28px;
  color: #2e7d52;
  margin-bottom: 20px;
  border-left: 5px solid #52b788;
  padding-left: 10px;
}

/* ===== FOOTER ===== */
.footer {
  background-color: #1a3a2a;
  color: #aaaaaa;
  text-align: center;
  padding: 20px;
  font-size: 14px;
}

.footer span {
  color: #e9c46a;
}
</style>
