<script setup lang="ts">
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Cara Kerja', to: '/cara-kerja' },
  { label: 'Fitur', to: '/fitur' },
  { label: 'Kontak', to: '/kontak' },
]
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100" role="navigation" aria-label="Navigasi utama">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2" aria-label="Nitip Beranda">
          <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">N</span>
          </div>
          <span class="text-xl font-bold text-primary-500">Nitip</span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors"
            :class="{ 'text-primary-500': $route.path === link.to }"
          >
            {{ link.label }}
          </NuxtLink>
          <a href="#download" class="btn-primary text-sm py-2">Download App</a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
          <div class="flex flex-col gap-3">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors px-2 py-1.5"
              :class="{ 'text-primary-500': $route.path === link.to }"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <a href="#download" class="btn-primary text-sm mt-2" @click="isMenuOpen = false">Download App</a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>