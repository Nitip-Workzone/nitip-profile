export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // SSR wajib aktif agar halaman bisa di-crawl Google
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Nitip - Kirim & Titip Barang Lebih Mudah',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Nitip menghubungkan Penitip dan Runner. Kirim & titip barang lebih mudah, aman dengan sistem escrow, dan real-time tracking. Download sekarang!',
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Nitip - Kirim & Titip Barang Lebih Mudah' },
        {
          property: 'og:description',
          content:
            'Platform Jasa Titip yang menghubungkan Penitip dan Runner. Kirim barang lebih mudah, aman, dan terjangkau.',
        },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:site_name', content: 'Nitip' },
        { property: 'og:locale', content: 'id_ID' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nitip - Kirim & Titip Barang Lebih Mudah' },
        {
          name: 'twitter:description',
          content:
            'Platform Jasa Titip yang menghubungkan Penitip dan Runner.',
        },
        { name: 'twitter:image', content: '/og-image.png' },
        // Theme
        { name: 'theme-color', content: '#1E3A5F' },
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
            name: 'Nitip',
            url: 'https://nitip.id',
            logo: 'https://nitip.id/nitip-logo.png',
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
      routes: ['/', '/tentang', '/cara-kerja', '/fitur', '/kontak'],
    },
  },

  future: {
    compatibilityVersion: 4,
  },
})