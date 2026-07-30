<script setup lang="ts">
const problems = [
  {
    icon: '💊',
    title: 'Butuh obat darurat tapi apotek jauh di kota.',
    description: 'Jarak tempuh yang memakan waktu berjam-jam hanya untuk satu kebutuhan medis mendesak membuat frustrasi.',
  },
  {
    icon: '🤷',
    title: 'Ingin titip barang tapi sungkan merepotkan teman.',
    description: 'Tidak enak hati jika harus terus-menerus menumpang bagasi teman atau kerabat yang sedang bepergian.',
  },
  {
    icon: '🛣️',
    title: 'Lelah berkendara hanya untuk membeli barang kecil.',
    description: 'Tiga jam habis di jalan, bensin terkuras, dan kelelahan fisik hanya untuk sebuah komponen atau dokumen.',
  },
  {
    icon: '😞',
    title: 'Jadwal bus/travel tidak menentu dan mahal.',
    description: 'Kirim barang via angkutan umum lokal sering kali tidak terjadwal dengan pasti dan biaya tarifnya tidak transparan.',
  },
]
</script>

<template>
  <section class="py-24 bg-white relative">
    <!-- Subtle Background Radial Pattern -->
    <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 -z-10" />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <h2 class="text-xs font-bold tracking-widest text-primary-600 uppercase">
          Problem Solver
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
          Pernah Mengalami Frustrasi Ini?
        </p>
        <p class="text-base text-gray-500">
          Masalah sehari-hari di daerah penyangga yang sering kita abaikan padahal membuang banyak waktu dan energi.
        </p>
      </div>

      <!-- Problem Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="problem in problems"
          :key="problem.title"
          class="group flex gap-5 p-7 rounded-3xl bg-white border border-gray-100/90 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:border-primary-100 hover:shadow-[0_15px_40px_rgba(0,100,250,0.06)] transition-all duration-300 relative overflow-hidden"
        >
          <!-- Subtle Glow on Hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          
          <div class="text-4xl flex-shrink-0 select-none bg-gray-50 group-hover:bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300">
            {{ problem.icon }}
          </div>
          <div class="space-y-2">
            <h3 class="text-base font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
              {{ problem.title }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed">
              {{ problem.description }}
            </p>
          </div>
        </article>
      </div>

      <!-- Story/Quote card -->
      <div class="mt-16 text-center bg-gray-50 border border-gray-100 p-8 rounded-3xl max-w-3xl mx-auto shadow-sm">
        <p class="text-sm font-medium text-gray-600 italic">
          "Kami menciptakan Nihtip karena kami sendiri lelah membuang waktu 3 jam di jalan hanya untuk membeli barang sepele di kota."
        </p>
        <div class="mt-4 flex items-center justify-center gap-2">
          <span class="text-xs font-bold text-gray-900">— Co-Founders Nihtip</span>
        </div>
      </div>

    </div>
  </section>
</template>