<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'id' },
  link: [{ rel: 'canonical', href: 'https://nitip.id/' }],
  title: 'Nihtip - Jasa Titip & Kirim Barang Bolaang Mongondow | UMKM Lolak',
  meta: [
    {
      name: 'description',
      content: 'Jasa Titip (Jastip) pertama dari Lolak, Bolaang Mongondow. Titip belanja, kirim paket, escrow aman. Daftar Runner via WhatsApp. Lolak/Bolang Mongondow, Sulawesi Utara.',
    },
    { name: 'robots', content: 'index, follow' },
  ],
})

useSeoMeta({
  title: 'Nihtip - Jasa Titip & Kirim Barang Bolaang Mongondow | UMKM Lolak',
  description: 'Jasa Titip pertama dari Lolak, Bolaang Mongondow. Titip belanja, kirim paket, escrow aman.',
  ogTitle: 'Nihtip - Jasa Titip & Kirim Barang Bolaang Mongondow',
  ogDescription: 'UMKM Jastip dari Lolak untuk Bolaang Mongondow & Sulawesi Utara. Escrow aman, Runner terverifikasi.',
  ogType: 'website',
  ogUrl: 'https://nitip.id/',
})
</script>

<template>
  <div class="space-y-0">
    <ProfileHero />
    <ProfileServices />
    <ProfileProblems />
    <ProfileFounderStory />
    <ProfileFeatures />
    <ProfileDownload />
  </div>
</template>