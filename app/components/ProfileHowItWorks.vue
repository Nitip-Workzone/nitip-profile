<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Buat Pesanan',
    description: 'Masukkan detail barang, titik jemput, dan titik antar. Sistem akan menghitung biaya secara otomatis.',
    icon: '📝',
  },
  {
    number: '02',
    title: 'Runner Mengambil',
    description: 'Runner terdekat yang searah akan menerima notifikasi dan mengambil pesanan Anda.',
    icon: '🏃',
  },
  {
    number: '03',
    title: 'Barang Sampai',
    description: 'Pantau perjalanan Runner secara real-time. Dana dilepaskan setelah barang diterima dengan aman.',
    icon: '✅',
  },
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="section-title">Cara Kerja Nitip</h2>
        <p class="section-subtitle mx-auto">
          Hanya dalam 3 langkah sederhana, barang Anda akan diantarkan oleh Runner terpercaya.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div
          v-for="step in steps"
          :key="step.number"
          class="relative text-center"
        >
          <!-- Connector Line (desktop only) -->
          <div
            v-if="step.number !== '03'"
            class="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300"
          />

          <!-- Step Number Circle -->
          <div class="relative z-10 mx-auto w-24 h-24 rounded-full bg-white border-2 border-primary-100 shadow-sm flex items-center justify-center mb-6">
            <span class="text-4xl">{{ step.icon }}</span>
          </div>

          <!-- Step Badge -->
          <div class="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full mb-3">
            Langkah {{ step.number }}
          </div>

          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
          <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>