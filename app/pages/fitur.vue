<script setup lang="ts">
useHead({
  title: 'Fitur - Nitip',
  meta: [
    { name: 'description', content: 'Jelajahi fitur lengkap Nitip: sistem escrow, smart matching, real-time tracking, verifikasi KYC, dan masih banyak lagi.' },
  ],
})

const features = [
  {
    icon: '🛡️',
    title: 'Sistem Escrow',
    description: 'Dana Anda ditahan oleh sistem hingga pesanan selesai. Jika terjadi masalah, dana akan dikembalikan. Kedua belah pihak terlindungi.',
  },
  {
    icon: '🎯',
    title: 'Smart Matching',
    description: 'Algoritma Detour Distance kami mendeteksi Runner yang searah dengan rute Anda. Hasilnya? Pengiriman lebih cepat dan efisien.',
  },
  {
    icon: '📍',
    title: 'Real-Time Tracking',
    description: 'Pantau posisi Runner secara langsung di peta. Ketahui estimasi waktu tiba dan status perjalanan secara real-time.',
  },
  {
    icon: '🔐',
    title: 'Verifikasi KYC',
    description: 'Semua pengguna dapat melakukan verifikasi identitas untuk meningkatkan kepercayaan dan membuka fitur premium.',
  },
  {
    icon: '💰',
    title: 'Kalkulasi Otomatis',
    description: 'Biaya pengiriman dihitung otomatis berdasarkan jarak, berat, dan volume. Transparan tanpa biaya tersembunyi.',
  },
  {
    icon: '⚡',
    title: 'Pesanan Instan',
    description: 'Untuk pengiriman di bawah 5 km, sistem akan langsung mencocokkan dengan Runner terdekat untuk respons super cepat.',
  },
  {
    icon: '💳',
    title: 'Multi Pembayaran',
    description: 'Bayar dengan saldo dompet digital (Escrow) atau Cash on Delivery (COD) untuk pengguna terverifikasi.',
  },
  {
    icon: '💬',
    title: 'Chat Langsung',
    description: 'Komunikasi langsung dengan Runner melalui fitur chat dalam aplikasi untuk koordinasi yang lebih baik.',
  },
  {
    icon: '⭐',
    title: 'Sistem Ulasan',
    description: 'Beri dan baca ulasan untuk membantu komunitas memilih Runner terpercaya.',
  },
  {
    icon: '🔔',
    title: 'Notifikasi Push',
    description: 'Dapatkan notifikasi real-time untuk setiap perubahan status pesanan, dari penerimaan hingga pengiriman.',
  },
  {
    icon: '📱',
    title: 'PWA Support',
    description: 'Aplikasi dapat diinstal di perangkat Anda dan berfungsi bahkan dengan koneksi terbatas.',
  },
  {
    icon: '🧾',
    title: 'Penyesuaian Harga',
    description: 'Runner dapat mengajukan penyesuaian harga jika ada perbedaan biaya aktual, dan Penitip menyetujui sebelum melanjutkan.',
  },
]
</script>

<template>
  <div>
    <section class="bg-gradient-to-br from-primary-500 to-primary-700 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Fitur Lengkap Nitip</h1>
        <p class="text-lg text-white/80">Semua yang Anda butuhkan untuk pengiriman barang yang aman dan nyaman.</p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p class="text-sm text-gray-500 leading-relaxed">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <ProfileDownload />
  </div>
</template>