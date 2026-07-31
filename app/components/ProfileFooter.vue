<template>
  <footer class="bg-gray-950 text-gray-400 border-t border-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-gray-900">
        
        <!-- Brand Info -->
        <div class="md:col-span-5 space-y-6">
          <NuxtLink to="/" class="flex items-center gap-2 group w-max">
            <div class="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-light p-1 shadow-md shadow-primary-500/10">
              <img src="/logo.webp" alt="Nihtip Logo" class="h-5 w-auto object-contain" />
            </div>
            <span class="text-lg font-bold tracking-tight text-white group-hover:text-primary-400 transition-colors">
              Nihtip
            </span>
          </NuxtLink>
          <p class="text-sm leading-relaxed max-w-sm text-gray-400">
            Platform jasa titip & asisten harian terpercaya. Menghubungkan kebutuhan harian Anda langsung dengan runner yang searah untuk pengiriman super efisien.
          </p>
        </div>

        <!-- Links Columns -->
        <div class="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <!-- Tautan -->
          <div class="space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-widest text-white">Platform</h4>
            <ul class="space-y-2.5 text-sm">
              <li><NuxtLink to="/" class="hover:text-white transition-colors duration-200">Beranda</NuxtLink></li>
              <li><NuxtLink to="/tentang" class="hover:text-white transition-colors duration-200">Tentang Kami</NuxtLink></li>
              <li><NuxtLink to="/cara-kerja" class="hover:text-white transition-colors duration-200">Cara Kerja</NuxtLink></li>
              <li><NuxtLink to="/fitur" class="hover:text-white transition-colors duration-200">Fitur Utama</NuxtLink></li>
            </ul>
          </div>

          <!-- Bantuan -->
          <div class="space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-widest text-white">Dukungan</h4>
            <ul class="space-y-2.5 text-sm">
              <li><NuxtLink to="/kontak" class="hover:text-white transition-colors duration-200">Hubungi Kami</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="hover:text-white transition-colors duration-200">Kebijakan Privasi</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-white transition-colors duration-200">Syarat Ketentuan</NuxtLink></li>
              <li><a href="#" class="hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          <!-- Sosial Media -->
          <div class="space-y-4 col-span-2 sm:col-span-1">
            <h4 class="text-xs font-bold uppercase tracking-widest text-white">Ikuti Kami</h4>
            <div class="flex gap-3 pt-1">
              <a href="https://www.instagram.com/nitip.id" target="_blank" rel="noopener" class="w-9 h-9 bg-gray-900 hover:bg-primary-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-800" aria-label="Instagram">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@nitip.id" target="_blank" rel="noopener" class="w-9 h-9 bg-gray-900 hover:bg-primary-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-800" aria-label="TikTok">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.14V11.7a4.84 4.84 0 01-3.58-1.43V6.69h3.58z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Copyright -->
      <div class="pt-8 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {{ new Date().getFullYear() }} Nihtip. Lolak, Bolaang Mongondow. Hak Cipta Dilindungi.</p>
        <p class="flex gap-4">
          <NuxtLink to="/privacy" class="hover:text-gray-300 transition-colors">Privacy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-gray-300 transition-colors">Terms</NuxtLink>
        </p>
      </div>

    </div>
  </footer>
</template>