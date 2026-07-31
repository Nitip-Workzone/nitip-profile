<script setup lang="ts">
useHead({
  title: 'Kebijakan Privasi - Nihtip',
  meta: [
    { name: 'description', content: 'Kebijakan Privasi Nihtip menjelaskan data yang kami kumpulkan (lokasi, kamera, kontak), tujuan penggunaan, retensi, dan hak pengguna termasuk penghapusan akun. Berlaku untuk com.nihtip.mobile Publisher CN=Nihtip.com' },
    { property: 'og:title', content: 'Kebijakan Privasi - Nihtip' },
    { property: 'og:description', content: 'Transparansi pengelolaan data pribadi di platform Nitip - lokasi presisi, KYC, escrow, pool realtime SSE.' },
  ],
})
const lastUpdated = '28 Juli 2026'
</script>

<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-slate-900 to-slate-800 pt-28 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4">
          <span class="text-xs font-semibold text-white/80">🔒 Transparansi Data — Data Safety Play Store</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-3">Kebijakan Privasi</h1>
        <p class="text-sm text-white/60">Terakhir diperbarui: {{ lastUpdated }} — Berlaku untuk aplikasi Nihtip Mobile (com.nihtip.mobile) Publisher CN=Nihtip.com — SHA-256 09b0377b2041032a8d099c576bfafd5185a71453bc8a72e4d01dd156537fd9b7</p>
      </div>
    </section>

    <section class="py-12">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p class="text-sm text-amber-800 m-0">
            <strong>Ringkasan Play Store Data Safety:</strong> Nitip mengumpulkan lokasi presisi untuk matching order radius 15km via PostGIS ST_DWithin + Redis GEO, kamera untuk verifikasi KYC & bukti pengiriman, kontak (HP/email) untuk akun, dan riwayat pesanan. Semua data dienkripsi TLS in-transit, disimpan di PostgreSQL 16 PostGIS + Redis 7, tidak dijual ke pihak ketiga. Anda bisa minta hapus akun di <NuxtLink to="/delete-account" class="underline font-bold">halaman penghapusan akun</NuxtLink> atau email irwandip999@gmail.com.
          </p>
        </div>

        <h2 class="text-xl font-bold mt-10 mb-3">1. Data yang Kami Kumpulkan</h2>
        <table class="w-full text-sm border border-slate-200">
          <thead class="bg-slate-50"><tr><th class="p-2 text-left border">Jenis Data</th><th class="p-2 text-left border">Contoh</th><th class="p-2 text-left border">Wajib?</th><th class="p-2 text-left border">Tujuan</th></tr></thead>
          <tbody class="text-sm">
            <tr><td class="p-2 border">Lokasi Presisi</td><td class="p-2 border">Lat/Lng realtime Runner, pickup/delivery</td><td class="p-2 border">Ya, saat online</td><td class="p-2 border">Matching order radius 15km via PostGIS ST_DWithin + Redis GEORADIUS, live tracking SSE /orders/&#123;id&#125;/track, pool realtime /pool/stream</td></tr>
            <tr><td class="p-2 border">Identitas</td><td class="p-2 border">Nama, email, no HP, WhatsApp, Device ID</td><td class="p-2 border">Ya</td><td class="p-2 border">Akun, session unik (token versioning), notifikasi FCM</td></tr>
            <tr><td class="p-2 border">Foto / Kamera</td><td class="p-2 border">KTP, selfie, bukti resi, bukti antar, avatar</td><td class="p-2 border">Saat KYC & order</td><td class="p-2 border">Verifikasi e-KYC, anti-fraud, bukti pengiriman, image_picker 85% quality maxWidth 1280</td></tr>
            <tr><td class="p-2 border">Device & FCM</td><td class="p-2 border">Device model, OS, FCM token, app version</td><td class="p-2 border">Ya</td><td class="p-2 border">Push notification order baru, claimed, cancelled</td></tr>
            <tr><td class="p-2 border">Aktivitas Aplikasi</td><td class="p-2 border">Riwayat order, status, wallet transaksi, escrow</td><td class="p-2 border">Otomatis</td><td class="p-2 border">History, audit log, settlement escrow, dispute</td></tr>
            <tr><td class="p-2 border">Crash / Performa</td><td class="p-2 border">Log error, metrics pool (Redis counters pool:counter:*, PG pool_metrics)</td><td class="p-2 border">Otomatis</td><td class="p-2 border">Observability via Dozzle :3030 logging_job=nitip-core, /admin/metrics/pool</td></tr>
          </tbody>
        </table>

        <h2 class="text-xl font-bold mt-10 mb-3">2. Bagaimana Kami Menggunakan Data</h2>
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li><strong>Matching Searah & Pool Realtime:</strong> PostGIS <code>ST_DWithin(geography, 15000m)</code> + composite GIST <code>idx_orders_pool_filter</code> + Redis GEO <code>runners:live</code> + in-memory PoolHub fan-out per geohash cell 0.1deg (11km) 9 cells, SSE <code>GET /orders/pool/stream?lat=&lng=&token=</code> &amp; merchant stream.</li>
          <li><strong>Keamanan Transaksi:</strong> Escrow wallet, hold saat create, release saat completed, refund saat cancelled, partial release checking fee, audit log.</li>
          <li><strong>KYC & Anti-Fraud:</strong> KYC submission KTP+selfie direview admin, TrustScore, suspend.</li>
          <li><strong>Notifikasi:</strong> FCM SendToDevice/Topic/Multicast untuk order baru, claimed, delivering.</li>
          <li><strong>Best Practice Hemat Baterai:</strong> SSE pause saat tab hidden (visibilitychange), disconnect saat app backgrounded (WidgetsBindingObserver), location throttle 100m, fallback polling 30s web / 60s mobile only when not live.</li>
        </ul>

        <h2 class="text-xl font-bold mt-10 mb-3">3. Penyimpanan & Keamanan</h2>
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li><strong>Database:</strong> PostgreSQL 16 PostGIS (postgis/postgis:16-3.4-alpine) + Redis 7-alpine maxmemory 192mb volatile-lru, backup harian.</li>
          <li><strong>Enkripsi:</strong> TLS 1.2+ in-transit, bcrypt password, JWT + token versioning per device_id, PIN 6 digit optional + TOTP, screen protector anti screenshot untuk PIN.</li>
          <li><strong>Foto:</strong> storage Tencent COS / local ./uploads, signed URL expiry, path_provider.</li>
          <li><strong>APK Signing:</strong> release keystore <code>CN=Nihtip.com, OU=Mobile, O=Nihtip.com, L=Jakarta, ST=DKI Jakarta, C=ID</code> SHA-256 <code>09b0377b2041032a8d099c576bfafd5185a71453bc8a72e4d01dd156537fd9b7</code> SHA-1 <code>1b3c5646ba8ca440e1ebd1603b1ac4b4b0d708cc</code>, obfuscate + split-debug-info + split-per-abi, isDebuggable=false, minify+shrinkResources + Proguard keep Firebase/WebView/Geolocator.</li>
          <li><strong>Play App Signing:</strong> Let Google manage, upload key = nitip-release.jks.</li>
          <li><strong>Log:</strong> Dozzle viewer :3030 filter logging_job=nitip-core, Zap structured [POOL] broadcast latency, no plain password.</li>
          <li><strong>Build:</strong> Flutter 3.2+, compileSdk 36, targetSdk 36, minSdk 26, NDK 26, desugar_jdk_libs.</li>
        </ul>

        <h2 class="text-xl font-bold mt-10 mb-3">4. Berbagi Data Pihak Ketiga</h2>
        <p class="text-sm text-slate-700">Kami <strong>TIDAK menjual</strong> data. Berbagi terbatas untuk fungsi app:</p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li><strong>Firebase Cloud Messaging & Core:</strong> FCM token + title/body push (order_created, claimed).</li>
          <li><strong>Tencent COS / S3 Local:</strong> upload bukti foto KYC, resi, antar.</li>
          <li><strong>Midtrans / Mock QRIS:</strong> QRIS payment qris_data (jika pakai QRIS method).</li>
          <li><strong>Google Play Services & Android System:</strong> crash via Play Console, location via Geolocator.</li>
          <li><strong>WebView Tile Server:</strong> self-hosted tile server via AppConfig.tileServerUrl + Nominatim for maps (jika aktif).</li>
        </ul>

        <h2 class="text-xl font-bold mt-10 mb-3">5. Retensi & Penghapusan Data</h2>
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>Data order &amp; transaksi: 1 tahun setelah akun dihapus untuk audit keuangan &amp; sengketa, setelah itu di-anonimize.</li>
          <li>Lokasi realtime: TTL 10 menit di Redis <code>runner:track:*</code> + <code>runner:alive:*</code>, tidak permanen di DB kecuali pickup/delivery final.</li>
          <li>Pool metrics: TTL 24h di Redis counters <code>pool:counter:*</code> + PG <code>pool_metrics</code> avg latency 1h, last_broadcast hash.</li>
          <li>Akun: bisa minta hapus permanen via <NuxtLink to="/delete-account" class="underline font-bold">/delete-account</NuxtLink> atau email <a href="mailto:irwandip999@gmail.com" class="underline">irwandip999@gmail.com</a> subjek "Hapus Akun - [email]". Proses 7-30 hari, escrow pending harus settle dulu.</li>
        </ul>

        <h2 class="text-xl font-bold mt-10 mb-3">6. Hak Pengguna (UU PDP No.27/2022 Indonesia)</h2>
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>Hak akses, koreksi, hapus, tarik persetujuan, portabilitas, keberatan pemrosesan.</li>
          <li>Cara: login > Profile > Edit, atau hubungi support. Kami respon max 3x24 jam.</li>
          <li>Keberatan: email dengan subjek "Keberatan Data PDP".</li>
        </ul>

        <h2 class="text-xl font-bold mt-10 mb-3">7. Anak-Anak</h2>
        <p class="text-sm text-slate-700">Layanan untuk 17+ tahun. Tidak menargetkan anak di bawah 13 tahun. Jika ditemukan akun &lt;13, akan di-suspend & data dihapus.</p>

        <h2 class="text-xl font-bold mt-10 mb-3">8. Izin Android yang Diminta (Data Safety)</h2>
        <table class="w-full text-sm border mt-2">
          <thead class="bg-slate-50"><tr><th class="p-2 border text-left">Permission</th><th class="p-2 border text-left">Alasan</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border font-mono text-xs">ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION</td><td class="p-2 border">Matching order radius 15km, updateLocation + heartbeat 45s</td></tr>
            <tr><td class="p-2 border font-mono text-xs">CAMERA</td><td class="p-2 border">KTP, selfie KYC, bukti resi/antar via image_picker, qr scanner mobile_scanner</td></tr>
            <tr><td class="p-2 border font-mono text-xs">READ_MEDIA_IMAGES</td><td class="p-2 border">Pilih foto dari galeri untuk avatar, bukti</td></tr>
            <tr><td class="p-2 border font-mono text-xs">POST_NOTIFICATIONS</td><td class="p-2 border">FCM order baru, claimed, delivering</td></tr>
            <tr><td class="p-2 border font-mono text-xs">USE_BIOMETRIC</td><td class="p-2 border">Login biometrik local_auth</td></tr>
            <tr><td class="p-2 border font-mono text-xs">INTERNET</td><td class="p-2 border">API api.nihtip.com, FCM, tile server</td></tr>
          </tbody>
        </table>

        <h2 class="text-xl font-bold mt-10 mb-3">9. Perubahan Kebijakan</h2>
        <p class="text-sm text-slate-700">Kami notifikasi via in-app notification + update tanggal di atas jika ada perubahan material. Versi sebelumnya diarsip manual. Perubahan terakhir mencakup: pool realtime SSE, PostGIS ST_DWithin, APK size opt Phase1+2 (google_fonts & camera removal), release signing CN=Nihtip.com.</p>

        <h2 class="text-xl font-bold mt-10 mb-3">10. Kontak & Pengaduan</h2>
        <div class="bg-slate-900 text-white rounded-xl p-5 text-sm leading-relaxed">
          <p class="m-0"><strong>Organisasi:</strong> Nihtip.com — Lolak, Bolaang Mongondow, Sulawesi Utara (Platform UMKM Jastip pertama dari Kab. Bolmong)</p>
          <p class="m-1"><strong>Email Support:</strong> <a href="mailto:irwandip999@gmail.com" class="underline text-white">irwandip999@gmail.com</a></p>
          <p class="m-1"><strong>Website:</strong> https://nihtip.com</p>
          <p class="m-1"><strong>Package Name:</strong> com.nihtip.mobile</p>
          <p class="m-1"><strong>Distribusi Aplikasi:</strong> Aplikasi resmi Nihtip Mobile hanya dapat diperoleh secara langsung dari Kantor Nihtip dan tidak diperkenankan untuk disebarluaskan secara bebas tanpa sepengetahuan pihak Nihtip.</p>
          <p class="m-1"><strong>Version:</strong> 1.0.0+1 (build-apk arm64 ~36MB signed v2+v3, build-aab ~22MB)</p>
          <p class="m-1"><strong>Publisher Cert:</strong> CN=Nihtip.com, OU=Mobile, O=Nihtip.com, L=Jakarta, ST=DKI Jakarta, C=ID — SHA-256: 09b0377b2041032a8d099c576bfafd5185a71453bc8a72e4d01dd156537fd9b7 — SHA-1: 1b3c5646ba8ca440e1ebd1603b1ac4b4b0d708cc</p>
          <p class="m-1"><strong>Delete Account URL:</strong> <NuxtLink to="/delete-account" class="underline text-white">https://nihtip.com/delete-account</NuxtLink></p>
          <p class="m-1"><strong>Keystore Backup Doc:</strong> planning/09_release_security/01_keystore_backup_and_recovery.md (3 lokasi: lokal, Drive encrypted, 1Password)</p>
          <p class="m-1"><strong>Build Config:</strong> compileSdk 36, targetSdk 36, minSdk 26, obfuscate + split-debug-info + split-per-abi, isDebuggable=false, Proguard keep Firebase/WebView/Geolocator</p>
        </div>

        <div class="mt-12 pt-6 border-t text-xs text-slate-500">
          <p>Dokumen ini dibuat untuk memenuhi persyaratan Google Play Data Safety, Play App Signing, dan UU PDP No.27/2022. Terakhir diverifikasi build: APK arm64 36MB signed v2+v3 CN=Nihtip.com (2026-07-28 10:38), AAB 22MB, backend pool realtime SSE + PostGIS GIST + Redis GEO + PoolHub fan-out, WebView merchant strategy kept per produk. Untuk distribusi aman tanpa warning Publisher not found, gunakan Play Store Internal Track.</p>
        </div>
      </div>
    </section>
  </div>
</template>
