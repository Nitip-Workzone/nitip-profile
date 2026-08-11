<script setup lang="ts">
// Definisikan colorMap lebih dulu agar bisa dipakai sebagai tipe
const colorMap = {
  primary: { bg: 'bg-primary-50', icon: 'bg-primary-100 text-primary-600', accent: 'text-primary-600', border: 'border-primary-100 hover:border-primary-300' },
  emerald: { bg: 'bg-emerald-50', icon: 'bg-emerald-100 text-emerald-600', accent: 'text-emerald-600', border: 'border-emerald-100 hover:border-emerald-300' },
  amber:   { bg: 'bg-amber-50',   icon: 'bg-amber-100 text-amber-600',   accent: 'text-amber-600',   border: 'border-amber-100 hover:border-amber-300'   },
  blue:    { bg: 'bg-blue-50',    icon: 'bg-blue-100 text-blue-600',    accent: 'text-blue-600',    border: 'border-blue-100 hover:border-blue-300'    },
  violet:  { bg: 'bg-violet-50',  icon: 'bg-violet-100 text-violet-600',  accent: 'text-violet-600',  border: 'border-violet-100 hover:border-violet-300'  },
} as const

// ColorKey adalah union dari key-key yang valid: 'primary' | 'emerald' | 'amber' | 'blue' | 'violet'
type ColorKey = keyof typeof colorMap

interface Service {
  icon: string
  badge: string
  badgeColor: string
  title: string
  description: string
  priceLabel: string
  priceValue: string
  priceNote: string
  tags: string[]
  color: ColorKey   // <-- tipe dipersempit hanya ke key yang ada di colorMap
  size: string
  examples: string[]
}

const services: Service[] = [
  {
    icon: '🍔',
    badge: 'Paling Populer',
    badgeColor: 'bg-primary-50 text-primary-600 border-primary-200',
    title: 'Titip Belanja & Kuliner',
    description: 'Runner belikan barang dari toko, supermarket, restoran, atau apotek pilihan Anda. Cocok untuk belanja harian atau kuliner khas kota tanpa harus pergi sendiri.',
    priceLabel: 'Biaya Jastip',
    priceValue: 'Mulai Rp 7.000',
    priceNote: 'Tergantung jarak & berat',
    tags: ['Mart & Toko', 'Restoran', 'Apotek', 'Minimarket'],
    color: 'primary',
    size: 'large',
    examples: ['Indomaret / Alfamart', 'Makanan siap saji', 'Obat apotek'],
  },
  {
    icon: '📦',
    badge: 'Pengiriman Cepat',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    title: 'Kirim Paket Instan',
    description: 'Kirim dokumen penting, barang dagangan, atau hadiah ke seluruh penjuru kota. Runner yang sedang searah akan langsung membawa paket Anda.',
    priceLabel: 'Biaya Kirim',
    priceValue: 'Rp 3.000 – Rp 15.000',
    priceNote: 'Jarak ≤5 km (Instant)',
    tags: ['Dokumen', 'Paket Kecil', 'Real-time Tracking'],
    color: 'emerald',
    size: 'small',
    examples: ['Dokumen kantor', 'Hadiah ulang tahun', 'Barang jualan online'],
  },
  {
    icon: '🏃‍♂️',
    badge: 'Fleksibel',
    badgeColor: 'bg-amber-50 text-amber-600 border-amber-200',
    title: 'Jasa Runner Kustom',
    description: 'Butuh Runner untuk antri loket, ambil dokumen fisik, bayar tagihan, atau tugas khusus lainnya? Kirim instruksi dan Runner siap membantu.',
    priceLabel: 'Biaya Jasa',
    priceValue: 'Rp 5.000 – Rp 30.000',
    priceNote: 'Tergantung kompleksitas',
    tags: ['Antri Loket', 'Ambil Dokumen', 'Tugas Harian'],
    color: 'amber',
    size: 'small',
    examples: ['Antri BPJS', 'Ambil ijazah', 'Bayar tagihan PLN'],
  },
  {
    icon: '🚗',
    badge: 'Jarak Jauh',
    badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
    title: 'Pengiriman Regular',
    description: 'Untuk pengiriman barang jarak jauh antar kecamatan atau antar kota dalam radius yang lebih luas. Biaya dihitung transparan berdasarkan jarak, berat, dan volume barang.',
    priceLabel: 'Biaya Kirim',
    priceValue: 'Rp 10.000 – Rp 50.000',
    priceNote: 'Jarak >5 km, per pengiriman',
    tags: ['Antar Kota', 'Berat ≤20 kg', 'Volume Besar'],
    color: 'blue',
    size: 'large',
    examples: ['Barang dari ibukota', 'Kiriman antar kecamatan', 'Paket berat'],
  },
  {
    icon: '💳',
    badge: 'Dompet Digital',
    badgeColor: 'bg-violet-50 text-violet-600 border-violet-200',
    title: 'Nitip Pay (Saldo Digital)',
    description: 'Isi saldo dompet digital Nihtip untuk kemudahan pembayaran. Saldo tersimpan aman dan bisa digunakan untuk semua transaksi di platform tanpa perlu input pembayaran berulang.',
    priceLabel: 'Minimum Top-up',
    priceValue: 'Rp 10.000',
    priceNote: 'Tidak ada biaya aktivasi',
    tags: ['QRIS', 'Escrow Aman', 'Saldo Seumur Hidup'],
    color: 'violet',
    size: 'medium',
    examples: ['Bayar via QRIS', 'Transfer saldo', 'Cashback otomatis'],
  },
]

</script>

<template>
  <section class="py-24 bg-gray-50/70 relative border-y border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-[11px] font-bold text-primary-600 uppercase tracking-widest">
          Layanan & Tarif
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Semua Urusan Jadi Praktis
        </h2>
        <p class="text-base text-gray-500">
          Dari titip beli makanan di kota sampai kirim dokumen mendesak — semua bisa diselesaikan oleh Runner pilihan Anda. Tarif otomatis, transparan, tanpa biaya tersembunyi.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="service in services"
          :key="service.title"
          class="group relative bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          :class="[
            colorMap[service.color].border,
            service.size === 'large' ? 'lg:col-span-1' : '',
          ]"
        >
          <!-- Badge -->
          <span
            class="absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 rounded-full border"
            :class="service.badgeColor"
          >
            {{ service.badge }}
          </span>

          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
            :class="colorMap[service.color].icon"
          >
            {{ service.icon }}
          </div>

          <!-- Content -->
          <h3 class="text-lg font-bold text-gray-900 mb-2 pr-20 leading-tight group-hover:text-primary-600 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
            {{ service.description }}
          </p>

          <!-- Price Box -->
          <div class="rounded-2xl border border-gray-100 bg-gray-50 p-4 mb-4">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{{ service.priceLabel }}</p>
            <p class="text-xl font-extrabold text-gray-900">{{ service.priceValue }}</p>
            <p class="text-[11px] text-gray-400 mt-0.5">{{ service.priceNote }}</p>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="text-[11px] font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>

      <!-- Price Disclaimer -->
      <div class="mt-10 rounded-2xl bg-white border border-gray-200 p-5 flex items-start gap-3 max-w-2xl mx-auto">
        <svg class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-[12px] text-gray-500 leading-relaxed">
          <strong class="text-gray-700">Semua tarif dalam Rupiah Indonesia (IDR)</strong> dan dihitung otomatis oleh sistem berdasarkan jarak tempuh, berat, dan volume barang. Biaya layanan platform 10% sudah termasuk dalam tarif yang ditampilkan. Pembayaran dapat dilakukan melalui <strong class="text-gray-700">Saldo Nitip Pay atau QRIS</strong>.
        </p>
      </div>
    </div>
  </section>
</template>
