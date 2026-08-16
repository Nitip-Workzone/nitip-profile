<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

useHead({
  title: 'Pendaftaran Merchant - Nihtip',
  meta: [
    { name: 'description', content: 'Daftarkan bisnis kuliner atau toko Anda di Nihtip Food & Mart untuk meningkatkan penjualan Anda.' }
  ]
})

const config = useRuntimeConfig()
const route = useRoute()
const rawToken = route.query.token as string || ''
const token = ref(rawToken.trim())

// Token validation states
const isValidating = ref(true)
const validationError = ref<string | null>(null)
const tokenValid = ref(false)

async function compressImageFile(file: File): Promise<File> {
  return new Promise<File>((resolve) => {
    const img = new Image()
    img.onload = () => {
      const maxDim = 1200
      let { width, height } = img
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width)
          width = maxDim
        } else {
          width = Math.round((width * maxDim) / height)
          height = maxDim
        }
      }
      const canvas = document.createElement('canvas')
      canvas.width = width; canvas.height = height
      const ctx = canvas.getContext('2d')
      if (!ctx) { resolve(file); return }
      ctx.drawImage(img, 0, 0, width, height)
      canvas.toBlob((blob) => {
        if (!blob) { resolve(file); return }
        const newName = file.name.replace(/\.\w+$/, '.jpg')
        resolve(new File([blob], newName, { type: 'image/jpeg' }))
      }, 'image/jpeg', 0.75)
    }
    img.onerror = () => resolve(file)
    img.src = URL.createObjectURL(file)
  })
}

// Owner Account States
const name = ref('')
const email = ref('')
const whatsappNumber = ref('')
const password = ref('')

// Merchant Store States
const merchantName = ref('')
const description = ref('')
const address = ref('')
const latitude = ref<number | null>(null)
const longitude = ref<number | null>(null)
const category = ref('food')

// Survey States
const monthlySalesRange = ref('')
const averageItemPrice = ref<number | null>(null)

// File States
const photoFile = ref<File | null>(null)
const photoPreview = ref<string | null>(null)
const coverFile = ref<File | null>(null)
const coverPreview = ref<string | null>(null)

// UI States
const isLoading = ref(false)
const errorMessage = ref<string | null>(null)
const isSuccess = ref(false)
const gpsStatus = ref('')

onMounted(async () => {
  if (!token.value) {
    validationError.value = 'Tautan pendaftaran tidak valid karena token pendaftaran tidak ditemukan.'
    isValidating.value = false
    return
  }

  try {
    const res: any = await $fetch(`${config.public.nitipApiUrl}/users/invitations/validate?token=${token.value}`)
    if (res && res.data) {
      whatsappNumber.value = res.data.phone_number
      tokenValid.value = true
    } else {
      validationError.value = 'Tautan pendaftaran tidak valid'
    }
  } catch (err: any) {
    console.error('Validation error:', err)
    validationError.value = err.data?.message || 'Tautan pendaftaran tidak valid atau sudah kedaluwarsa.'
  } finally {
    isValidating.value = false
  }
})

const onPhotoChange = async (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    let file = target.files[0]
    if (file.size > 20 * 1024 * 1024) {
      errorMessage.value = 'Ukuran foto tempat usaha terlalu besar (>20MB)'
      return
    }
    try { file = await compressImageFile(file) } catch {}
    photoFile.value = file
    photoPreview.value = URL.createObjectURL(file)
    errorMessage.value = null
  }
}

const onCoverChange = async (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    let file = target.files[0]
    if (file.size > 20 * 1024 * 1024) {
      errorMessage.value = 'Ukuran foto sampul terlalu besar (>20MB)'
      return
    }
    try { file = await compressImageFile(file) } catch {}
    coverFile.value = file
    coverPreview.value = URL.createObjectURL(file)
    errorMessage.value = null
  }
}

const getGPSLocation = () => {
  if (!navigator.geolocation) {
    gpsStatus.value = 'Browser Anda tidak mendukung geolokasi'
    return
  }

  gpsStatus.value = 'Mendeteksi lokasi...'
  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitude.value = position.coords.latitude
      longitude.value = position.coords.longitude
      gpsStatus.value = '✓ Lokasi GPS berhasil didapatkan'
    },
    (err) => {
      console.error(err)
      gpsStatus.value = 'Gagal mendeteksi lokasi otomatis. Harap isi koordinat secara manual.'
    },
    { enableHighAccuracy: true, timeout: 10000 }
  )
}

const onSubmit = async () => {
  if (latitude.value === null || longitude.value === null) {
    errorMessage.value = 'Koordinat lokasi usaha (Latitude & Longitude) wajib ditentukan'
    return
  }

  if (averageItemPrice.value === null || averageItemPrice.value <= 0) {
    errorMessage.value = 'Rata-rata harga menu harus bernilai lebih dari 0'
    return
  }

  if (!monthlySalesRange.value) {
    errorMessage.value = 'Harap pilih rentang estimasi penjualan bulanan'
    return
  }

  if (!photoFile.value) {
    errorMessage.value = 'Foto tempat usaha wajib diunggah'
    return
  }

  isLoading.value = true
  errorMessage.value = null

  // Client validation to prevent generic validation failed
  if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    errorMessage.value = 'Format email tidak valid, periksa spasi di akhir'
    return
  }
  if (password.value && password.value.length < 8) {
    errorMessage.value = 'Password minimal 8 karakter (saat ini ' + password.value.length + ')'
    return
  }

  try {
    const formData = new FormData()
    formData.append('token', token.value.trim())
    formData.append('name', name.value.trim())
    formData.append('email', email.value.trim().toLowerCase())
    formData.append('password', password.value)
    formData.append('whatsapp_number', whatsappNumber.value)
    formData.append('merchant_name', merchantName.value.trim())
    formData.append('description', description.value)
    formData.append('address', address.value)
    formData.append('latitude', latitude.value.toString())
    formData.append('longitude', longitude.value.toString())
    formData.append('category', category.value)
    formData.append('monthly_sales_range', monthlySalesRange.value)
    formData.append('average_item_price', averageItemPrice.value.toString())
    formData.append('photo', photoFile.value)
    if (coverFile.value) {
      formData.append('cover', coverFile.value)
    }

    await $fetch(`${config.public.nitipApiUrl}/users/onboard/merchant`, {
      method: 'POST',
      body: formData
    })

    isSuccess.value = true
  } catch (err: any) {
    console.error('Merchant onboarding failed:', err)
    const detail = err.data?.errors?.map((e: any) => `${e.field}: ${e.message}`).join(', ')
    errorMessage.value = detail || err.data?.message || err.message || 'Terjadi kesalahan sistem saat mendaftar merchant'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="pt-[90px] pb-24 bg-gray-50/50 min-h-screen flex items-center justify-center">
    <div class="max-w-2xl mx-auto px-4 w-full">
      
      <!-- Card Wrapper -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-8 sm:p-10">
        
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 text-2xl mb-4">
            🏪
          </div>
          <h1 class="text-2xl font-extrabold text-gray-900 leading-tight">Pendaftaran Kemitraan Merchant</h1>
          <p class="text-sm text-gray-500 mt-2">Daftarkan usaha Anda di Nihtip Food & Mart untuk meningkatkan penjualan</p>
        </div>

        <!-- Validating State -->
        <div v-if="isValidating" class="text-center py-12 space-y-4">
          <div class="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p class="text-sm text-gray-500 font-bold">Memvalidasi token undangan Anda...</p>
        </div>

        <!-- Invalid Token Screen -->
        <div v-else-if="validationError" class="text-center py-10 space-y-6">
          <div class="w-16 h-16 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
            ⚠️
          </div>
          <div class="space-y-2">
            <h2 class="text-xl font-bold text-gray-900">Undangan Tidak Valid</h2>
            <p class="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
              {{ validationError }}
            </p>
          </div>
          <div class="pt-4">
            <NuxtLink to="/" class="inline-flex h-[44px] px-6 rounded-[12px] bg-gray-100 hover:bg-gray-200 text-gray-700 text-[14px] font-semibold items-center justify-center transition">
              Kembali ke Beranda
            </NuxtLink>
          </div>
        </div>

        <!-- Success Screen -->
        <div v-else-if="isSuccess" class="text-center py-10 space-y-6">
          <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
            ✓
          </div>
          <div class="space-y-2">
            <h2 class="text-xl font-bold text-gray-900">Pendaftaran Berhasil Diajukan!</h2>
            <p class="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
              Tim kurasi kami sedang memproses data survei dan foto fisik tempat usaha Anda. Kami akan menghubungi Anda melalui WhatsApp untuk proses verifikasi lanjutan dan pengaktifan toko di aplikasi.
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
          
          <!-- Alert Error -->
          <div v-if="errorMessage" class="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-3">
            <span class="text-rose-500 text-lg">⚠️</span>
            <p class="text-xs text-rose-700 font-semibold leading-relaxed">{{ errorMessage }}</p>
          </div>

          <!-- Section 1: Akun Owner -->
          <div class="space-y-4">
            <h3 class="text-sm font-bold text-gray-800 border-b border-gray-100 pb-2">1. Data Pemilik Toko (Owner)</h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Nama Pemilik</label>
                <input 
                  v-model="name"
                  type="text" 
                  required 
                  placeholder="Contoh: Andi Wijaya"
                  class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>

              <!-- WhatsApp (Readonly locked) -->
              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">WhatsApp Pemilik</label>
                <input 
                  v-model="whatsappNumber"
                  type="tel" 
                  required 
                  readonly
                  placeholder="Contoh: 0881088xxx"
                  class="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed focus:outline-none text-sm font-semibold"
                />
              </div>

              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Email Akun</label>
                <input 
                  v-model="email"
                  type="email" 
                  required 
                  placeholder="name@email.com"
                  class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>

              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Kata Sandi Akun</label>
                <input 
                  v-model="password"
                  type="password" 
                  required 
                  placeholder="Minimal 8 karakter"
                  class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
            </div>
          </div>

          <!-- Section 2: Informasi Toko -->
          <div class="space-y-4 pt-4">
            <h3 class="text-sm font-bold text-gray-800 border-b border-gray-100 pb-2">2. Informasi Tempat Usaha (Merchant)</h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Nama Usaha / Toko</label>
                <input 
                  v-model="merchantName"
                  type="text" 
                  required 
                  placeholder="Contoh: Kedai Krimmi Lolak"
                  class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>

              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Kategori Usaha</label>
                <select 
                  v-model="category"
                  class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm bg-white"
                >
                  <option value="food">Kuliner (Makanan & Minuman)</option>
                  <option value="mart">Toko / Mart (Barang Harian)</option>
                  <option value="laundry">Laundri / Jasa Lainnya</option>
                </select>
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Deskripsi Singkat Toko</label>
              <textarea 
                v-model="description"
                placeholder="Contoh: Menyediakan berbagai macam olahan es krim homemade dan kopi susu gula aren."
                rows="2"
                class="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm resize-none"
              ></textarea>
            </div>

            <div class="space-y-1.5">
              <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Alamat Lengkap Toko</label>
              <textarea 
                v-model="address"
                required
                placeholder="Tuliskan nama jalan, RT/RW, Kecamatan, dan ciri khas lokasi toko Anda"
                rows="2"
                class="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm resize-none"
              ></textarea>
            </div>

            <!-- Geolocation (GPS Picker) -->
            <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 class="text-xs font-bold text-gray-700">Koordinat GPS Toko</h4>
                  <p class="text-[11px] text-gray-400">Diperlukan untuk akurasi peta pesanan pengguna</p>
                </div>
                <button 
                  type="button" 
                  @click="getGPSLocation"
                  class="h-8 px-3.5 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  📍 Ambil GPS Saat Ini
                </button>
              </div>

              <!-- GPS Status note -->
              <p v-if="gpsStatus" class="text-[10px] font-bold" :class="gpsStatus.includes('✓') ? 'text-emerald-600' : 'text-gray-500'">
                {{ gpsStatus }}
              </p>

              <div class="grid grid-cols-2 gap-3">
                <div class="space-y-1">
                  <label class="text-[10px] font-bold text-gray-400">Latitude</label>
                  <input 
                    v-model.number="latitude"
                    type="number" 
                    step="any"
                    required
                    placeholder="Contoh: -0.7410"
                    class="w-full h-9 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500 text-xs"
                  />
                </div>
                <div class="space-y-1">
                  <label class="text-[10px] font-bold text-gray-400">Longitude</label>
                  <input 
                    v-model.number="longitude"
                    type="number" 
                    step="any"
                    required
                    placeholder="Contoh: 124.3129"
                    class="w-full h-9 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500 text-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Kuesioner Kelayakan -->
          <div class="space-y-4 pt-4">
            <h3 class="text-sm font-bold text-gray-800 border-b border-gray-100 pb-2">3. Kuesioner Kelayakan (Survei Usaha)</h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Sales Range -->
              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Estimasi Penjualan Bulanan</label>
                <select 
                  v-model="monthlySalesRange"
                  required
                  class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm bg-white"
                >
                  <option value="" disabled>Pilih rentang omset...</option>
                  <option value="< 5 Juta">Di bawah Rp 5 Juta per bulan</option>
                  <option value="5-15 Juta">Rp 5 Juta – Rp 15 Juta per bulan</option>
                  <option value="> 15 Juta">Di atas Rp 15 Juta per bulan</option>
                </select>
              </div>

              <!-- Average Price -->
              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Rata-rata Harga Menu (IDR)</label>
                <input 
                  v-model.number="averageItemPrice"
                  type="number" 
                  required 
                  min="1"
                  placeholder="Contoh: 15000"
                  class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
            </div>

            <!-- Upload Photo Toko & Cover -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Foto Fisik Tempat Usaha (Warung/Toko)</label>
                <div class="relative border-2 border-dashed border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center hover:border-indigo-400 transition cursor-pointer bg-gray-50/50 min-h-[160px]">
                  <input 
                    type="file" 
                    accept="image/*" 
                    @change="onPhotoChange"
                    class="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <template v-if="photoPreview">
                    <img :src="photoPreview" class="h-28 w-full object-cover rounded-xl" />
                    <p class="text-[10px] text-indigo-600 mt-2 font-bold">Ubah Foto Tempat Usaha</p>
                  </template>
                  <template v-else>
                    <span class="text-3xl">📸</span>
                    <p class="text-xs text-gray-500 mt-1 font-bold">Pilih foto tampak depan warung/toko asli</p>
                    <p class="text-[9px] text-gray-400 mt-0.5">JPG/PNG maks. 5MB</p>
                  </template>
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Foto Sampul Toko / Banner (Opsional)</label>
                <div class="relative border-2 border-dashed border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center hover:border-indigo-400 transition cursor-pointer bg-gray-50/50 min-h-[160px]">
                  <input 
                    type="file" 
                    accept="image/*" 
                    @change="onCoverChange"
                    class="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <template v-if="coverPreview">
                    <img :src="coverPreview" class="h-28 w-full object-cover rounded-xl" />
                    <p class="text-[10px] text-indigo-600 mt-2 font-bold">Ubah Foto Sampul</p>
                  </template>
                  <template v-else>
                    <span class="text-3xl">🖼️</span>
                    <p class="text-xs text-gray-500 mt-1 font-bold">Pilih foto sampul halaman toko Anda</p>
                    <p class="text-[9px] text-gray-400 mt-0.5">JPG/PNG maks. 5MB</p>
                  </template>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full h-12 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-[0.99] transition disabled:opacity-55 flex items-center justify-center gap-2"
          >
            <span v-if="isLoading" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            <span>Kirim Pendaftaran Kemitraan</span>
          </button>

        </form>

      </div>
    </div>
  </div>
</template>
