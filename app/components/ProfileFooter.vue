<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="md:col-span-1 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
              <img src="/logo.webp" alt="Nihtip Logo" class="h-full w-auto" />
            </div>
            <span class="text-xl font-bold text-white">Nihtip</span>
          </div>
          <p class="text-sm leading-relaxed">
            Lahir dari Bolaang Mongondow untuk memudahkan masyarakat mendapatkan kebutuhan sehari-hari tanpa harus melakukan perjalanan yang tidak perlu.
          </p>
        </div>

        <!-- Tautan -->
        <div>
          <h4 class="text-white font-semibold mb-4">Tautan</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Beranda</NuxtLink></li>
            <li><NuxtLink to="/tentang" class="hover:text-white transition-colors">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/cara-kerja" class="hover:text-white transition-colors">Cara Kerja</NuxtLink></li>
            <li><NuxtLink to="/fitur" class="hover:text-white transition-colors">Fitur</NuxtLink></li>
          </ul>
        </div>

        <!-- Bantuan -->
        <div>
          <h4 class="text-white font-semibold mb-4">Bantuan</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/kontak" class="hover:text-white transition-colors">Hubungi Kami</NuxtLink></li>
            <li><a href="#" class="hover:text-white transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <!-- Sosial Media -->
        <div>
          <h4 class="text-white font-semibold mb-4">Ikuti Kami</h4>
          <div class="flex gap-3">
            <a href="https://www.instagram.com/nitip.id" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@nitip.id" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors" aria-label="TikTok">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.14V11.7a4.84 4.84 0 01-3.58-1.43V6.69h3.58z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Nihtip. Hak cipta dilindungi undang-undang.</p>
      </div>
    </div>
  </footer>
</template>