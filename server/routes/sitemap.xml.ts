export default defineEventHandler(() => {
  const pages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/tentang', changefreq: 'monthly', priority: '0.8' },
    { url: '/cara-kerja', changefreq: 'monthly', priority: '0.8' },
    { url: '/fitur', changefreq: 'monthly', priority: '0.8' },
    { url: '/kontak', changefreq: 'monthly', priority: '0.6' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>https://nitip.id${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
})