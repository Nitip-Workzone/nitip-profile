<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Panduan Runner Perjalanan - Nihtip',
  meta: [
    { name: 'description', content: 'Pelajari alur pendaftaran, deklarasi perjalanan, klaim jaminan pesanan (liability hold), serta pencarian pendapatan di Nihtip Runner.' },
  ],
})

// Tab navigasi utama
const activeTab = ref('umum')
const activeSubSection = ref('')

const tabs = [
  { id: 'umum', label: 'Informasi Umum' },
  { id: 'fitur', label: 'Panduan Fitur' },
  { id: 'kebijakan', label: 'Kebijakan Akun' },
]

// List sub-fitur untuk sidebar desktop & scroll navigasi
const features = [
  { id: 'onboarding', title: '1. Daftar & Login' },
  { id: 'trip-declaration', title: '2. Deklarasi Perjalanan' },
  { id: 'accept-order', title: '3. Terima Pesanan & Jaminan' },
  { id: 'execution', title: '4. Eksekusi & Update Foto' },
  { id: 'complete', title: '5. Penyelesaian dengan Kode' },
  { id: 'withdrawal', title: '6. Wallet & Pencairan' },
]

const handleSubSectionUpdate = (subId: string) => {
  activeSubSection.value = subId
  if (subId) {
    activeTab.value = 'fitur'
    // Scroll ke target element
    setTimeout(() => {
      const el = document.getElementById(subId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }
}
</script>

<template>
  <NuxtLayout name="guide">
    <div>
      <!-- Header Hero Panduan Runner -->
      <section class="bg-gradient-to-br from-emerald-600 to-emerald-800 py-12 text-white text-center relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <NuxtLink to="/guide" class="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-emerald-200 hover:text-white transition-colors">
            ← Kembali ke Pusat Panduan
          </NuxtLink>
          <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight">Panduan Runner Perjalanan</h1>
          <p class="text-xs md:text-sm text-emerald-100 max-w-lg mx-auto font-medium leading-relaxed">
            Panduan lengkap menjadi Mitra Runner terpercaya. Pelajari cara menghasilkan uang dari rute perjalanan Anda, mengelola uang jaminan, dan mengantarkan pesanan.
          </p>
        </div>
      </section>

      <!-- Warning Banner Disclaimer Beta -->
      <GuideBanner />

      <!-- Horizontal Tab Bar (Hanya Muncul di Mobile / < lg) -->
      <GuideTabBar 
        :active-tab="activeTab" 
        :tabs="tabs" 
        @update:active-tab="activeTab = $event" 
      />

      <!-- Area Konten Utama -->
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-8">
        
        <!-- Sidebar Kiri Sticky (Hanya Muncul di Desktop / >= lg) -->
        <GuideSidebar 
          :active-tab="activeTab" 
          :active-sub-section="activeSubSection"
          :tabs="tabs" 
          :features="features"
          @update:active-tab="activeTab = $event"
          @update:active-sub-section="handleSubSectionUpdate"
        />

        <!-- Konten Utama (Kanan) -->
        <div class="flex-1 bg-white border border-slate-100 rounded-3xl p-6 lg:p-8 shadow-sm space-y-10 min-w-0">
          
          <!-- ================= SECTION 1: INFORMASI UMUM ================= -->
          <div v-if="activeTab === 'umum'" class="space-y-6">
            <div class="space-y-2">
              <h2 class="text-lg font-black text-slate-900 tracking-tight" id="umum">Informasi Umum Mitra Runner</h2>
              <p class="text-xs text-slate-500 font-medium leading-relaxed">
                Platform Nihtip menghubungkan perjalanan Anda dengan kebutuhan penitipan belanja atau pengiriman barang oleh orang di sekitar Anda.
              </p>
            </div>

            <hr class="border-slate-100">

            <div class="space-y-4">
              <div class="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-5 space-y-2">
                <h4 class="text-xs font-black text-emerald-950 uppercase tracking-wide">Ponsel / Mobile Only</h4>
                <p class="text-xs text-emerald-900/90 leading-relaxed font-medium">
                  Sebagai Runner, Anda sepenuhnya beroperasi menggunakan **Aplikasi Handphone Android/iOS (Mobile App)** untuk menerima pesanan, memperbarui rute perjalanan, memotret bukti belanja, dan menyelesaikan pengantaran. Dashboard web tidak tersedia untuk akun Runner.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border border-slate-100 rounded-2xl p-4 space-y-1.5 shadow-sm">
                  <span class="text-xl">💰</span>
                  <h4 class="text-xs font-extrabold text-slate-900 tracking-tight">Kompensasi Jasa Terjamin</h4>
                  <p class="text-[11px] text-slate-500 leading-relaxed font-medium">Setiap ongkos kirim yang dibayarkan penitip masuk utuh ke saldo wallet setelah pengiriman dikonfirmasi selesai.</p>
                </div>
                <div class="border border-slate-100 rounded-2xl p-4 space-y-1.5 shadow-sm">
                  <span class="text-xl">🔒</span>
                  <h4 class="text-xs font-extrabold text-slate-900 tracking-tight">Uang Jaminan (Liability Hold)</h4>
                  <p class="text-[11px] text-slate-500 leading-relaxed font-medium">Sebagian saldo dompet Runner dibekukan sementara saat menerima order untuk menjamin keamanan barang belanjaan penitip.</p>
                </div>
              </div>

              <!-- Disclaimer Status Platform -->
              <div class="bg-amber-50/40 border border-amber-200/60 rounded-2xl p-5 space-y-2">
                <h4 class="text-xs font-black text-amber-950 uppercase tracking-wide">⚠️ Disclaimer Layanan Aktif</h4>
                <p class="text-xs text-amber-900/90 leading-relaxed font-medium">
                  Karena Nihtip dikembangkan dalam skala UMKM terjangkau, notifikasi push real-time (Firebase FCM) dan pelacakan GPS dinamis terus-menerus (Live Tracking) masih dalam penyempurnaan berkala. Runner diimbau untuk selalu berkoordinasi secara manual via chat WhatsApp jika memerlukan update cepat.
                </p>
              </div>
            </div>
          </div>

          <!-- ================= SECTION 2: PANDUAN FITUR STEP-BY-STEP ================= -->
          <div v-else-if="activeTab === 'fitur'" class="space-y-12">
            <div class="space-y-2">
              <h2 class="text-lg font-black text-slate-900 tracking-tight" id="fitur">Panduan Penggunaan Fitur Runner</h2>
              <p class="text-xs text-slate-500 font-medium">Gunakan panduan langkah demi langkah bernomor di bawah ini yang disesuaikan dari alur kerja aplikasi seluler.</p>
            </div>

            <hr class="border-slate-100">

            <!-- 1. Daftar & Login -->
            <GuideFeatureSection 
              id="onboarding" 
              title="1. Pendaftaran & Verifikasi Runner Baru" 
              description="Langkah awal mengaktifkan status Runner agar diizinkan mengambil pesanan pengguna lain."
              note="Siapkan KTP asli dan foto wajah memegang KTP dengan pencahayaan terang untuk mempercepat proses verifikasi oleh admin."
            >
              <GuideStepCard 
                :step-number="1"
                title="Daftar Akun di Aplikasi Mobile"
                description="Buka aplikasi Nihtip Runner, klik daftar, isi nomor WhatsApp aktif, alamat email, dan nama lengkap Anda sesuai identitas."
                image-placeholder-name="Formulir Register Runner Aplikasi Mobile"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Unggah Foto Identitas & Selfie KTP"
                description="Masuk ke menu Verifikasi Akun. Upload foto KTP serta foto selfie memegang dokumen KTP Anda secara jelas tanpa blur."
                image-placeholder-name="Halaman Upload KYC Kamera Handphone"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="3"
                title="Tunggu Verifikasi & Isi Saldo Jaminan"
                description="Setelah disetujui admin, isi saldo dompet wallet Anda sebagai modal jaminan minimal sebelum mulai mengambil pesanan."
                image-placeholder-name="Notifikasi Akun Terverifikasi & Info Wallet"
                image-size-info="390px x 844px (Mobile App)"
              />
            </GuideFeatureSection>

            <!-- 2. Deklarasi Perjalanan -->
            <GuideFeatureSection 
              id="trip-declaration" 
              title="2. Melakukan Deklarasi Perjalanan (Layanan Reguler)" 
              description="Tawarkan jasa antar barang searah kepada orang lain berdasarkan rencana rute perjalanan yang akan Anda tempuh."
              note="Isi rute keberangkatan dan tujuan secara akurat. Sistem pencocokan otomatis akan mencocokkan Anda dengan penitip yang searah rute Anda."
            >
              <GuideStepCard 
                :step-number="1"
                title="Buka Tab Perjalanan"
                description="Masuk ke dasbor Runner, pilih menu 'Deklarasi Perjalanan Baru' di bagian bawah layar."
                image-placeholder-name="Tab Menu Perjalanan / Trip List"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Isi Rute Asal & Tujuan Perjalanan"
                description="Pilih titik keberangkatan (A) dan titik akhir tujuan Anda (B) pada peta, serta tentukan radius toleransi jarak menyimpang (detour radius)."
                image-placeholder-name="Formulir Input Rute Perjalanan Peta"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="3"
                title="Aktifkan Perjalanan Anda"
                description="Tekan tombol 'Mulai Perjalanan'. Rute Anda sekarang aktif dan sistem akan otomatis mencocokkan pesanan searah yang masuk."
                image-placeholder-name="Trip Aktif Indicator di Layar Utama"
                image-size-info="390px x 844px (Mobile App)"
              />
            </GuideFeatureSection>

            <!-- 3. Terima Pesanan & Jaminan -->
            <GuideFeatureSection 
              id="accept-order" 
              title="3. Menerima Pesanan & Pembekuan Jaminan (Liability Hold)" 
              description="Cara mengambil pesanan aktif yang ditawarkan oleh sistem baik untuk kategori Instant maupun Reguler."
              note="Sebelum menekan Terima, pastikan saldo wallet Anda cukup untuk menutupi deposit jaminan. Jika kurang, Anda tidak bisa menerima pesanan."
            >
              <GuideStepCard 
                :step-number="1"
                title="Pilih Pesanan Masuk Cocok"
                description="Tinjau detail pesanan yang masuk ke layar Anda: detail belanjaan, jarak pengiriman, total ongkos kirim, dan nilai jaminan yang dibutuhkan."
                image-placeholder-name="Kartu Rincian Pesanan Masuk (Order Request)"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Klik Terima Pesanan"
                description="Apabila sudah sesuai, klik tombol 'Terima Pesanan'. Status saldo jaminan Anda akan dibekukan sementara di wallet."
                image-placeholder-name="Tombol Konfirmasi Terima Transaksi"
                image-size-info="390px x 844px (Mobile App)"
              />
            </GuideFeatureSection>

            <!-- 4. Eksekusi & Update Foto -->
            <GuideFeatureSection 
              id="execution" 
              title="4. Memproses Pesanan & Mengunggah Foto Bukti" 
              description="Langkah penyiapan barang belanjaan, memotret nota/struk belanja, dan bersiap melakukan pengantaran."
            >
              <GuideStepCard 
                :step-number="1"
                title="Belanja / Ambil Paket"
                description="Pergilah ke toko/lokasi penjemputan. Lakukan pembelian barang sesuai rincian detail pesanan penitip."
                image-placeholder-name="Petunjuk Peta Navigasi Toko"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Foto & Masukkan Bukti Struk"
                description="Klik tombol 'Unggah Bukti Struk', potret nota pembelian asli menggunakan kamera handphone, lalu ketik total pengeluaran belanja yang sebenarnya."
                image-placeholder-name="Kamera Capture Struk Pembelian & Nominal Input"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="3"
                title="Update Status 'Sedang Mengantar'"
                description="Tekan tombol 'Mulai Pengantaran' untuk menginformasikan kepada penitip bahwa Anda sedang dalam perjalanan ke alamat mereka."
                image-placeholder-name="Tombol Mulai Kirim / Update Status"
                image-size-info="390px x 844px (Mobile App)"
              />
            </GuideFeatureSection>

            <!-- 5. Penyelesaian dengan Kode -->
            <GuideFeatureSection 
              id="complete" 
              title="5. Menyelesaikan Pesanan Dengan Kode Konfirmasi" 
              description="Tahap akhir serah terima barang kepada pelanggan dan melepaskan saldo pendapatan Anda."
              note="Jangan pernah menyerahkan barang jika Anda belum memasukkan kode unik konfirmasi dari penitip secara sukses ke aplikasi."
            >
              <GuideStepCard 
                :step-number="1"
                title="Tiba di Tujuan & Temui Penitip"
                description="Sesampainya di alamat tujuan, temui penitip dan serahkan barang belanjaan/paket mereka secara sopan."
                image-placeholder-name="Petunjuk Peta Alamat Tujuan Akhir"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Minta Kode 6-Digit Konfirmasi"
                description="Mintalah kode konfirmasi 6-digit (atau tunjukkan kode QR untuk dipindai) yang tertera pada layar aplikasi handphone penitip."
                image-placeholder-name="Scan Kamera QR Code / Input Form Kode Manual"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="3"
                title="Pesanan Selesai & Jaminan Cair"
                description="Setelah kode berhasil dicocokkan, transaksi otomatis selesai. Jaminan Anda langsung dilepas dan ongkos kirim ditambahkan ke dompet wallet Anda."
                image-placeholder-name="Layar Selamat Transaksi Selesai"
                image-size-info="390px x 844px (Mobile App)"
              />
            </GuideFeatureSection>

            <!-- 6. Wallet & Pencairan -->
            <GuideFeatureSection 
              id="withdrawal" 
              title="6. Mengelola Dompet Wallet & Pencairan Pendapatan" 
              description="Cara memantau pemasukan Anda dan mengirimkan dana hasil kerja ke rekening bank pribadi Anda."
            >
              <GuideStepCard 
                :step-number="1"
                title="Buka Menu Dompet Wallet"
                description="Akses tab Wallet di pojok kanan bawah aplikasi mobile untuk melihat rincian Saldo Aktif, Saldo Ter-Hold (Jaminan), dan Riwayat Pekerjaan."
                image-placeholder-name="Dashboard Keuangan Wallet Mobile"
                image-size-info="390px x 844px (Mobile App)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Ajukan Penarikan Dana (Withdrawal)"
                description="Klik 'Tarik Saldo', isi nominal dana yang ingin dicairkan, lalu pilih rekening bank terdaftar Anda. Pengajuan penarikan dana akan diproses secara manual oleh tim admin."
                image-placeholder-name="Formulir Penarikan Saldo Rekening Tujuan"
                image-size-info="390px x 844px (Mobile App)"
              />
            </GuideFeatureSection>
          </div>

          <!-- ================= SECTION 3: KEBIJAKAN TOKO/RUNNER ================= -->
          <div v-if="activeTab === 'kebijakan'" class="space-y-6">
            <div class="space-y-2">
              <h2 class="text-lg font-black text-slate-900 tracking-tight" id="kebijakan">Kebijakan & Keamanan Akun Runner</h2>
              <p class="text-xs text-slate-500 font-medium">Peraturan dasar operasional untuk menjaga keandalan ekosistem Runner di Nihtip.</p>
            </div>

            <hr class="border-slate-100">

            <div class="space-y-5">
              <article class="space-y-2">
                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">1. Aturan Penahanan Uang Jaminan (Liability Hold)</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">
                  Setiap kali menerima pesanan belanja atau makanan, saldo wallet Anda akan dibekukan sementara senilai taksiran harga barang tersebut + deposit platform. Saldo ini adalah jaminan keamanan jika Runner membawa kabur barang. Saldo akan otomatis dilepas penuh 100% setelah transaksi terkonfirmasi selesai.
                </p>
              </article>

              <article class="space-y-2">
                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">2. Kebijakan Sengketa & Pengurangan Saldo</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">
                  Jika pelanggan mengajukan komplain atau sengketa (misal barang rusak parah atau pesanan tidak lengkap), dana jaminan akan ditahan oleh platform. Admin Nihtip akan memeriksa bukti struk dan foto pengantaran yang diunggah Runner. Jika terbukti kesalahan ada pada Runner, saldo jaminan tersebut akan dipotong secara proporsional untuk mengganti kerugian penitip.
                </p>
              </article>

              <article class="space-y-2">
                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">3. Kebijakan Pembatalan Pesanan Aktif</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">
                  Runner dilarang membatalkan pesanan sepihak setelah menekan tombol 'Terima Pesanan' kecuali dalam kondisi kahar (banjir, ban bocor, kecelakaan). Pembatalan sepihak berulang-ulang tanpa bukti yang valid dapat menyebabkan status verifikasi akun Runner ditangguhkan (*suspend*) secara permanen.
                </p>
              </article>

              <article class="space-y-2">
                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">4. Syarat Minimum Wallet & Limit Harian</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">
                  Runner wajib mempertahankan saldo wallet aktif minimal Rp20.000 (tidak termasuk nominal jaminan ter-hold) agar akun tetap terdeteksi oleh radar pencarian order penitip. Limit pencairan dana harian diatur maksimal 1x penarikan per hari untuk mematuhi proses rekonsiliasi manual perbankan.
                </p>
              </article>
            </div>
          </div>

        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
