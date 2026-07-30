<template>
  <section class="py-24 bg-gray-50/50 relative border-y border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 class="text-xs font-bold tracking-widest text-primary-600 uppercase">
          Layanan Kami
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
          Semua Urusan Jadi Praktis Dengan Runner Pilihan
        </p>
        <p class="text-base text-gray-500">
          Dari titip beli makanan di kota sampai kirim dokumen mendesak, semua bisa diselesaikan dengan aman dan cepat tanpa beranjak dari tempat Anda.
        </p>
      </div>

      <!-- Bento Box Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Service 1: Titip Beli Makanan & Barang (Large Bento) -->
        <div class="md:col-span-2 group relative overflow-hidden bg-white border border-gray-200/50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[300px]">
          <div class="absolute top-0 right-0 w-48 h-48 bg-primary-50 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform" />
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl">
              🍔
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              Titip Belanja & Kuliner Kota
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed max-w-md">
              Ingin makanan khas kota atau belanja bulanan di supermarket besar tapi malas berkendara berjam-jam? Runner kami siap membelikan dan mengantarkannya langsung ke depan pintu Anda.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-6">
            <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-lg">Mart & Toko</span>
            <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-lg">Restoran</span>
            <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-lg">Apotek</span>
          </div>
        </div>

        <!-- Service 2: Kirim Paket Instan (Medium Bento) -->
        <div class="group relative overflow-hidden bg-white border border-gray-200/50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[300px]">
          <div class="absolute top-0 right-0 w-36 h-36 bg-accent/5 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform" />
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl">
              📦
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              Kirim Paket Instan
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed">
              Kirim dokumen penting, barang jualan, atau paket hadiah tanpa menunggu seharian. Runner yang sejalan akan langsung membawakannya.
            </p>
          </div>
          <div class="pt-6">
            <span class="text-xs font-bold text-accent-dark group-hover:underline inline-flex items-center gap-1">
              Real-time tracking aktif →
            </span>
          </div>
        </div>

        <!-- Service 3: Cari Asisten / Runner Custom (Medium Bento) -->
        <div class="group relative overflow-hidden bg-white border border-gray-200/50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[300px]">
          <div class="absolute top-0 right-0 w-36 h-36 bg-primary-50 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform" />
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl">
              🏃‍♂️
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              Jasa Runner Kustom
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed">
              Butuh bantuan mengantre loket, mengambil dokumen fisik, atau tugas harian lainnya? Kirimkan instruksi kustom Anda dan biarkan runner menyelesaikannya.
            </p>
          </div>
          <div class="pt-6">
            <span class="text-xs font-bold text-primary-600 group-hover:underline inline-flex items-center gap-1">
              Fleksibel sesuai instruksi →
            </span>
          </div>
        </div>

        <!-- Service 4: Rekening Bersama / Escrow Aman (Large Bento) -->
        <div class="md:col-span-2 group relative overflow-hidden bg-white border border-gray-200/50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[300px]">
          <div class="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform" />
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl">
              🛡️
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              Sistem Pembayaran Escrow (Rekber)
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed max-w-xl">
              Keamanan Anda adalah prioritas kami. Dana pembayaran untuk runner hanya akan dilepaskan setelah Anda memverifikasi bahwa barang atau jasa telah diterima dengan aman dan sesuai pesanan.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-6">
            <span class="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">Bebas Khawatir</span>
            <span class="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">Transaksi Transparan</span>
            <span class="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">Dukungan CS 24/7</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
