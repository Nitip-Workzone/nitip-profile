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
          <span class="text-sm font-medium text-white/90">Dari tanah Bolaang Mongondow</span>
        </div>

        <!-- Heading -->
        <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Tidak perlu ke kota<br class="hidden sm:block" />
          hanya untuk <span class="text-accent-light">satu barang.</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Nitip menghubungkan kebutuhanmu dengan Runner terpercaya yang memang sedang dalam perjalanan. Lebih hemat waktu, lebih aman, tanpa merepotkan teman.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-700 bg-white hover:bg-white/90 rounded-2xl transition-all duration-200 shadow-lg shadow-black/10"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Nitip Jo
          </a>
          <NuxtLink
            to="/cara-kerja"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-200"
          >
            Cara Kerja
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Real Milestones -->
        <div class="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
          <div class="flex items-center gap-2 text-white/70">
            <span>📍</span>
            <span class="text-sm font-medium">Dibangun di Bolaang Mongondow</span>
          </div>
          <div class="flex items-center gap-2 text-white/70">
            <span>🤝</span>
            <span class="text-sm font-medium">Untuk masyarakat lokal</span>
          </div>
          <div class="flex items-center gap-2 text-white/70">
            <span>🚀</span>
            <span class="text-sm font-medium">Segera hadir</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>