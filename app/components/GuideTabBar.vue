<script setup lang="ts">
defineProps<{
  activeTab: string
  tabs: Array<{ id: string; label: string }>
}>()

defineEmits<{
  (e: 'update:activeTab', id: string): void
}>()
</script>

<template>
  <div class="lg:hidden sticky top-[68px] z-30 bg-white border-b border-slate-100 shadow-sm overflow-x-auto scrollbar-none">
    <div class="flex px-4 h-12 items-center gap-6 min-w-max">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="relative py-3.5 text-xs font-bold tracking-wide transition-all focus:outline-none"
        :class="activeTab === tab.id ? 'text-primary-600' : 'text-slate-500 hover:text-slate-800'"
        @click="$emit('update:activeTab', tab.id)"
      >
        {{ tab.label }}
        <span 
          v-if="activeTab === tab.id" 
          class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full" 
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Sembunyikan scrollbar untuk pengalaman minimalis */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
