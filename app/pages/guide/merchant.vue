<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Panduan Mitra Merchant - Nihtip',
  meta: [
    { name: 'description', content: 'Pelajari panduan operasional toko, pendaftaran merchant, pengaturan menu, penerimaan pesanan, dan pencairan saldo di Nihtip.' },
  ],
})

// Tab navigasi utama
definePageMeta({
  layout: false
})

const activeTab = ref('umum')
const activeSubSection = ref('')

const tabs = [
  { id: 'umum', label: 'Informasi Umum' },
  { id: 'fitur', label: 'Panduan Fitur' },
  { id: 'kebijakan', label: 'Kebijakan Toko' },
]

// List sub-fitur untuk sidebar desktop & scroll navigasi
const features = [
  { id: 'onboarding', title: '1. Registrasi Toko' },
  { id: 'operational', title: '2. Jam Operasional' },
  { id: 'catalog', title: '3. Katalog Menu' },
  { id: 'orders', title: '4. Proses Pesanan' },
  { id: 'ready', title: '5. Siap Diambil' },
  { id: 'wallet', title: '6. Pencairan Saldo' },
]

// Sinkronisasi navigasi sidebar desktop dengan mengarahkan tab utama ke 'fitur'
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
      <!-- Header Hero Panduan Merchant -->
      <section class="bg-gradient-to-br from-indigo-500 to-indigo-700 py-12 text-white text-center relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <NuxtLink to="/guide" class="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-indigo-200 hover:text-white transition-colors">
            ← Kembali ke Pusat Panduan
          </NuxtLink>
          <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight">Panduan Mitra Merchant</h1>
          <p class="text-xs md:text-sm text-indigo-100 max-w-lg mx-auto font-medium leading-relaxed">
            Pelajari cara memaksimalkan penjualan, mengelola operasional toko, dan menyajikan menu terbaik untuk pelanggan Nihtip.
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
              <h2 class="text-lg font-black text-slate-900 tracking-tight" id="umum">Informasi Umum Mitra Merchant</h2>
              <p class="text-xs text-slate-500 font-medium leading-relaxed">
                Menghubungkan toko, resto, laundry, atau minimarket fisik Anda dengan ekosistem pelanggan lokal yang memerlukan pengantaran praktis via Runner.
              </p>
            </div>

            <hr class="border-slate-100">

            <div class="space-y-4">
              <div class="bg-indigo-50/30 border border-indigo-100 rounded-2xl p-5 space-y-2">
                <h4 class="text-xs font-black text-indigo-950 uppercase tracking-wide">Tentang Mitra Resmi Nihtip</h4>
                <p class="text-xs text-indigo-900/90 leading-relaxed font-medium">
                  Sebagai mitra resmi, profil toko dan katalog menu Anda akan ditampilkan langsung di aplikasi utama pelanggan. Pelanggan memesan secara instan, melakukan pembayaran aman via escrow Nihtip, dan pesanan Anda akan diambil serta dikirim oleh Runner terverifikasi.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border border-slate-100 rounded-2xl p-4 space-y-1.5 shadow-sm">
                  <span class="text-xl">🍔</span>
                  <h4 class="text-xs font-extrabold text-slate-900 tracking-tight">Nitip Food (Kuliner)</h4>
                  <p class="text-[11px] text-slate-500 leading-relaxed font-medium">Layanan katalog menu makanan dan minuman siap saji dengan pemrosesan order cepat.</p>
                </div>
                <div class="border border-slate-100 rounded-2xl p-4 space-y-1.5 shadow-sm">
                  <span class="text-xl">👕</span>
                  <h4 class="text-xs font-extrabold text-slate-900 tracking-tight">Nitip-Beli (Layanan / Toko Harian)</h4>
                  <p class="text-[11px] text-slate-500 leading-relaxed font-medium">Cocok untuk toko kelontong, minimarket, laundry, maupun penyedia jasa harian terdekat.</p>
                </div>
              </div>

              <!-- Disclaimer Beta -->
              <div class="bg-amber-50/40 border border-amber-200/60 rounded-2xl p-5 space-y-2">
                <h4 class="text-xs font-black text-amber-950 uppercase tracking-wide">⚠️ Disclaimer Fase Pengujian Beta</h4>
                <p class="text-xs text-amber-900/90 leading-relaxed font-medium">
                  Harap diperhatikan bahwa sistem dashboard Merchant saat ini berada dalam tahap penyempurnaan **(Status Kesiapan: ~60%)**. Fitur penerimaan pesanan dan kelola menu sudah berfungsi penuh, namun fitur andalan lain seperti optimasi lokasi dan laporan detail wallet masih dalam pengembangan aktif.
                </p>
              </div>
            </div>
          </div>

          <!-- ================= SECTION 2: PANDUAN FITUR STEP-BY-STEP ================= -->
          <div v-else-if="activeTab === 'fitur'" class="space-y-12">
            <div class="space-y-2">
              <h2 class="text-lg font-black text-slate-900 tracking-tight" id="fitur">Panduan Penggunaan Fitur Merchant</h2>
              <p class="text-xs text-slate-500 font-medium">Gunakan panduan bernomor di bawah ini untuk memahami setiap alur kerja di dasbor toko Anda.</p>
            </div>

            <hr class="border-slate-100">

            <!-- 1. Registrasi Toko -->
            <GuideFeatureSection 
              id="onboarding" 
              title="1. Registrasi Toko Baru (Onboarding)" 
              description="Langkah awal mengaktifkan profil merchant agar dapat ditemukan di aplikasi pencarian pelanggan."
              note="Pastikan alamat dan titik koordinat peta presisi. Kesalahan penempatan titik peta akan menyulitkan Runner menuju lokasi toko Anda."
            >
              <GuideStepCard 
                :step-number="1"
                title="Isi Data Utama Toko"
                description="Masukkan nama merchant, deskripsi layanan toko Anda, serta pilih kategori layanan yang sesuai (Makanan/Mart/Laundry)."
                image-placeholder-name="Formulir Input Data Utama Toko"
                image-size-info="320px x 568px (Mobile)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Tentukan Koordinat Fisik Toko"
                description="Klik 'Pilih dari Peta' untuk mengarahkan pin pada koordinat alamat toko secara tepat. Koordinat ini digunakan oleh GPS Runner."
                image-placeholder-name="Lokasi Picker Peta (Location Onboarding)"
                image-size-info="320px x 568px (Mobile)"
              />
              <GuideStepCard 
                :step-number="3"
                title="Simpan & Buka Toko Pertama Kali"
                description="Klik tombol 'Simpan & Buka Toko'. Profil Anda kini aktif di database platform."
                image-placeholder-name="Tombol Konfirmasi Pendaftaran Merchant"
                image-size-info="320px x 568px (Mobile)"
              />
            </GuideFeatureSection>

            <!-- 2. Jam Operasional -->
            <GuideFeatureSection 
              id="operational" 
              title="2. Konfigurasi Jam Operasional & Status Buka" 
              description="Atur jadwal buka-tutup mingguan serta switch status toko aktif di dashboard utama."
              note="Gunakan tombol status buka/tutup cepat di dashboard untuk keadaan darurat, seperti saat toko terlalu ramai."
            >
              <GuideStepCard 
                :step-number="1"
                title="Atur Jam Operasional Mingguan"
                description="Buka tab Profil Toko, centang tombol 'Tutup' pada hari libur, atau masukkan jam mulai buka dan tutup untuk hari kerja."
                image-placeholder-name="Formulir Pengaturan Jam Operasional Mingguan"
                image-size-info="320px x 568px (Mobile)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Aktifkan Switch Status Toko & Auto Confirm"
                description="Gunakan tombol cepat di halaman dashboard untuk mengubah status Buka/Tutup seketika. Aktifkan Auto Confirm jika ingin sistem otomatis menerima setiap pesanan."
                image-placeholder-name="Kontrol Cepat Status Toko & Auto Confirm"
                image-size-info="540px x 300px (Desktop)"
                :is-desktop-ratio="true"
              />
            </GuideFeatureSection>

            <!-- 3. Katalog Menu -->
            <GuideFeatureSection 
              id="catalog" 
              title="3. Manajemen Katalog Menu & Kontrol Stok" 
              description="Cara mendaftarkan menu produk baru serta menonaktifkan produk yang habis secara real-time."
            >
              <GuideStepCard 
                :step-number="1"
                title="Tambah Item Menu Baru"
                description="Klik tambah menu, isi nama makanan, harga dalam Rupiah (IDR), deskripsi singkat produk, dan tempelkan link gambar produk."
                image-placeholder-name="Formulir Tambah Menu Produk Baru"
                image-size-info="320px x 568px (Mobile)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Kontrol Ketersediaan Stok Instan"
                description="Apabila ada menu yang habis, klik tombol 'Tersedia/Habis' di panel kontrol cepat dashboard utama untuk menyembunyikannya dari pelanggan."
                image-placeholder-name="Daftar Kontrol Menu Cepat Habis/Tersedia"
                image-size-info="320px x 568px (Mobile)"
              />
            </GuideFeatureSection>

            <!-- 4. Penerimaan Pesanan -->
            <GuideFeatureSection 
              id="orders" 
              title="4. Penerimaan Pesanan Masuk (Order Handling)" 
              description="Alur memproses pesanan makanan atau jasa yang dikirim pelanggan."
              note="Selalu periksa catatan khusus pelanggan pada rincian pesanan untuk meminimalisir kesalahan penyiapan barang."
            >
              <GuideStepCard 
                :step-number="1"
                title="Notifikasi Pesanan Berkedip"
                description="Ketika order dikirim pelanggan, bar pemberitahuan merah berkedip 'PESANAN BARU MASUK!' akan muncul disertai bunyi alert."
                image-placeholder-name="Notifikasi Banner Pesanan Masuk Merah"
                image-size-info="320px x 320px (Square Alert)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Tinjau Rincian Detail Pesanan"
                description="Buka detail order untuk memeriksa item produk yang dipesan, kuantitas barang, estimasi biaya, dan instruksi tambahan."
                image-placeholder-name="Detail Detail Transaksi Pending"
                image-size-info="320px x 568px (Mobile)"
              />
              <GuideStepCard 
                :step-number="3"
                title="Klik Terima Pesanan"
                description="Klik tombol 'Terima'. Status order berubah menjadi diterima merchant, dan sistem akan langsung menjadwalkan Runner menuju toko."
                image-placeholder-name="Penerimaan Pesanan Dashboard"
                image-size-info="320px x 568px (Mobile)"
              />
            </GuideFeatureSection>

            <!-- 5. Siap Diambil -->
            <GuideFeatureSection 
              id="ready" 
              title="5. Tandai Pesanan Siap Diambil" 
              description="Menginformasikan kepada Runner bahwa barang belanjaan atau masakan sudah siap diserahterimakan."
            >
              <GuideStepCard 
                :step-number="1"
                title="Klik Siap Diambil"
                description="Setelah masakan matang atau belanjaan terbungkus rapi, buka halaman pesanan aktif dan tekan tombol 'Siap Diambil'."
                image-placeholder-name="Tombol Konfirmasi Siap Diambil (Ready for Pickup)"
                image-size-info="320px x 568px (Mobile)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Serah Terima ke Runner"
                description="Ketika Runner tiba, cocokan kode ID Transaksi di layar handphone Runner dengan ID Pesanan Anda sebelum menyerahkan barang."
                image-placeholder-name="Tampilan ID Transaksi untuk Serah Terima"
                image-size-info="320px x 568px (Mobile)"
              />
            </GuideFeatureSection>

            <!-- 6. Pencairan Saldo -->
            <GuideFeatureSection 
              id="wallet" 
              title="6. Penarikan Saldo Dompet Merchant" 
              description="Cara mencairkan saldo hasil penjualan yang tersimpan di sistem escrow Nihtip."
              note="Demi keamanan transaksi, saldo toko hanya bertambah setelah pesanan berhasil diserahkan ke pelanggan dan dikonfirmasi selesai."
            >
              <GuideStepCard 
                :step-number="1"
                title="Tinjau Saldo di Dompet Saya"
                description="Buka menu 'Dompet Saya' di dasbor merchant. Di sini Anda bisa memantau saldo aktif terkini toko Anda."
                image-placeholder-name="Halaman Dashboard Dompet Wallet Merchant"
                image-size-info="320px x 568px (Mobile)"
              />
              <GuideStepCard 
                :step-number="2"
                title="Ajukan Penarikan Dana (Withdrawal)"
                description="Pilih menu penarikan, tentukan jumlah pencairan saldo, dan pilih nomor rekening bank terdaftar Anda untuk mengirimkan permohonan."
                image-placeholder-name="Form Pengajuan Withdrawal Dana"
                image-size-info="320px x 568px (Mobile)"
              />
            </GuideFeatureSection>
          </div>

          <!-- ================= SECTION 3: KEBIJAKAN TOKO ================= -->
          <div v-else-if="activeTab === 'kebijakan'" class="space-y-6">
            <div class="space-y-2">
              <h2 class="text-lg font-black text-slate-900 tracking-tight" id="kebijakan">Kebijakan & Ketentuan Mitra Merchant</h2>
              <p class="text-xs text-slate-500 font-medium">Kebijakan dasar operasional untuk memastikan kenyamanan bersama dalam transaksi Nihtip.</p>
            </div>

            <hr class="border-slate-100">

            <div class="space-y-5">
              <article class="space-y-2">
                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">1. Kebijakan Pembatalan Pesanan</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">
                  Merchant diperbolehkan membatalkan pesanan jika bahan makanan/stok produk di toko habis mendadak. Namun, pembatalan yang terlalu sering secara sepihak akan mempengaruhi penilaian performa toko (*merchant rating*) dan dapat membatasi visibilitas toko Anda di aplikasi pelanggan.
                </p>
              </article>

              <article class="space-y-2">
                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">2. SLA Penyiapan Pesanan</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">
                  Demi kepuasan pelanggan, kami mengimbau merchant untuk menyelesaikan penyiapan barang belanjaan atau masakan kuliner dalam jangka waktu **maksimal 30 menit** setelah pesanan dikonfirmasi diterima.
                </p>
              </article>

              <article class="space-y-2">
                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">3. Ketentuan Pencairan Saldo (Withdrawal)</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">
                  Seluruh dana transaksi hasil penjualan akan dikumpulkan dalam akun dompet digital toko Anda. Proses transfer pencairan saldo dari dompet Nihtip menuju rekening bank pribadi diproses dalam waktu **1x24 jam** pada hari kerja resmi.
                </p>
              </article>

              <article class="space-y-2">
                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">4. Alur Penyelesaian Sengketa (Dispute)</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-medium">
                  Apabila pelanggan mengajukan komplain atau sengketa transaksi (seperti masakan salah, basi, atau barang rusak), dana pesanan akan diblokir sementara di escrow. Tim admin Nihtip akan bertindak sebagai mediator untuk memverifikasi bukti foto dari merchant dan pelanggan sebelum memutuskan pelepasan dana secara adil.
                </p>
              </article>
            </div>
          </div>

        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
