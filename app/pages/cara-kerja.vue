<script setup lang="ts">
useHead({
  title: 'Cara Kerja - Nitip',
  meta: [
    { name: 'description', content: 'Pelajari bagaimana Nitip bekerja dalam 3 langkah mudah: buat pesanan, Runner mengambil, barang sampai tujuan.' },
  ],
})

const detailedSteps = [
  {
    number: '1',
    title: 'Buat Pesanan',
    items: [
      'Daftar dan verifikasi akun Anda',
      'Masukkan detail barang yang ingin dikirim',
      'Tentukan titik jemput dan titik antar',
      'Pilih metode pembayaran (Escrow atau COD)',
      'Biaya dihitung otomatis oleh sistem',
    ],
  },
  {
    number: '2',
    title: 'Runner Menerima Pesanan',
    items: [
      'Sistem Smart Matching mencari Runner yang searah',
      'Runner menerima notifikasi dan menerima pesanan',
      'Dana Anda diamankan dalam sistem escrow',
      'Runner menuju titik jemput untuk mengambil barang',
      'Anda bisa memantau posisi Runner secara real-time',
    ],
  },
  {
    number: '3',
    title: 'Barang Sampai Tujuan',
    items: [
      'Runner mengantarkan barang ke titik antar',
      'Penerima memasukkan kode konfirmasi penerimaan',
      'Dana dilepaskan ke Runner secara otomatis',
      'Anda dapat memberikan ulasan untuk Runner',
      'Transaksi selesai!',
    ],
  },
]
</script>

<template>
  <div>
    <section class="bg-gradient-to-br from-primary-500 to-primary-700 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Cara Kerja Nitip</h1>
        <p class="text-lg text-white/80">Proses pengiriman barang yang sederhana, aman, dan transparan.</p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <article v-for="step in detailedSteps" :key="step.number" class="flex flex-col md:flex-row gap-8 items-start">
          <div class="flex-shrink-0 w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-extrabold">
            {{ step.number }}
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ step.title }}</h2>
            <ul class="space-y-3">
              <li v-for="item in step.items" :key="item" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <ProfileDownload />
  </div>
</template>