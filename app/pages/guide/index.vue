<script setup lang="ts">
useHead({
  title: 'Pusat Panduan - Nihtip',
  meta: [
    { name: 'description', content: 'Pelajari cara menggunakan Nihtip sebagai Penitip, Runner, atau Merchant melalui panduan terstruktur langkah demi langkah.' },
  ],
})

definePageMeta({
  layout: false
})

const roles = [
  {
    id: 'nihtip',
    title: 'Penitip (Nihtip)',
    desc: 'Panduan lengkap cara memesan makanan (Nitip Food), titip belanja instan, melacak pesanan, hingga melakukan pembayaran aman.',
    icon: '📱',
    badge: 'Aktif',
    to: '/guide/nihtip', // will be fully added later
    color: 'border-blue-100 hover:border-blue-200 bg-blue-50/10'
  },
  {
    id: 'runner',
    title: 'Runner Perjalanan',
    desc: 'Panduan untuk pengantar barang. Pelajari alur deklarasi perjalanan, klaim jaminan pesanan, serta pencairan pendapatan dompet.',
    icon: '🏃',
    badge: 'Aktif',
    to: '/guide/runner', // will be fully added later
    color: 'border-emerald-100 hover:border-emerald-200 bg-emerald-50/10'
  },
  {
    id: 'merchant',
    title: 'Mitra Merchant',
    desc: 'Panduan operasional toko, mengelola katalog menu makanan, ketersediaan stok produk, pemrosesan order, hingga settlement saldo toko.',
    icon: '🏪',
    badge: 'Beta',
    to: '/guide/merchant',
    color: 'border-indigo-100 hover:border-indigo-200 bg-indigo-50/10'
  }
]
</script>

<template>
  <NuxtLayout name="guide">
    <div>
      <!-- Hero Header Section -->
      <section class="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white text-center relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div class="absolute -left-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        
        <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight">Pusat Panduan Nihtip</h1>
          <p class="text-sm md:text-base text-white/80 max-w-xl mx-auto font-medium leading-relaxed">
            Temukan panduan lengkap, cara penggunaan fitur, serta kebijakan operasional platform yang didesain ringkas untuk kenyamanan Anda.
          </p>
        </div>
      </section>

      <!-- Disclaimer UMKM Banner -->
      <GuideBanner />

      <!-- Pilihan Peran Card Grid -->
      <section class="py-12 max-w-4xl mx-auto px-4">
        <div class="text-center mb-10 space-y-2">
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">Pilih Peran Anda</h2>
          <p class="text-xs text-slate-500 font-medium">Panduan disesuaikan dengan kebutuhan akun dan peran Anda dalam ekosistem Nihtip</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article 
            v-for="role in roles" 
            :key="role.id"
            class="bg-white border rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:-translate-y-1 duration-300"
            :class="role.color"
          >
            <div class="space-y-4">
              <!-- Header Card -->
              <div class="flex justify-between items-start">
                <span class="text-3xl" role="img" aria-hidden="true">{{ role.icon }}</span>
                <span 
                  class="text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                  :class="role.badge === 'Beta' 
                    ? 'bg-amber-50 text-amber-600 border-amber-200' 
                    : 'bg-primary-50 text-primary-600 border-primary-200'"
                >
                  {{ role.badge }}
                </span>
              </div>

              <!-- Konten Teks -->
              <div class="space-y-1.5">
                <h3 class="text-sm font-extrabold text-slate-900 tracking-tight">{{ role.title }}</h3>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">{{ role.desc }}</p>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="pt-6">
              <NuxtLink 
                :to="role.to"
                class="w-full h-10 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-colors active:scale-95 duration-200 shadow-sm"
              >
                Buka Panduan
                <span class="text-xs">→</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>

      <!-- Bottom Quick Links -->
      <section class="bg-slate-100/50 border-t border-slate-100 py-12">
        <div class="max-w-4xl mx-auto px-4 text-center space-y-4">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">Butuh Bantuan Hukum atau Privasi?</p>
          <div class="flex flex-wrap justify-center gap-4 text-xs font-bold text-primary-600">
            <NuxtLink to="/privacy" class="hover:underline">Kebijakan Privasi</NuxtLink>
            <span class="text-slate-300">•</span>
            <NuxtLink to="/terms" class="hover:underline">Syarat & Ketentuan</NuxtLink>
            <span class="text-slate-300">•</span>
            <NuxtLink to="/kontak" class="hover:underline">Hubungi Support</NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
