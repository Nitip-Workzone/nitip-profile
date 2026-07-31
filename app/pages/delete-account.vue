<script setup lang="ts">
useHead({
  title: 'Hapus Akun & Data - Nihtip',
  meta: [
    { name: 'description', content: 'Cara menghapus akun Nihtip dan semua data terkait sesuai Google Play Data Safety dan UU PDP. Proses 7-30 hari.' },
    { property: 'og:title', content: 'Hapus Akun - Nihtip' },
  ],
})
</script>

<template>
  <div class="bg-white">
    <section class="bg-gradient-to-br from-red-600 to-orange-600 pt-28 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-3">Hapus Akun & Data</h1>
        <p class="text-sm text-white/80">Sesuai Google Play Data Safety requirement + UU PDP No.27/2022 — Proses 7-30 hari — Publisher CN=Nihtip.com</p>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-slate-900 text-white rounded-xl p-6 mb-8">
          <h3 class="font-bold mb-2">Package: com.nihtip.mobile — Publisher Verified</h3>
          <p class="text-sm text-white/70 m-0">Cert SHA-256: 09b0377b2041032a8d099c576bfafd5185a71453bc8a72e4d01dd156537fd9b7 — SHA-1: 1b3c5646ba8ca440e1ebd1603b1ac4b4b0d708cc — DN: CN=Nihtip.com — Build 2026-07-28 arm64 36MB signed v2+v3 — AAB 22MB — Play Internal Track recommended.</p>
        </div>

        <h2 class="text-xl font-bold mb-4">Cara Menghapus Akun (2 Opsi)</h2>

        <div class="grid md:grid-cols-2 gap-6 mb-10">
          <div class="border rounded-2xl p-5">
            <div class="text-2xl mb-2">📱</div>
            <h3 class="font-bold mb-2">Opsi 1: Dari Aplikasi (Recommended)</h3>
            <ol class="list-decimal pl-5 text-sm space-y-1 text-slate-700">
              <li>Buka aplikasi Nitip > Tab Profile</li>
              <li>Tap Pengaturan > Hapus Akun (jika belum ada tombol, pakai Opsi 2)</li>
              <li>Konfirmasi dengan PIN + OTP (jika aktif)</li>
              <li>Pilih alasan, tap "Hapus Permanen"</li>
              <li>Kamu akan logout otomatis, data masuk antrean hapus</li>
            </ol>
          </div>
          <div class="border rounded-2xl p-5">
            <div class="text-2xl mb-2">✉️</div>
            <h3 class="font-bold mb-2">Opsi 2: Via Email</h3>
            <p class="text-sm text-slate-700">Kirim email ke <a href="mailto:irwandip999@gmail.com" class="underline font-bold">irwandip999@gmail.com</a> dengan:</p>
            <ul class="list-disc pl-5 text-sm space-y-1 text-slate-700 mt-2">
              <li>Subjek: <code>Hapus Akun - [email kamu terdaftar]</code></li>
              <li>Isi: Email terdaftar, no HP, alasan (opsional), attach KTP jika akun terverifikasi</li>
              <li>Contoh: "Tolong hapus akun saya email tester@nihtip.com - HP 0812xxxx"</li>
            </ul>
            <p class="text-xs text-slate-500 mt-2">Respon max 3x24 jam kerja.</p>
          </div>
        </div>

        <h2 class="text-xl font-bold mb-3">Apa yang Terhapus?</h2>
        <table class="w-full text-sm border">
          <thead class="bg-slate-50"><tr><th class="p-2 border text-left">Data</th><th class="p-2 border text-left">Aksi</th><th class="p-2 border text-left">Timeline</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border">Profile (nama, email, HP, avatar)</td><td class="p-2 border">Hapus permanen</td><td class="p-2 border">7 hari</td></tr>
            <tr><td class="p-2 border">Lokasi realtime Redis (runner:track:*, runner:alive:*, runners:live GEO)</td><td class="p-2 border">Hapus TTL 10 menit / langsung</td><td class="p-2 border">Instant - 10 menit</td></tr>
            <tr><td class="p-2 border">FCM token</td><td class="p-2 border">Hapus</td><td class="p-2 border">Instant</td></tr>
            <tr><td class="p-2 border">Foto KYC (KTP, selfie) + bukti resi/antar</td><td class="p-2 border">Anonimize / hapus dari COS setelah retensi</td><td class="p-2 border">30 hari</td></tr>
            <tr><td class="p-2 border">Order history + wallet transaksi</td><td class="p-2 border">Anonimize (hapus PII, keep nominal untuk audit keuangan)</td><td class="p-2 border">1 tahun (UU) lalu hapus total</td></tr>
            <tr><td class="p-2 border">Pool metrics, counters, logs Dozzle</td><td class="p-2 border">Hapus / TTL 24h</td><td class="p-2 border">24h</td></tr>
            <tr><td class="p-2 border">Device session (token versioning)</td><td class="p-2 border">Revoke, increment tokenVersion</td><td class="p-2 border">Instant</td></tr>
          </tbody>
        </table>

        <h2 class="text-xl font-bold mt-10 mb-3">Prasyarat Sebelum Hapus</h2>
        <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
          <li>Escrow yang masih aktif harus <strong>settle / refund / completed</strong> dulu. Jika masih ada order active (status accepted, cooking, ready, delivering), selesaikan atau cancel dulu.</li>
          <li>Saldo wallet harus ditarik / 0. Jika masih ada, ajukan withdraw dulu via app > Wallet > Tarik Dana.</li>
          <li>Jika akun merchant, pastikan tidak ada order pending di merchant dashboard.</li>
        </ul>

        <h2 class="text-xl font-bold mt-10 mb-3">Konfirmasi & Status</h2>
        <p class="text-sm text-slate-700">Setelah request, kamu dapat email konfirmasi "Permintaan hapus akun diterima". Setelah proses selesai (7-30 hari), email final "Akun Anda telah dihapus permanen". Jika lewat 30 hari belum ada email, hubungi support lagi.</p>

        <h2 class="text-xl font-bold mt-10 mb-3">Alternatif: Nonaktifkan Sementara</h2>
        <p class="text-sm text-slate-700">Jika hanya ingin berhenti sementara, cukup logout atau suspend: Profile > Logout. Data tetap ada tapi tidak dipakai untuk matching. Lokasi real-time otomatis TTL 10 menit hilang. Kamu bisa login lagi kapan saja.</p>

        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-10">
          <p class="text-sm text-amber-800 m-0"><strong>Catatan Play Store:</strong> URL ini (<code>https://nihtip.com/delete-account</code>) diisi di Play Console > Data Safety > Data deletion URL. Google akan cek manual saat review.</p>
        </div>

        <div class="mt-10 pt-6 border-t text-xs text-slate-500">
          <p>Package: com.nihtip.mobile — Publisher CN=Nihtip.com — SHA-256 09b0377b... — Build 2026-07-28 — Docs backup: planning/09_release_security/01_keystore_backup_and_recovery.md — Kontak: irwandip999@gmail.com</p>
        </div>
      </div>
    </section>
  </div>
</template>
