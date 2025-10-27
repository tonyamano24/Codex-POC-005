<template>
  <div>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
    >
      Skip to content
    </a>
    <header
      class="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md"
      role="banner"
    >
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4" aria-label="Main">
        <NuxtLink to="#hero" class="text-lg font-display tracking-[0.3em] uppercase" aria-label="Monochrome Muse home">
          Monochrome Muse
        </NuxtLink>
        <ul id="primary-navigation" class="hidden items-center gap-8 text-sm uppercase md:flex">
          <li v-for="item in navItems" :key="item.id">
            <a :href="item.href" class="tracking-[0.3em] text-white/80 transition hover:text-white">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
const navItems = [
  { id: 'women', label: 'Women', href: '#women' },
  { id: 'editorial', label: 'Editorial', href: '#editorial' },
  { id: 'fine-art', label: 'Fine Art', href: '#fine-art' },
  { id: 'commercial', label: 'Commercial', href: '#commercial' },
  { id: 'about', label: 'About', href: '#about' }
]
</script>
