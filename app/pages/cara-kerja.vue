<script setup lang="ts">
useHead({
  title: 'Cara Kerja - Nitip',
  meta: [
    { name: 'description', content: 'Pelajari bagaimana Nitip bekerja dalam 3 langkah mudah: buat pesanan, Runner mengambil, barang sampai tujuan.' },
  ],
})

const detailedSteps = [
  {
    number: '1',
    title: 'Buat Pesanan & Pilih Layanan',
    items: [
      'Daftar dan verifikasi akun Anda di aplikasi Nihtip',
      'Pilih kategori layanan: Titip Belanja, Kirim Paket, Runner Kustom, atau Pengiriman Regular',
      'Masukkan detail barang/jasa yang dibutuhkan beserta titik jemput dan titik antar',
      'Pilih metode pembayaran: Saldo Nitip Pay atau Cash on Delivery (COD)',
      'Biaya dihitung otomatis secara real-time dan ditampilkan transparan sebelum konfirmasi',
    ],
  },
  {
    number: '2',
    title: 'Pembayaran & Dana Escrow',
    items: [
      'Jika memilih Saldo Nitip Pay: lakukan top-up via QRIS terlebih dahulu (min. Rp 10.000)',
      'Jika memilih QRIS langsung: sistem membuat kode QR dinamis dengan nominal yang sudah terisi otomatis',
      'Setelah pembayaran terverifikasi, dana dikunci dalam rekening bersama (escrow) Nihtip',
      'Dana tidak dapat diakses Runner hingga pesanan selesai dan diverifikasi Customer',
      'Semua transaksi menggunakan mata uang Rupiah Indonesia (IDR)',
    ],
  },
  {
    number: '3',
    title: 'Runner Mengeksekusi Pesanan',
    items: [
      'Sistem Smart Matching mendeteksi Runner terverifikasi yang searah dengan rute pesanan',
      'Runner menerima notifikasi dan mengkonfirmasi pesanan',
      'Runner menuju titik jemput, mengambil/membeli barang sesuai instruksi',
      'Customer dapat memantau posisi Runner secara real-time di peta',
      'Runner mengirimkan bukti foto barang dan struk pembelian (jika ada)',
    ],
  },
  {
    number: '4',
    title: 'Konfirmasi & Dana Dilepas',
    items: [
      'Runner tiba di titik antar dan menyerahkan barang kepada penerima',
      'Penerima memasukkan kode konfirmasi 6 digit yang dimiliki Customer',
      'Sistem secara otomatis melepaskan dana escrow ke dompet Runner',
      'Customer dapat memberikan ulasan dan rating untuk Runner',
      'Riwayat transaksi tersimpan permanen dan dapat diakses kapan saja',
    ],
  },
]

const paymentMethods = [
  {
    icon: '💳',
    title: 'Nitip Pay (Dompet Digital)',
    desc: 'Isi saldo dompet Nihtip via QRIS, lalu gunakan untuk bayar pesanan. Dana aman dalam sistem escrow.',
    badge: 'Direkomendasikan',
  },
  {
    icon: '📲',
    title: 'QRIS (Scan & Pay)',
    desc: 'Bayar langsung via QRIS dengan nominal yang sudah terisi otomatis. Diterima semua e-wallet & bank.',
    badge: 'Populer',
  },
  {
    icon: '💵',
    title: 'COD (Bayar di Tempat)',
    desc: 'Bayar tunai saat barang tiba. Khusus untuk pengguna terverifikasi dengan riwayat transaksi baik.',
    badge: 'Tersedia',
  },
]

</script>

<template>
  <div>
    <section class="bg-gradient-to-br from-primary-500 to-primary-700 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Cara Kerja Nihtip</h1>
        <p class="text-lg text-white/80">Proses pemesanan, pembayaran, dan pengiriman yang sederhana, aman, dan transparan.</p>
        <div class="mt-6 inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm text-white/90 font-medium">
          <span>💡</span>
          <span>Semua transaksi dalam Rupiah Indonesia (IDR)</span>
        </div>
      </div>
    </section>

    <!-- Alur Proses -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center mb-4">
          <h2 class="text-2xl font-extrabold text-gray-900">Proses End-to-End</h2>
          <p class="text-gray-500 mt-2">4 langkah mudah dari pesanan hingga barang di tangan Anda</p>
        </div>
        <article v-for="step in detailedSteps" :key="step.number" class="flex flex-col md:flex-row gap-6 items-start bg-white rounded-3xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow">
          <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-500 text-white flex items-center justify-center text-2xl font-extrabold">
            {{ step.number }}
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ step.title }}</h3>
            <ul class="space-y-2.5">
              <li v-for="item in step.items" :key="item" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-sm text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Metode Pembayaran -->
    <section class="py-16 bg-gray-50 border-t border-gray-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-extrabold text-gray-900">Metode Pembayaran yang Diterima</h2>
          <p class="text-gray-500 mt-2">Nihtip mendukung beberapa metode pembayaran dalam Rupiah Indonesia (IDR)</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="method in paymentMethods"
            :key="method.title"
            class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div class="text-4xl mb-3">{{ method.icon }}</div>
            <span class="text-[10px] font-bold bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full border border-primary-100">{{ method.badge }}</span>
            <h3 class="text-sm font-bold text-gray-900 mt-3 mb-2">{{ method.title }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed">{{ method.desc }}</p>
          </div>
        </div>

        <!-- IDR Note -->
        <div class="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="text-sm font-bold text-blue-900 mb-1">Mata Uang & Pembayaran</p>
            <p class="text-sm text-blue-700 leading-relaxed">
              Seluruh transaksi Nihtip menggunakan <strong>Rupiah Indonesia (IDR)</strong>. Pembayaran dapat dilakukan melalui <strong>top-up Saldo Nitip Pay via QRIS</strong> (minimum Rp 10.000) atau langsung via <strong>QRIS</strong> dari dompet digital / aplikasi perbankan yang mendukung. Dana selalu dilindungi oleh sistem <strong>Escrow (Rekening Bersama)</strong> sebelum dilepaskan ke Runner.
            </p>
          </div>
        </div>
      </div>
    </section>

    <ProfileDownload />
  </div>
</template>