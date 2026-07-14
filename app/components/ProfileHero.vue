<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div class="text-center space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span class="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span class="text-sm font-medium text-white/90">Platform UMKM Jastip dari Bolaang Mongondow</span>
        </div>

        <!-- Heading -->
        <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Kirim & Titip Barang<br class="hidden sm:block" />
          <span class="text-accent-light">Lebih Mudah</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Nitip menghubungkan Anda dengan Runner terpercaya yang sedang dalam perjalanan.
          Aman dengan sistem escrow, real-time tracking, dan harga terjangkau.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <div class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <span class="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
            Segera Hadir di Mobile
          </div>
          <NuxtLink
            to="/cara-kerja"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-200"
          >
            Pelajari Lebih Lanjut
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-extrabold text-white">10K+</div>
            <div class="text-sm text-white/60 mt-1">Pengguna Aktif</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-extrabold text-white">50K+</div>
            <div class="text-sm text-white/60 mt-1">Pesanan Selesai</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-extrabold text-white">100+</div>
            <div class="text-sm text-white/60 mt-1">Kota Terjangkau</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>