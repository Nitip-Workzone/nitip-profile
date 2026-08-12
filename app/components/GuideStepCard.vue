<script setup lang="ts">
defineProps<{
  stepNumber: number | string
  title: string
  description: string
  imagePlaceholderName: string
  imageSizeInfo: string
  isDesktopRatio?: boolean
}>()
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6 items-start bg-white rounded-3xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
    <!-- Badge Nomor Langkah -->
    <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center text-lg font-extrabold shadow-sm">
      {{ stepNumber }}
    </div>

    <!-- Teks Instruksi -->
    <div class="flex-1 space-y-4">
      <div>
        <h4 class="text-sm font-extrabold text-slate-900 tracking-tight">{{ title }}</h4>
        <p class="text-xs text-slate-500 leading-relaxed mt-1 font-medium">{{ description }}</p>
      </div>

      <!-- Skeleton UI Placeholder Sementara dengan Teks Penunjuk & Ukuran -->
      <div 
        class="w-full border border-slate-200/80 rounded-2xl bg-slate-50/50 flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden group select-none transition-all duration-300"
        :class="isDesktopRatio ? 'max-w-[540px] aspect-[16/9]' : 'max-w-[320px] aspect-[9/16]'"
      >
        <!-- Shimmer Effect -->
        <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

        <!-- Icon Placeholder -->
        <div class="w-10 h-10 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-400 mb-2 border border-slate-200/50">
          🖼️
        </div>
        <p class="text-xs font-black text-slate-700 tracking-tight">{{ imagePlaceholderName }}</p>
        <div class="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 border border-slate-200/50 text-[9px] font-extrabold rounded-full text-slate-500">
          Dimensi: {{ imageSizeInfo }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
