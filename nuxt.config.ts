export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  runtimeConfig: {
    public: {
      // @ts-ignore
      nitipApiUrl: process.env.NUXT_PUBLIC_NITIP_API_URL || process.env.API_BASE_URL || 'http://localhost:8000/api/v1',
    },
  },

  // SSR wajib aktif agar halaman bisa di-crawl Google
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Nihtip - Kirim & Titip Barang Lebih Mudah',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
        { 'http-equiv': 'Pragma', content: 'no-cache' },
        { 'http-equiv': 'Expires', content: '0' },
        {
          name: 'description',
          content:
            'Nitip menghubungkan Penitip dan Runner. Kirim & titip barang lebih mudah, aman dengan sistem escrow, dan real-time tracking. Download sekarang!',
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Nihtip - Kirim & Titip Barang Lebih Mudah' },
        {
          property: 'og:description',
          content:
            'Platform Jasa Titip yang menghubungkan Penitip dan Runner. Kirim barang lebih mudah, aman, dan terjangkau.',
        },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:site_name', content: 'Nihtip' },
        { property: 'og:locale', content: 'id_ID' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nihtip - Kirim & Titip Barang Lebih Mudah' },
        {
          name: 'twitter:description',
          content:
            'Platform Jasa Titip yang menghubungkan Penitip dan Runner.',
        },
        { name: 'twitter:image', content: '/og-image.png' },
        // Theme
        { name: 'theme-color', content: '#0062cc' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        },
      ],
      script: [
        // JSON-LD Structured Data (Organization)
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Nihtip',
            url: 'https://nitip.id',
            logo: 'https://nitip.id/logo.webp',
            description:
              'Platform Jasa Titip yang menghubungkan Penitip dan Runner untuk pengiriman barang yang lebih mudah dan aman.',
            sameAs: [
              'https://www.instagram.com/nitip.id',
              'https://www.tiktok.com/@nitip.id',
            ],
          }),
        },
      ],
    },
  },

  nitro: {
    // Prerender halaman statis untuk SEO
    prerender: {
      routes: ['/', '/tentang', '/cara-kerja', '/fitur', '/kontak', '/privacy', '/terms', '/guide', '/guide/merchant', '/guide/runner'],
    },
    routeRules: {
      '/': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache', 'Expires': '0' } },
      '/tentang': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache', 'Expires': '0' } },
      '/cara-kerja': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache', 'Expires': '0' } },
      '/fitur': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache', 'Expires': '0' } },
      '/kontak': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache', 'Expires': '0' } },
      '/privacy': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache', 'Expires': '0' } },
      '/terms': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache', 'Expires': '0' } },
      '/guide/**': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache', 'Expires': '0' } },
    },
  },

  future: {
    compatibilityVersion: 4,
  },
})