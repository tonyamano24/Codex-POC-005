<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-ink-700/70 bg-ink-900/95 backdrop-blur supports-[backdrop-filter]:bg-ink-900/80"
    role="banner"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
      <NuxtLink to="#top" class="text-lg font-semibold tracking-wide uppercase" aria-label="Return to top">
        TY Studio
      </NuxtLink>
      <button
        class="flex h-10 w-10 items-center justify-center rounded-md border border-ink-700/60 text-sm font-medium transition hover:border-ink-500 hover:text-white sm:hidden"
        type="button"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
      >
        <span class="sr-only">Toggle navigation</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        </svg>
      </button>
      <div class="hidden gap-8 text-sm uppercase tracking-widest sm:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.href"
          class="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>
    <div v-if="isOpen" id="mobile-menu" class="border-t border-ink-800 bg-ink-900 px-4 pb-6 sm:hidden">
      <div class="grid gap-4 pt-4 text-sm uppercase tracking-[0.25em]">
        <NuxtLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.href"
          class="transition hover:text-white"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const navigation = [
  { label: 'Women', href: '#women' },
  { label: 'Editorial', href: '#editorial' },
  { label: 'Fine Art', href: '#fine-art' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'About', href: '#about' }
];
</script>
