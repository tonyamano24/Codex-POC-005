<template>
  <div class="min-h-screen bg-black text-white">
    <AppHeader />
    <main id="top" class="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
