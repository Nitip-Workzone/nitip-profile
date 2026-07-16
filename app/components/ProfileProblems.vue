<script setup lang="ts">
const problems = [
  {
    icon: '💊',
    title: 'Butuh obat tetapi harus ke kota.',
    description: 'Jarak yang jauh hanya untuk satu kebutuhan mendesak sering kali membuat kita berpikir dua kali.',
  },
  {
    icon: '🤷',
    title: 'Mau titip tapi bingung harus ke siapa.',
    description: 'Tidak selalu ada teman atau keluarga yang bisa diandalkan untuk membawakan barang.',
  },
  {
    icon: '🛣️',
    title: 'Pergi jauh hanya untuk membeli satu barang.',
    description: 'Tiga jam di jalan, bensin habis, waktu terbuang — padahal barangnya kecil.',
  },
  {
    icon: '😞',
    title: 'Teman yang biasa dititipi sedang tidak ke kota.',
    description: 'Tidak bisa mengandalkan orang lain terus-menerus untuk kebutuhan pribadi kita.',
  },
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="section-title">Pernah mengalami ini?</h2>
        <p class="section-subtitle mx-auto">
          Masalah kecil yang sering kita alami tapi jarang dibicarakan.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="problem in problems"
          :key="problem.title"
          class="group flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-100 hover:bg-primary-50/30 transition-all duration-300"
        >
          <div class="text-3xl flex-shrink-0 mt-0.5">{{ problem.icon }}</div>
          <div>
            <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
              {{ problem.title }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed">
              {{ problem.description }}
            </p>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <p class="text-lg text-gray-400 italic">
          "Kami juga pernah mengalami hal yang sama."
        </p>
      </div>
    </div>
  </section>
</template>