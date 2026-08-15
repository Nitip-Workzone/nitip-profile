<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Beranda', to: '/', exact: true },
  { label: 'Cara Kerja', to: '/cara-kerja' },
  { label: 'Layanan & Tarif', to: '/layanan' },
  { label: 'Fitur', to: '/fitur' },
  { label: 'Untuk Runner', to: '/tentang' },
  { label: 'Panduan', to: '/guide' },
  { label: 'Bantuan', to: '/kontak' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100" role="navigation" aria-label="Navigasi utama">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="h-[68px] flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 group" aria-label="Nihtip Beranda">
          <div class="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <img src="/logo.webp" alt="Nihtip Logo" class="h-8 w-8 object-contain" />
          </div>
          <div class="leading-[1]">
            <span class="text-[20px] font-extrabold tracking-tight text-gray-900 group-hover:text-[#5b50e6] transition-colors duration-200">nihtip</span>
            <span class="block text-[10px] text-gray-500 font-medium mt-0.5">Tidak perlu ke kota hanya untuk satu barang.</span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav Center -->
        <div class="hidden lg:flex items-center gap-7">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="relative text-[13.5px] font-medium tracking-wide py-2 transition-colors"
            :class="[
              $route.path === link.to
                ? 'text-primary-600 font-semibold after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-primary-600 after:rounded-full'
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Right Actions -->
        <div class="hidden lg:flex items-center gap-2.5">
          <a
            href="https://web.nihtip.com"
            class="px-[18px] py-[8px] text-[13px] font-semibold text-gray-700 bg-white border border-gray-200 rounded-[10px] hover:bg-gray-50 transition-colors"
          >
            Masuk
          </a>
          <a
            href="https://wa.me/628810990293990?text=Halo%20Admin%20Nihtip%2C%20saya%20ingin%20mendaftar%20di%20Nihtip"
            target="_blank" rel="noopener noreferrer"
            class="px-[18px] py-[8px] text-[13px] font-semibold text-white bg-primary-600 rounded-[10px] hover:bg-primary-700 transition-colors shadow-sm shadow-primary-600/20"
          >
            Daftar Gratis
          </a>
        </div>

        <!-- Mobile Button -->
        <button
          class="lg:hidden p-2 rounded-xl bg-gray-50 border border-gray-200"
          aria-label="Toggle menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="lg:hidden pb-4 pt-2 border-t border-gray-100 mt-1">
          <div class="flex flex-col gap-1 pt-3">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.label"
              :to="link.to"
              class="text-sm font-medium text-gray-700 px-3 py-2.5 rounded-xl hover:bg-gray-50"
              :class="{ 'text-primary-600 bg-primary-50': $route.path === link.to }"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <div class="flex gap-2 pt-3">
              <a href="https://web.nihtip.com" class="flex-1 text-center px-4 py-2.5 text-sm font-semibold border border-gray-200 rounded-xl">Masuk</a>
              <a href="https://wa.me/628810990293990?text=Halo%20Admin%20Nihtip%2C%20saya%20ingin%20mendaftar%20di%20Nihtip" target="_blank" rel="noopener noreferrer" class="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-xl">Daftar Gratis</a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>