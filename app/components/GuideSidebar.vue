<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  activeTab: string
  activeSubSection?: string
  tabs: Array<{ id: string; label: string }>
  features?: Array<{ id: string; title: string }>
}>()

const emit = defineEmits<{
  (e: 'update:activeTab', id: string): void
  (e: 'update:activeSubSection', id: string): void
}>()

// Helper to handle clicking a section/tab
const handleTabClick = (tabId: string) => {
  emit('update:activeTab', tabId)
  if (tabId !== 'fitur') {
    emit('update:activeSubSection', '')
  }
}
</script>

<template>
  <aside class="hidden lg:block w-64 shrink-0 sticky top-24 self-start space-y-6">
    <!-- Menu Samping Utama -->
    <div class="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4">
      <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Daftar Isi</h4>
      
      <nav class="space-y-1" aria-label="Navigasi Panduan">
        <div v-for="tab in tabs" :key="tab.id" class="space-y-1">
          <!-- Main Tab Link -->
          <button
            class="w-full text-left px-3.5 py-2.5 text-xs font-bold rounded-2xl transition-all flex items-center justify-between"
            :class="activeTab === tab.id 
              ? 'bg-primary-50 text-primary-700 font-extrabold' 
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'"
            @click="handleTabClick(tab.id)"
          >
            {{ tab.label }}
          </button>

          <!-- Sub-items: Features List (Render only when 'fitur' is selected/active) -->
          <div 
            v-if="tab.id === 'fitur' && activeTab === 'fitur' && features && features.length > 0" 
            class="pl-4 pr-1 py-1 space-y-1 border-l border-slate-100 ml-5 transition-all duration-300"
          >
            <button
              v-for="feat in features"
              :key="feat.id"
              class="w-full text-left px-3 py-1.5 text-[11px] font-semibold rounded-xl transition-all truncate"
              :class="activeSubSection === feat.id
                ? 'text-primary-600 font-bold bg-primary-50/50'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50/50'"
              @click="$emit('update:activeSubSection', feat.id)"
            >
              {{ feat.title }}
            </button>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>
