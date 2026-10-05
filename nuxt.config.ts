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
    '@nuxtjs/sitemap',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Nitip — Platform Nitip Kirim Titip Barang | Jasa Titip Terpercaya',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'nitip, nitip kirim, jasa titip, nitip barang, jastip bolmong, titip barang lolak, kirim barang sulut, nihtip' },
        {
          name: 'description',
          content:
            'Nitip (Nihtip) — Platform Jasa Titip. Nitip kirim & titip barang aman via escrow, Runner terverifikasi. Cari nitip? Nitip di sini. UMKM Lolak, Bolaang Mongondow.',
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Nitip — Platform Nitip Kirim Titip Barang' },
        {
          property: 'og:description',
          content:
            'Nitip adalah platform nitip — jasa titip kirim barang aman via escrow. Nitip barang apa saja, Runner terverifikasi.',
        },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:site_name', content: 'Nihtip' },
        { property: 'og:locale', content: 'id_ID' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nitip — Platform Nitip Kirim Titip Barang' },
        {
          name: 'twitter:description',
          content: 'Nitip: jasa titip kirim barang — nitip apa saja, Runner terverifikasi.',
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
            name: 'Nitip',
            alternateName: ['Nihtip', 'Nitip.id'],
            url: 'https://nitip.id',
            logo: 'https://nitip.id/logo.webp',
            description:
              'Nitip (Nihtip) — Platform Jasa Titip. Nitip kirim & titip barang aman via escrow. Brand nitip, bukan kata nitip slang.',
            sameAs: [
              'https://www.instagram.com/nitip.id',
              'https://www.tiktok.com/@nitip.id',
            ],
            keywords: 'nitip, nitip kirim, jasa titip, nitip barang',
          }),
        },
      ],
    },
  },

  nitro: {
    // Prerender semua halaman statis agar Google bisa crawl tanpa JS
    prerender: {
      crawlLinks: true,
      routes: ['/', '/tentang', '/cara-kerja', '/fitur', '/kontak', '/privacy', '/terms', '/guide', '/guide/merchant', '/guide/runner', '/layanan', '/delete-account', '/join/runner', '/join/merchant'],
      ignore: ['/guide/nihtip', '/guide/penitip'],
      failOnError: false,
    },
  },
  // @ts-ignore — augmented by @nuxtjs/sitemap (types generated in .nuxt after `nuxt prepare`)
  sitemap: {
    siteUrl: 'https://nitip.id',
    xsl: false,
  } as any,

  future: {
    compatibilityVersion: 4,
  },
})