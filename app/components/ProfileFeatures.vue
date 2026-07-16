<script setup lang="ts">
const pillars = [
  {
    icon: '🔒',
    title: 'Dana ditahan hingga barang diterima.',
    description: 'Uang Anda tidak langsung ke Runner. Sistem kami menahan dana sampai barang sampai di tangan Anda dengan aman.',
  },
  {
    icon: '🪪',
    title: 'Runner memiliki identitas yang jelas.',
    description: 'Setiap Runner yang bergabung wajib menyerahkan identitas. Anda tahu siapa yang membawa barang Anda.',
  },
  {
    icon: '👁️',
    title: 'Lebih transparan dari jastip manual.',
    description: 'Harga, ongkir, dan status pesanan bisa dipantau langsung. Tidak ada biaya tersembunyi atau tanda tanya.',
  },
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="section-title">Keamanan yang bisa Anda rasakan.</h2>
        <p class="section-subtitle mx-auto">
          Bukan sekadar janji — ini cara kerja kami.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="pillar in pillars"
          :key="pillar.title"
          class="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
        >
          <div class="text-4xl mb-5">{{ pillar.icon }}</div>
          <h3 class="text-lg font-bold text-gray-900 mb-3">
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