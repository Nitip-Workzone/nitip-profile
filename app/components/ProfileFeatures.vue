<script setup lang="ts">
const features = [
  {
    icon: '🛡️',
    title: 'Sistem Escrow',
    description: 'Dana Anda aman. Uang ditahan sampai pesanan selesai, sehingga kedua belah pihak terlindungi.',
  },
  {
    icon: '🎯',
    title: 'Smart Matching',
    description: 'Algoritma pintar mencocokkan pesanan dengan Runner yang searah, sehingga lebih cepat dan efisien.',
  },
  {
    icon: '📍',
    title: 'Real-Time Tracking',
    description: 'Pantau posisi Runner secara langsung di peta. Tahu persis kapan barang Anda tiba.',
  },
  {
    icon: '💰',
    title: 'Harga Terjangkau',
    description: 'Biaya pengiriman dihitung otomatis berdasarkan jarak dan berat. Transparan, tanpa biaya tersembunyi.',
  },
  {
    icon: '⚡',
    title: 'Proses Cepat',
    description: 'Buat pesanan dalam hitungan detik. Runner terdekat langsung mendapat notifikasi untuk mengambil pesanan Anda.',
  },
  {
    icon: '🤝',
    title: 'Runner Terverifikasi',
    description: 'Semua Runner melalui proses verifikasi KYC untuk menjamin keamanan dan kepercayaan.',
  },
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="section-title">Fitur Unggulan</h2>
        <p class="section-subtitle mx-auto">
          Nikmati kemudahan pengiriman barang dengan fitur-fitur yang dirancang untuk keamanan dan kenyamanan Anda.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="group p-6 rounded-2xl border border-gray-100 hover:border-primary-100 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
            {{ feature.title }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>