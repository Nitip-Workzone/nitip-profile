<script setup lang="ts">
useHead({
  title: 'Hubungi Kami - Nitip',
  meta: [
    { name: 'description', content: 'Hubungi tim Nitip untuk pertanyaan, dukungan, atau kerjasama. Kami siap membantu Anda.' },
  ],
})

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function handleSubmit() {
  // Placeholder - implement actual form submission later
  alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.')
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
}
</script>

<template>
  <div>
    <section class="bg-gradient-to-br from-primary-500 to-primary-700 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Hubungi Kami</h1>
        <p class="text-lg text-white/80">Punya pertanyaan atau masukan? Kami siap membantu Anda.</p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Email</h3>
                    <p class="text-gray-500">hello@nitip.id</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Lokasi</h3>
                    <p class="text-gray-500">Indonesia</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Sosial Media</h3>
                    <p class="text-gray-500">@nitip.id</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <form class="space-y-4" @submit.prevent="handleSubmit">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input id="name" v-model="formData.name" type="text" required class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" placeholder="Nama Anda" />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input id="email" v-model="formData.email" type="email" required class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" placeholder="email@contoh.com" />
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                <input id="subject" v-model="formData.subject" type="text" required class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" placeholder="Perihal pesan Anda" />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                <textarea id="message" v-model="formData.message" required rows="4" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none" placeholder="Tulis pesan Anda di sini..." />
              </div>
              <button type="submit" class="btn-primary w-full py-3">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>