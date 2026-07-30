<script setup lang="ts">
</script>

<template>
  <section class="relative bg-white pt-[68px] overflow-hidden">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- HERO TOP -->
      <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-8 lg:gap-10 items-center pt-6 lg:pt-10 pb-4">
        <!-- LEFT -->
        <div class="space-y-6 order-1 lg:-translate-y-12">
          <!-- Badge -->
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fffbeb] border border-[#fde68a]/80 text-[11px] font-semibold text-[#92400e] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <span class="text-[12px]">⭐</span>
            <span class="tracking-wide">#1 Platform Jastip di Bolaang Mongondow</span>
          </div>

          <div class="space-y-4">
            <h1 class="font-extrabold tracking-[-0.04em] leading-[0.92] text-[#0f172a] text-[38px] sm:text-[48px] lg:text-[56px]">
              <span class="block">Titip apa saja,</span>
              <span class="block text-[#5b50e6] mt-1">jadi mudah.</span>
            </h1>
            <p class="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#64748b] max-w-[460px] font-medium">
              Nihtip adalah platform jastip terpercaya untuk belanja, antar barang, antri, titip dokumen, dan banyak lagi. Aman, cepat, dan transparan.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3 pt-1">
            <a href="#" class="inline-flex items-center justify-center gap-2 h-[44px] px-6 rounded-[12px] bg-[#5b50e6] hover:bg-[#4f47d1] text-white text-[14px] font-semibold shadow-[0_6px_16px_rgba(91,80,230,0.28)] transition-all active:scale-[0.98]">
              <span>Titip Sekarang</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center gap-2 h-[44px] px-5 rounded-[12px] bg-white border border-[#e2e8f0] text-[#334155] text-[14px] font-semibold hover:bg-[#f8fafc] transition active:scale-[0.98]">
              <span>Jadi Runner</span>
              <span class="text-[16px] leading-none">🚲</span>
            </a>
          </div>

          <!-- 3 features mini - exact like ref -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 mt-1 border-t border-[#f1f5f9] max-w-[560px]">
            <div class="flex items-start gap-2.5">
              <div class="w-8 h-8 rounded-full bg-[#f3f1ff] border border-[#ede9fe] flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-[#5b50e6]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 12l-2-2 1.4-1.4 2.6 2.6 4.6-4.6L18 9l-8 6z"/></svg>
              </div>
              <div class="leading-[1.25]">
                <p class="text-[12px] font-bold text-[#0f172a]">Escrow Aman</p>
                <p class="text-[11px] text-[#64748b] leading-[1.3] mt-0.5">Uang ditahan hingga pesanan selesai</p>
              </div>
            </div>
            <div class="flex items-start gap-2.5">
              <div class="w-8 h-8 rounded-full bg-[#f3f1ff] border border-[#ede9fe] flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-[#5b50e6]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7" r="3.5"/><path d="M3.5 20a6.5 6.5 0 0113 0"/></svg>
              </div>
              <div class="leading-[1.25]">
                <p class="text-[12px] font-bold text-[#0f172a]">Runner Terpercaya</p>
                <p class="text-[11px] text-[#64748b] leading-[1.3] mt-0.5">Terverifikasi & berpengalaman</p>
              </div>
            </div>
            <div class="flex items-start gap-2.5">
              <div class="w-8 h-8 rounded-full bg-[#f3f1ff] border border-[#ede9fe] flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-[#5b50e6]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 4.5 4.5 4.5 8.5C4.5 14 12 22 12 22S19.5 14 19.5 8.5C19.5 4.5 16 2 12 2z"/><circle cx="12" cy="8.5" r="2.5" fill="white"/></svg>
              </div>
              <div class="leading-[1.25]">
                <p class="text-[12px] font-bold text-[#0f172a]">Tracking Real-time</p>
                <p class="text-[11px] text-[#64748b] leading-[1.3] mt-0.5">Pantau pesanan secara langsung</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT - PHONES -->
        <div class="relative order-2 flex justify-center lg:justify-end items-end select-none mt-4 lg:mt-0 w-full pb-2 lg:pb-0 h-[360px] sm:h-[440px] lg:h-[520px]">
          <!-- Purple Background Blob -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#f5f3ff] rounded-full blur-3xl -z-10"></div>

          <!-- Phones Wrapper -->
          <div class="absolute top-[-100px] left-0 right-0 lg:left-[-200px] lg:right-[-200px] bottom-[30px] sm:bottom-[40px] lg:bottom-[50px] overflow-hidden pointer-events-none z-10">
            <!-- Phones row -->
            <div class="absolute bottom-[-90px] sm:bottom-[-120px] lg:bottom-[-210px] left-1/2 -translate-x-1/2 lg:left-[200px] lg:translate-x-0 flex flex-row items-end justify-center gap-0 w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[620px] pointer-events-auto">
              <!-- Left Phone -->
              <div class="relative w-[48%] sm:w-[47%] lg:w-[47%] -rotate-[7deg] lg:-rotate-[9deg] translate-y-3 sm:translate-y-6 lg:translate-y-8 z-10 translate-x-3 sm:translate-x-5 lg:translate-x-6 shrink-0">
                <img
                  src="/images/mock1.png"
                  alt="Andi Mode Penitip Rp0"
                  class="w-full h-auto object-contain block mix-blend-multiply"
                  loading="eager"
                />
              </div>

              <!-- Right Phone -->
              <div class="relative w-[52%] sm:w-[51%] lg:w-[51%] rotate-[5deg] lg:rotate-[7deg] z-20 -translate-x-2 sm:-translate-x-3 lg:-translate-x-4 shrink-0">
                <img
                  src="/images/mock2.png"
                  alt="Budi Runner Rp 50.000"
                  class="w-full h-auto object-contain block mix-blend-multiply"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- STATS BAR - clean white, no blob behind, overlaps bottom 1/4 of phones like reference (z-30) -->
      <div class="relative z-30 -mt-12 sm:-mt-16 lg:-mt-[100px]">
        <div class="bg-white rounded-[18px] sm:rounded-[20px] border border-[#f1f5f9] shadow-[0_16px_40px_rgba(15,23,42,0.08),0_2px_8px_rgba(0,0,0,0.04)] px-4 sm:px-6 lg:px-8 py-4 sm:py-4 grid grid-cols-2 sm:flex sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-[10px] bg-[#fff1f2] border border-[#ffe4e6] flex items-center justify-center text-[16px]">🛍️</div>
            <div class="leading-tight">
              <p class="text-[14px] font-bold text-[#5b50e6] leading-none">10.000+</p>
              <p class="text-[11px] text-[#64748b] mt-0.5">Pesanan Selesai</p>
            </div>
          </div>
          <div class="flex items-center gap-2.5 sm:border-l border-[#f1f5f9] sm:pl-8">
            <div class="w-9 h-9 rounded-[10px] bg-[#eef2ff] border border-[#e0e7ff] flex items-center justify-center">
              <svg class="w-4 h-4 text-[#5b50e6]" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17a6 6 0 01-9.86 0C2.57 15.9 3.86 13 9 13s6.43 2.9 5.93 4z"/></svg>
            </div>
            <div class="leading-tight">
              <p class="text-[14px] font-bold text-[#5b50e6] leading-none">500+</p>
              <p class="text-[11px] text-[#64748b] mt-0.5">Runner Aktif</p>
            </div>
          </div>
          <div class="flex items-center gap-2.5 sm:border-l border-[#f1f5f9] sm:pl-8">
            <div class="w-9 h-9 rounded-[10px] bg-[#fef9c3] border border-[#fef08a] flex items-center justify-center text-[16px]">⭐</div>
            <div class="leading-tight">
              <p class="text-[14px] font-bold text-[#0f172a] leading-none">4.9<span class="text-[11px] font-medium text-[#64748b]">/5</span></p>
              <p class="text-[11px] text-[#64748b] mt-0.5">Rating Pengguna</p>
            </div>
          </div>
          <div class="flex items-center gap-2.5 sm:border-l border-[#f1f5f9] sm:pl-8">
            <div class="w-9 h-9 rounded-[10px] bg-[#e0e7ff] border border-[#c7d2fe] flex items-center justify-center">
              <svg class="w-4 h-4 text-[#5b50e6]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 12l-2-2 1.4-1.4 2.6 2.6 4.6-4.6L18 9l-8 6z"/></svg>
            </div>
            <div class="leading-tight">
              <p class="text-[14px] font-bold text-[#0f172a] leading-none">98%</p>
              <p class="text-[11px] text-[#64748b] mt-0.5">Pesanan Selesai Tepat Waktu</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CARA KERJA - exact 5 steps -->
      <div class="mt-10 sm:mt-12 pb-8">
        <div class="text-center space-y-1">
          <h2 class="text-[18px] sm:text-[20px] font-extrabold tracking-tight text-[#0f172a]">Cara Kerja Nihtip</h2>
          <p class="text-[12px] text-[#64748b]">Mudah hanya dalam 5 langkah</p>
        </div>

        <div class="relative mt-6 sm:mt-8">
          <!-- Dashed connectors desktop -->
          <div class="hidden lg:block absolute top-[30px] left-[12%] right-[12%]">
            <svg width="100%" height="2" class="overflow-visible"><line x1="0" y1="1" x2="100%" y2="1" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="8 8"/></svg>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3">
            <!-- 1 -->
            <div class="relative bg-white rounded-[16px] border border-[#f1f5f9] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(91,80,230,0.08)] hover:border-[#e9e5ff] transition-all group">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-[10px] bg-[#f5f3ff] border border-[#ede9fe] flex items-center justify-center text-[#5b50e6] group-hover:bg-[#5b50e6] group-hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <div class="w-5 h-5 rounded-full bg-[#5b50e6] text-white text-[10px] font-bold flex items-center justify-center">1</div>
              </div>
              <h3 class="text-[12px] font-bold text-[#0f172a] mt-3 leading-tight">Cari Barang</h3>
              <p class="text-[10.5px] text-[#64748b] leading-[1.4] mt-1">Temukan barang atau layanan yang kamu butuhkan</p>
              <div class="hidden lg:flex absolute -right-2 top-[28px] w-4 h-4 bg-white border border-[#e2e8f0] rounded-full items-center justify-center"><span class="text-[8px] text-[#94a3b8]">→</span></div>
            </div>

            <!-- 2 -->
            <div class="relative bg-white rounded-[16px] border border-[#f1f5f9] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(91,80,230,0.08)] hover:border-[#e9e5ff] transition-all group">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-[10px] bg-[#f5f3ff] border border-[#ede9fe] flex items-center justify-center text-[#5b50e6] group-hover:bg-[#5b50e6] group-hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </div>
                <div class="w-5 h-5 rounded-full bg-[#5b50e6] text-white text-[10px] font-bold flex items-center justify-center">2</div>
              </div>
              <h3 class="text-[12px] font-bold text-[#0f172a] mt-3 leading-tight">Pilih Runner</h3>
              <p class="text-[10.5px] text-[#64748b] leading-[1.4] mt-1">Pilih runner terdekat dengan rating terbaik</p>
              <div class="hidden lg:flex absolute -right-2 top-[28px] w-4 h-4 bg-white border border-[#e2e8f0] rounded-full items-center justify-center"><span class="text-[8px] text-[#94a3b8]">→</span></div>
            </div>

            <!-- 3 -->
            <div class="relative bg-white rounded-[16px] border border-[#f1f5f9] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(91,80,230,0.08)] hover:border-[#e9e5ff] transition-all group">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-[10px] bg-[#f5f3ff] border border-[#ede9fe] flex items-center justify-center text-[#5b50e6] group-hover:bg-[#5b50e6] group-hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div class="w-5 h-5 rounded-full bg-[#5b50e6] text-white text-[10px] font-bold flex items-center justify-center">3</div>
              </div>
              <h3 class="text-[12px] font-bold text-[#0f172a] mt-3 leading-tight">Bayar Aman</h3>
              <p class="text-[10.5px] text-[#64748b] leading-[1.4] mt-1">Pembayaran ditahan di Nihtip sampai pesanan selesai</p>
              <div class="hidden lg:flex absolute -right-2 top-[28px] w-4 h-4 bg-white border border-[#e2e8f0] rounded-full items-center justify-center"><span class="text-[8px] text-[#94a3b8]">→</span></div>
            </div>

            <!-- 4 -->
            <div class="relative bg-white rounded-[16px] border border-[#f1f5f9] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(91,80,230,0.08)] hover:border-[#e9e5ff] transition-all group">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-[10px] bg-[#f5f3ff] border border-[#ede9fe] flex items-center justify-center text-[#5b50e6] group-hover:bg-[#5b50e6] group-hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                </div>
                <div class="w-5 h-5 rounded-full bg-[#5b50e6] text-white text-[10px] font-bold flex items-center justify-center">4</div>
              </div>
              <h3 class="text-[12px] font-bold text-[#0f172a] mt-3 leading-tight">Runner Belanja</h3>
              <p class="text-[10.5px] text-[#64748b] leading-[1.4] mt-1">Runner membeli atau mengambil barang untukmu</p>
              <div class="hidden lg:flex absolute -right-2 top-[28px] w-4 h-4 bg-white border border-[#e2e8f0] rounded-full items-center justify-center"><span class="text-[8px] text-[#94a3b8]">→</span></div>
            </div>

            <!-- 5 -->
            <div class="relative bg-white rounded-[16px] border border-[#f1f5f9] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(91,80,230,0.08)] hover:border-[#e9e5ff] transition-all group sm:col-span-1">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-[10px] bg-[#f5f3ff] border border-[#ede9fe] flex items-center justify-center text-[#5b50e6] group-hover:bg-[#5b50e6] group-hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div class="w-5 h-5 rounded-full bg-[#5b50e6] text-white text-[10px] font-bold flex items-center justify-center">5</div>
              </div>
              <h3 class="text-[12px] font-bold text-[#0f172a] mt-3 leading-tight">Barang Sampai</h3>
              <p class="text-[10.5px] text-[#64748b] leading-[1.4] mt-1">Barang diterima dengan aman, pembayaran diteruskan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* hide scrollbar if needed */
</style>

