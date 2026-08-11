<script setup lang="ts">
useHead({
  title: 'Layanan & Tarif - Nihtip',
  meta: [
    {
      name: 'description',
      content: 'Katalog lengkap layanan Nihtip: Titip Belanja, Kirim Paket Instan, Jasa Runner Kustom, Pengiriman Regular, dan Nitip Pay. Semua tarif dalam IDR, transparan, dihitung otomatis.',
    },
  ],
})

const services = [
  {
    no: '01',
    icon: '🍔',
    title: 'Titip Belanja & Kuliner',
    subtitle: 'Jastip dari Toko & Restoran',
    description: 'Runner Nihtip membelikan barang atau makanan pilihan Anda dari toko, supermarket, restoran, atau apotek. Anda cukup duduk di rumah — barang datang ke depan pintu.',
    priceMin: 7000,
    priceMax: 20000,
    priceUnit: 'per pengiriman',
    priceNote: 'Biaya bervariasi berdasarkan jarak & berat barang',
    components: [
      { label: 'Biaya Jastip Dasar', value: 'Rp 3.000' },
      { label: 'Biaya per Kilometer', value: 'Rp 100/km' },
      { label: 'Biaya per Kilogram', value: 'Rp 4.000/kg' },
      { label: 'Biaya Layanan Platform', value: '10% dari ongkir' },
      { label: 'Biaya Pengecekan Barang', value: 'Rp 2.000' },
    ],
    examples: ['Mart & Supermarket', 'Restoran & Warung Makan', 'Apotek', 'Toko Kelontong'],
    color: 'indigo',
  },
  {
    no: '02',
    icon: '📦',
    title: 'Kirim Paket Instan',
    subtitle: 'Pengiriman ≤ 5 Km (Instant Mode)',
    description: 'Untuk kiriman di dalam kota jarak dekat, sistem mencocokkan Runner terdekat secara instan. Paket sampai lebih cepat dengan tarif hemat.',
    priceMin: 3000,
    priceMax: 15000,
    priceUnit: 'per pengiriman',
    priceNote: 'Berlaku untuk jarak di bawah 5 km',
    components: [
      { label: 'Biaya Dasar Instant', value: 'Rp 3.000' },
      { label: 'Biaya per Kilogram', value: 'Rp 2.000/kg' },
      { label: 'Biaya Layanan Platform', value: '10% dari ongkir' },
      { label: 'Biaya Pengecekan', value: 'Rp 2.000' },
    ],
    examples: ['Dokumen & Surat', 'Paket Kecil & Sedang', 'Produk UMKM', 'Hadiah & Kado'],
    color: 'emerald',
  },
  {
    no: '03',
    icon: '🚗',
    title: 'Pengiriman Regular',
    subtitle: 'Pengiriman Jarak > 5 Km',
    description: 'Untuk kiriman antar kecamatan atau luar kota dalam jangkauan layanan. Biaya dihitung berdasarkan jarak aktual, berat, dan volume barang secara transparan.',
    priceMin: 10000,
    priceMax: 50000,
    priceUnit: 'per pengiriman',
    priceNote: 'Jarak dihitung x1.3 untuk estimasi rute aktual',
    components: [
      { label: 'Biaya Dasar Regular', value: 'Rp 3.000' },
      { label: 'Biaya per Kilometer', value: 'Rp 100/km (x1.3)' },
      { label: 'Biaya per Kilogram', value: 'Rp 4.000/kg' },
      { label: 'Biaya per Liter Volume', value: 'Rp 500/liter' },
      { label: 'Biaya Layanan Platform', value: '10% dari ongkir' },
      { label: 'Biaya Pengecekan', value: 'Rp 2.000' },
    ],
    examples: ['Barang dari ibukota', 'Kiriman antar kecamatan', 'Paket berat', 'Barang volume besar'],
    color: 'blue',
  },
  {
    no: '04',
    icon: '🏃‍♂️',
    title: 'Jasa Runner Kustom',
    subtitle: 'Tugas & Instruksi Khusus',
    description: 'Butuh Runner untuk antri loket, ambil dokumen fisik, bayar tagihan, atau tugas harian lainnya? Kirim instruksi kustom dan Runner siap menyelesaikannya.',
    priceMin: 5000,
    priceMax: 30000,
    priceUnit: 'per tugas',
    priceNote: 'Tergantung jarak dan kompleksitas tugas',
    components: [
      { label: 'Biaya Jasa Dasar', value: 'Rp 5.000' },
      { label: 'Biaya Perjalanan', value: 'Sesuai jarak tempuh' },
      { label: 'Biaya Layanan Platform', value: '10% dari total' },
    ],
    examples: ['Antri loket BPJS/Bank', 'Ambil dokumen fisik', 'Bayar tagihan', 'Belanja dengan daftar khusus'],
    color: 'amber',
  },
  {
    no: '05',
    icon: '💳',
    title: 'Nitip Pay',
    subtitle: 'Dompet Digital Nihtip',
    description: 'Isi saldo Nitip Pay untuk kemudahan pembayaran seluruh transaksi di platform. Dana disimpan aman dalam rekening bersama (escrow) dan hanya dicairkan saat transaksi selesai.',
    priceMin: 10000,
    priceMax: 10000000,
    priceUnit: 'minimum top-up',
    priceNote: 'Tidak ada biaya aktivasi atau biaya bulanan',
    components: [
      { label: 'Minimum Top-up', value: 'Rp 10.000' },
      { label: 'Biaya Transaksi QRIS', value: '0.7% dari nominal' },
      { label: 'Biaya Admin Penarikan', value: 'Rp 0 (gratis)' },
      { label: 'Masa Aktif Saldo', value: 'Tidak terbatas' },
    ],
    examples: ['Top-up via QRIS', 'Transfer antar pengguna', 'Sistem Escrow otomatis'],
    color: 'violet',
  },
]

const colorClass: Record<string, { badge: string, icon: string, tag: string, accent: string, border: string, row: string }> = {
  indigo: {
    badge: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    icon: 'bg-indigo-50',
    tag: 'bg-indigo-50 text-indigo-700',
    accent: 'text-indigo-600',
    border: 'border-indigo-100 hover:border-indigo-300',
    row: 'bg-indigo-50/50',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    icon: 'bg-emerald-50',
    tag: 'bg-emerald-50 text-emerald-700',
    accent: 'text-emerald-600',
    border: 'border-emerald-100 hover:border-emerald-300',
    row: 'bg-emerald-50/50',
  },
  blue: {
    badge: 'bg-blue-50 text-blue-600 border-blue-100',
    icon: 'bg-blue-50',
    tag: 'bg-blue-50 text-blue-700',
    accent: 'text-blue-600',
    border: 'border-blue-100 hover:border-blue-300',
    row: 'bg-blue-50/50',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-600 border-amber-100',
    icon: 'bg-amber-50',
    tag: 'bg-amber-50 text-amber-700',
    accent: 'text-amber-600',
    border: 'border-amber-100 hover:border-amber-300',
    row: 'bg-amber-50/50',
  },
  violet: {
    badge: 'bg-violet-50 text-violet-600 border-violet-100',
    icon: 'bg-violet-50',
    tag: 'bg-violet-50 text-violet-700',
    accent: 'text-violet-600',
    border: 'border-violet-100 hover:border-violet-300',
    row: 'bg-violet-50/50',
  },
}

const fmt = (n: number) => n.toLocaleString('id-ID')
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-[#5b50e6] to-[#4338ca] py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-[11px] font-bold text-white uppercase tracking-widest mb-5">
          Katalog Produk & Tarif
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Layanan & Tarif Nihtip
        </h1>
        <p class="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Nihtip adalah platform jasa titip dan pengiriman yang menghubungkan masyarakat dengan Runner terpercaya. Semua tarif dalam Rupiah Indonesia (IDR) dan dihitung transparan oleh sistem.
        </p>
        <!-- Stats strip -->
        <div class="mt-10 inline-flex flex-wrap justify-center gap-6 bg-white/10 border border-white/20 rounded-2xl px-8 py-4">
          <div class="text-center">
            <p class="text-2xl font-extrabold text-white">5</p>
            <p class="text-[11px] text-white/70 mt-0.5">Kategori Layanan</p>
          </div>
          <div class="w-px bg-white/20 self-stretch hidden sm:block" />
          <div class="text-center">
            <p class="text-2xl font-extrabold text-white">Rp 3.000</p>
            <p class="text-[11px] text-white/70 mt-0.5">Tarif Mulai Dari</p>
          </div>
          <div class="w-px bg-white/20 self-stretch hidden sm:block" />
          <div class="text-center">
            <p class="text-2xl font-extrabold text-white">IDR</p>
            <p class="text-[11px] text-white/70 mt-0.5">Mata Uang Rupiah</p>
          </div>
          <div class="w-px bg-white/20 self-stretch hidden sm:block" />
          <div class="text-center">
            <p class="text-2xl font-extrabold text-white">0%</p>
            <p class="text-[11px] text-white/70 mt-0.5">Biaya Tersembunyi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Cards -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <article
          v-for="service in services"
          :key="service.title"
          class="rounded-3xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          :class="colorClass[service.color].border"
        >
          <div class="p-7 md:p-8">
            <div class="flex flex-col md:flex-row md:items-start gap-6">
              <!-- Left: Info -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" :class="colorClass[service.color].icon">
                    {{ service.icon }}
                  </div>
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-widest" :class="colorClass[service.color].accent">Layanan {{ service.no }}</span>
                    <h2 class="text-xl font-extrabold text-gray-900 leading-tight">{{ service.title }}</h2>
                    <p class="text-xs text-gray-400 font-medium">{{ service.subtitle }}</p>
                  </div>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ service.description }}</p>

                <!-- Use case tags -->
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span
                    v-for="ex in service.examples"
                    :key="ex"
                    class="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                    :class="colorClass[service.color].tag"
                  >
                    {{ ex }}
                  </span>
                </div>
              </div>

              <!-- Right: Price Card -->
              <div class="md:w-[220px] flex-shrink-0">
                <div class="rounded-2xl border bg-gray-50 p-5 text-center" :class="colorClass[service.color].border">
                  <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Estimasi Tarif (IDR)</p>
                  <p class="text-2xl font-extrabold text-gray-900">
                    Rp {{ fmt(service.priceMin) }}
                  </p>
                  <p v-if="service.priceMax !== service.priceMin" class="text-sm text-gray-400 font-medium">
                    s/d Rp {{ fmt(service.priceMax) }}
                  </p>
                  <p class="text-[10px] text-gray-400 mt-1">{{ service.priceUnit }}</p>
                  <div class="mt-3 pt-3 border-t border-gray-200">
                    <p class="text-[10px] text-gray-400 leading-relaxed">{{ service.priceNote }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Price breakdown table -->
            <div class="mt-5 border-t border-gray-100 pt-5">
              <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Komponen Tarif</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                <div
                  v-for="comp in service.components"
                  :key="comp.label"
                  class="flex justify-between items-center text-xs px-3 py-2 rounded-xl"
                  :class="colorClass[service.color].row"
                >
                  <span class="text-gray-600">{{ comp.label }}</span>
                  <span class="font-bold text-gray-800">{{ comp.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- End-to-end Payment Flow -->
    <section class="py-20 bg-gray-50 border-t border-gray-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 space-y-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-[11px] font-bold text-primary-600 uppercase tracking-widest">
            Alur Pembayaran
          </span>
          <h2 class="text-3xl font-extrabold text-gray-900">Proses End-to-End Pembayaran</h2>
          <p class="text-gray-500">Dari pemesanan hingga pembayaran selesai — semua terotomatisasi dan aman.</p>
        </div>

        <div class="space-y-4">
          <div v-for="(step, i) in [
            { icon: '📱', title: 'Customer Buat Pesanan', desc: 'Customer membuka aplikasi Nihtip, memasukkan detail layanan yang dibutuhkan, titik jemput, dan titik antar. Sistem menghitung estimasi biaya secara otomatis.' },
            { icon: '💰', title: 'Pilih Metode Pembayaran', desc: 'Customer memilih pembayaran via Saldo Nitip Pay (dompet digital) atau QRIS. Jika memilih QRIS, sistem membuat kode QR dinamis dengan nominal yang sudah terisi otomatis.' },
            { icon: '🔒', title: 'Dana Ditahan Escrow', desc: 'Setelah pembayaran berhasil, dana dikunci dalam sistem rekening bersama (escrow) Nihtip. Dana tidak bisa diakses Runner sebelum pesanan selesai.' },
            { icon: '🏃‍♂️', title: 'Runner Menerima & Mengerjakan', desc: 'Sistem Smart Matching mencocokkan Runner terpercaya yang searah. Runner menerima notifikasi, mengeksekusi pesanan, dan mengirimkan bukti foto.' },
            { icon: '✅', title: 'Customer Verifikasi & Konfirmasi', desc: 'Customer memasukkan kode konfirmasi atau menyetujui pesanan. Sistem secara otomatis melepaskan dana escrow ke Runner sesuai tarif yang sudah disepakati.' },
            { icon: '⭐', title: 'Transaksi Selesai', desc: 'Dana masuk ke dompet Runner, transaksi tercatat, dan Customer dapat memberikan ulasan. Riwayat transaksi dapat dilihat kapan saja di aplikasi.' },
          ]" :key="step.title" class="flex gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-10 h-10 rounded-2xl bg-primary-50 flex items-center justify-center text-xl flex-shrink-0 mt-0.5">
              {{ step.icon }}
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[10px] font-extrabold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">Langkah {{ i + 1 }}</span>
                <h3 class="text-sm font-bold text-gray-900">{{ step.title }}</h3>
              </div>
              <p class="text-sm text-gray-500 leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IDR Notice -->
    <section class="py-12 bg-white border-t border-gray-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl bg-blue-50 border border-blue-100 p-6 flex items-start gap-4">
          <svg class="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div class="space-y-1">
            <h3 class="font-bold text-blue-900">Ketentuan Tarif</h3>
            <ul class="text-sm text-blue-800 space-y-1.5 leading-relaxed">
              <li>• <strong>Mata uang:</strong> Semua transaksi menggunakan Rupiah Indonesia (IDR)</li>
              <li>• <strong>Pembayaran:</strong> Saldo Nitip Pay (top-up via QRIS) atau Cash on Delivery (COD)</li>
              <li>• <strong>Kalkulasi otomatis:</strong> Biaya dihitung real-time berdasarkan jarak, berat, dan volume</li>
              <li>• <strong>Transparan:</strong> Rincian biaya ditampilkan sebelum Customer mengkonfirmasi pesanan</li>
              <li>• <strong>Escrow:</strong> Dana aman ditahan sistem hingga pesanan selesai dan diverifikasi Customer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ProfileDownload />
  </div>
</template>
