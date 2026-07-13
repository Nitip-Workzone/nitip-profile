<template>
  <div class="min-h-screen flex flex-col">
    <ProfileNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <ProfileFooter />
  </div>
</template>