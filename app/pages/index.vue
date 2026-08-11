<script setup lang="ts">
useHead({
  title: 'Nihtip - Kirim & Titip Barang Lebih Mudah',
  meta: [
    {
      name: 'description',
      content: 'Nitip menghubungkan kebutuhanmu dengan Runner terpercaya yang memang sedang dalam perjalanan. Lebih hemat waktu, lebih aman, tanpa merepotkan teman.',
    },
  ],
})

useSeoMeta({
  title: 'Nihtip - Kirim & Titip Barang Lebih Mudah',
  description: 'Nitip menghubungkan kebutuhanmu dengan Runner terpercaya yang memang sedang dalam perjalanan. Lebih hemat waktu, lebih aman, tanpa merepotkan teman.',
  ogTitle: 'Nihtip - Kirim & Titip Barang Lebih Mudah',
  ogDescription: 'Nitip menghubungkan kebutuhanmu dengan Runner terpercaya yang memang sedang dalam perjalanan.',
  ogType: 'website',
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