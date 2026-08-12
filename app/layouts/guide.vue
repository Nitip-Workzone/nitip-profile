<template>
  <div class="min-h-screen bg-slate-50 flex flex-col">
    <!-- Navbar Atas -->
    <ProfileNavbar />

    <!-- Container Utama Konten -->
    <main class="flex-grow pt-[68px]" role="main">
      <slot />
    </main>

    <!-- Footer Bawah -->
    <ProfileFooter />
  </div>
</template>
