<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Pendaftaran Runner - Nihtip',
  meta: [
    { name: 'description', content: 'Daftar menjadi Runner Nihtip dan mulailah menghasilkan uang tambahan secara fleksibel.' }
  ]
})

const config = useRuntimeConfig()

// Form states
const name = ref('')
const email = ref('')
const whatsappNumber = ref('')
const password = ref('')
const idCardNumber = ref('')
const agreeToTerms = ref(false)

// File states
const idCardFile = ref<File | null>(null)
const idCardPreview = ref<string | null>(null)
const selfieFile = ref<File | null>(null)
const selfiePreview = ref<string | null>(null)

// UI states
const isLoading = ref(false)
const errorMessage = ref<string | null>(null)
const isSuccess = ref(false)

const onIdCardChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    if (file.size > 5 * 1024 * 1024) {
      errorMessage.value = 'Ukuran berkas KTP tidak boleh melebihi 5MB'
      return
    }
    idCardFile.value = file
    idCardPreview.value = URL.createObjectURL(file)
    errorMessage.value = null
  }
}

const onSelfieChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    if (file.size > 5 * 1024 * 1024) {
      errorMessage.value = 'Ukuran berkas Selfie tidak boleh melebihi 5MB'
      return
    }
    selfieFile.value = file
    selfiePreview.value = URL.createObjectURL(file)
    errorMessage.value = null
  }
}

const onSubmit = async () => {
  if (idCardNumber.value.length !== 16) {
    errorMessage.value = 'Nomor KTP harus terdiri dari 16 digit angka'
    return
  }

  if (!idCardFile.value || !selfieFile.value) {
    errorMessage.value = 'Harap unggah seluruh dokumen persyaratan'
    return
  }

  if (!agreeToTerms.value) {
    errorMessage.value = 'Anda harus menyetujui Kebijakan Layanan & Risiko Nihtip'
    return
  }

  isLoading.value = true
  errorMessage.value = null

  try {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('password', password.value)
    formData.append('whatsapp_number', whatsappNumber.value)
    formData.append('id_card_number', idCardNumber.value)
    formData.append('id_card', idCardFile.value)
    formData.append('selfie', selfieFile.value)

    const response = await $fetch(`${config.public.nitipApiUrl}/users/onboard/runner`, {
      method: 'POST',
      body: formData
    })

    isSuccess.value = true
  } catch (err: any) {
    console.error('Onboarding failed:', err)
    errorMessage.value = err.data?.message || 'Terjadi kesalahan sistem saat mendaftar'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="pt-[90px] pb-24 bg-gray-50/50 min-h-screen">
    <div class="max-w-2xl mx-auto px-4">
      
      <!-- Card wrapper -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-8 sm:p-10">
        
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 text-2xl mb-4">
            🚲
          </div>
          <h1 class="text-2xl font-extrabold text-gray-900 leading-tight">Pendaftaran Mitra Runner</h1>
          <p class="text-sm text-gray-500 mt-2">Daftar sekarang untuk mulai menerima tugas belanja & pengantaran</p>
        </div>

        <!-- Success Screen -->
        <div v-if="isSuccess" class="text-center py-10 space-y-6">
          <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
            ✓
          </div>
          <div class="space-y-2">
            <h2 class="text-xl font-bold text-gray-900">Pendaftaran Berhasil!</h2>
            <p class="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
              Dokumen identitas Anda telah berhasil diunggah dan sedang dalam proses peninjauan oleh tim admin. Kami akan mengirimkan notifikasi aktivasi akun melalui WhatsApp.
            </p>
          </div>
          <div class="pt-4">
            <NuxtLink to="/" class="inline-flex h-[44px] px-6 rounded-[12px] bg-indigo-600 hover:bg-indigo-700 text-white text-[14px] font-semibold items-center justify-center transition">
              Kembali ke Beranda
            </NuxtLink>
          </div>
        </div>

        <!-- Form Screen -->
        <form v-else @submit.prevent="onSubmit" class="space-y-6">
          
          <!-- Alert error -->
          <div v-if="errorMessage" class="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-3">
            <span class="text-rose-500 text-lg">⚠️</span>
            <p class="text-xs text-rose-700 font-semibold leading-relaxed">{{ errorMessage }}</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Nama -->
            <div class="space-y-1.5">
              <label class="text-[12px] font-bold text-gray-700 uppercase tracking-wider">Nama Lengkap</label>
              <input 
                v-model="name"
                type="text" 
                required 
                placeholder="Contoh: Budi Santoso"
                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>

            <!-- WhatsApp -->
            <div class="space-y-1.5">
              <label class="text-[12px] font-bold text-gray-700 uppercase tracking-wider">Nomor WhatsApp</label>
              <input 
                v-model="whatsappNumber"
                type="tel" 
                required 
                placeholder="Contoh: 0881088xxx"
                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>

            <!-- Email -->
            <div class="space-y-1.5">
              <label class="text-[12px] font-bold text-gray-700 uppercase tracking-wider">Alamat Email</label>
              <input 
                v-model="email"
                type="email" 
                required 
                placeholder="nama@email.com"
                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>

            <!-- Password -->
            <div class="space-y-1.5">
              <label class="text-[12px] font-bold text-gray-700 uppercase tracking-wider">Kata Sandi Akun</label>
              <input 
                v-model="password"
                type="password" 
                required 
                placeholder="Minimal 8 karakter"
                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>
          </div>

          <!-- KTP Number -->
          <div class="space-y-1.5">
            <label class="text-[12px] font-bold text-gray-700 uppercase tracking-wider">Nomor KTP (NIK)</label>
            <input 
              v-model="idCardNumber"
              type="text" 
              required 
              maxlength="16"
              placeholder="16 Digit Nomor Induk Kependudukan"
              class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>

          <!-- Upload Dokumen Section -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <!-- KTP File -->
            <div class="space-y-2">
              <label class="text-[12px] font-bold text-gray-700 uppercase tracking-wider">Foto KTP Asli</label>
              <div class="relative border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center hover:border-indigo-400 transition cursor-pointer bg-gray-50/50">
                <input 
                  type="file" 
                  accept="image/*" 
                  @change="onIdCardChange"
                  class="absolute inset-0 opacity-0 cursor-pointer"
                />
                <template v-if="idCardPreview">
                  <img :src="idCardPreview" class="h-24 w-full object-cover rounded-xl" />
                  <p class="text-[10px] text-indigo-600 mt-2 font-bold">Ubah Foto KTP</p>
                </template>
                <template v-else>
                  <span class="text-2xl">🪪</span>
                  <p class="text-xs text-gray-500 mt-1 font-bold">Pilih berkas KTP</p>
                  <p class="text-[9px] text-gray-400 mt-0.5">JPG/PNG maks. 5MB</p>
                </template>
              </div>
            </div>

            <!-- Selfie File -->
            <div class="space-y-2">
              <label class="text-[12px] font-bold text-gray-700 uppercase tracking-wider">Foto Selfie dengan KTP</label>
              <div class="relative border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center hover:border-indigo-400 transition cursor-pointer bg-gray-50/50">
                <input 
                  type="file" 
                  accept="image/*" 
                  @change="onSelfieChange"
                  class="absolute inset-0 opacity-0 cursor-pointer"
                />
                <template v-if="selfiePreview">
                  <img :src="selfiePreview" class="h-24 w-full object-cover rounded-xl" />
                  <p class="text-[10px] text-indigo-600 mt-2 font-bold">Ubah Foto Selfie</p>
                </template>
                <template v-else>
                  <span class="text-2xl">📸</span>
                  <p class="text-xs text-gray-500 mt-1 font-bold">Pilih berkas Selfie</p>
                  <p class="text-[9px] text-gray-400 mt-0.5">Wajah & KTP terlihat jelas</p>
                </template>
              </div>
            </div>
          </div>

          <!-- Persetujuan -->
          <div class="bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-3">
            <div class="flex items-start gap-2.5">
              <input 
                v-model="agreeToTerms"
                type="checkbox" 
                id="terms"
                required
                class="mt-1 accent-indigo-600"
              />
              <label for="terms" class="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                Saya menyetujui <a href="/terms" target="_blank" class="text-indigo-600 font-bold hover:underline">Ketentuan Layanan</a> serta <a href="/privacy" target="_blank" class="text-indigo-600 font-bold hover:underline">Kebijakan Privasi</a>, dan menyatakan siap bertanggung jawab atas seluruh risiko transaksi/operasional yang terjadi saat menjalankan tugas.
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full h-12 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-[0.99] transition disabled:opacity-55 flex items-center justify-center gap-2"
          >
            <span v-if="isLoading" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            <span>Daftar Sekarang</span>
          </button>

        </form>

      </div>
    </div>
  </div>
</template>
