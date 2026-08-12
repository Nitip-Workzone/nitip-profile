<script setup lang="ts">
defineProps<{
  id: string
  title: string
  description: string
  note?: string
}>()
</script>

<template>
  <section :id="id" class="space-y-6 pt-6 first:pt-0 scroll-mt-24">
    <!-- Judul Fitur -->
    <div class="space-y-1">
      <h3 class="text-base font-black text-slate-900 tracking-tight flex items-center gap-2">
        <span class="w-1.5 h-3 rounded-full bg-primary-500" />
        {{ title }}
      </h3>
      <p class="text-xs text-slate-500 leading-relaxed font-medium">
        {{ description }}
      </p>
    </div>

    <!-- Container Langkah-Langkah -->
    <div class="space-y-5">
      <slot />
    </div>

    <!-- Catatan Penting (Opsional) -->
    <div v-if="note" class="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex gap-3 text-slate-700 shadow-sm">
      <div class="text-slate-400 shrink-0 text-sm">💡</div>
      <p class="text-xs text-slate-600 font-medium leading-relaxed">
        <strong class="text-slate-800 font-extrabold">Penting:</strong> {{ note }}
      </p>
    </div>

    <hr class="border-slate-100 my-8">
  </section>
</template>
