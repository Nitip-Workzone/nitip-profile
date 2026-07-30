<script setup lang="ts">
const pillars = [
  {
    icon: '🔒',
    title: 'Dana Ditahan Sistem Escrow',
    description: 'Uang Anda tidak langsung diberikan ke Runner. Sistem menahan dana dan baru mencairkannya setelah Anda memverifikasi bahwa barang tiba dalam kondisi baik.',
  },
  {
    icon: '🪪',
    title: 'Runner Terverifikasi Ketat',
    description: 'Setiap Runner wajib melewati verifikasi identitas resmi (KTP) dan nomor kontak sebelum dapat menerima tugas. Anda selalu tahu siapa yang membawakan barang Anda.',
  },
  {
    icon: '👁️',
    title: 'Transparansi Tarif & Pelacakan',
    description: 'Biaya kirim, harga barang, dan titik koordinat runner terpampang transparan secara real-time. Bebas dari biaya siluman atau negosiasi manual yang melelahkan.',
  },
]
</script>

<template>
  <section class="py-24 bg-white relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <h2 class="text-xs font-bold tracking-widest text-primary-600 uppercase">
          Pilar Keamanan
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
          Keamanan yang Bisa Anda Rasakan
        </p>
        <p class="text-base text-gray-500">
          Nihtip dirancang dengan sistem keamanan berlapis untuk menjamin kepercayaan penuh antara penitip dan runner.
        </p>
      </div>

      <!-- Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="pillar in pillars"
          :key="pillar.title"
          class="group text-center p-8 rounded-[2.5rem] bg-gray-50/50 border border-gray-100 hover:border-primary-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,100,250,0.06)] transition-all duration-300"
        >
          <!-- Icon wrap with subtle animation -->
          <div class="text-4xl w-16 h-16 rounded-2xl bg-white border border-gray-200/50 shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary-50 transition-all duration-300">
            {{ pillar.icon }}
          </div>
          
          <h3 class="text-lg font-bold text-gray-900 mb-3 font-sans group-hover:text-primary-600 transition-colors">
            {{ pillar.title }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            {{ pillar.description }}
          </p>
        </article>
      </div>
      
    </div>
  </section>
</template>