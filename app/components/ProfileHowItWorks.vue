<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Buat Pesanan',
    description: 'Masukkan detail barang, titik ambil, dan titik antar di aplikasi. Biaya jasa runner dihitung otomatis.',
    icon: '📝',
  },
  {
    number: '02',
    title: 'Runner Ambil',
    description: 'Runner yang searah menerima orderan Anda, membelikan barang, lalu membawanya dalam perjalanan.',
    icon: '🚀',
  },
  {
    number: '03',
    title: 'Barang Diterima',
    description: 'Pantau posisi runner lewat peta langsung. Konfirmasi setelah barang tiba untuk mencairkan dana.',
    icon: '🤝',
  },
]
</script>

<template>
  <section class="py-24 bg-gray-50/50 relative border-t border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <h2 class="text-xs font-bold tracking-widest text-primary-600 uppercase">
          Cara Kerja
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
          Sangat Mudah & Praktis
        </p>
        <p class="text-base text-gray-500">
          Ikuti tiga langkah mudah ini untuk menyelesaikan segala keperluan titipan Anda tanpa ribet.
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="relative text-center group bg-white border border-gray-200/50 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300"
        >
          <!-- Connecting Line (desktop only, between columns) -->
          <div
            v-if="index < 2"
            class="hidden lg:block absolute top-16 left-[80%] w-[40%] h-[2px] bg-gradient-to-r from-primary-200 to-transparent z-10 pointer-events-none"
          />

          <!-- Icon Circle with glowing effect -->
          <div class="relative z-10 mx-auto w-20 h-20 rounded-2xl bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary-600/10">
            <span class="text-3xl filter drop-shadow-sm select-none">{{ step.icon }}</span>
          </div>

          <!-- Step Badge -->
          <div class="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-lg mb-4">
            Langkah {{ step.number }}
          </div>

          <h3 class="text-lg font-bold text-gray-900 mb-2 font-sans group-hover:text-primary-600 transition-colors">
            {{ step.title }}
          </h3>
          <p class="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
            {{ step.description }}
          </p>
        </div>
      </div>
      
    </div>
  </section>
</template>